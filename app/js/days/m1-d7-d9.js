/* ============================================================
   Módulo 1 · Días 7, 8 y 9 — el presente simple
   ============================================================ */

(function () {
  "use strict";

  const V = window.VERB_LISTS;

  /* ============================================================
     DAY 7 — My routine
     ============================================================ */

  const DAY7 = {
    id: "d7",
    title: "Day 7 · My daily routine",
    titleEs: "Tu rutina diaria · el presente simple",
    goal: "Empiezas el tiempo verbal más usado del inglés. Al terminar puedes contar tu día entero de la mañana a la noche.",
    canDo: [
      "…describe my whole day from morning to night.",
      "…use the present simple for habits and routines.",
      "…use <strong>at, in, on</strong> with times, days and parts of the day.",
      "…understand why English says <em>I go</em> and not <em>I am go</em>.",
      "…name 15 daily routine verbs.",
    ],
    blocks: [
      {
        title: "Warm-up — module 0 check", titleEs: "Calentamiento · lo que traes del módulo 0",
        kind: "review", minutes: 6,
        html: `<p>Bienvenido al módulo 1. Antes de abrir tema nuevo, seis preguntas para comprobar que la base del módulo 0
sigue firme. Si fallas dos o más, no pasa nada — pero vuelve al día 6 esta semana.</p>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "I ___ a teacher.", options: ["am", "is", "are", "do"], answer: 0 },
            { q: "___ you have a car?", options: ["Are", "Is", "Do", "Have"], answer: 2, why: "<em>Have</em> necesita el auxiliar <strong>do</strong> para preguntar." },
            { q: "He ___ like coffee.", options: ["don't", "doesn't", "isn't", "not"], answer: 1 },
            { q: "There ___ four people here.", options: ["is", "are", "have", "has"], answer: 1 },
            { q: "This is Ana. ___ brother is a doctor.", options: ["His", "Her", "Their", "Its"], answer: 1 },
            { q: "The past of GIVE is…", options: ["gived", "given", "gave", "goved"], answer: 2 },
          ],
        },
      },

      {
        title: "Vocabulary — the routine verbs", titleEs: "Vocabulario · los verbos de la rutina",
        kind: "vocabulary", minutes: 12,
        html: `<p>Quince expresiones que describen el día de cualquier persona del planeta. Fíjate en que muchas son
<strong>verbo + palabra</strong> (get up, wake up, go to bed): en inglés eso es normalísimo y hay que aprenderlas juntas,
como un bloque, no palabra por palabra.</p>`,
        ex: {
          type: "flashcards",
          items: [
            { en: "wake up", ipa: "/weɪk ʌp/ — uéik ap", es: "despertarse", ex: "I wake up at six.", exEs: "Me despierto a las seis." },
            { en: "get up", ipa: "/ɡet ʌp/ — guet ap", es: "levantarse (de la cama)", ex: "I get up at six thirty.", exEs: "Me levanto a las seis y media." },
            { en: "take a shower", ipa: "/teɪk ə ˈʃaʊər/", es: "ducharse", ex: "I take a shower every morning.", exEs: "Me ducho cada mañana." },
            { en: "get dressed", ipa: "/ɡet drest/", es: "vestirse", ex: "Then I get dressed.", exEs: "Luego me visto." },
            { en: "have breakfast", ipa: "/hæv ˈbrekfəst/ — BRÉK-fast", es: "desayunar", ex: "I have breakfast at seven.", exEs: "Desayuno a las siete." },
            { en: "have lunch", ipa: "/hæv lʌntʃ/ — lanch", es: "almorzar", ex: "We have lunch at noon.", exEs: "Almorzamos al mediodía." },
            { en: "have dinner", ipa: "/hæv ˈdɪnər/ — DÍ-ner", es: "cenar", ex: "I have dinner with my family.", exEs: "Ceno con mi familia." },
            { en: "go to work", ipa: "/ɡoʊ tə wɜːrk/", es: "ir al trabajo", ex: "I go to work by bus.", exEs: "Voy al trabajo en bus." },
            { en: "start work", ipa: "/stɑːrt wɜːrk/", es: "empezar a trabajar", ex: "I start work at eight.", exEs: "Empiezo a trabajar a las ocho." },
            { en: "finish work", ipa: "/ˈfɪnɪʃ wɜːrk/", es: "terminar de trabajar", ex: "I finish work at five.", exEs: "Termino a las cinco." },
            { en: "come home", ipa: "/kʌm hoʊm/", es: "volver a casa", ex: "I come home at six.", exEs: "Vuelvo a casa a las seis." },
            { en: "watch TV", ipa: "/wɑːtʃ ˌtiː ˈviː/", es: "ver televisión", ex: "We watch TV after dinner.", exEs: "Vemos tele después de cenar." },
            { en: "go to bed", ipa: "/ɡoʊ tə bed/", es: "acostarse", ex: "I go to bed at eleven.", exEs: "Me acuesto a las once." },
            { en: "sleep", ipa: "/sliːp/ — sliip", es: "dormir", ex: "I sleep seven hours.", exEs: "Duermo siete horas." },
            { en: "every day", ipa: "/ˈevri deɪ/", es: "todos los días", ex: "I do this every day.", exEs: "Hago esto todos los días." },
          ],
        },
      },

      {
        title: "Match the routine", titleEs: "Empareja la rutina",
        kind: "vocabulary", minutes: 5,
        html: `<div class="box tip"><div class="box-title">Dos parejas que se confunden siempre</div>
<ul>
<li><strong>wake up</strong> = abrir los ojos · <strong>get up</strong> = salir de la cama. Puedes hacer lo primero
media hora antes de lo segundo, y el inglés lo distingue.</li>
<li><strong>have</strong> aquí no es "tener": <em>have breakfast</em> es desayunar, <em>have lunch</em> almorzar.
El inglés usa <em>have</em> para las comidas. No digas <span style="color:var(--red)">"I take breakfast"</span>.</li>
</ul></div>`,
        ex: {
          type: "match",
          pairs: [
            ["wake up", "despertarse"], ["get up", "levantarse"], ["take a shower", "ducharse"],
            ["have breakfast", "desayunar"], ["have lunch", "almorzar"], ["have dinner", "cenar"],
            ["go to work", "ir al trabajo"], ["come home", "volver a casa"], ["go to bed", "acostarse"],
            ["every day", "todos los días"],
          ],
        },
      },

      {
        title: "Grammar — the present simple", titleEs: "Gramática · el presente simple",
        kind: "grammar", minutes: 18,
        html: `
<p>Este es <strong>el tiempo verbal más usado del inglés</strong> y, paradójicamente, el más fácil que vas a ver:
en cinco de las seis personas <strong>el verbo no cambia nada</strong>.</p>

<h3>La forma: el verbo tal cual</h3>
<table>
<tr><td>I <strong>work</strong></td><td>You <strong>work</strong></td><td>We <strong>work</strong></td><td>They <strong>work</strong></td></tr>
</table>
<p>Sin conjugaciones, sin terminaciones, sin nada. Compáralo con el español —trabajo, trabajas, trabajamos, trabajáis,
trabajan— y aprecia el regalo. Solo <em>he / she / it</em> se comporta distinto, y a eso le dedicamos el día 8 entero.</p>

<h3>Para qué sirve: lo que es verdad siempre</h3>
<p>El presente simple <strong>no describe lo que estás haciendo ahora</strong>. Describe:</p>
<ul>
<li><strong>Hábitos y rutinas:</strong> <span class="en" data-say="I get up at six every day">I get up at six every day.</span> 🔊</li>
<li><strong>Hechos permanentes:</strong> <span class="en" data-say="I live in Colombia">I live in Colombia.</span> 🔊</li>
<li><strong>Verdades generales:</strong> <span class="en" data-say="Water boils at one hundred degrees">Water boils at 100 degrees.</span> 🔊</li>
</ul>

<div class="box warn"><div class="box-title">⚠️ El error que arrastra media Latinoamérica</div>
<p>En español decimos "estoy trabajando" y "trabajo" casi indistintamente. En inglés <strong>no</strong>:</p>
<p><span class="en">I work here</span> = trabajo aquí (siempre, es mi trabajo) ✓<br>
<span class="en">I am working</span> = estoy trabajando (ahora mismo, en este segundo)</p>
<p>Y sobre todo: <span style="color:var(--red)">"I am work here"</span> ✗ no existe.
O usas <em>to be</em>, o usas el verbo — <strong>nunca los dos juntos</strong>. Cuando aparece un verbo de acción
en presente simple, <em>to be</em> desaparece.</p></div>

<h3>Las tres preposiciones de tiempo: AT, IN, ON</h3>
<p>Esta es la parte que hay que memorizar. Tiene una lógica de "tamaño": <em>at</em> para el punto exacto,
<em>on</em> para el día, <em>in</em> para el bloque grande.</p>
<table>
<tr><th>AT</th><th>ON</th><th>IN</th></tr>
<tr><td>horas<br><span class="en">at 7 o'clock</span></td><td>días<br><span class="en">on Monday</span></td><td>meses<br><span class="en">in July</span></td></tr>
<tr><td><span class="en">at noon</span></td><td>fechas<br><span class="en">on May 5th</span></td><td>años<br><span class="en">in 2026</span></td></tr>
<tr><td><span class="en">at night</span> ⚠️</td><td><span class="en">on weekends</span></td><td>partes del día<br><span class="en">in the morning / afternoon / evening</span></td></tr>
</table>
<div class="box tip"><div class="box-title">Las tres excepciones que hay que tragarse</div>
<span class="en" data-say="at night">at night</span> 🔊 (no "in the night"), <span class="en">at noon</span> (mediodía)
y <span class="en">at midnight</span>. Todas las demás partes del día llevan <em>in the</em>:
<em>in the morning, in the afternoon, in the evening</em>… pero <strong>at night</strong>. Sin razón. Memorízalo.</div>

<div class="box"><div class="box-title">🗣️ Escucha una rutina entera</div>
<p><span class="en" data-say="I wake up at six in the morning. I take a shower and I have breakfast. I go to work at seven thirty. I finish work at five and I come home. I have dinner with my family and I go to bed at eleven.">
I wake up at six in the morning. I take a shower and I have breakfast. I go to work at seven thirty.
I finish work at five and I come home. I have dinner with my family and I go to bed at eleven.</span> 🔊</p>
<p class="es-hint">Escúchalo dos veces. La segunda, repítelo a la vez que el audio — se llama <em>shadowing</em> y es la
técnica que más rápido mejora el ritmo y la entonación.</p></div>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ up at six every day.", es: "Me levanto a las seis todos los días.", answer: "get", why: "Presente simple con <em>I</em>: el verbo va tal cual." },
            { sentence: "We ___ in Colombia.", es: "Vivimos en Colombia.", answer: "live" },
            { sentence: "I go to work ___ 7:30.", es: "Voy al trabajo a las 7:30.", answer: "at", why: "Hora exacta → <strong>at</strong>." },
            { sentence: "I have breakfast ___ the morning.", es: "Desayuno por la mañana.", answer: "in", why: "Partes del día → <strong>in the</strong>." },
            { sentence: "I don't work ___ Sundays.", es: "No trabajo los domingos.", answer: "on", why: "Días → <strong>on</strong>." },
            { sentence: "I sleep ___ night.", es: "Duermo por la noche.", answer: "at", hint: "Es la excepción.", why: "<strong>at night</strong>, nunca \"in the night\"." },
            { sentence: "My birthday is ___ July.", es: "Mi cumpleaños es en julio.", answer: "in", why: "Meses → <strong>in</strong>." },
            { sentence: "They ___ dinner at eight.", es: "Ellos cenan a las ocho.", answer: "have", why: "Las comidas se \"tienen\": <em>have dinner</em>." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Stand up. Say your morning routine out loud while you walk.">Stand up. Say your morning routine out loud while you walk.</span> 🔊</p>
<p class="es-hint">Levántate. Di tu rutina de la mañana en voz alta mientras caminas.</p>
<p>No busques la frase perfecta: di lo que te salga. <em>I wake up… I take a shower… I have coffee…</em>
Caminar y hablar a la vez es de lo mejor que puedes hacer por tu fluidez.</p>`,
      },

      {
        title: "Build your routine", titleEs: "Arma las frases de la rutina",
        kind: "grammar", minutes: 10,
        ex: {
          type: "build",
          items: [
            { es: "Me levanto a las seis todos los días.", answer: "I get up at six every day", extra: ["am", "in", "on"] },
            { es: "Desayuno a las siete de la mañana.", answer: "I have breakfast at seven in the morning", extra: ["on", "take"] },
            { es: "Voy al trabajo en bus.", answer: "I go to work by bus", extra: ["am", "in", "on"], why: "Los medios de transporte llevan <strong>by</strong>: by bus, by car, by train." },
            { es: "No trabajamos los domingos.", answer: "We do not work on Sundays", alts: ["We don't work on Sundays"], extra: ["in", "at", "are"] },
            { es: "Ceno con mi familia.", answer: "I have dinner with my family", extra: ["take", "am"] },
            { es: "Me acuesto a las once de la noche.", answer: "I go to bed at eleven at night", extra: ["in", "on", "the"], why: "<strong>at night</strong>, la excepción del día." },
          ],
        },
      },

      {
        title: "Listening — a whole day", titleEs: "Escucha · un día completo",
        kind: "listening", minutes: 10,
        html: `<p>Ocho frases de rutina. Escríbelas exactamente como las oyes, incluidas las preposiciones —
que es donde de verdad se falla.</p>`,
        ex: {
          type: "dictation",
          items: [
            { en: "I wake up at six in the morning.", es: "Me despierto a las seis de la mañana." },
            { en: "I take a shower and I get dressed.", es: "Me ducho y me visto." },
            { en: "I have breakfast with my family.", es: "Desayuno con mi familia." },
            { en: "I go to work by bus.", es: "Voy al trabajo en bus." },
            { en: "I finish work at five o'clock.", es: "Termino de trabajar a las cinco." },
            { en: "We have dinner at eight.", es: "Cenamos a las ocho." },
            { en: "I watch TV in the evening.", es: "Veo televisión por la noche (temprano)." },
            { en: "I go to bed at eleven.", es: "Me acuesto a las once." },
          ],
        },
      },

      {
        title: "✍️ The verb drill — now 24", titleEs: "Las planas · la lista sube a 24",
        kind: "drill", minutes: 14,
        html: `<p>Módulo nuevo, lista nueva: a los 18 del día 6 se suman <strong>seis más</strong>.
Estos 24 son, literalmente, los verbos irregulares que más vas a necesitar en tu vida.</p>
<div class="box tip"><div class="box-title">Los seis nuevos</div>
put–put (¡no cambia!) · keep–kept · begin–began · bring–brought · buy–bought · run–ran
<p style="margin-top:8px">Fíjate en <strong>bring–brought</strong> y <strong>buy–bought</strong>: se parecen y se confunden.
Y <strong>put</strong> es de los pocos que no cambia nada en pasado.</p></div>`,
        ex: { type: "verbdrill", verbs: V.ext24, reps: 3 },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Three minutes. Then you speak.">Three minutes. Then you speak.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — your routine", titleEs: "Pronunciación · tu rutina",
        kind: "speaking", minutes: 14,
        html: `<div class="box tip"><div class="box-title">Hoy trabajamos las palabras que desaparecen</div>
En el habla real las preposiciones y los artículos <strong>se comen</strong>. <em>at six</em> suena "at-síks",
<em>in the morning</em> suena "in-de-MÓR-ning" con la "the" casi muda. La clave del ritmo inglés es que
<strong>solo las palabras con contenido se pronuncian fuerte</strong> (verbos, sustantivos, números) y el resto se
aplasta. Si pronuncias todo igual de marcado, suena a lectura, no a habla.</div>`,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "I wake up at six in the morning.", es: "Me despierto a las seis de la mañana.", tip: "Fuerte en WAKE, SIX y MOR-ning. El resto, suave." },
            { en: "I take a shower and I get dressed.", es: "Me ducho y me visto.", tip: "<em>Shower</em> = \"SHÁU-er\"." },
            { en: "I have breakfast at seven.", es: "Desayuno a las siete.", tip: "<em>Breakfast</em> = \"BRÉK-fast\", no \"breik-fast\"." },
            { en: "I go to work by bus.", es: "Voy al trabajo en bus." },
            { en: "I finish work at five and I come home.", es: "Termino a las cinco y vuelvo a casa.", tip: "Frase larga: de corrido, sin cortar en el <em>and</em>." },
            { en: "We have dinner together every day.", es: "Cenamos juntos todos los días." },
            { en: "I watch TV in the evening.", es: "Veo tele al anochecer.", tip: "<em>Evening</em> = \"ÍV-ning\", solo dos sílabas." },
            { en: "I go to bed at eleven at night.", es: "Me acuesto a las once de la noche.", tip: "<strong>at</strong> night, no \"in the night\"." },
          ],
        },
      },

      {
        title: "Your day, out loud", titleEs: "Tu día completo · producción propia",
        kind: "production", minutes: 10,
        html: `
<p>El entregable del día: <strong>tu rutina real, de la mañana a la noche, en voz alta y sin parar</strong>.
Este texto lo vas a reutilizar toda la semana, así que hazlo bien hoy.</p>
<div class="box">
<p style="margin:6px 0"><span class="en">I wake up at <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I get up and I <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I have breakfast at <em>___</em>. I usually eat <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I go to work / school at <em>___</em>. I go by <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I start at <em>___</em> and I finish at <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I come home and I <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I have dinner at <em>___</em> with <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I go to bed at <em>___</em>.</span></p>
</div>
<h3>Qué hacer</h3>
<ol>
<li>Escríbelo a mano, completo, con tus horas reales.</li>
<li>Léelo tres veces en voz alta.</li>
<li><strong>Tápalo y cuéntalo</strong> mirando al frente. Cronómetro: que dure al menos <strong>60 segundos</strong>.</li>
<li>Grábate. Guárdalo — el día 14 vas a contar esta misma rutina otra vez y vas a comparar.</li>
</ol>
<div class="box tip"><div class="box-title">El truco del día</div>
Cuando termines, cuenta tu rutina <strong>otra vez pero en desorden</strong>: empieza por la noche y ve hacia atrás.
Obliga a tu cabeza a construir las frases en vez de recitar una secuencia memorizada. Es incómodo, y por eso funciona.</div>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Me levanto a las seis.", answer: "I get up at six", alts: ["I get up at 6", "I wake up at six"] },
            { es: "Desayuno a las siete de la mañana.", answer: "I have breakfast at seven in the morning", alts: ["I have breakfast at 7 in the morning"] },
            { es: "Trabajo en una oficina.", answer: "I work in an office", alts: ["I work at an office"] },
            { es: "No trabajamos los sábados.", answer: "We do not work on Saturdays", alts: ["We don't work on Saturdays", "We don't work on Saturday"] },
            { es: "Vivo en Bogotá con mi familia.", answer: "I live in Bogota with my family", alts: ["I live in Bogotá with my family"] },
            { es: "Duermo ocho horas por la noche.", answer: "I sleep eight hours at night", alts: ["I sleep 8 hours at night"], why: "<strong>at night</strong>." },
            { es: "Vemos televisión después de cenar.", answer: "We watch TV after dinner", alts: ["We watch television after dinner"] },
            { es: "Me acuesto a las once.", answer: "I go to bed at eleven", alts: ["I go to bed at 11"] },
          ],
        },
      },

      {
        title: "🏁 Day 7 exam", titleEs: "Examen del día 7 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d7", shuffle: true,
          items: [
            { kind: "choice", q: "Which is CORRECT?", options: ["I am work in a bank.", "I work in a bank.", "I am working in a bank every day.", "I working in a bank."], answer: 1, why: "Presente simple: verbo solo, sin <em>to be</em>." },
            { kind: "choice", q: "I get up ___ seven o'clock.", options: ["in", "on", "at", "by"], answer: 2 },
            { kind: "choice", q: "I don't work ___ Sundays.", options: ["in", "on", "at", "by"], answer: 1 },
            { kind: "choice", q: "I have breakfast ___ the morning.", options: ["at", "on", "in", "by"], answer: 2 },
            { kind: "choice", q: "I sleep ___ night.", options: ["in", "on", "at", "in the"], answer: 2, why: "La excepción: <strong>at night</strong>." },
            { kind: "choice", q: "My birthday is ___ May.", options: ["at", "on", "in", "by"], answer: 2 },
            { kind: "choice", q: "'Me despierto' es…", options: ["I get up", "I wake up", "I go to bed", "I sleep"], answer: 1, why: "<em>wake up</em> = abrir los ojos; <em>get up</em> = salir de la cama." },
            { kind: "choice", q: "'Desayunar' es…", options: ["take breakfast", "do breakfast", "have breakfast", "make the breakfast"], answer: 2 },
            { kind: "fill", sentence: "We ___ in Colombia.", es: "Vivimos en Colombia.", answer: "live" },
            { kind: "fill", sentence: "I go to work ___ bus.", es: "Voy al trabajo en bus.", answer: "by" },
            { kind: "fill", sentence: "The past of BUY is ___.", es: "El pasado de buy.", answer: "bought" },
            { kind: "fill", sentence: "The past of PUT is ___.", es: "El pasado de put.", answer: "put", why: "No cambia. Es de los pocos así." },
            { kind: "dictation", en: "I wake up at six in the morning.", es: "Me despierto a las seis de la mañana." },
            { kind: "dictation", en: "I go to bed at eleven.", es: "Me acuesto a las once." },
            { kind: "translate", es: "Termino de trabajar a las cinco.", answer: "I finish work at five", alts: ["I finish work at 5", "I finish at five"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 3,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Cuenta tu rutina de mañana en voz alta, entera.</li>
<li>Di cinco frases con <em>at</em>, <em>in</em> y <em>on</em>: <em>at seven, in the morning, on Monday…</em></li>
<li>Los 24 verbos, una pasada.</li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 8 — el día de la S</div>
La <strong>-s de la tercera persona</strong>: <em>he work<strong>s</strong>, she stud<strong>ies</strong>, it go<strong>es</strong></em>.
Es la regla que más se olvida en todo el inglés y la que más delata. Mañana la cerramos con una plana propia.</div>
<p><span class="en" data-say="Module one has started. See you tomorrow.">Module one has started. See you tomorrow.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 8 — He works, she studies
     ============================================================ */

  const DAY8 = {
    id: "d8",
    title: "Day 8 · He works, she studies",
    titleEs: "La -s de la tercera persona · la regla más olvidada del inglés",
    goal: "Dominar la -s de he/she/it: cuándo se pone, cómo se escribe y cómo suena. Es la regla que más delata a un hispanohablante.",
    canDo: [
      "…add <strong>-s, -es or -ies</strong> to any verb with he, she or it.",
      "…say <em>he has</em>, <em>she does</em>, <em>it goes</em> without thinking.",
      "…hear the three sounds of the final -s.",
      "…talk about another person's routine, not just my own.",
    ],
    blocks: [
      {
        title: "Warm-up — yesterday's routine", titleEs: "Calentamiento · repaso del día 7",
        kind: "review", minutes: 8,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "I get up ___ six o'clock.", options: ["in", "on", "at", "by"], answer: 2 },
            { q: "I sleep ___ night.", options: ["in the", "on", "at", "in"], answer: 2 },
            { q: "I don't work ___ Sundays.", options: ["in", "at", "on", "by"], answer: 2 },
            { q: "Which is CORRECT?", options: ["I am work here.", "I working here.", "I work here.", "I am work here every day."], answer: 2 },
            { q: "The past of BRING is…", options: ["bringed", "brought", "bought", "brang"], answer: 1, why: "bring → <strong>brought</strong>. No confundir con buy → bought." },
            { q: "'Almorzar' es…", options: ["take lunch", "have lunch", "do lunch", "eat the lunch"], answer: 1 },
          ],
        },
      },

      {
        title: "Grammar — the third person -s", titleEs: "Gramática · la -s de he, she, it",
        kind: "grammar", minutes: 22,
        html: `
<p>Ayer viste que el presente simple no cambia el verbo. Hoy viene la única excepción, y es <strong>la regla que
más se olvida en todo el inglés</strong>, incluso entre gente que lleva años hablándolo.</p>

<div class="box gram"><div class="box-title">📐 La regla, en una línea</div>
<p style="font-size:20px;text-align:center;margin:10px 0">Con <strong>he, she, it</strong> → el verbo lleva <strong>-S</strong>.</p>
<table>
<tr><td>I work</td><td>you work</td><td><strong>he works</strong></td></tr>
<tr><td>we work</td><td>they work</td><td><strong>she works</strong></td></tr>
</table>
<p>Eso es todo. Una letra. Pero como en español la persona ya va marcada en la terminación del verbo,
nuestro cerebro no siente que falte nada — y por eso se cae tanto.</p></div>

<h3>Las reglas de ortografía (son tres)</h3>
<table>
<tr><th>Si el verbo…</th><th>Se le pone</th><th>Ejemplos</th></tr>
<tr><td>es normal</td><td><strong>-s</strong></td><td>work → work<strong>s</strong> · live → live<strong>s</strong> · eat → eat<strong>s</strong></td></tr>
<tr><td>termina en <strong>-s, -sh, -ch, -x, -o</strong></td><td><strong>-es</strong></td><td>watch → watch<strong>es</strong> · wash → wash<strong>es</strong> · fix → fix<strong>es</strong> · go → go<strong>es</strong> · do → do<strong>es</strong></td></tr>
<tr><td>termina en <strong>consonante + y</strong></td><td>y → <strong>-ies</strong></td><td>study → stud<strong>ies</strong> · try → tr<strong>ies</strong> · fly → fl<strong>ies</strong></td></tr>
</table>
<div class="box tip"><div class="box-title">Ojo con la Y</div>
Solo cambia si <strong>antes de la y hay consonante</strong>. Si hay vocal, se queda:
<em>play → play<strong>s</strong></em>, <em>buy → buy<strong>s</strong></em>, <em>say → say<strong>s</strong></em>.
Compara: stu<strong>d</strong>y → studies (consonante) · pl<strong>a</strong>y → plays (vocal).</div>

<h3>Los dos irregulares</h3>
<table>
<tr><td><strong>have</strong> → <strong>has</strong> <span class="say" data-say="he has">🔊</span></td><td><span class="en">He <strong>has</strong> a car.</span> — no "haves"</td></tr>
<tr><td><strong>be</strong> → <strong>is</strong> <span class="say" data-say="she is">🔊</span></td><td><span class="en">She <strong>is</strong> a doctor.</span> — el de siempre</td></tr>
</table>

<h3>Cómo SUENA la -s: tres sonidos distintos</h3>
<p>No siempre suena igual, y esto es lo que hace que a veces no la oigas:</p>
<table>
<tr><th>Suena</th><th>Cuándo</th><th>Ejemplo</th></tr>
<tr><td><strong>/s/</strong> (ese)</td><td>tras sonido sordo: p, t, k, f</td><td><span class="en" data-say="he works">works</span> 🔊 · <span class="en" data-say="he eats">eats</span> 🔊</td></tr>
<tr><td><strong>/z/</strong> (zumbido)</td><td>tras sonido sonoro: vocales, b, d, g, l, m, n, r</td><td><span class="en" data-say="he lives">lives</span> 🔊 · <span class="en" data-say="she goes">goes</span> 🔊</td></tr>
<tr><td><strong>/ɪz/</strong> (sílaba entera "is")</td><td>tras s, sh, ch, x, ge</td><td><span class="en" data-say="he watches">watches</span> 🔊 · <span class="en" data-say="she washes">washes</span> 🔊</td></tr>
</table>
<p>No hay que memorizar la tabla: sale solo si imitas el audio. Pero saber que <em>watches</em> suena
"UÓ-chis" (dos sílabas y media) te evita decir "uotchs", que es impronunciable.</p>

<div class="box warn"><div class="box-title">⚠️ Los tres errores de la -s</div>
<ol>
<li><strong>Olvidarla.</strong> <span style="color:var(--red)">"He work in a bank"</span> ✗ →
<span class="en">He work<strong>s</strong> in a bank</span> ✓. Es el error número uno del mundo hispano, sin competencia.</li>
<li><strong>Ponerla donde no va.</strong> <span style="color:var(--red)">"They works"</span> ✗. Solo he, she, it.</li>
<li><strong>Ponerla dos veces.</strong> Cuando aparece <em>does</em> o <em>doesn't</em>, la -s ya está ahí:
<span style="color:var(--red)">"He doesn't works"</span> ✗ → <span class="en">He doesn't work</span> ✓.
Eso lo cerramos mañana.</li>
</ol></div>

<div class="box"><div class="box-title">🗣️ Escucha una rutina en tercera persona</div>
<p><span class="en" data-say="My brother wakes up at seven. He takes a shower and he has breakfast. He goes to work at eight. He works in a hospital. He finishes at six and he comes home. He watches TV and he goes to bed at eleven.">
My brother wakes up at seven. He takes a shower and he has breakfast. He goes to work at eight.
He works in a hospital. He finishes at six and he comes home. He watches TV and he goes to bed at eleven.</span> 🔊</p>
<p class="es-hint">Cuenta cuántas eses oyes. Son nueve. Escúchalo otra vez y repite a la vez que el audio.</p></div>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "He ___ in a bank. (work)", es: "Él trabaja en un banco.", answer: "works", why: "he → verbo con <strong>-s</strong>." },
            { sentence: "She ___ in Bogota. (live)", es: "Ella vive en Bogotá.", answer: "lives" },
            { sentence: "My brother ___ TV every night. (watch)", es: "Mi hermano ve tele cada noche.", answer: "watches", why: "Termina en -ch → <strong>-es</strong>. Suena \"UÓ-chis\"." },
            { sentence: "She ___ English at university. (study)", es: "Ella estudia inglés en la universidad.", answer: "studies", why: "consonante + y → <strong>-ies</strong>." },
            { sentence: "He ___ soccer on Sundays. (play)", es: "Él juega fútbol los domingos.", answer: "plays", why: "vocal + y → solo <strong>-s</strong>." },
            { sentence: "My father ___ to work by car. (go)", es: "Mi padre va al trabajo en carro.", answer: "goes", why: "Termina en -o → <strong>-es</strong>." },
            { sentence: "She ___ two children. (have)", es: "Ella tiene dos hijos.", answer: "has", why: "Irregular: have → <strong>has</strong>." },
            { sentence: "It ___ a lot in April. (rain)", es: "Llueve mucho en abril.", answer: "rains", why: "<em>It</em> también lleva la -s." },
            { sentence: "My sister ___ the dishes after dinner. (wash)", es: "Mi hermana lava los platos después de cenar.", answer: "washes" },
            { sentence: "They ___ in Cali. (live)", es: "Ellos viven en Cali.", answer: "live", hint: "Cuidado: ¿lleva -s?", why: "<strong>They</strong> NO lleva -s. Solo he, she, it." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take five. Then think of one person and describe their day.">Take five. Then think of one person and describe their day.</span> 🔊</p>
<p class="es-hint">Descansa cinco. Luego piensa en una persona y describe su día.</p>
<p>Escoge a alguien de tu familia y ve diciendo mentalmente: <em>He wakes up… He works… She has…</em>
Cada vez que se te olvide una -s, corrígete y repite la frase entera.</p>`,
      },

      {
        title: "✍️ The -S drill", titleEs: "Plana de la tercera persona · la nueva plana del módulo",
        kind: "drill", minutes: 15,
        html: `
<p>Plana nueva, y esta es la que de verdad importa esta semana. Misma mecánica que la de los verbos irregulares,
pero aquí escribes la <strong>forma de he/she/it</strong>.</p>
<div class="box tip"><div class="box-title">Hazla también a mano</div>
Escribe la lista a mano tres veces diciendo en voz alta <em>"work, works… go, goes…"</em>. Y presta atención al
<strong>sonido</strong>, no solo a la letra: <em>watches</em> tiene una sílaba más que <em>watch</em>.</div>
<p><span class="en">Write the <strong>he / she / it</strong> form of each verb.</span>
<span class="es-hint">Escribe la forma de he/she/it de cada verbo.</span></p>`,
        ex: {
          type: "verbdrill", verbs: V.third, reps: 3, field: "third",
          headers: ["Base form", "He / she / it", "Español y regla"],
          placeholder: "he...",
          prompt: "Escribe la forma de <strong>he / she / it</strong> de cada verbo.",
          done: "Repite esta plana todos los días de este módulo. La -s de la tercera persona es el error número uno del hispanohablante, y se cura por repetición, no por entender la regla — la regla ya la entendiste.",
        },
      },

      {
        title: "Listening — the sound of the -s", titleEs: "Escucha · los tres sonidos de la -s",
        kind: "listening", minutes: 12,
        html: `<p>Dictados en tercera persona. La trampa está en oír (y escribir) la -s. Ponlo lento 🐢 si hace falta.</p>`,
        ex: {
          type: "dictation",
          items: [
            { en: "He works in a hospital.", es: "Él trabaja en un hospital." },
            { en: "She lives with her parents.", es: "Ella vive con sus padres." },
            { en: "My brother watches TV every night.", es: "Mi hermano ve tele cada noche.", why: "<em>watches</em> = \"UÓ-chis\", dos sílabas." },
            { en: "She studies English at night.", es: "Ella estudia inglés de noche." },
            { en: "He has two children.", es: "Él tiene dos hijos." },
            { en: "My father goes to work by car.", es: "Mi padre va al trabajo en carro." },
            { en: "It rains a lot in April.", es: "Llueve mucho en abril." },
            { en: "She finishes work at six.", es: "Ella termina de trabajar a las seis." },
          ],
        },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Water. Then we speak.">Water. Then we speak.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — the -s out loud", titleEs: "Pronunciación · la -s en voz alta",
        kind: "speaking", minutes: 15,
        html: `<div class="box tip"><div class="box-title">Exagera la -s hoy</div>
Como en español la <em>s</em> final se aspira o se pierde en media Latinoamérica, tu boca tiende a comérsela.
Hoy exagérala hasta que te suene ridícula: <strong>"He workSSS"</strong>. Ese exceso es exactamente lo que te va a
dejar en el punto correcto cuando dejes de pensarlo.</div>`,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "He works in a bank.", es: "Él trabaja en un banco.", tip: "La -s suena /s/ porque va tras la k." },
            { en: "She lives in Medellin.", es: "Ella vive en Medellín.", tip: "Aquí la -s suena /z/, con zumbido: \"livz\"." },
            { en: "My brother watches TV every night.", es: "Mi hermano ve tele cada noche.", tip: "\"UÓ-chis\" — sílaba entera de más." },
            { en: "She studies English at university.", es: "Ella estudia inglés en la universidad." },
            { en: "He goes to work by car.", es: "Él va al trabajo en carro.", tip: "<em>goes</em> = \"góus\"." },
            { en: "She has three brothers.", es: "Ella tiene tres hermanos." },
            { en: "My mother finishes work at five.", es: "Mi madre termina de trabajar a las cinco." },
            { en: "It rains a lot in my city.", es: "Llueve mucho en mi ciudad." },
          ],
        },
      },

      {
        title: "Someone else's day", titleEs: "El día de otra persona · producción propia",
        kind: "production", minutes: 12,
        html: `
<p>Ayer contaste tu día. Hoy cuentas el de <strong>otra persona</strong> — y ahí es donde la -s se pone a prueba.</p>
<div class="box">
<p style="margin:6px 0">Elige a alguien real: tu madre, tu hermano, tu pareja, un amigo.</p>
<p style="margin:6px 0"><span class="en">My <em>___</em> wakes up at <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">He / She has breakfast and goes to <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">He / She works at <em>___</em> and finishes at <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">In the evening he / she <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">He / She goes to bed at <em>___</em>.</span></p>
</div>
<h3>El reto: la caza de eses</h3>
<ol>
<li>Escríbelo a mano y luego <strong>subraya todas las -s de tercera persona</strong>. Cuéntalas: deberían ser al menos seis.</li>
<li>Dilo en voz alta marcando cada -s subrayada.</li>
<li>Ahora la versión difícil: <strong>cuenta la rutina de esa persona sin leer</strong>. Grábate.</li>
<li>Escucha tu grabación con un lápiz y <strong>marca cada -s que se te olvidó</strong>. Esa cuenta es tu nota real de hoy —
mucho más honesta que el examen.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 12,
        ex: {
          type: "translate",
          items: [
            { es: "Él trabaja en un hospital.", answer: "He works in a hospital", alts: ["He works at a hospital"] },
            { es: "Ella vive con sus padres.", answer: "She lives with her parents" },
            { es: "Mi hermano estudia medicina.", answer: "My brother studies medicine" },
            { es: "Ella tiene dos hijos.", answer: "She has two children", alts: ["She has two kids"] },
            { es: "Mi padre va al trabajo en bus.", answer: "My father goes to work by bus", alts: ["My dad goes to work by bus"] },
            { es: "Ella ve televisión por la noche.", answer: "She watches TV at night", alts: ["She watches television at night", "She watches TV in the evening"] },
            { es: "Ellos viven en Cali.", answer: "They live in Cali", why: "Ojo: <em>they</em> no lleva -s." },
            { es: "Mi hermana lava los platos.", answer: "My sister washes the dishes" },
          ],
        },
      },

      {
        title: "🏁 Day 8 exam", titleEs: "Examen del día 8 · 80% para aprobar",
        kind: "exam", minutes: 14,
        ex: {
          type: "exam", pass: 80, dayId: "d8", shuffle: true,
          items: [
            { kind: "choice", q: "He ___ in a bank.", options: ["work", "works", "working", "is work"], answer: 1 },
            { kind: "choice", q: "They ___ in Cali.", options: ["lives", "live", "living", "is live"], answer: 1, why: "They NO lleva -s." },
            { kind: "choice", q: "She ___ TV every night.", options: ["watchs", "watch", "watches", "watchies"], answer: 2 },
            { kind: "choice", q: "My sister ___ English.", options: ["studys", "studyes", "studies", "study"], answer: 2 },
            { kind: "choice", q: "He ___ soccer on Sundays.", options: ["plaies", "plays", "playes", "play"], answer: 1, why: "vocal + y → solo -s." },
            { kind: "choice", q: "She ___ a car.", options: ["haves", "has", "have", "is have"], answer: 1 },
            { kind: "choice", q: "He ___ to work by car.", options: ["gos", "goes", "goies", "go"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He work in a bank.", "He works in a bank.", "He is work in a bank.", "He working in a bank."], answer: 1 },
            { kind: "fill", sentence: "It ___ a lot in April. (rain)", es: "Llueve mucho en abril.", answer: "rains" },
            { kind: "fill", sentence: "My mother ___ work at five. (finish)", es: "Mi madre termina a las cinco.", answer: "finishes" },
            { kind: "fill", sentence: "He ___ the dishes. (wash)", es: "Él lava los platos.", answer: "washes" },
            { kind: "fill", sentence: "We ___ dinner at eight. (have)", es: "Cenamos a las ocho.", answer: "have", hint: "¿Lleva -s?", why: "<em>We</em> no lleva -s." },
            { kind: "dictation", en: "He works in a hospital.", es: "Él trabaja en un hospital." },
            { kind: "dictation", en: "She studies English at night.", es: "Ella estudia inglés de noche." },
            { kind: "translate", es: "Mi hermano ve televisión cada noche.", answer: "My brother watches TV every night", alts: ["My brother watches television every night"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 4,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Di diez frases con <em>he</em> o <em>she</em>, marcando la -s en cada una. Cuéntalas con los dedos.</li>
<li>Recita las tres reglas: <em>normal → s · s, sh, ch, x, o → es · consonante + y → ies.</em></li>
<li>Los dos irregulares: <em>have → has, be → is.</em></li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 9</div>
Negar y preguntar en presente simple: <strong>don't / doesn't</strong> y <strong>Do / Does…?</strong> a fondo.
Ahí encaja la última pieza: por qué cuando aparece <em>does</em>, la -s desaparece del verbo.</div>
<p><span class="en" data-say="Eight days. The chain is strong.">Eight days. The chain is strong.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 9 — Negatives and questions
     ============================================================ */

  const DAY9 = {
    id: "d9",
    title: "Day 9 · Negatives and questions",
    titleEs: "Negar y preguntar en presente simple",
    goal: "Cerrar el presente simple: don't / doesn't, Do / Does…? y las preguntas WH- con auxiliar. Aquí encaja todo lo del módulo.",
    canDo: [
      "…make any negative sentence with <strong>don't / doesn't</strong>.",
      "…ask any question with <strong>Do / Does…?</strong> and answer short.",
      "…build WH- questions: <em>Where do you work? What does she do?</em>",
      "…explain why <em>does</em> makes the -s disappear.",
      "…interview another person about their routine.",
    ],
    blocks: [
      {
        title: "Warm-up — the -s check", titleEs: "Calentamiento · la -s de ayer",
        kind: "review", minutes: 7,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "She ___ TV every night.", options: ["watch", "watchs", "watches", "watching"], answer: 2 },
            { q: "They ___ in Bogota.", options: ["lives", "live", "living", "is live"], answer: 1 },
            { q: "He ___ a big family.", options: ["have", "haves", "has", "is have"], answer: 2 },
            { q: "My sister ___ medicine.", options: ["study", "studys", "studies", "studyes"], answer: 2 },
            { q: "He ___ to work by bus.", options: ["go", "gos", "goes", "going"], answer: 2 },
            { q: "The past of KEEP is…", options: ["keeped", "kept", "kepped", "keept"], answer: 1 },
          ],
        },
      },

      {
        title: "Grammar — negatives", titleEs: "Gramática · la negación",
        kind: "grammar", minutes: 15,
        html: `
<p>En el día 5 viste <em>don't / doesn't</em> con el verbo <em>like</em>. Hoy lo generalizas a
<strong>todos los verbos</strong> y entiendes por fin la lógica.</p>

<div class="box gram"><div class="box-title">📐 Por qué existe el auxiliar</div>
<p>El inglés tiene una regla rígida: <strong>en una frase negativa o interrogativa tiene que haber un verbo auxiliar</strong>.
<em>To be</em> se basta solo (<em>I am not</em>). Todos los demás verbos necesitan a <strong>do</strong>.</p>
<p style="text-align:center;font-size:18px;margin:12px 0">
I work → I <strong>do not</strong> work → I <strong>don't</strong> work<br>
He works → He <strong>does not</strong> work → He <strong>doesn't</strong> work</p></div>

<h3>La pieza que faltaba: dónde se fue la -s</h3>
<p>Mira bien esto, porque es la duda que todo el mundo tiene:</p>
<table>
<tr><th>Afirmativo</th><th>Negativo</th></tr>
<tr><td>He work<strong>s</strong></td><td>He <strong>does</strong>n't work</td></tr>
<tr><td>She stud<strong>ies</strong></td><td>She <strong>does</strong>n't study</td></tr>
<tr><td>It go<strong>es</strong></td><td>It <strong>does</strong>n't go</td></tr>
</table>
<p>La marca de tercera persona <strong>se muda al auxiliar</strong>. <em>Do</em> se convierte en <em>doe<strong>s</strong></em>
y el verbo principal vuelve a su forma limpia. Por eso
<span style="color:var(--red)">"He doesn't works"</span> está mal: sería marcarla dos veces.
<strong>Una sola -s por frase.</strong></p>

<div class="box warn"><div class="box-title">⚠️ Nunca niegues con "no" a secas</div>
<span style="color:var(--red)">"I no work"</span> · <span style="color:var(--red)">"She no like it"</span> ✗ —
esto es traducción literal del español y es de lo que más rápido delata el nivel. Siempre <strong>don't / doesn't</strong>.</div>

<h3>Y ojo con have</h3>
<p><em>Have</em> es un verbo normal aquí, así que también necesita el auxiliar:</p>
<p><span class="en" data-say="I don't have a car">I <strong>don't have</strong> a car.</span> 🔊 ·
<span class="en" data-say="She doesn't have children">She <strong>doesn't have</strong> children.</span> 🔊</p>
<p>No <span style="color:var(--red)">"I haven't a car"</span> (eso es inglés británico antiguo, no lo uses).</p>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ work on Sundays.", es: "No trabajo los domingos.", answer: "don't", alts: ["do not"] },
            { sentence: "He ___ live here.", es: "Él no vive aquí.", answer: "doesn't", alts: ["does not"] },
            { sentence: "She doesn't ___ TV. (watch)", es: "Ella no ve televisión.", answer: "watch", hint: "¿Lleva -s?", why: "Con <em>doesn't</em>, el verbo va limpio." },
            { sentence: "They ___ have a car.", es: "Ellos no tienen carro.", answer: "don't", alts: ["do not"] },
            { sentence: "My brother ___ speak English.", es: "Mi hermano no habla inglés.", answer: "doesn't", alts: ["does not"] },
            { sentence: "We ___ eat meat.", es: "No comemos carne.", answer: "don't", alts: ["do not"] },
            { sentence: "It ___ rain in July here.", es: "Aquí no llueve en julio.", answer: "doesn't", alts: ["does not"], why: "<em>It</em> también va con doesn't." },
            { sentence: "She doesn't ___ children. (have)", es: "Ella no tiene hijos.", answer: "have", why: "Con doesn't → <em>have</em>, no <em>has</em>." },
          ],
        },
      },

      {
        title: "Grammar — questions", titleEs: "Gramática · la pregunta",
        kind: "grammar", minutes: 16,
        html: `
<p>Misma lógica, mismo auxiliar. Para preguntar, <strong>DO o DOES se ponen al principio</strong>.</p>

<h3>Preguntas de sí o no</h3>
<table>
<tr><th>Afirmación</th><th>Pregunta</th><th>Respuesta corta</th></tr>
<tr><td>You work here.</td><td><strong>Do</strong> you work here?</td><td>Yes, I do. / No, I don't.</td></tr>
<tr><td>He lives in Cali.</td><td><strong>Does</strong> he live in Cali?</td><td>Yes, he does. / No, he doesn't.</td></tr>
<tr><td>They have a car.</td><td><strong>Do</strong> they have a car?</td><td>Yes, they do. / No, they don't.</td></tr>
</table>
<p>Fíjate otra vez: en <em>Does he <strong>live</strong>…?</em> el verbo va sin -s. La -s ya está en <em>does</em>.</p>

<h3>Preguntas WH-: la fórmula completa</h3>
<p style="font-size:19px;text-align:center;background:var(--bg-raised);padding:14px;border-radius:8px">
<strong>WH- + do/does + sujeto + verbo + resto?</strong></p>
<ul>
<li><span class="en" data-say="Where do you work?">Where <strong>do</strong> you work?</span> 🔊 <span class="es-hint">¿Dónde trabajas?</span></li>
<li><span class="en" data-say="What time do you get up?">What time <strong>do</strong> you get up?</span> 🔊 <span class="es-hint">¿A qué hora te levantas?</span></li>
<li><span class="en" data-say="What does she do?">What <strong>does</strong> she do?</span> 🔊 <span class="es-hint">¿A qué se dedica ella?</span></li>
<li><span class="en" data-say="Where does he live?">Where <strong>does</strong> he live?</span> 🔊 <span class="es-hint">¿Dónde vive él?</span></li>
<li><span class="en" data-say="Why do you study English?">Why <strong>do</strong> you study English?</span> 🔊 <span class="es-hint">¿Por qué estudias inglés?</span></li>
</ul>

<div class="box tip"><div class="box-title">La pregunta de oro: <em>What do you do?</em></div>
Significa "¿a qué te dedicas?". Los dos <em>do</em> son distintos: el primero es el auxiliar, el segundo es el verbo
"hacer". Suena "uára-yu-du" y es de las preguntas más frecuentes al conocer a alguien. Que te salga sola.</div>

<div class="box warn"><div class="box-title">⚠️ La comparación que hay que tener clara</div>
<table>
<tr><th>Con TO BE</th><th>Con otros verbos</th></tr>
<tr><td><span class="en">Are you a teacher?</span></td><td><span class="en">Do you work here?</span></td></tr>
<tr><td><span class="en">Is she tired?</span></td><td><span class="en">Does she live here?</span></td></tr>
<tr><td><span class="en">Where are you from?</span></td><td><span class="en">Where do you live?</span></td></tr>
</table>
<p>Mezclarlos es el error más visible del nivel intermedio bajo:
<span style="color:var(--red)">"Do you a teacher?"</span> ✗ · <span style="color:var(--red)">"Are you work here?"</span> ✗.
<strong>Regla:</strong> si después viene un adjetivo, un sustantivo o un lugar de origen → <em>to be</em>.
Si viene una <strong>acción</strong> → <em>do/does</em>.</p></div>`,
        ex: {
          type: "build",
          items: [
            { es: "¿Dónde trabajas?", answer: "Where do you work", extra: ["does", "are"] },
            { es: "¿A qué hora te levantas?", answer: "What time do you get up", extra: ["does", "are"] },
            { es: "¿A qué se dedica ella?", answer: "What does she do", extra: ["is", "are"] },
            { es: "¿Dónde vive él?", answer: "Where does he live", extra: ["lives", "do"], why: "Con <em>does</em>, el verbo va sin -s." },
            { es: "¿Ellos tienen hijos?", answer: "Do they have children", extra: ["Does", "has"] },
            { es: "¿Por qué estudias inglés?", answer: "Why do you study English", extra: ["does", "are"] },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take five. You are halfway through the module.">Take five. You are halfway through the module.</span> 🔊</p>
<p class="es-hint">Descansa cinco. Vas por la mitad del módulo.</p>`,
      },

      {
        title: "✍️ The -S drill", titleEs: "Plana de la tercera persona · segundo día",
        kind: "drill", minutes: 13,
        html: `<p>Segunda vez con esta plana. Hoy, además de escribir, <strong>di cada forma en voz alta</strong> antes de teclearla —
la -s es un problema de boca tanto como de escritura.</p>`,
        ex: {
          type: "verbdrill", verbs: V.third, reps: 3, field: "third",
          headers: ["Base form", "He / she / it", "Español y regla"],
          placeholder: "he...",
          prompt: "Escribe la forma de <strong>he / she / it</strong> de cada verbo.",
          done: "Mañana otra vez. Al día 14 esto tiene que salir sin pensar.",
        },
      },

      {
        title: "Listening — questions and answers", titleEs: "Escucha · preguntas y respuestas",
        kind: "listening", minutes: 11,
        html: `<div class="box tip"><div class="box-title">Cómo suenan de verdad</div>
<em>Do you</em> → "dyu" · <em>Does he</em> → "das-i" (¡la h de <em>he</em> desaparece!) ·
<em>What do you do?</em> → "uára-yu-du". Si esperas oír palabras separadas no las vas a reconocer nunca.
Escucha cada frase entera antes de escribir.</div>`,
        ex: {
          type: "dictation",
          items: [
            { en: "Do you work on Saturdays?", es: "¿Trabajas los sábados?" },
            { en: "Where do you live?", es: "¿Dónde vives?" },
            { en: "What does she do?", es: "¿A qué se dedica ella?" },
            { en: "He doesn't speak Spanish.", es: "Él no habla español." },
            { en: "I don't have a car.", es: "No tengo carro." },
            { en: "Does he live with his parents?", es: "¿Él vive con sus padres?" },
            { en: "What time do you get up?", es: "¿A qué hora te levantas?" },
            { en: "No, she doesn't.", es: "No, ella no." },
          ],
        },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Almost done. Then we speak.">Almost done. Then we speak.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — asking about routines", titleEs: "Pronunciación · preguntar por la rutina",
        kind: "speaking", minutes: 14,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "Where do you work?", es: "¿Dónde trabajas?", tip: "\"Uér-dyu-uerk\". Pregunta WH-: la voz baja al final. ↘" },
            { en: "What do you do?", es: "¿A qué te dedicas?", tip: "\"Uára-yu-du\", casi una sola palabra." },
            { en: "What time do you get up?", es: "¿A qué hora te levantas?" },
            { en: "Does he live in Bogota?", es: "¿Él vive en Bogotá?", tip: "\"Das-i-liv…\" — la h de <em>he</em> se pierde. Sí/no: la voz sube. ↗" },
            { en: "I don't work on Sundays.", es: "No trabajo los domingos." },
            { en: "She doesn't have a car.", es: "Ella no tiene carro.", tip: "<em>doesn't have</em>, nunca \"doesn't has\"." },
            { en: "Yes, I do. No, he doesn't.", es: "Sí. No, él no.", tip: "Las respuestas cortas, que salgan solas." },
            { en: "Why do you study English?", es: "¿Por qué estudias inglés?" },
          ],
        },
      },

      {
        title: "The interview", titleEs: "La entrevista · producción propia",
        kind: "production", minutes: 12,
        html: `
<p>Hoy el ejercicio de producción es una <strong>entrevista completa</strong>. Es el uso real de todo lo del módulo.</p>
<div class="box"><div class="box-title">Las diez preguntas</div>
<ol>
<li><span class="en" data-say="What is your name?">What's your name?</span> 🔊</li>
<li><span class="en" data-say="Where do you live?">Where do you live?</span> 🔊</li>
<li><span class="en" data-say="What do you do?">What do you do?</span> 🔊</li>
<li><span class="en" data-say="What time do you get up?">What time do you get up?</span> 🔊</li>
<li><span class="en" data-say="How do you go to work?">How do you go to work?</span> 🔊</li>
<li><span class="en" data-say="Do you work on Saturdays?">Do you work on Saturdays?</span> 🔊</li>
<li><span class="en" data-say="What do you have for breakfast?">What do you have for breakfast?</span> 🔊</li>
<li><span class="en" data-say="Do you like your job?">Do you like your job?</span> 🔊</li>
<li><span class="en" data-say="What time do you go to bed?">What time do you go to bed?</span> 🔊</li>
<li><span class="en" data-say="Why do you study English?">Why do you study English?</span> 🔊</li>
</ol></div>
<h3>Qué hacer</h3>
<ol>
<li>Cópialas a mano y <strong>respóndetelas todas en voz alta</strong>, con frase completa (no de una palabra).</li>
<li>Ahora la parte difícil: <strong>conviértelas a tercera persona</strong> pensando en alguien que conoces —
<em>Where does he live? What does he do? Does he work on Saturdays?</em> — y respóndelas también.</li>
<li>Si tienes con quién practicar, hazle la entrevista de verdad. Si no, hazla frente al espejo haciendo las dos voces.</li>
<li>Grábate haciendo las diez preguntas seguidas, en tercera persona. Ahí es donde se ve si la -s ya es tuya.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 11,
        ex: {
          type: "translate",
          items: [
            { es: "No trabajo los domingos.", answer: "I do not work on Sundays", alts: ["I don't work on Sundays"] },
            { es: "Él no habla inglés.", answer: "He does not speak English", alts: ["He doesn't speak English"] },
            { es: "¿Dónde vives?", answer: "Where do you live", alts: ["Where do you live?"] },
            { es: "¿A qué se dedica tu hermano?", answer: "What does your brother do", alts: ["What does your brother do?"] },
            { es: "Ella no tiene carro.", answer: "She does not have a car", alts: ["She doesn't have a car"], why: "Nunca \"doesn't has\"." },
            { es: "¿A qué hora te levantas?", answer: "What time do you get up", alts: ["What time do you get up?", "What time do you wake up"] },
            { es: "— ¿Él vive aquí? — No.", answer: "Does he live here? No, he doesn't", alts: ["Does he live here? No, he does not"] },
            { es: "¿Por qué estudias inglés?", answer: "Why do you study English", alts: ["Why do you study English?"] },
          ],
        },
      },

      {
        title: "🏁 Day 9 exam", titleEs: "Examen del día 9 · 80% para aprobar",
        kind: "exam", minutes: 13,
        ex: {
          type: "exam", pass: 80, dayId: "d9", shuffle: true,
          items: [
            { kind: "choice", q: "I ___ work on Sundays.", options: ["no", "not", "don't", "doesn't"], answer: 2 },
            { kind: "choice", q: "He ___ live here.", options: ["don't", "doesn't", "not", "isn't"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He doesn't works here.", "He doesn't work here.", "He don't works here.", "He no work here."], answer: 1, why: "Una sola -s por frase, y la lleva <em>does</em>." },
            { kind: "choice", q: "___ she live in Cali?", options: ["Do", "Does", "Is", "Has"], answer: 1 },
            { kind: "choice", q: "___ you a teacher?", options: ["Do", "Does", "Are", "Have"], answer: 2, why: "Sustantivo detrás → <em>to be</em>, no <em>do</em>." },
            { kind: "choice", q: "___ you work here?", options: ["Are", "Is", "Do", "Have"], answer: 2, why: "Acción detrás → <em>do</em>." },
            { kind: "choice", q: "— Does he speak English? — ___", options: ["Yes, he speaks.", "Yes, he is.", "Yes, he does.", "Yes, he do."], answer: 2 },
            { kind: "choice", q: "'¿A qué te dedicas?' es…", options: ["What are you do?", "What do you do?", "What you do?", "How do you do?"], answer: 1 },
            { kind: "fill", sentence: "She doesn't ___ children. (have)", es: "Ella no tiene hijos.", answer: "have" },
            { kind: "fill", sentence: "Where ___ he work?", es: "¿Dónde trabaja él?", answer: "does" },
            { kind: "fill", sentence: "We ___ eat meat.", es: "No comemos carne.", answer: "don't", alts: ["do not"] },
            { kind: "fill", sentence: "The third person of STUDY is ___.", es: "La forma de he/she de study.", answer: "studies" },
            { kind: "dictation", en: "Where do you live?", es: "¿Dónde vives?" },
            { kind: "dictation", en: "He doesn't speak Spanish.", es: "Él no habla español." },
            { kind: "translate", es: "¿Ella trabaja los sábados?", answer: "Does she work on Saturdays", alts: ["Does she work on Saturdays?", "Does she work on Saturday"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 4,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Di cinco frases negativas con <em>don't</em> y cinco con <em>doesn't</em>.</li>
<li>Hazte cinco preguntas con <em>Do you…?</em> y respóndelas con respuesta corta.</li>
<li>La regla de oro del día, en voz alta: <em>"Cuando aparece does, el verbo pierde la s."</em></li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 10</div>
<strong>Always, usually, sometimes, never</strong> — los adverbios de frecuencia y su posición (que no es la del español),
los días de la semana y <em>How often…?</em>. Con eso tu rutina deja de ser una lista y empieza a sonar a persona.</div>
<p><span class="en" data-say="Nine days. The present simple is yours now.">Nine days. The present simple is yours now.</span> 🔊</p>`,
      },
    ],
  };

  window.DAYS_M1 = (window.DAYS_M1 || []).concat([DAY7, DAY8, DAY9]);
})();
