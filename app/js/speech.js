/* ============================================================
   Voz: síntesis (el curso te habla en inglés) y reconocimiento
   (tú le hablas al curso). Todo nativo del navegador, sin APIs
   de pago ni internet más allá de las voces del sistema.

   Speech.say(text, opts)      -> pronuncia en inglés
   Speech.canListen()          -> ¿hay reconocimiento de voz?
   Speech.listen(cb, opts)     -> escucha una frase y la devuelve
   Speech.score(said, target)  -> % de acierto palabra por palabra
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Síntesis (Text To Speech) ---------- */

  let voices = [];
  let chosen = null;

  function loadVoices() {
    voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    // Preferencia: voz en-US o en-GB de calidad. Google/Microsoft suelen ser
    // las mejores instaladas en Windows y Chrome.
    const en = voices.filter(v => /^en(-|_)/i.test(v.lang));
    chosen =
      en.find(v => /google (us|uk)/i.test(v.name)) ||
      en.find(v => /(aria|jenny|guy|zira|david|libby|sonia)/i.test(v.name)) ||
      en.find(v => /en-US/i.test(v.lang)) ||
      en[0] || null;
  }

  if (window.speechSynthesis) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  function voiceList() { return voices.filter(v => /^en(-|_)/i.test(v.lang)); }

  function setVoice(name) {
    const v = voices.find(x => x.name === name);
    if (v) { chosen = v; localStorage.setItem("eng_voice", name); }
  }

  function say(text, opts = {}) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (!chosen) loadVoices();
    const saved = localStorage.getItem("eng_voice");
    if (saved) { const v = voices.find(x => x.name === saved); if (v) chosen = v; }
    if (chosen) u.voice = chosen;
    u.lang = (chosen && chosen.lang) || "en-US";
    u.rate = opts.rate != null ? opts.rate : Number(localStorage.getItem("eng_rate") || 0.9);
    u.pitch = 1;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
    return u;
  }

  function canSpeak() { return !!window.speechSynthesis; }

  /* Botón reutilizable de "escuchar esto" */
  function sayButton(text, label) {
    const b = document.createElement("button");
    b.className = "say";
    b.type = "button";
    b.title = "Listen · escuchar";
    b.textContent = label || "🔊";
    b.addEventListener("click", e => { e.stopPropagation(); say(text); });
    return b;
  }

  /* ---------- Reconocimiento (Speech To Text) ---------- */

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  function canListen() { return !!SR; }

  /* listen(cb) -> devuelve un objeto con .abort(). cb(textoReconocido, error) */
  function listen(cb, opts = {}) {
    if (!SR) { cb(null, "unsupported"); return { abort() {} }; }
    const r = new SR();
    r.lang = opts.lang || "en-US";
    r.interimResults = false;
    r.maxAlternatives = 5;
    r.continuous = false;
    let done = false;

    r.onresult = ev => {
      done = true;
      const alts = [];
      for (let i = 0; i < ev.results[0].length; i++) alts.push(ev.results[0][i].transcript);
      cb(alts[0], null, alts);
    };
    r.onerror = ev => { if (!done) { done = true; cb(null, ev.error); } };
    r.onend = () => { if (!done) { done = true; cb(null, "nospeech"); } };

    try { r.start(); } catch (e) { cb(null, "busy"); }
    return { abort() { try { r.abort(); } catch (e) {} } };
  }

  /* ---------- Comparación de lo dicho con el objetivo ---------- */

  // Números que el reconocedor suele devolver en dígitos
  const NUM = { "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five",
                "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten" };

  function normalize(s) {
    if (!s) return "";
    return s.toLowerCase()
      .replace(/[’´`]/g, "'")
      .replace(/[.,!?;:"()¿¡]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Expande contracciones para que "I'm" y "I am" cuenten igual
  const EXPAND = [
    [/\bi'm\b/g, "i am"], [/\byou're\b/g, "you are"], [/\bhe's\b/g, "he is"],
    [/\bshe's\b/g, "she is"], [/\bit's\b/g, "it is"], [/\bwe're\b/g, "we are"],
    [/\bthey're\b/g, "they are"], [/\bthat's\b/g, "that is"], [/\bwhat's\b/g, "what is"],
    [/\bwhere's\b/g, "where is"], [/\bisn't\b/g, "is not"], [/\baren't\b/g, "are not"],
    [/\bdon't\b/g, "do not"], [/\bdoesn't\b/g, "does not"], [/\bdidn't\b/g, "did not"],
    [/\bcan't\b/g, "can not"], [/\bcannot\b/g, "can not"], [/\bi've\b/g, "i have"],
    [/\bi'll\b/g, "i will"], [/\blet's\b/g, "let us"], [/\bwasn't\b/g, "was not"],
    [/\bweren't\b/g, "were not"], [/\bwon't\b/g, "will not"],
  ];

  function canonical(s) {
    let t = normalize(s);
    EXPAND.forEach(([re, rep]) => { t = t.replace(re, rep); });
    t = t.split(" ").map(w => NUM[w] || w).join(" ");
    return t.replace(/\s+/g, " ").trim();
  }

  function words(s) { return canonical(s).split(" ").filter(Boolean); }

  /* Igualdad flexible para respuestas escritas: ignora mayúsculas,
     puntuación y contracciones. Acepta una lista de alternativas. */
  function equals(a, b, alts) {
    const ca = canonical(a);
    if (ca === canonical(b)) return true;
    return (alts || []).some(x => ca === canonical(x));
  }

  /* Distancia de edición: tolera un typo pequeño para no castigar
     al que escribe rápido en un idioma nuevo. */
  function editDistance(a, b) {
    const m = a.length, n = b.length;
    const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
    }
    return d[m][n];
  }

  function almost(a, b) {
    const ca = canonical(a), cb = canonical(b);
    if (!ca || !cb) return false;
    const tol = cb.length > 14 ? 2 : 1;
    return editDistance(ca, cb) <= tol;
  }

  /* Puntúa lo hablado: alineación simple palabra a palabra.
     Devuelve { pct, marks: [{word, ok}] } sobre las palabras del objetivo. */
  function score(said, target) {
    const t = words(target);
    const s = words(said || "");
    const pool = s.slice();
    const marks = t.map(w => {
      let idx = pool.findIndex(x => x === w);
      if (idx === -1) idx = pool.findIndex(x => editDistance(x, w) <= (w.length > 5 ? 2 : 1));
      if (idx >= 0) { pool.splice(idx, 1); return { word: w, ok: true }; }
      return { word: w, ok: false };
    });
    const hits = marks.filter(m => m.ok).length;
    const extra = pool.length;                       // palabras de más penalizan poco
    const pct = t.length ? Math.max(0, Math.round((hits / t.length) * 100 - extra * 4)) : 0;
    return { pct, marks, heard: (said || "").trim() };
  }

  function marksHTML(marks) {
    return marks.map(m => `<span class="${m.ok ? "w-ok" : "w-bad"}">${m.word}</span>`).join(" ");
  }

  window.Speech = {
    say, canSpeak, sayButton, voiceList, setVoice,
    canListen, listen,
    normalize, canonical, equals, almost, score, marksHTML, editDistance,
  };
})();
