/* ============================================================
   Listas de verbos para las planas.
   Van creciendo con el curso: 12 en el módulo 0, 18 desde el
   día 6, 24 desde el módulo 1. Se cargan antes que los días.
   ============================================================ */

(function () {
  "use strict";

  const CORE12 = [
    { base: "be",    past: "was",     alts: ["were", "was/were", "was / were"], es: "ser / estar" },
    { base: "have",  past: "had",     es: "tener / haber" },
    { base: "do",    past: "did",     es: "hacer" },
    { base: "say",   past: "said",    es: "decir" },
    { base: "go",    past: "went",    es: "ir" },
    { base: "get",   past: "got",     es: "conseguir / obtener" },
    { base: "make",  past: "made",    es: "hacer / fabricar" },
    { base: "know",  past: "knew",    es: "saber / conocer" },
    { base: "think", past: "thought", es: "pensar" },
    { base: "take",  past: "took",    es: "tomar / llevar" },
    { base: "see",   past: "saw",     es: "ver" },
    { base: "come",  past: "came",    es: "venir" },
  ];

  const PLUS6 = [
    { base: "give",   past: "gave",   es: "dar" },
    { base: "find",   past: "found",  es: "encontrar" },
    { base: "tell",   past: "told",   es: "contar / decir a alguien" },
    { base: "become", past: "became", es: "convertirse en" },
    { base: "leave",  past: "left",   es: "irse / dejar" },
    { base: "feel",   past: "felt",   es: "sentir" },
  ];

  const PLUS6B = [
    { base: "put",   past: "put",     es: "poner" },
    { base: "keep",  past: "kept",    es: "guardar / mantener" },
    { base: "begin", past: "began",   es: "empezar" },
    { base: "bring", past: "brought", es: "traer" },
    { base: "buy",   past: "bought",  es: "comprar" },
    { base: "run",   past: "ran",     es: "correr" },
  ];

  /* La plana de la tercera persona: base -> he/she/it.
     Misma mecánica, otra columna. Es la que de verdad importa
     en el módulo 1. */
  const THIRD = [
    { base: "work",  third: "works",   es: "trabajar" },
    { base: "live",  third: "lives",   es: "vivir" },
    { base: "eat",   third: "eats",    es: "comer" },
    { base: "go",    third: "goes",    es: "ir — lleva ES" },
    { base: "do",    third: "does",    es: "hacer — lleva ES" },
    { base: "watch", third: "watches", es: "ver (tele) — termina en CH" },
    { base: "wash",  third: "washes",  es: "lavar — termina en SH" },
    { base: "kiss",  third: "kisses",  es: "besar — termina en S" },
    { base: "fix",   third: "fixes",   es: "arreglar — termina en X" },
    { base: "study", third: "studies", es: "estudiar — consonante + Y" },
    { base: "try",   third: "tries",   es: "intentar — consonante + Y" },
    { base: "play",  third: "plays",   es: "jugar — vocal + Y, solo S" },
    { base: "have",  third: "has",     es: "tener — IRREGULAR" },
    { base: "be",    third: "is",      es: "ser / estar — IRREGULAR" },
  ];

  window.VERB_LISTS = {
    core12: CORE12,
    ext18: CORE12.concat(PLUS6),
    ext24: CORE12.concat(PLUS6, PLUS6B),
    third: THIRD,
  };
})();
