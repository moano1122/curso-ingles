/* ============================================================
   Módulo 1 · Días 13 y 14 — consolidación, hito 2 y examen
   ============================================================ */

(function () {
  "use strict";

  const V = window.VERB_LISTS;

  const THIRD_DRILL = {
    type: "verbdrill", verbs: V.third, reps: 3, field: "third",
    headers: ["Base form", "He / she / it", "Español y regla"],
    placeholder: "he...",
    prompt: "Escribe la forma de <strong>he / she / it</strong> de cada verbo.",
    done: "Última semana con esta plana. Si hoy salió sin errores, la -s ya es tuya.",
  };

  /* ============================================================
     DAY 13 — Object pronouns and review
     ============================================================ */

  const DAY13 = {
    id: "d13",
    title: "Day 13 · Me, him, her, them",
    titleEs: "Pronombres de objeto y repaso general",
    goal: "La última pieza que falta para que tus frases dejen de repetir nombres, y repaso completo antes del examen de mañana.",
    canDo: [
      "…use <strong>me, you, him, her, it, us, them</strong> correctly.",
      "…tell the difference between <em>he</em> and <em>him</em>, <em>she</em> and <em>her</em>.",
      "…put a whole present simple sentence together without stopping.",
      "…spot my own remaining mistakes before the module exam.",
    ],
    blocks: [
      {
        title: "Warm-up — can and hobbies", titleEs: "Calentamiento · repaso del día 12",
        kind: "review", minutes: 7,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "She ___ swimming every week.", options: ["plays", "goes", "does", "makes"], answer: 1 },
            { q: "Which is CORRECT?", options: ["He cans swim.", "He can swims.", "He can swim.", "He can to swim."], answer: 2 },
            { q: "We ___ yoga on Saturdays.", options: ["play", "go", "do", "make"], answer: 2 },
            { q: "'Sé cocinar' es…", options: ["I know cook.", "I can cook.", "I know to cook.", "I can to cook."], answer: 1 },
            { q: "— Can you drive? — ___", options: ["Yes, I drive.", "Yes, I do.", "Yes, I can.", "Yes, I am."], answer: 2 },
            { q: "I play ___ guitar.", options: ["—", "a", "the", "of"], answer: 2 },
          ],
        },
      },

      {
        title: "Grammar — object pronouns", titleEs: "Gramática · los pronombres de objeto",
        kind: "grammar", minutes: 16,
        html: `
<p>Hasta ahora usaste <em>I, you, he, she…</em> — los que <strong>hacen</strong> la acción. Hoy aprendes los que
la <strong>reciben</strong>. Sin ellos, hablas repitiendo nombres como un robot:
<em>"I see Maria. I call Maria. I like Maria."</em></p>

<table>
<tr><th>Sujeto (hace)</th><th>Objeto (recibe)</th><th>Ejemplo</th></tr>
<tr><td><strong>I</strong></td><td><strong>me</strong></td><td><span class="en" data-say="She calls me every day">She calls <strong>me</strong> every day.</span> 🔊</td></tr>
<tr><td><strong>you</strong></td><td><strong>you</strong></td><td><span class="en" data-say="I see you">I see <strong>you</strong>.</span> 🔊 <span class="es-hint">— no cambia</span></td></tr>
<tr><td><strong>he</strong></td><td><strong>him</strong></td><td><span class="en" data-say="I know him">I know <strong>him</strong>.</span> 🔊</td></tr>
<tr><td><strong>she</strong></td><td><strong>her</strong></td><td><span class="en" data-say="I love her">I love <strong>her</strong>.</span> 🔊</td></tr>
<tr><td><strong>it</strong></td><td><strong>it</strong></td><td><span class="en" data-say="I like it">I like <strong>it</strong>.</span> 🔊 <span class="es-hint">— no cambia</span></td></tr>
<tr><td><strong>we</strong></td><td><strong>us</strong></td><td><span class="en" data-say="They help us">They help <strong>us</strong>.</span> 🔊</td></tr>
<tr><td><strong>they</strong></td><td><strong>them</strong></td><td><span class="en" data-say="I see them on Fridays">I see <strong>them</strong> on Fridays.</span> 🔊</td></tr>
</table>

<div class="box gram"><div class="box-title">📐 Cómo saber cuál va: la posición manda</div>
<p><strong>Antes del verbo → sujeto. Después del verbo o de una preposición → objeto.</strong></p>
<p style="text-align:center;font-size:18px;margin:10px 0">
<span class="en"><u>He</u> loves <u>her</u>.</span> · <span class="en"><u>She</u> loves <u>him</u>.</span></p>
<p>La misma pareja, dos frases, y las palabras cambian de forma según quién hace y quién recibe.
En español pasa igual (<em>él la quiere / ella lo quiere</em>), solo que no lo notamos.</p></div>

<div class="box warn"><div class="box-title">⚠️ Los tres errores</div>
<ol>
<li><strong>Usar el sujeto como objeto.</strong> <span style="color:var(--red)">"I know he"</span> ✗ →
<span class="en">I know <strong>him</strong></span> ✓. Es el más común de todos.</li>
<li><strong>Confundir <em>her</em> posesivo con <em>her</em> objeto.</strong> Se escriben igual y significan cosas distintas:
<span class="en">I see <strong>her</strong></span> (la veo <em>a ella</em>) vs. <span class="en"><strong>her</strong> car</span> (el carro <em>de ella</em>).
El contexto los separa: si va antes de un sustantivo es posesivo, si va después del verbo es objeto.</li>
<li><strong>Olvidar que las cosas son <em>it</em>.</strong> <span class="en">— Do you like the movie? — Yes, I like <strong>it</strong>.</span>
En español diríamos "sí, me gusta" sin nada; en inglés el objeto no se puede omitir.</li>
</ol></div>

<h3>Con preposiciones, siempre objeto</h3>
<ul>
<li><span class="en" data-say="Come with me">Come with <strong>me</strong>.</span> 🔊 <span class="es-hint">Ven conmigo.</span></li>
<li><span class="en" data-say="This is for you">This is for <strong>you</strong>.</span> 🔊</li>
<li><span class="en" data-say="I work with them">I work with <strong>them</strong>.</span> 🔊</li>
<li><span class="en" data-say="I live with her">I live with <strong>her</strong>.</span> 🔊</li>
</ul>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I know ___. (he)", es: "Lo conozco (a él).", answer: "him" },
            { sentence: "She calls ___ every day. (I)", es: "Ella me llama todos los días.", answer: "me" },
            { sentence: "We see ___ on Fridays. (they)", es: "Los vemos los viernes.", answer: "them" },
            { sentence: "Can you help ___? (we)", es: "¿Nos puedes ayudar?", answer: "us" },
            { sentence: "I love ___. (she)", es: "La quiero (a ella).", answer: "her" },
            { sentence: "— Do you like the movie? — Yes, I like ___.", es: "— ¿Te gusta la película? — Sí, me gusta.", answer: "it", why: "En inglés el objeto no se puede omitir." },
            { sentence: "Come with ___. (I)", es: "Ven conmigo.", answer: "me", why: "Tras preposición, siempre objeto." },
            { sentence: "___ works with ___. (he / she)", es: "Él trabaja con ella.", answer: "He works with her", alts: ["he works with her"], hint: "Escribe la frase completa.", why: "Sujeto antes del verbo, objeto tras la preposición." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take five. Tomorrow is the module exam, so rest well today.">Take five. Tomorrow is the module exam, so rest well today.</span> 🔊</p>
<p class="es-hint">Descansa cinco. Mañana es el examen del módulo, así que hoy descansa bien.</p>`,
      },

      {
        title: "Mixed review — the whole module", titleEs: "Repaso mezclado · todo el módulo 1",
        kind: "review", minutes: 17,
        html: `<p>Veinte preguntas de los seis días. Aquí no importa la nota: importa <strong>descubrir hoy</strong> lo que
todavía falla, mientras hay tiempo de arreglarlo antes del examen de mañana. Apunta en el cuaderno las que falles.</p>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "He ___ in a bank.", options: ["work", "works", "working", "is work"], answer: 1 },
            { q: "They ___ in Cali.", options: ["lives", "live", "living", "is live"], answer: 1 },
            { q: "She ___ TV every night.", options: ["watchs", "watch", "watches", "watchies"], answer: 2 },
            { q: "My sister ___ medicine.", options: ["studys", "studies", "studyes", "study"], answer: 1 },
            { q: "He ___ soccer on Sundays.", options: ["plaies", "plays", "playes", "play"], answer: 1 },
            { q: "He ___ live here.", options: ["don't", "doesn't", "not", "isn't"], answer: 1 },
            { q: "Which is CORRECT?", options: ["He doesn't works.", "He doesn't work.", "He don't works.", "He no work."], answer: 1 },
            { q: "___ she work on Saturdays?", options: ["Do", "Does", "Is", "Has"], answer: 1 },
            { q: "___ you a doctor?", options: ["Do", "Does", "Are", "Have"], answer: 2 },
            { q: "Which is CORRECT?", options: ["I drink always coffee.", "I always drink coffee.", "Always I drink coffee.", "I am always drink coffee."], answer: 1 },
            { q: "She ___ late. (never + to be)", options: ["never is", "is never", "is not never", "doesn't never is"], answer: 1 },
            { q: "'Dos veces por semana' es…", options: ["two times a week", "twice a week", "second a week", "twice the week"], answer: 1 },
            { q: "I get up ___ six o'clock.", options: ["in", "on", "at", "by"], answer: 2 },
            { q: "I don't work ___ Sundays.", options: ["in", "at", "on", "by"], answer: 2 },
            { q: "I sleep ___ night.", options: ["in the", "on", "at", "in"], answer: 2 },
            { q: "I work ___ a teacher.", options: ["as", "for", "like", "of"], answer: 0 },
            { q: "She ___ swimming twice a week.", options: ["plays", "goes", "does", "makes"], answer: 1 },
            { q: "Which is CORRECT?", options: ["He cans swim.", "He can swim.", "He can swims.", "He can to swim."], answer: 1 },
            { q: "I know ___. (he)", options: ["he", "his", "him", "her"], answer: 2 },
            { q: "Which is CORRECT?", options: ["I have a work.", "I have a job.", "I go to the work.", "I have work good."], answer: 1 },
          ],
        },
      },

      {
        title: "✍️ The -S drill", titleEs: "Plana de la tercera persona · sexto día",
        kind: "drill", minutes: 12,
        html: `<p>Penúltimo día con esta plana. Mañana la haces por última vez antes del examen.</p>`,
        ex: THIRD_DRILL,
      },

      {
        title: "✍️ The irregular verbs — 24", titleEs: "Planas · los 24 verbos irregulares",
        kind: "drill", minutes: 12,
        html: `<p>Hoy caen las dos planas, porque mañana el examen pregunta por ambas. Los 24 irregulares, tres rondas.</p>
<div class="box tip"><div class="box-title">Por qué insistimos tanto con estos</div>
En dos módulos entras al pasado simple, y ahí estos 24 verbos son <strong>la mitad del trabajo</strong>.
Cada día que los repasas ahora es un día que no vas a sufrir en el módulo 3.</div>`,
        ex: { type: "verbdrill", verbs: V.ext24, reps: 3 },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Water. Then we speak.">Water. Then we speak.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — pronouns in action", titleEs: "Pronunciación · los pronombres en la frase",
        kind: "speaking", minutes: 13,
        html: `<div class="box tip"><div class="box-title">Los pronombres se comen</div>
En el habla real <em>him</em> pierde la h ("I know 'im"), <em>them</em> se reduce a "'em" ("I see 'em") y
<em>her</em> a "er". No hace falta que tú lo hagas —pero sí que lo <strong>reconozcas</strong>, o vas a
perderte media frase cuando alguien hable rápido.</div>`,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "I know him very well.", es: "Lo conozco muy bien." },
            { en: "She calls me every day.", es: "Ella me llama todos los días." },
            { en: "We see them on Fridays.", es: "Los vemos los viernes." },
            { en: "Can you help us, please?", es: "¿Nos puedes ayudar, por favor?" },
            { en: "He works with her in the office.", es: "Él trabaja con ella en la oficina." },
            { en: "I like it a lot.", es: "Me gusta mucho." },
            { en: "My brother always calls me on Sundays.", es: "Mi hermano siempre me llama los domingos.", tip: "Frase completa con adverbio y pronombre: la del día." },
            { en: "She doesn't know them.", es: "Ella no los conoce." },
          ],
        },
      },

      {
        title: "Rehearsal for tomorrow", titleEs: "Ensayo · mañana cuentas tu día entero",
        kind: "production", minutes: 13,
        html: `
<p>Mañana desbloqueas el <strong>hito 2 del camino: contar tu día completo en inglés</strong>. Hoy lo ensayas,
porque un hito no se improvisa.</p>

<div class="box"><div class="box-title">El guion de mañana — memoriza el ORDEN, no las palabras</div>
<ol>
<li><strong>Presentación:</strong> nombre, edad, dónde vives (módulo 0).</li>
<li><strong>La mañana:</strong> a qué hora te levantas, qué desayunas, cómo vas al trabajo.</li>
<li><strong>El trabajo:</strong> a qué te dedicas, dónde, con quién, horario.</li>
<li><strong>La frecuencia:</strong> qué haces siempre, normalmente, a veces, nunca.</li>
<li><strong>La tarde y la noche:</strong> a qué hora terminas, qué haces al llegar, cuándo cenas y te acuestas.</li>
<li><strong>El fin de semana:</strong> en qué se diferencia de un día normal.</li>
<li><strong>Habilidades:</strong> dos cosas que sabes hacer y una que no.</li>
<li><strong>Cierre:</strong> por qué estudias inglés.</li>
</ol></div>

<h3>Ensayo de hoy — hazlo completo</h3>
<ol>
<li>Escribe el guion a mano, en ocho bloques, con <strong>dos o tres frases por bloque</strong>. No un texto seguido:
bloques, para poder recordarlos por orden.</li>
<li>Léelo dos veces en voz alta.</li>
<li><strong>Tápalo y cuéntalo entero.</strong> Cronómetro: objetivo <strong>dos minutos</strong>.</li>
<li>Grábate y escúchate con lápiz en mano, buscando <strong>solo tres cosas</strong>:
<ul>
<li>¿Se te cayó alguna <strong>-s</strong> de tercera persona?</li>
<li>¿Colocaste bien los <strong>adverbios de frecuencia</strong>?</li>
<li>¿Usaste <em>do/does</em> donde tocaba y <em>to be</em> donde tocaba?</li>
</ul></li>
<li>Corrige y grábalo otra vez. Esa segunda grabación es tu ensayo bueno.</li>
</ol>

<div class="box tip"><div class="box-title">Mañana no vale leer</div>
El hito se da por cumplido cuando lo cuentas <strong>sin leer</strong> y sin cambiar al español, aunque te trabes
y aunque cometas errores. Trabarse está permitido; parar y rendirse, no.</div>`,
      },

      {
        title: "Translate — everything", titleEs: "Traduce tú · mezcla de todo el módulo",
        kind: "production", minutes: 11,
        ex: {
          type: "translate", shuffle: true,
          items: [
            { es: "Me levanto a las seis todos los días.", answer: "I get up at six every day" },
            { es: "Él trabaja en un hospital.", answer: "He works in a hospital", alts: ["He works at a hospital"] },
            { es: "Ella no habla inglés.", answer: "She does not speak English", alts: ["She doesn't speak English"] },
            { es: "¿A qué hora te levantas?", answer: "What time do you get up", alts: ["What time do you get up?", "What time do you wake up"] },
            { es: "Siempre tomo café por la mañana.", answer: "I always drink coffee in the morning", alts: ["I always have coffee in the morning"] },
            { es: "Ella nunca trabaja los domingos.", answer: "She never works on Sundays" },
            { es: "Voy al gimnasio dos veces por semana.", answer: "I go to the gym twice a week" },
            { es: "Sé nadar pero no sé bailar.", answer: "I can swim but I can not dance", alts: ["I can swim but I can't dance", "I can swim, but I can't dance", "I can swim but I cannot dance"] },
            { es: "Lo conozco muy bien.", answer: "I know him very well" },
            { es: "¿A qué se dedica tu hermana?", answer: "What does your sister do", alts: ["What does your sister do?"] },
          ],
        },
      },

      {
        title: "🏁 Day 13 exam", titleEs: "Examen del día 13 · 80% para aprobar",
        kind: "exam", minutes: 11,
        ex: {
          type: "exam", pass: 80, dayId: "d13", shuffle: true,
          items: [
            { kind: "choice", q: "I know ___. (he)", options: ["he", "his", "him", "her"], answer: 2 },
            { kind: "choice", q: "She calls ___ every day. (I)", options: ["I", "my", "me", "mine"], answer: 2 },
            { kind: "choice", q: "We see ___ on Fridays. (they)", options: ["they", "their", "them", "theirs"], answer: 2 },
            { kind: "choice", q: "Can you help ___? (we)", options: ["we", "our", "us", "ours"], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I know he.", "I know him.", "I know his.", "I know he's."], answer: 1 },
            { kind: "choice", q: "In 'her car', HER is…", options: ["objeto", "posesivo", "sujeto", "verbo"], answer: 1, why: "Antes de sustantivo → posesivo." },
            { kind: "choice", q: "In 'I see her', HER is…", options: ["posesivo", "objeto", "sujeto", "adverbio"], answer: 1, why: "Después del verbo → objeto." },
            { kind: "choice", q: "Come with ___. (I)", options: ["I", "me", "my", "mine"], answer: 1 },
            { kind: "fill", sentence: "He works with ___. (she)", es: "Él trabaja con ella.", answer: "her" },
            { kind: "fill", sentence: "— Do you like it? — Yes, I like ___.", es: "— ¿Te gusta? — Sí, me gusta.", answer: "it" },
            { kind: "fill", sentence: "The third person of WASH is ___.", es: "La forma de he/she de wash.", answer: "washes" },
            { kind: "fill", sentence: "The past of TELL is ___.", es: "El pasado de tell.", answer: "told" },
            { kind: "dictation", en: "She calls me every day.", es: "Ella me llama todos los días." },
            { kind: "dictation", en: "We see them on Fridays.", es: "Los vemos los viernes." },
            { kind: "translate", es: "Ella no los conoce.", answer: "She does not know them", alts: ["She doesn't know them"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea antes del gran día",
        kind: "wrap-up", minutes: 4,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Cuenta tu día entero en voz alta, una vez, sin leer. El ensayo del hito.</li>
<li>Recita las dos parejas: <em>he–him, she–her, we–us, they–them.</em></li>
<li><strong>No estudies más.</strong> Mañana hay examen de módulo y dormir bien vale más que repasar.</li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 14 — el gran día</div>
<strong>Hito 2 del camino</strong> (contar tu día completo) y el <strong>examen del módulo 1</strong>: 35 preguntas.
Llega descansado y con el guion en la cabeza.</div>
<p><span class="en" data-say="Thirteen days. Tomorrow you unlock milestone two.">Thirteen days. Tomorrow you unlock milestone two.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 14 — Milestone 2 and module exam
     ============================================================ */

  const DAY14 = {
    id: "d14",
    title: "Day 14 · 🎯 Milestone 2 + module exam",
    titleEs: "Hito 2 del camino y examen del módulo 1",
    goal: "Contar tu día completo en inglés sin leer, y aprobar el examen del módulo 1 con 35 preguntas.",
    canDo: [
      "…talk about my whole day for two minutes without reading.",
      "…use the present simple in all its forms without stopping to think.",
      "…pass the module 1 exam with 80% or more.",
      "…hold a real conversation about routines with another person.",
    ],
    blocks: [
      {
        title: "The big picture — module 1", titleEs: "El mapa · lo que construiste esta semana",
        kind: "review", minutes: 14,
        html: `
<p>Ocho días. Mira lo que tienes ahora y no tenías hace una semana.</p>
<table>
<tr><th>Día</th><th>Lo que te llevaste</th></tr>
<tr><td>7</td><td>El <strong>presente simple</strong> y las preposiciones de tiempo (at / in / on)</td></tr>
<tr><td>8</td><td>La <strong>-s de tercera persona</strong>, con sus tres reglas de ortografía y sus tres sonidos</td></tr>
<tr><td>9</td><td><strong>don't / doesn't</strong> y <strong>Do / Does…?</strong> — y por qué <em>does</em> se lleva la -s</td></tr>
<tr><td>10</td><td>Adverbios de <strong>frecuencia</strong>, los días de la semana y <em>How often…?</em></td></tr>
<tr><td>11</td><td>Trabajo y estudios: <em>work as / for / in / with</em>, y <em>because</em></td></tr>
<tr><td>12</td><td><strong>play / go / do</strong> con actividades y el modal <strong>can</strong></td></tr>
<tr><td>13</td><td>Pronombres de <strong>objeto</strong>: me, him, her, us, them</td></tr>
</table>

<div class="box gram"><div class="box-title">📐 El resumen del módulo en una tabla</div>
<p>Si te llevas una sola imagen de esta semana, que sea esta:</p>
<table>
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>Afirmativo</td><td>I <strong>work</strong></td><td>He <strong>works</strong></td></tr>
<tr><td>Negativo</td><td>I <strong>don't</strong> work</td><td>He <strong>doesn't</strong> work</td></tr>
<tr><td>Pregunta</td><td><strong>Do</strong> I work?</td><td><strong>Does</strong> he work?</td></tr>
<tr><td>Respuesta corta</td><td>Yes, I <strong>do</strong>.</td><td>Yes, he <strong>does</strong>.</td></tr>
</table>
<p><strong>La regla que lo resume todo:</strong> la marca de tercera persona aparece <strong>una sola vez</strong> por frase.
Si está en el auxiliar (<em>does</em>), el verbo va limpio. Si no hay auxiliar, la lleva el verbo (<em>works</em>).</p></div>

<div class="box"><div class="box-title">🗣️ Do this now</div>
Di las cuatro filas de la tabla en voz alta, las ocho frases, dos veces seguidas. Noventa segundos y llegas
al examen con el patrón caliente.</div>`,
      },

      {
        title: "✍️ Both drills — last round", titleEs: "Las dos planas · última ronda antes del examen",
        kind: "drill", minutes: 15,
        html: `<p>La plana de la tercera persona, por última vez este módulo. Si sale perfecta, el examen es un trámite.</p>`,
        ex: THIRD_DRILL,
      },

      {
        title: "🎯 MILESTONE 2 — Talk about your day", titleEs: "HITO 2 · cuenta tu día completo, sin leer",
        kind: "milestone", minutes: 35,
        html: `
<p>Este es el hito. No es un examen escrito: es <strong>hablar dos minutos seguidos sobre tu vida diaria</strong>,
sin leer y sin cambiar al español. Es lo que separa saber gramática de saber inglés.</p>

<div class="box"><div class="box-title">Las reglas del hito</div>
<ul>
<li><strong>Sin leer.</strong> Puedes tener el guion de ocho puntos delante como recordatorio del orden, pero no frases escritas.</li>
<li><strong>Sin parar.</strong> Si te trabas, repite la última frase y sigue. Trabarse está permitido; callarse no.</li>
<li><strong>Sin español.</strong> Si no sabes una palabra, descríbela con otras o sáltala. Cambiar de idioma rompe el ejercicio.</li>
<li><strong>Dos minutos mínimo.</strong> Cronómetro a la vista.</li>
<li><strong>Grabado.</strong> Sin grabación no hay hito: la grabación es la prueba y es tu material de mejora.</li>
</ul></div>

<div class="box tip"><div class="box-title">El guion de ocho bloques</div>
<ol>
<li>Quién eres: nombre, edad, dónde vives.</li>
<li>Tu mañana: hora de levantarte, desayuno, cómo vas al trabajo.</li>
<li>Tu trabajo: qué haces, dónde, con quién, horario.</li>
<li>Frecuencias: qué haces <em>always / usually / sometimes / never</em>.</li>
<li>Tu tarde y tu noche.</li>
<li>Tu fin de semana, y en qué se diferencia.</li>
<li>Dos cosas que <em>can</em> hacer y una que <em>can't</em>.</li>
<li>Por qué estudias inglés. Cierre.</li>
</ol></div>

<h3>Cómo darlo por cumplido</h3>
<ol>
<li>Graba la corrida completa, de dos minutos, siguiendo los ocho bloques.</li>
<li>Escúchala <strong>una sola vez</strong>, con lápiz, anotando: eses caídas, adverbios mal colocados, <em>do/be</em> mezclados.</li>
<li>Si son <strong>menos de cinco errores en total</strong>, el hito está cumplido: marca el día como completado al final de la sesión.</li>
<li>Si son más, corrige y grábala otra vez. No pasa nada — casi nadie lo logra en la primera.</li>
<li><strong>Guarda la grabación buena</strong> junto a la del día 1. Escúchalas seguidas: dos semanas de diferencia y no
te vas a reconocer.</li>
</ol>

<p>Y ahora, antes de grabar, calienta la boca con las frases clave del módulo:</p>`,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "I usually get up at six thirty in the morning.", es: "Normalmente me levanto a las seis y media." },
            { en: "I work as an engineer for a small company.", es: "Trabajo como ingeniero para una empresa pequeña." },
            { en: "My brother works in a hospital and he finishes at six.", es: "Mi hermano trabaja en un hospital y termina a las seis.", tip: "Dos eses en la misma frase. No se te caiga ninguna." },
            { en: "I never work on Sundays.", es: "Nunca trabajo los domingos." },
            { en: "I go to the gym twice a week.", es: "Voy al gimnasio dos veces por semana." },
            { en: "She doesn't have a car, so she goes by bus.", es: "Ella no tiene carro, así que va en bus.", tip: "<em>doesn't have</em>, y luego <em>goes</em> con -s." },
            { en: "I can cook, but I can't dance.", es: "Sé cocinar, pero no sé bailar." },
            { en: "I study English because I want a better job.", es: "Estudio inglés porque quiero un mejor trabajo." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos antes del examen",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Rest before the exam. Do not study now.">Rest before the exam. Do not study now.</span> 🔊</p>
<p class="es-hint">Descansa antes del examen. No estudies ahora.</p>
<p>Lo mismo que en el día 6: repasar en los cinco minutos previos <strong>baja</strong> el rendimiento.
Camina, toma agua, mira por la ventana y vuelve.</p>`,
      },

      {
        title: "🏆 MODULE 1 EXAM", titleEs: "Examen del módulo 1 · 35 preguntas · 80% para aprobar",
        kind: "big exam", minutes: 36,
        html: `
<p>Treinta y cinco preguntas de los ocho días, mezcladas y en orden aleatorio. <strong>80% para aprobar</strong>
— o sea 28 de 35.</p>
<div class="box tip"><div class="box-title">Cómo darlo</div>
<ul>
<li>Sin apuntes. Si no sabes una, responde lo que te parezca y sigue.</li>
<li>Si sacas menos de 80%, <strong>repítelo hasta aprobarlo</strong>. Repetir el examen es en sí mismo el mejor
método de estudio que existe.</li>
<li>Al aprobarlo, marca el día como completado: cierras el módulo 1 y desbloqueas el hito 2 del camino.</li>
</ul></div>`,
        ex: {
          type: "exam", pass: 80, dayId: "d14", shuffle: true,
          items: [
            { kind: "choice", q: "He ___ in a bank.", options: ["work", "works", "working", "is work"], answer: 1 },
            { kind: "choice", q: "They ___ in Medellin.", options: ["lives", "live", "living", "is live"], answer: 1 },
            { kind: "choice", q: "She ___ TV every night.", options: ["watchs", "watch", "watches", "watchies"], answer: 2 },
            { kind: "choice", q: "My sister ___ English.", options: ["studys", "studyes", "studies", "study"], answer: 2 },
            { kind: "choice", q: "He ___ soccer on Sundays.", options: ["plaies", "plays", "playes", "play"], answer: 1 },
            { kind: "choice", q: "He ___ to work by car.", options: ["gos", "goes", "goies", "go"], answer: 1 },
            { kind: "choice", q: "She ___ a big family.", options: ["have", "haves", "has", "is have"], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He doesn't works here.", "He doesn't work here.", "He don't works here.", "He no work here."], answer: 1 },
            { kind: "choice", q: "___ she live in Cali?", options: ["Do", "Does", "Is", "Has"], answer: 1 },
            { kind: "choice", q: "___ you a teacher?", options: ["Do", "Does", "Are", "Have"], answer: 2 },
            { kind: "choice", q: "___ you work here?", options: ["Are", "Is", "Do", "Have"], answer: 2 },
            { kind: "choice", q: "— Does he speak English? — ___", options: ["Yes, he speaks.", "Yes, he is.", "Yes, he does.", "Yes, he do."], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I am work in a bank.", "I work in a bank.", "I working in a bank.", "I am working in a bank every day."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I drink always coffee.", "I always drink coffee.", "Always I drink coffee.", "I am always drink coffee."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["She never is late.", "She is never late.", "She is not never late.", "Never she is late."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I don't never go there.", "I never go there.", "I not never go there.", "I never don't go there."], answer: 1 },
            { kind: "choice", q: "'Dos veces por semana' es…", options: ["two times a week", "twice a week", "second a week", "twice the week"], answer: 1 },
            { kind: "choice", q: "I get up ___ seven o'clock.", options: ["in", "on", "at", "by"], answer: 2 },
            { kind: "choice", q: "I don't work ___ Sundays.", options: ["in", "at", "on", "by"], answer: 2 },
            { kind: "choice", q: "I sleep ___ night.", options: ["in the", "on", "at", "in"], answer: 2 },
            { kind: "choice", q: "My birthday is ___ July.", options: ["at", "on", "in", "by"], answer: 2 },
            { kind: "choice", q: "I work ___ a nurse.", options: ["as", "for", "like", "of"], answer: 0 },
            { kind: "choice", q: "She works ___ a big company.", options: ["as", "for", "with", "at the"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I have a work.", "I have a job.", "I go to the job.", "I have works."], answer: 1 },
            { kind: "choice", q: "She ___ swimming every week.", options: ["plays", "goes", "does", "makes"], answer: 1 },
            { kind: "choice", q: "We ___ yoga in the morning.", options: ["play", "go", "do", "make"], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He cans swim.", "He can swims.", "He can swim.", "He can to swim."], answer: 2 },
            { kind: "choice", q: "'Sé nadar' es…", options: ["I know swim.", "I know to swim.", "I can swim.", "I can to swim."], answer: 2 },
            { kind: "choice", q: "I know ___. (he)", options: ["he", "his", "him", "he's"], answer: 2 },
            { kind: "choice", q: "Can you help ___? (we)", options: ["we", "our", "us", "ours"], answer: 2 },
            { kind: "fill", sentence: "It ___ a lot in April. (rain)", es: "Llueve mucho en abril.", answer: "rains" },
            { kind: "fill", sentence: "How ___ do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?", answer: "often" },
            { kind: "fill", sentence: "She doesn't ___ children. (have)", es: "Ella no tiene hijos.", answer: "have" },
            { kind: "dictation", en: "She never works on Sundays.", es: "Ella nunca trabaja los domingos." },
            { kind: "translate", es: "¿A qué hora te levantas?", answer: "What time do you get up", alts: ["What time do you get up?", "What time do you wake up"] },
          ],
        },
      },

      {
        title: "🎉 Module 1 complete", titleEs: "Módulo 1 completado · dos semanas y dos hitos",
        kind: "wrap-up", minutes: 10,
        html: `
<p>Catorce días seguidos. Si aprobaste el examen y grabaste tus dos minutos, acabas de cerrar el módulo 1
y desbloquear el <strong>hito 2 del camino</strong>.</p>

<h3>Lo que sabes hacer ahora</h3>
<ul>
<li>Hablar de tu vida diaria en <strong>presente simple</strong>, en afirmativo, negativo y pregunta.</li>
<li>La <strong>-s de tercera persona</strong>, que es el examen real de si alguien sabe inglés básico o lo finge.</li>
<li>Decir con qué <strong>frecuencia</strong> haces las cosas, y colocar el adverbio donde va.</li>
<li>Explicar tu <strong>trabajo</strong> y tus <strong>aficiones</strong> durante un minuto largo.</li>
<li>Usar <strong>can</strong> para lo que sabes y no sabes hacer.</li>
<li>Los <strong>pronombres de objeto</strong> y los 24 verbos irregulares más frecuentes.</li>
</ul>
<p>Esto es un <strong>A2 en camino</strong>. Y más importante que la etiqueta: con esto ya puedes sostener una
conversación real sobre la vida cotidiana, que es de lo que se habla el 90% del tiempo.</p>

<div class="box tip"><div class="box-title">📅 Lo que viene: el módulo 2</div>
<strong>Right now</strong> — el presente continuo (<em>I am working</em>), la diferencia con el presente simple
(que en español no existe y por eso cuesta), ropa, clima, el cuerpo, y el inglés de las situaciones cotidianas.
Cierra el <strong>mes 1</strong>.</div>

<div class="box warn"><div class="box-title">💾 Respalda antes de cerrar</div>
Dos semanas de trabajo. Ve a <strong>Progress → Copiar código de progreso</strong> y guárdalo donde no se pierda.
Treinta segundos.</div>

<div class="box"><div class="box-title">🎧 Escucha tus dos grabaciones seguidas</div>
La del día 1 y la de hoy. Catorce días. Esa comparación es la mejor prueba que vas a tener de que esto funciona,
y es justo lo que hay que oír cuando llegue el día en que no tengas ganas de estudiar.</div>

<p><span class="en" data-say="Two weeks. Two milestones. You can talk about your life in English now.">Two weeks. Two milestones. You can talk about your life in English now.</span> 🔊
<span class="es-hint">Dos semanas. Dos hitos. Ya puedes hablar de tu vida en inglés.</span></p>`,
      },
    ],
  };

  window.DAYS_M1 = (window.DAYS_M1 || []).concat([DAY13, DAY14]);
})();
