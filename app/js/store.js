/* ============================================================
   Progreso, racha, XP, logros y notas de examen.
   Todo en localStorage del navegador — sin cuentas ni servidores.
   ============================================================ */

(function () {
  "use strict";

  const KEY = "ingles_progreso_v1";

  const DEFAULTS = {
    xp: 0,
    streak: { current: 0, best: 0, lastDay: null },
    studyLog: {},            // { "2026-08-31": minutos }
    completedDays: {},       // { dayId: fecha }
    examScores: {},          // { dayId: mejor % }
    speakRecords: {},        // { frase: mejor % de pronunciación }
    vocabSeen: {},           // { palabra: veces practicada }
    vocabWrong: {},          // { palabra: fallos } -> repaso espaciado
    verbDrills: 0,           // planas de verbos completadas
    wordsLearned: 0,
    sessionsCompleted: 0,
    badges: {},
  };

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Object.assign(JSON.parse(JSON.stringify(DEFAULTS)), JSON.parse(raw));
    } catch (e) { /* datos corruptos -> empezar limpio */ }
    return JSON.parse(JSON.stringify(DEFAULTS));
  }

  function save() {
    state.lastSaved = new Date().toISOString();
    localStorage.setItem(KEY, JSON.stringify(state));
    if (window.UI && UI.refreshSidebar) UI.refreshSidebar();
  }

  /* ---------- Respaldo ---------- */
  function exportData() { return JSON.stringify(state, null, 2); }

  function importData(text) {
    const obj = JSON.parse(text);
    if (!obj || typeof obj !== "object" || (!obj.studyLog && !obj.completedDays)) {
      throw new Error("El archivo no parece un respaldo de este curso");
    }
    state = Object.assign(JSON.parse(JSON.stringify(DEFAULTS)), obj);
    save();
  }

  /* Fecha LOCAL, no UTC: estudiar de noche no debe contar como mañana. */
  function dateKey(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function todayStr(offsetDays = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return dateKey(d);
  }

  /* ---------- XP y niveles (100, 200, 300... como Duolingo) ---------- */
  function levelInfo() {
    let xp = state.xp, level = 1;
    while (xp >= level * 100) { xp -= level * 100; level++; }
    return { level, into: xp, needed: level * 100 };
  }

  function addXP(amount, reason) {
    if (!amount) return;
    state.xp += amount;
    save();
    if (window.UI && UI.toast) UI.toast("⭐", `+${amount} XP`, reason || "");
    checkBadges();
  }

  /* ---------- Estudio y racha ----------
     La racha se defiende con 20 minutos. La meta del día es 120. */
  const STREAK_MIN = 20;
  const DAILY_GOAL = 120;

  function logStudy(minutes) {
    const today = todayStr();
    const before = state.studyLog[today] || 0;
    state.studyLog[today] = before + minutes;

    if (before < STREAK_MIN && state.studyLog[today] >= STREAK_MIN) {
      const yesterday = todayStr(-1);
      if (state.streak.lastDay === yesterday) state.streak.current += 1;
      else if (state.streak.lastDay !== today) state.streak.current = 1;
      state.streak.lastDay = today;
      if (state.streak.current > state.streak.best) state.streak.best = state.streak.current;
      if (window.UI && UI.toast) {
        UI.toast("🔥", `${state.streak.current} day${state.streak.current > 1 ? "s" : ""} in a row!`, "Racha viva. No rompas la cadena.");
      }
    }
    save();
    checkBadges();
  }

  function currentStreak() {
    const today = todayStr(), yesterday = todayStr(-1);
    if (state.streak.lastDay === today || state.streak.lastDay === yesterday) return state.streak.current;
    return 0;
  }

  function minutesToday() { return state.studyLog[todayStr()] || 0; }
  function totalMinutes() { return Object.values(state.studyLog).reduce((a, b) => a + b, 0); }

  /* ---------- Días del curso ---------- */
  function completeDay(id, xp = 40) {
    if (state.completedDays[id]) return false;
    state.completedDays[id] = todayStr();
    save();
    addXP(xp, "Day completed");
    return true;
  }
  function isDayDone(id) { return !!state.completedDays[id]; }

  /* ---------- Exámenes ---------- */
  function recordExam(dayId, pct) {
    const prev = state.examScores[dayId] || 0;
    if (pct > prev) { state.examScores[dayId] = pct; save(); checkBadges(); return true; }
    return false;
  }
  function examScore(dayId) { return state.examScores[dayId] || 0; }

  /* ---------- Pronunciación ---------- */
  function recordSpeak(phrase, pct) {
    const prev = state.speakRecords[phrase] || 0;
    if (pct > prev) { state.speakRecords[phrase] = pct; save(); checkBadges(); return true; }
    return false;
  }

  /* ---------- Vocabulario (para repaso espaciado futuro) ---------- */
  function seeWord(word, ok) {
    state.vocabSeen[word] = (state.vocabSeen[word] || 0) + 1;
    if (!ok) state.vocabWrong[word] = (state.vocabWrong[word] || 0) + 1;
    if (state.vocabSeen[word] === 1) state.wordsLearned++;
    save();
  }
  function hardWords(n = 12) {
    return Object.entries(state.vocabWrong).sort((a, b) => b[1] - a[1]).slice(0, n).map(e => e[0]);
  }

  function verbDrillDone() { state.verbDrills++; save(); checkBadges(); }

  /* ---------- Logros ---------- */
  const BADGES = [
    { id: "hello",      ico: "👋", name: "Hello, world",     desc: "Terminaste tu primer bloque",                  test: s => s.sessionsCompleted >= 1 || Object.keys(s.completedDays).length >= 1 },
    { id: "first_day",  ico: "1️⃣", name: "Day 1 clear",      desc: "Completaste el Día 1 entero",                  test: s => !!s.completedDays["d1"] },
    { id: "racha_3",    ico: "🔥", name: "3 days in a row",  desc: "Tres días seguidos estudiando",                test: s => s.streak.best >= 3 },
    { id: "racha_7",    ico: "⚡", name: "One week",         desc: "Siete días seguidos",                          test: s => s.streak.best >= 7 },
    { id: "racha_30",   ico: "🏆", name: "One month",        desc: "Treinta días seguidos",                        test: s => s.streak.best >= 30 },
    { id: "dos_horas",  ico: "⏱️", name: "Two hours",        desc: "120 minutos de estudio en un solo día",        test: s => Object.values(s.studyLog).some(m => m >= 120) },
    { id: "speaker",    ico: "🎤", name: "First words",      desc: "Pronunciaste una frase al 80% o más",          test: s => Object.values(s.speakRecords).some(v => v >= 80) },
    { id: "native_ish", ico: "🗣️", name: "Clear voice",      desc: "10 frases pronunciadas al 90% o más",          test: s => Object.values(s.speakRecords).filter(v => v >= 90).length >= 10 },
    { id: "planas_1",   ico: "✍️", name: "The verb drill",   desc: "Completaste tu primera plana de verbos",       test: s => s.verbDrills >= 1 },
    { id: "planas_10",  ico: "📝", name: "Iron hand",        desc: "Diez planas de verbos completadas",            test: s => s.verbDrills >= 10 },
    { id: "examen_100", ico: "💯", name: "Perfect score",    desc: "100% en un examen de fin de día",              test: s => Object.values(s.examScores).some(v => v >= 100) },
    { id: "vocab_100",  ico: "📚", name: "100 words",        desc: "Cien palabras distintas practicadas",          test: s => s.wordsLearned >= 100 },
    { id: "vocab_500",  ico: "🧠", name: "500 words",        desc: "Quinientas palabras distintas practicadas",    test: s => s.wordsLearned >= 500 },
    { id: "nivel_5",    ico: "🌟", name: "Level 5",          desc: "Alcanza el nivel 5",                           test: () => levelInfo().level >= 5 },
    { id: "diez_horas", ico: "🎓", name: "10 hours",         desc: "Diez horas de estudio acumuladas",             test: s => totalMinutes() >= 600 },
  ];

  function checkBadges() {
    for (const b of BADGES) {
      if (!state.badges[b.id] && b.test(state)) {
        state.badges[b.id] = todayStr();
        localStorage.setItem(KEY, JSON.stringify(state));
        if (window.UI && UI.toast) UI.toast(b.ico, "Achievement unlocked!", b.name);
      }
    }
  }

  if (!localStorage.getItem(KEY) || !state.lastSaved) save();

  window.Store = {
    get state() { return state; },
    save, todayStr, dateKey, exportData, importData,
    levelInfo, addXP,
    logStudy, currentStreak, minutesToday, totalMinutes, STREAK_MIN, DAILY_GOAL,
    completeDay, isDayDone,
    recordExam, examScore, recordSpeak, seeWord, hardWords, verbDrillDone,
    BADGES, checkBadges,
    sessionDone() { state.sessionsCompleted++; save(); checkBadges(); },
  };
})();
