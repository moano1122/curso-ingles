/* ============================================================
   Progreso, racha, XP, logros y notas de examen.

   Almacenamiento a prueba de accidentes. El progreso de meses no
   puede depender de una sola clave de localStorage, así que se
   guarda por triplicado:

     1. KEY      — la copia principal
     2. MIRROR   — copia espejo, se escribe en cada guardado
     3. SNAPS    — una instantánea por día (últimos 30 días)

   Si la principal desaparece o se corrompe, al arrancar se
   recupera sola de la espejo, y si no, de la instantánea más
   reciente. Nada se borra sin dejar antes una instantánea
   etiquetada que se puede restaurar desde Progress.
   ============================================================ */

(function () {
  "use strict";

  const KEY = "ingles_progreso_v1";
  const MIRROR = "ingles_progreso_espejo_v1";
  const SNAPS = "ingles_instantaneas_v1";
  const MAX_SNAPS = 30;

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
    lastBackup: null,        // fecha del último respaldo descargado
  };

  let recoveredFrom = null;  // de dónde se rescató el progreso, si hubo rescate

  /* ---------- Utilidades de almacenamiento ---------- */

  function readJSON(k) {
    try {
      const raw = localStorage.getItem(k);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      return obj && typeof obj === "object" ? obj : null;
    } catch (e) { return null; }
  }

  function looksLikeProgress(o) {
    return !!o && typeof o === "object" && (o.studyLog || o.completedDays || o.xp);
  }

  function weight(o) {
    // "Cuánto vale" un estado, para no restaurar nunca uno más pobre por error
    if (!looksLikeProgress(o)) return -1;
    return (o.xp || 0) + Object.keys(o.studyLog || {}).length * 50 + Object.keys(o.completedDays || {}).length * 100;
  }

  function snapshots() {
    const s = readJSON(SNAPS);
    return Array.isArray(s) ? s : [];
  }

  function writeSnapshots(list) {
    try { localStorage.setItem(SNAPS, JSON.stringify(list.slice(-MAX_SNAPS))); }
    catch (e) { /* cuota llena: no es motivo para romper nada */ }
  }

  /* Una instantánea por día natural; la del día se va actualizando.
     `tag` marca las especiales (antes de borrar, antes de restaurar). */
  function snapshot(tag) {
    const list = snapshots();
    const day = todayStr();
    const entry = { t: new Date().toISOString(), day, tag: tag || null, data: JSON.parse(JSON.stringify(state)) };
    if (tag) list.push(entry);
    else {
      const i = list.findIndex(x => x.day === day && !x.tag);
      if (i >= 0) list[i] = entry; else list.push(entry);
    }
    writeSnapshots(list);
  }

  /* ---------- Carga con rescate en cascada ---------- */

  function load() {
    const main = readJSON(KEY);
    if (looksLikeProgress(main)) return merge(main);

    // La principal no sirve: buscar la mejor alternativa disponible
    const mirror = readJSON(MIRROR);
    const best = snapshots().map(s => s.data).concat(mirror ? [mirror] : [])
      .filter(looksLikeProgress)
      .sort((a, b) => weight(b) - weight(a))[0];

    if (best) {
      recoveredFrom = best === mirror ? "la copia espejo" : "la instantánea más reciente";
      return merge(best);
    }
    return JSON.parse(JSON.stringify(DEFAULTS));
  }

  function merge(obj) {
    return Object.assign(JSON.parse(JSON.stringify(DEFAULTS)), obj);
  }

  let state = load();

  function save() {
    state.lastSaved = new Date().toISOString();
    const json = JSON.stringify(state);
    try {
      localStorage.setItem(KEY, json);
      localStorage.setItem(MIRROR, json);
    } catch (e) { /* modo privado o cuota llena */ }
    if (window.UI && UI.refreshSidebar) UI.refreshSidebar();
  }

  /* ---------- Respaldo ---------- */

  function exportData() { return JSON.stringify(state, null, 2); }

  function importData(text) {
    const obj = JSON.parse(text);
    if (!looksLikeProgress(obj)) throw new Error("El archivo no parece un respaldo de este curso");
    snapshot("antes-de-restaurar");
    state = merge(obj);
    save();
  }

  /* Código de progreso: el JSON en una sola línea de texto, para
     pasarlo de un PC a otro por WhatsApp sin archivos de por medio. */
  function exportCode() {
    return "ENG1:" + btoa(unescape(encodeURIComponent(JSON.stringify(state))));
  }

  function importCode(code) {
    const t = String(code).trim().replace(/\s+/g, "");
    if (!t.startsWith("ENG1:")) throw new Error("Ese no es un código de progreso (debe empezar por ENG1:)");
    importData(decodeURIComponent(escape(atob(t.slice(5)))));
  }

  function wipe() {
    snapshot("antes-de-borrar");
    localStorage.removeItem(KEY);
    localStorage.removeItem(MIRROR);
    // Las instantáneas NO se borran: son justamente la red de seguridad.
  }

  function restoreSnapshot(iso) {
    const s = snapshots().find(x => x.t === iso);
    if (!s) throw new Error("Esa instantánea ya no existe");
    snapshot("antes-de-restaurar");
    state = merge(s.data);
    save();
  }

  /* Reconstrucción manual, para cuando ya no queda NADA que rescatar
     (el navegador borró todos los datos del sitio). No inventa
     historia: escribe los días que la persona confirma haber hecho. */
  function manualRebuild({ daysDone = 0, streak = 0, minutesPerDay = 120 }) {
    snapshot("antes-de-reconstruir");
    const days = window.Curriculum ? Curriculum.allDays().filter(d => !d.soon) : [];
    for (let i = 0; i < Math.min(daysDone, days.length); i++) {
      const fecha = todayStr(-(daysDone - i));
      state.completedDays[days[i].id] = fecha;
      state.studyLog[fecha] = minutesPerDay;
      state.xp += 100;
    }
    state.streak.current = streak;
    state.streak.best = Math.max(state.streak.best, streak);
    state.streak.lastDay = streak > 0 ? todayStr(-1) : state.streak.lastDay;
    state.sessionsCompleted = Math.max(state.sessionsCompleted, daysDone);
    save();
    checkBadges();
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
    snapshot();          // punto de restauración del día
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
    snapshot();
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

  /* ---------- Vocabulario (repaso espaciado) ---------- */
  function seeWord(word, ok) {
    state.vocabSeen[word] = (state.vocabSeen[word] || 0) + 1;
    if (!ok) state.vocabWrong[word] = (state.vocabWrong[word] || 0) + 1;
    else if (state.vocabWrong[word]) state.vocabWrong[word] = Math.max(0, state.vocabWrong[word] - 0.5);
    if (state.vocabSeen[word] === 1) state.wordsLearned++;
    save();
  }
  function hardWords(n = 12) {
    return Object.entries(state.vocabWrong).filter(e => e[1] > 0)
      .sort((a, b) => b[1] - a[1]).slice(0, n).map(e => e[0]);
  }

  function verbDrillDone() { state.verbDrills++; save(); checkBadges(); }

  /* ---------- Aviso de respaldo ---------- */
  function daysSinceBackup() {
    if (!state.lastBackup) return Infinity;
    const [y, m, d] = state.lastBackup.split("-").map(Number);
    return Math.round((Date.now() - new Date(y, m - 1, d).getTime()) / 86400000);
  }
  function needsBackup() {
    return totalMinutes() >= 120 && daysSinceBackup() >= 7;
  }
  function markBackup() { state.lastBackup = todayStr(); save(); }

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
    { id: "mes_uno",    ico: "📅", name: "Month one",        desc: "Terminaste el mes 1 (módulos 0, 1 y 2)",       test: s => !!s.completedDays["d22"] },
  ];

  function checkBadges() {
    for (const b of BADGES) {
      if (!state.badges[b.id] && b.test(state)) {
        state.badges[b.id] = todayStr();
        try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
        if (window.UI && UI.toast) UI.toast(b.ico, "Achievement unlocked!", b.name);
      }
    }
  }

  /* Primer arranque: deja ya la principal, la espejo y una instantánea. */
  if (!localStorage.getItem(KEY) || !state.lastSaved) save();
  snapshot();

  window.Store = {
    get state() { return state; },
    get recoveredFrom() { return recoveredFrom; },
    save, todayStr, dateKey,
    exportData, importData, exportCode, importCode, wipe,
    snapshots, restoreSnapshot, manualRebuild,
    needsBackup, markBackup, daysSinceBackup,
    levelInfo, addXP,
    logStudy, currentStreak, minutesToday, totalMinutes, STREAK_MIN, DAILY_GOAL,
    completeDay, isDayDone,
    recordExam, examScore, recordSpeak, seeWord, hardWords, verbDrillDone,
    BADGES, checkBadges,
    sessionDone() { state.sessionsCompleted++; save(); checkBadges(); },
  };
})();
