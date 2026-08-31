/* ============================================================
   Módulo 0 · Días 4, 5 y 6
   ============================================================ */

(function () {
  "use strict";

  /* ============================================================
     DAY 4 — There is / There are
     ============================================================ */

  const DAY4 = {
    id: "d4",
    title: "Day 4 · There is / There are",
    titleEs: "Describir lugares: qué hay y dónde está",
    goal: "Hoy aprendes a describir un lugar: qué hay, cuántos hay y dónde está cada cosa. Al terminar puedes describir tu casa entera.",
    canDo: [
      "…say what there is in a place with <strong>there is / there are</strong>.",
      "…use <strong>a, an</strong> and <strong>the</strong> without guessing.",
      "…say where something is: <em>in, on, under, next to, behind</em>.",
      "…name the rooms of a house and the things inside.",
      "…describe my own house out loud for one minute.",
    ],
    blocks: [
      {
        title: "Warm-up — yesterday's family", titleEs: "Calentamiento · repaso del día 3",
        kind: "review", minutes: 6,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "This is Ana. ___ husband is a driver.", options: ["His", "Her", "Their", "Its"], answer: 1 },
            { q: "The plural of CHILD is…", options: ["childs", "childes", "children", "childrens"], answer: 2 },
            { q: "My sister ___ two sons.", options: ["have", "has", "is", "are"], answer: 1 },
            { q: "Which is CORRECT?", options: ["the house of my parents", "my parents house", "my parents' house", "my parents of house"], answer: 2 },
            { q: "PEOPLE ___ friendly here.", options: ["is", "are", "am", "be"], answer: 1 },
          ],
        },
      },

      {
        title: "Vocabulary — the house", titleEs: "Vocabulario · la casa y sus cosas",
        kind: "vocabulary", minutes: 12,
        ex: {
          type: "flashcards",
          items: [
            { en: "house", ipa: "/haʊs/ — jáus", es: "casa", ex: "My house is small.", exEs: "Mi casa es pequeña." },
            { en: "apartment", ipa: "/əˈpɑːrtmənt/ — a-PÁRT-ment", es: "apartamento", ex: "I live in an apartment.", exEs: "Vivo en un apartamento." },
            { en: "room", ipa: "/ruːm/ — rum", es: "cuarto, habitación", ex: "There are four rooms.", exEs: "Hay cuatro cuartos." },
            { en: "kitchen", ipa: "/ˈkɪtʃɪn/ — KÍ-chen", es: "cocina", ex: "The kitchen is big.", exEs: "La cocina es grande." },
            { en: "bedroom", ipa: "/ˈbedruːm/ — BED-rum", es: "dormitorio", ex: "My bedroom is upstairs.", exEs: "Mi dormitorio está arriba." },
            { en: "bathroom", ipa: "/ˈbæθruːm/ — BÁZ-rum", es: "baño", ex: "Where is the bathroom?", exEs: "¿Dónde está el baño?" },
            { en: "living room", ipa: "/ˈlɪvɪŋ ruːm/", es: "sala", ex: "We watch TV in the living room.", exEs: "Vemos tele en la sala." },
            { en: "table", ipa: "/ˈteɪbəl/ — TÉI-bol", es: "mesa", ex: "The keys are on the table.", exEs: "Las llaves están en la mesa." },
            { en: "chair", ipa: "/tʃer/ — cher", es: "silla", ex: "There are six chairs.", exEs: "Hay seis sillas." },
            { en: "bed", ipa: "/bed/", es: "cama", ex: "The cat is on the bed.", exEs: "El gato está en la cama." },
            { en: "door", ipa: "/dɔːr/ — dor", es: "puerta", ex: "Close the door, please.", exEs: "Cierra la puerta, por favor." },
            { en: "window", ipa: "/ˈwɪndoʊ/ — UÍN-dou", es: "ventana", ex: "There are two windows.", exEs: "Hay dos ventanas." },
            { en: "wall", ipa: "/wɔːl/ — uol", es: "pared", ex: "The picture is on the wall.", exEs: "El cuadro está en la pared." },
            { en: "floor", ipa: "/flɔːr/ — flor", es: "piso, suelo", ex: "The bag is on the floor.", exEs: "La bolsa está en el piso." },
            { en: "key", ipa: "/kiː/ — kii", es: "llave", ex: "Where are my keys?", exEs: "¿Dónde están mis llaves?" },
          ],
        },
      },

      {
        title: "Grammar — there is / there are", titleEs: "Gramática · hay",
        kind: "grammar", minutes: 18,
        html: `
<p>En español tenemos una sola palabra mágica para esto: <strong>hay</strong>. "Hay un perro", "hay tres perros".
En inglés son dos, y elegir la correcta es automático una vez que ves la lógica.</p>

<table>
<tr><th>Español</th><th>Inglés</th><th>Cuándo</th></tr>
<tr><td>Hay un…</td><td><span class="en" data-say="There is a dog">There <strong>is</strong></span> 🔊</td><td>una sola cosa (singular)</td></tr>
<tr><td>Hay unos…</td><td><span class="en" data-say="There are two dogs">There <strong>are</strong></span> 🔊</td><td>varias cosas (plural)</td></tr>
</table>

<p><strong>La regla:</strong> el verbo concuerda con lo que viene <em>después</em>.
<span class="en">There <strong>is</strong> a table</span> · <span class="en">There <strong>are</strong> six chairs</span>.
Exactamente igual que <em>is/are</em> del día 1 — el mismo verbo <em>to be</em> de siempre.</p>

<h3>Negativo y pregunta</h3>
<ul>
<li><span class="en" data-say="There isn't a TV in my room">There <strong>isn't</strong> a TV in my room.</span> 🔊 <span class="es-hint">No hay tele en mi cuarto.</span></li>
<li><span class="en" data-say="There aren't any chairs">There <strong>aren't</strong> any chairs.</span> 🔊 <span class="es-hint">No hay sillas.</span></li>
<li><span class="en" data-say="Is there a bathroom here?"><strong>Is there</strong> a bathroom here?</span> 🔊 <span class="es-hint">¿Hay un baño aquí?</span></li>
<li><span class="en" data-say="Are there any windows?"><strong>Are there</strong> any windows?</span> 🔊 <span class="es-hint">¿Hay ventanas?</span></li>
</ul>
<p>Respuestas cortas: <span class="en">Yes, there is. / No, there isn't.</span> — igual que con <em>to be</em>.</p>

<div class="box gram"><div class="box-title">📐 Some y any</div>
<p><strong>some</strong> = algunos, en frases afirmativas: <span class="en">There are <strong>some</strong> chairs.</span></p>
<p><strong>any</strong> = algún/ningún, en negativas y preguntas: <span class="en">There aren't <strong>any</strong> chairs. Are there <strong>any</strong> chairs?</span></p>
<p>No tiene traducción cómoda al español, y por eso se olvida. Regla práctica para hoy:
<em>afirmativa → some. Negativa o pregunta → any.</em></p></div>

<h3>A, AN y THE — el artículo, que aquí sí importa</h3>
<table>
<tr><td><strong>a</strong></td><td>un / una, antes de sonido de consonante</td><td><span class="en">a table, a house, a key</span></td></tr>
<tr><td><strong>an</strong></td><td>un / una, antes de sonido de <strong>vocal</strong></td><td><span class="en">an apartment, an hour, an engineer</span></td></tr>
<tr><td><strong>the</strong></td><td>el / la / los / las — algo ya conocido</td><td><span class="en">the kitchen, the keys</span></td></tr>
</table>
<div class="box tip"><div class="box-title">La trampa de <em>an</em>: es por el SONIDO, no por la letra</div>
<span class="en">an hour</span> lleva <em>an</em> aunque empiece por h, porque la h no se pronuncia ("áuar").
Y <span class="en">a university</span> lleva <em>a</em> aunque empiece por u, porque suena "yu-niversity", que empieza
con sonido de consonante. Si dudas: dilo en voz alta y decide con la oreja, no con el ojo.</div>

<div class="box warn"><div class="box-title">⚠️ Los dos errores clásicos</div>
<ol>
<li><strong>No traduzcas "hay" con <em>have</em>.</strong> <span style="color:var(--red)">"In my house have three rooms"</span> ✗
→ <span class="en">In my house <strong>there are</strong> three rooms</span> ✓. <em>Have</em> es para poseer, <em>there is/are</em> para existir.</li>
<li><strong>El sujeto no se omite tampoco aquí.</strong> <span style="color:var(--red)">"Is a problem"</span> ✗
→ <span class="en">There is a problem</span> ✓. Ese <em>there</em> no significa "ahí": es parte de la fórmula.</li>
</ol></div>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "There ___ a table in the kitchen.", es: "Hay una mesa en la cocina.", answer: "is", why: "Una sola mesa → <strong>is</strong>." },
            { sentence: "There ___ four chairs.", es: "Hay cuatro sillas.", answer: "are", why: "Varias sillas → <strong>are</strong>." },
            { sentence: "___ there a bathroom here?", es: "¿Hay un baño aquí?", answer: "Is", alts: ["is"] },
            { sentence: "There ___ any windows in this room.", es: "No hay ventanas en este cuarto.", answer: "aren't", alts: ["are not"], hint: "Negativo plural.", why: "<em>aren't</em> + <em>any</em>." },
            { sentence: "I live in ___ apartment.", es: "Vivo en un apartamento.", answer: "an", why: "<em>apartment</em> empieza con sonido de vocal → <strong>an</strong>." },
            { sentence: "She is ___ teacher.", es: "Ella es profesora.", answer: "a", why: "<em>teacher</em> empieza con consonante → <strong>a</strong>." },
            { sentence: "There are ___ books on the table.", es: "Hay algunos libros en la mesa.", answer: "some", why: "Afirmativa → <strong>some</strong>." },
            { sentence: "There is ___ hour left.", es: "Queda una hora.", answer: "an", why: "La <em>h</em> de <em>hour</em> es muda: suena \"áuar\" → <strong>an</strong>." },
          ],
        },
      },

      {
        title: "Prepositions — where is it?", titleEs: "Preposiciones de lugar · dónde está",
        kind: "grammar", minutes: 12,
        html: `
<p>Siete palabritas que resuelven el 90% de las descripciones de lugar:</p>
<table>
<tr><td><strong>in</strong> <span class="say" data-say="in">🔊</span></td><td>en, dentro de</td><td><span class="en" data-say="The keys are in the bag">The keys are <strong>in</strong> the bag.</span> 🔊</td></tr>
<tr><td><strong>on</strong> <span class="say" data-say="on">🔊</span></td><td>sobre, encima (tocando)</td><td><span class="en" data-say="The book is on the table">The book is <strong>on</strong> the table.</span> 🔊</td></tr>
<tr><td><strong>under</strong> <span class="say" data-say="under">🔊</span></td><td>debajo de</td><td><span class="en" data-say="The cat is under the bed">The cat is <strong>under</strong> the bed.</span> 🔊</td></tr>
<tr><td><strong>next to</strong> <span class="say" data-say="next to">🔊</span></td><td>al lado de</td><td><span class="en" data-say="The chair is next to the door">The chair is <strong>next to</strong> the door.</span> 🔊</td></tr>
<tr><td><strong>behind</strong> <span class="say" data-say="behind">🔊</span></td><td>detrás de</td><td><span class="en" data-say="The car is behind the house">The car is <strong>behind</strong> the house.</span> 🔊</td></tr>
<tr><td><strong>in front of</strong> <span class="say" data-say="in front of">🔊</span></td><td>delante de</td><td><span class="en" data-say="He is in front of me">He is <strong>in front of</strong> me.</span> 🔊</td></tr>
<tr><td><strong>between</strong> <span class="say" data-say="between">🔊</span></td><td>entre (dos)</td><td><span class="en" data-say="It is between the bed and the wall">It is <strong>between</strong> the bed and the wall.</span> 🔊</td></tr>
</table>

<div class="box gram"><div class="box-title">📐 IN contra ON — la que siempre se falla</div>
<p><strong>in</strong> = dentro, rodeado. <strong>on</strong> = encima, tocando una superficie.</p>
<p><span class="en">in the box</span> (dentro de la caja) · <span class="en">on the box</span> (encima de la caja)</p>
<p>Y hay usos fijos que hay que tragarse tal cual: <span class="en">in the car</span> pero <span class="en">on the bus</span>;
<span class="en">in the picture</span> pero <span class="en">on TV</span>; <span class="en">in the street</span> pero
<span class="en">on the wall</span>. No busques lógica en estos: son costumbre, no razón.</p></div>

<p>La pregunta que las activa todas: <span class="en" data-say="Where is it?">Where is it?</span> 🔊 ·
<span class="en" data-say="Where are they?">Where are they?</span> 🔊</p>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "The book is ___ the table. (encima)", options: ["in", "on", "under", "between"], answer: 1 },
            { q: "The keys are ___ my bag. (dentro)", options: ["on", "in", "behind", "next to"], answer: 1 },
            { q: "The cat is ___ the bed. (debajo)", options: ["on", "over", "under", "in"], answer: 2 },
            { q: "The bank is ___ the school. (al lado)", options: ["next to", "between", "under", "in"], answer: 0 },
            { q: "The car is ___ the house. (detrás)", options: ["in front of", "behind", "on", "between"], answer: 1 },
            { q: "My house is ___ the church and the park.", qEs: "entre la iglesia y el parque", options: ["next to", "behind", "between", "in"], answer: 2, why: "<strong>between</strong> = entre dos cosas." },
            { q: "The picture is ___ the wall.", options: ["in", "on", "under", "into"], answer: 1, why: "En inglés los cuadros van <strong>on</strong> the wall, no \"in\"." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Walk around your house. Name three things in English.">Walk around your house. Name three things in English.</span> 🔊</p>
<p class="es-hint">Camina por tu casa. Nombra tres cosas en inglés.</p>
<p>Y si quieres el truco que más vocabulario fija sin esfuerzo: <strong>pon papelitos con el nombre en inglés</strong>
pegados en la puerta, la ventana, la mesa, la nevera. En una semana los lees sin darte cuenta y ya no se te olvidan.</p>`,
      },

      {
        title: "Build the sentences", titleEs: "Arma las frases",
        kind: "grammar", minutes: 10,
        ex: {
          type: "build",
          items: [
            { es: "Hay una mesa en la cocina.", answer: "There is a table in the kitchen", extra: ["are", "on", "have"] },
            { es: "Hay tres cuartos en mi casa.", answer: "There are three rooms in my house", extra: ["is", "have"], why: "\"Hay\" nunca es <em>have</em>." },
            { es: "El gato está debajo de la cama.", answer: "The cat is under the bed", extra: ["on", "there"] },
            { es: "¿Hay un baño aquí?", answer: "Is there a bathroom here", extra: ["Are", "have"] },
            { es: "No hay ventanas en el baño.", answer: "There are not any windows in the bathroom", alts: ["There aren't any windows in the bathroom"], extra: ["is", "some"] },
            { es: "Las llaves están al lado de la puerta.", answer: "The keys are next to the door", extra: ["is", "between"] },
          ],
        },
      },

      {
        title: "✍️ The verb drill", titleEs: "Las planas · cuarto día",
        kind: "drill", minutes: 12,
        html: `<p>Cuarto día. A partir de hoy, intenta las tres rondas <strong>sin mirar la columna del español</strong>.
Si te bloqueas, mírala — pero inténtalo primero.</p>`,
        ex: { type: "verbdrill", verbs: [], reps: 3 },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Three minutes. Then we speak.">Three minutes. Then we speak.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — describing places", titleEs: "Pronunciación · describir lugares",
        kind: "speaking", minutes: 14,
        html: `<div class="box tip"><div class="box-title">Hoy trabajamos el "there" y la unión de palabras</div>
<em>There is</em> en el habla real suena casi como una sola palabra: "<strong>dérz</strong>". Y <em>There are</em> suena
"<strong>dér-ar</strong>". Si las dices separadas y marcadas, suena a robot. Escucha primero y copia el ritmo, no las letras.</div>`,
        ex: {
          type: "speak", target: 68,
          items: [
            { en: "There is a table in the kitchen.", es: "Hay una mesa en la cocina.", tip: "\"Dérz a téibol...\" — pégalo todo." },
            { en: "There are three bedrooms in my house.", es: "Hay tres dormitorios en mi casa." },
            { en: "The keys are on the table.", es: "Las llaves están en la mesa." },
            { en: "Is there a bathroom here?", es: "¿Hay un baño aquí?", tip: "Pregunta de sí/no: la voz sube al final. ↗" },
            { en: "The cat is under the bed.", es: "El gato está debajo de la cama." },
            { en: "My house is next to the park.", es: "Mi casa está al lado del parque." },
            { en: "There isn't a TV in my bedroom.", es: "No hay televisor en mi dormitorio.", tip: "<em>isn't</em> se dice \"ísent\", con la t apenas marcada." },
            { en: "Where are my keys?", es: "¿Dónde están mis llaves?" },
          ],
        },
      },

      {
        title: "Describe your house", titleEs: "Describe tu casa · producción propia",
        kind: "production", minutes: 10,
        html: `
<p>El reto del día: <strong>un minuto hablando de tu casa, sin parar</strong>. No importa si repites estructuras —
de hecho, repetir es lo que se busca.</p>
<div class="box">
<p style="margin:6px 0"><span class="en">I live in a house / an apartment.</span></p>
<p style="margin:6px 0"><span class="en">There are <em>___</em> rooms.</span></p>
<p style="margin:6px 0"><span class="en">There is a kitchen, a living room and <em>___</em> bedrooms.</span></p>
<p style="margin:6px 0"><span class="en">In my bedroom there is a bed, a <em>___</em> and a <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">My house is next to <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">There isn't a <em>___</em> in my house.</span></p>
</div>
<h3>Qué hacer</h3>
<ol>
<li>Escríbelo a mano con tu casa real.</li>
<li>Ponle un cronómetro de <strong>60 segundos</strong> y habla sin parar. Si te trabas, repite la última frase y sigue.
Parar es lo único prohibido.</li>
<li>Hazlo tres veces. La tercera te va a salir notablemente mejor que la primera — y esa mejora en 5 minutos es
justo lo que se busca.</li>
<li>Grábate en el último intento.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Hay un problema.", answer: "There is a problem", alts: ["There's a problem"] },
            { es: "Hay cuatro sillas en la cocina.", answer: "There are four chairs in the kitchen" },
            { es: "No hay leche.", answer: "There is not any milk", alts: ["There isn't any milk", "There's no milk", "There is no milk"] },
            { es: "¿Hay una farmacia cerca?", answer: "Is there a pharmacy near here", alts: ["Is there a pharmacy near here?", "Is there a drugstore near here"] },
            { es: "El libro está debajo de la mesa.", answer: "The book is under the table" },
            { es: "Vivo en un apartamento pequeño.", answer: "I live in a small apartment", why: "Ojo: <strong>an</strong> apartment, pero <strong>a</strong> small apartment — manda la palabra que sigue." },
            { es: "Mi casa está entre el parque y la escuela.", answer: "My house is between the park and the school" },
            { es: "¿Dónde están mis llaves?", answer: "Where are my keys", alts: ["Where are my keys?"] },
          ],
        },
      },

      {
        title: "🏁 Day 4 exam", titleEs: "Examen del día 4 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d4", shuffle: true,
          items: [
            { kind: "choice", q: "There ___ six chairs.", options: ["is", "are", "have", "has"], answer: 1 },
            { kind: "choice", q: "There ___ a problem.", options: ["are", "have", "is", "has"], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["In my house have three rooms.", "In my house there are three rooms.", "My house have three rooms there.", "There have three rooms."], answer: 1, why: "\"Hay\" es <em>there is/are</em>, nunca <em>have</em>." },
            { kind: "choice", q: "I live in ___ apartment.", options: ["a", "an", "the", "one"], answer: 1 },
            { kind: "choice", q: "The picture is ___ the wall.", options: ["in", "on", "under", "into"], answer: 1 },
            { kind: "choice", q: "It's ___ hour.", options: ["a", "an", "the", "some"], answer: 1, why: "La h de <em>hour</em> es muda." },
            { kind: "choice", q: "The bank is ___ the school and the park.", options: ["next to", "between", "behind", "under"], answer: 1 },
            { kind: "fill", sentence: "___ there any windows?", es: "¿Hay ventanas?", answer: "Are" },
            { kind: "fill", sentence: "There are ___ books on the table.", es: "Hay algunos libros en la mesa.", answer: "some" },
            { kind: "fill", sentence: "The cat is ___ the bed.", es: "El gato está debajo de la cama.", answer: "under" },
            { kind: "dictation", en: "There are three bedrooms.", es: "Hay tres dormitorios." },
            { kind: "dictation", en: "Is there a bathroom here?", es: "¿Hay un baño aquí?" },
            { kind: "translate", es: "Hay una mesa en la sala.", answer: "There is a table in the living room", alts: ["There's a table in the living room"] },
            { kind: "translate", es: "Las llaves están al lado de la puerta.", answer: "The keys are next to the door" },
            { kind: "translate", es: "No hay sillas.", answer: "There are not any chairs", alts: ["There aren't any chairs", "There are no chairs"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 3,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Recorre tu casa cuarto por cuarto diciendo en voz alta qué hay: <em>There is a bed. There are two windows.</em></li>
<li>Escoge cinco objetos y di dónde están: <em>The keys are on the table.</em></li>
<li>Los doce verbos, una pasada.</li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 5</div>
<strong>I like / I don't like</strong>: gustos, comida y tiempo libre. Y ahí aparece <em>do / does</em>, el auxiliar que
manda en todo el inglés cotidiano. Es el día más importante del módulo.</div>
<p><span class="en" data-say="Four days in a row. Almost a week.">Four days in a row. Almost a week.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 5 — I like / I don't like
     ============================================================ */

  const DAY5 = {
    id: "d5",
    title: "Day 5 · I like, I don't like",
    titleEs: "Gustos, comida y el auxiliar DO",
    goal: "El día más importante del módulo: aparece DO/DOES, el auxiliar que gobierna las negaciones y preguntas de todo el inglés cotidiano.",
    canDo: [
      "…say what I like, love and hate.",
      "…make negatives with <strong>don't / doesn't</strong>.",
      "…ask questions with <strong>Do you…? Does he…?</strong>",
      "…talk about food and free time.",
      "…answer <em>Yes, I do / No, I don't</em> naturally.",
    ],
    blocks: [
      {
        title: "Warm-up — there is, there are", titleEs: "Calentamiento · repaso del día 4",
        kind: "review", minutes: 6,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "There ___ four chairs.", options: ["is", "are", "have", "has"], answer: 1 },
            { q: "I live in ___ apartment.", options: ["a", "an", "the", "some"], answer: 1 },
            { q: "The book is ___ the table. (encima)", options: ["in", "on", "under", "at"], answer: 1 },
            { q: "Which is CORRECT?", options: ["In my house have two rooms.", "There are two rooms in my house.", "Have two rooms in my house.", "It has there two rooms."], answer: 1 },
            { q: "The past of TAKE is…", options: ["taked", "took", "taken", "toke"], answer: 1 },
          ],
        },
      },

      {
        title: "Vocabulary — food and free time", titleEs: "Vocabulario · comida y tiempo libre",
        kind: "vocabulary", minutes: 12,
        ex: {
          type: "flashcards",
          items: [
            { en: "food", ipa: "/fuːd/ — fud", es: "comida", ex: "I love Italian food.", exEs: "Me encanta la comida italiana." },
            { en: "coffee", ipa: "/ˈkɔːfi/ — CÓ-fi", es: "café", ex: "I drink coffee every morning.", exEs: "Tomo café cada mañana." },
            { en: "bread", ipa: "/bred/ — bred", es: "pan", ex: "There is bread on the table.", exEs: "Hay pan en la mesa." },
            { en: "meat", ipa: "/miːt/ — miit", es: "carne", ex: "I don't eat meat.", exEs: "No como carne." },
            { en: "chicken", ipa: "/ˈtʃɪkɪn/ — CHÍ-ken", es: "pollo", ex: "Chicken with rice, please.", exEs: "Pollo con arroz, por favor." },
            { en: "rice", ipa: "/raɪs/ — ráis", es: "arroz", ex: "We eat rice every day.", exEs: "Comemos arroz todos los días." },
            { en: "fruit", ipa: "/fruːt/ — frut", es: "fruta", ex: "Fruit is good for you.", exEs: "La fruta es buena para ti." },
            { en: "water", ipa: "/ˈwɔːtər/ — UÓ-ter", es: "agua", ex: "A glass of water, please.", exEs: "Un vaso de agua, por favor." },
            { en: "to eat", ipa: "/iːt/", es: "comer", ex: "I eat at seven.", exEs: "Como a las siete." },
            { en: "to drink", ipa: "/drɪŋk/", es: "beber, tomar", ex: "What do you drink?", exEs: "¿Qué tomas?" },
            { en: "to work", ipa: "/wɜːrk/ — uerk", es: "trabajar", ex: "I work in an office.", exEs: "Trabajo en una oficina." },
            { en: "to live", ipa: "/lɪv/ — liv", es: "vivir", ex: "They live in Bogota.", exEs: "Viven en Bogotá." },
            { en: "music", ipa: "/ˈmjuːzɪk/ — MIÚ-sik", es: "música", ex: "I love music.", exEs: "Me encanta la música." },
            { en: "movie / film", ipa: "/ˈmuːvi/ — MÚ-vi", es: "película", ex: "Let's watch a movie.", exEs: "Veamos una película." },
            { en: "soccer / football", ipa: "/ˈsɑːkər/", es: "fútbol", ex: "I play soccer on Sundays.", exEs: "Juego fútbol los domingos." },
          ],
        },
      },

      {
        title: "Grammar — like, love, hate", titleEs: "Gramática · gustar, encantar, odiar",
        kind: "grammar", minutes: 14,
        html: `
<p>Aquí hay una diferencia de estructura con el español que, si la entiendes hoy, te ahorra años de frases raras.</p>

<div class="box gram"><div class="box-title">📐 En español "gustar" está al revés</div>
<p>Nosotros decimos "<strong>me</strong> gusta el café" — el café es el sujeto, es él quien "gusta a mí".
El inglés lo dice al derecho: <strong>yo</strong> gusto el café.</p>
<p style="font-size:19px;text-align:center;margin:12px 0">
Me gusta el café → <span class="en" data-say="I like coffee">I like coffee</span> 🔊</p>
<p>Por eso <span style="color:var(--red)">"Me like coffee"</span> es el error más frecuente del mundo hispano.
La persona que quiere algo va <strong>primero</strong> y es el sujeto normal: I like, you like, he likes.</p></div>

<h3>La escala completa</h3>
<table>
<tr><td><span class="en" data-say="I love it">I <strong>love</strong>…</span> 🔊</td><td>Me encanta</td></tr>
<tr><td><span class="en" data-say="I like it">I <strong>like</strong>…</span> 🔊</td><td>Me gusta</td></tr>
<tr><td><span class="en" data-say="I don't like it">I <strong>don't like</strong>…</span> 🔊</td><td>No me gusta</td></tr>
<tr><td><span class="en" data-say="I hate it">I <strong>hate</strong>…</span> 🔊</td><td>Odio / detesto</td></tr>
</table>

<h3>Y después del verbo: sustantivo o verbo con -ING</h3>
<ul>
<li>Con una cosa: <span class="en" data-say="I like music">I like music.</span> 🔊</li>
<li>Con una actividad: <span class="en" data-say="I like playing soccer">I like <strong>playing</strong> soccer.</span> 🔊
<span class="es-hint">Me gusta jugar fútbol.</span></li>
</ul>
<p>Fíjate: en español decimos "me gusta <em>jugar</em>" (infinitivo); en inglés se usa el verbo con <strong>-ing</strong>
después de like/love/hate. <span class="en">I like <strong>cooking</strong>, I hate <strong>waiting</strong></span>.</p>

<div class="box tip"><div class="box-title">Para responder cuando te preguntan por gustos</div>
<p><span class="en" data-say="Me too">Me too</span> 🔊 — yo también (cuando el otro dijo algo positivo)</p>
<p><span class="en" data-say="Me neither">Me neither</span> 🔊 — yo tampoco (cuando el otro dijo algo negativo)</p>
<p><span class="en" data-say="Really? I don't.">Really? I don't.</span> 🔊 — ¿en serio? yo no.</p></div>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "'Me gusta el café' se dice:", options: ["Me like coffee.", "I like coffee.", "It likes me coffee.", "Coffee likes me."], answer: 1, why: "La persona va primero: <strong>I like</strong>." },
            { q: "'Me gusta jugar fútbol' se dice:", options: ["I like play soccer.", "I like to playing soccer.", "I like playing soccer.", "Me like play soccer."], answer: 2, why: "Después de <em>like</em>, el verbo va con <strong>-ing</strong>." },
            { q: "'Me encanta la música' es:", options: ["I like music.", "I love music.", "I hate music.", "Music loves me."], answer: 1 },
            { q: "Someone says 'I don't like fish'. You agree. You say:", options: ["Me too.", "Me neither.", "I do too.", "Yes, I like."], answer: 1, why: "Frase negativa → <strong>Me neither</strong>." },
            { q: "Someone says 'I love coffee'. You agree. You say:", options: ["Me neither.", "Me too.", "I don't.", "Me also not."], answer: 1 },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take five. Think of three things you like and three you hate.">Take five. Think of three things you like and three you hate.</span> 🔊</p>
<p class="es-hint">Descansa cinco. Piensa en tres cosas que te gustan y tres que odias.</p>
<p>Dilas en voz alta cuando se te ocurran. El bloque que viene es el más denso del módulo — llega descansado.</p>`,
      },

      {
        title: "Grammar — DO and DOES", titleEs: "Gramática · el auxiliar DO (el bloque clave del módulo)",
        kind: "grammar", minutes: 20,
        html: `
<p>Este es <strong>el concepto que separa a quien "sabe algunas palabras" de quien habla inglés</strong>. Léelo con calma
porque no existe en español y por eso nadie lo aprende de oído.</p>

<div class="box gram"><div class="box-title">📐 El inglés necesita un ayudante para negar y preguntar</div>
<p>Con <em>to be</em> es fácil, porque el propio verbo se mueve: <em>I am → I am not → Am I?</em></p>
<p>Pero con <strong>cualquier otro verbo</strong> (like, eat, work, live, have…) el inglés <strong>no puede</strong>
negar ni preguntar solo. Necesita un auxiliar: <strong>DO</strong>. No significa nada por sí mismo aquí —
es un andamio gramatical.</p>
</div>

<table>
<tr><th></th><th>Afirmativo</th><th>Negativo</th><th>Pregunta</th></tr>
<tr><td>I / you / we / they</td><td>I <strong>like</strong> coffee.</td><td>I <strong>don't</strong> like coffee.</td><td><strong>Do</strong> you like coffee?</td></tr>
<tr><td>he / she / it</td><td>He <strong>likes</strong> coffee.</td><td>He <strong>doesn't</strong> like coffee.</td><td><strong>Does</strong> he like coffee?</td></tr>
</table>

<h3>Las tres cosas que hay que grabarse</h3>
<ol>
<li><strong>He, she, it → DOES.</strong> Todo lo demás → DO. Mismo patrón de siempre.</li>
<li><strong>Cuando aparece DOES, el verbo principal pierde la -s.</strong>
<span class="en">He like<strong>s</strong></span> → <span class="en">He <strong>doesn't</strong> like</span> (sin s).
La -s ya la lleva el auxiliar; ponerla dos veces es error.
<span style="color:var(--red)">"He doesn't likes"</span> ✗</li>
<li><strong>Las respuestas cortas usan el auxiliar, no el verbo.</strong>
<span class="en" data-say="Do you like coffee? Yes, I do.">— Do you like coffee? — Yes, I <strong>do</strong>.</span> 🔊
Nunca <span style="color:var(--red)">"Yes, I like"</span>.</li>
</ol>

<div class="box"><div class="box-title">Escúchalo entero</div>
<p style="margin:5px 0"><span class="en" data-say="Do you like coffee?">Do you like coffee?</span> 🔊 — <span class="en" data-say="Yes, I do.">Yes, I do.</span> 🔊</p>
<p style="margin:5px 0"><span class="en" data-say="Does she work here?">Does she work here?</span> 🔊 — <span class="en" data-say="No, she doesn't.">No, she doesn't.</span> 🔊</p>
<p style="margin:5px 0"><span class="en" data-say="Where do you live?">Where do you live?</span> 🔊 — <span class="en" data-say="I live in Bogota.">I live in Bogota.</span> 🔊</p>
<p style="margin:5px 0"><span class="en" data-say="What do you do?">What do you do?</span> 🔊 <span class="es-hint">— "¿a qué te dedicas?" Los dos <em>do</em> son distintos: el primero es el auxiliar, el segundo es el verbo "hacer".</span></p></div>

<div class="box warn"><div class="box-title">⚠️ Errores garantizados si no se practica</div>
<ol>
<li><span style="color:var(--red)">"I no like coffee"</span> ✗ → <span class="en">I <strong>don't</strong> like coffee</span> ✓.
En inglés no se niega con un "no" delante del verbo.</li>
<li><span style="color:var(--red)">"You like coffee?"</span> ✗ (con cara de pregunta) →
<span class="en"><strong>Do</strong> you like coffee?</span> ✓. Sin el auxiliar suena a extranjero desde la primera sílaba.</li>
<li><span style="color:var(--red)">"He doesn't likes"</span> ✗ → <span class="en">He doesn't <strong>like</strong></span> ✓.</li>
</ol></div>

<p>Este bloque es el que hay que dejar clavado. Diez frases:</p>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ like fish.", es: "No me gusta el pescado.", answer: "don't", alts: ["do not"], why: "I → <strong>don't</strong>. Nunca \"I no like\"." },
            { sentence: "She ___ like coffee.", es: "A ella no le gusta el café.", answer: "doesn't", alts: ["does not"], why: "She → <strong>doesn't</strong>." },
            { sentence: "___ you like music?", es: "¿Te gusta la música?", answer: "Do", alts: ["do"] },
            { sentence: "___ he work here?", es: "¿Él trabaja aquí?", answer: "Does", alts: ["does"] },
            { sentence: "He doesn't ___ meat.", es: "Él no come carne.", answer: "eat", hint: "Con doesn't, el verbo va sin -s.", why: "La -s ya la lleva <em>does</em>." },
            { sentence: "Where ___ you live?", es: "¿Dónde vives?", answer: "do" },
            { sentence: "— Do you like rice? — Yes, I ___.", es: "— ¿Te gusta el arroz? — Sí.", answer: "do", why: "La respuesta corta usa el auxiliar." },
            { sentence: "— Does she speak English? — No, she ___.", es: "— ¿Ella habla inglés? — No.", answer: "doesn't", alts: ["does not"] },
            { sentence: "They ___ live in Chile.", es: "Ellos no viven en Chile.", answer: "don't", alts: ["do not"] },
            { sentence: "What ___ you do?", es: "¿A qué te dedicas?", answer: "do", why: "El primero es auxiliar, el segundo es el verbo. Los dos se escriben igual." },
          ],
        },
      },

      {
        title: "✍️ The verb drill", titleEs: "Las planas · quinto día",
        kind: "drill", minutes: 12,
        html: `<p>Quinto día. Ya deberías estar cerca de las tres rondas perfectas. Si es así, mañana subimos la lista.</p>`,
        ex: { type: "verbdrill", verbs: [], reps: 3 },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Water. Then the speaking block.">Water. Then the speaking block.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — likes and questions", titleEs: "Pronunciación · gustos y preguntas con DO",
        kind: "speaking", minutes: 14,
        html: `<div class="box tip"><div class="box-title">Cómo suena DO en la vida real</div>
En el habla normal <em>Do you</em> no se pronuncia "du yu": se contrae a algo como <strong>"dyu"</strong> o incluso "ya".
<em>Do you like it?</em> suena "dyu-láik-it". Y <em>What do you do?</em> suena "uára-yu-du". Si esperas oír las
palabras separadas, no las vas a reconocer nunca. Escucha el audio varias veces antes de hablar.</div>`,
        ex: {
          type: "speak", target: 68,
          items: [
            { en: "I like coffee.", es: "Me gusta el café.", tip: "Nunca \"me like\"." },
            { en: "I don't like fish.", es: "No me gusta el pescado.", tip: "<em>don't</em> suena \"dont\", la t apenas se marca." },
            { en: "Do you like music?", es: "¿Te gusta la música?", tip: "\"Dyu láik miúsik\" — pregunta de sí/no, la voz sube. ↗" },
            { en: "She doesn't eat meat.", es: "Ella no come carne.", tip: "<em>doesn't</em> = \"dásent\". Y <em>eat</em> sin -s." },
            { en: "What do you do?", es: "¿A qué te dedicas?", tip: "Suena casi \"uára-yu-du\"." },
            { en: "Where do you live?", es: "¿Dónde vives?" },
            { en: "I love playing soccer.", es: "Me encanta jugar fútbol.", tip: "Verbo con -ing después de <em>love</em>." },
            { en: "Yes, I do. No, I don't.", es: "Sí. No.", tip: "Las respuestas cortas. Que salgan solas." },
          ],
        },
      },

      {
        title: "Your likes and dislikes", titleEs: "Tus gustos · producción propia",
        kind: "production", minutes: 10,
        html: `
<div class="box">
<p style="margin:6px 0"><span class="en">I love <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I like <em>___</em> and <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I don't like <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I hate <em>___ing</em>.</span> <span class="es-hint">(una actividad: waiting, cooking, driving…)</span></p>
<p style="margin:6px 0"><span class="en">My favorite food is <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">In my free time I like <em>___ing</em>.</span></p>
</div>
<h3>El reto de hoy: hazte una entrevista</h3>
<ol>
<li>Escribe <strong>cinco preguntas con Do you…?</strong> en el cuaderno. Ejemplo:
<em>Do you like coffee? Do you play soccer? Do you work on Saturdays?</em></li>
<li>Respóndetelas en voz alta con respuesta corta + explicación:
<em>Yes, I do. I drink coffee every morning.</em></li>
<li>Si tienes con quién, hazle las cinco preguntas a alguien. Si no, hazlas frente al espejo — funciona igual de bien
y es lo que hace todo el mundo que aprende solo.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Me gusta el café.", answer: "I like coffee" },
            { es: "No me gusta el pescado.", answer: "I do not like fish", alts: ["I don't like fish"] },
            { es: "¿Te gusta la música?", answer: "Do you like music", alts: ["Do you like music?"] },
            { es: "A ella no le gusta cocinar.", answer: "She does not like cooking", alts: ["She doesn't like cooking", "She doesn't like to cook", "She does not like to cook"] },
            { es: "Él no come carne.", answer: "He does not eat meat", alts: ["He doesn't eat meat"], why: "Con <em>doesn't</em>, el verbo va sin -s." },
            { es: "¿Dónde vives?", answer: "Where do you live", alts: ["Where do you live?"] },
            { es: "Me encanta jugar fútbol.", answer: "I love playing soccer", alts: ["I love playing football", "I love to play soccer"] },
            { es: "— ¿Trabajas los sábados? — No.", answer: "Do you work on Saturdays? No, I don't", alts: ["Do you work on Saturdays? No, I do not"] },
          ],
        },
      },

      {
        title: "🏁 Day 5 exam", titleEs: "Examen del día 5 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d5", shuffle: true,
          items: [
            { kind: "choice", q: "Which is CORRECT?", options: ["Me like coffee.", "I like coffee.", "I likes coffee.", "Me likes coffee."], answer: 1 },
            { kind: "choice", q: "I ___ like fish.", options: ["no", "not", "don't", "doesn't"], answer: 2 },
            { kind: "choice", q: "She ___ like coffee.", options: ["don't", "doesn't", "not", "isn't"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He doesn't likes meat.", "He doesn't like meat.", "He don't likes meat.", "He not like meat."], answer: 1, why: "Con <em>doesn't</em>, el verbo pierde la -s." },
            { kind: "choice", q: "— Do you like rice? — ___", options: ["Yes, I like.", "Yes, I am.", "Yes, I do.", "Yes, I does."], answer: 2 },
            { kind: "choice", q: "'Me gusta cocinar' es:", options: ["I like cook.", "I like to cooking.", "I like cooking.", "Me like cooking."], answer: 2 },
            { kind: "choice", q: "Someone says 'I don't like coffee'. You agree:", options: ["Me too.", "Me neither.", "I do too.", "Me also."], answer: 1 },
            { kind: "fill", sentence: "___ he work here?", es: "¿Él trabaja aquí?", answer: "Does" },
            { kind: "fill", sentence: "Where ___ you live?", es: "¿Dónde vives?", answer: "do" },
            { kind: "fill", sentence: "They ___ live in Peru.", es: "Ellos no viven en Perú.", answer: "don't", alts: ["do not"] },
            { kind: "dictation", en: "I don't like fish.", es: "No me gusta el pescado." },
            { kind: "dictation", en: "Do you like music?", es: "¿Te gusta la música?" },
            { kind: "translate", es: "Me encanta la comida italiana.", answer: "I love Italian food" },
            { kind: "translate", es: "Ella no habla español.", answer: "She does not speak Spanish", alts: ["She doesn't speak Spanish"] },
            { kind: "translate", es: "¿A qué te dedicas?", answer: "What do you do", alts: ["What do you do?"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 3,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Di diez frases con <em>I like</em> / <em>I don't like</em>. Diez, contadas con los dedos.</li>
<li>Convierte cinco de ellas en pregunta: <em>Do you like…?</em></li>
<li>Los doce verbos, una pasada.</li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 6 — el examen del módulo</div>
Repaso general de los cinco días y el <strong>examen grande del módulo 0</strong>: 30 preguntas.
No estudies nada esta noche más allá de la tarea: llegar descansado sube más la nota que repasar a última hora.
Está medido y es cierto.</div>
<p><span class="en" data-say="Five days in a row. One more and the module is yours.">Five days in a row. One more and the module is yours.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 6 — Review and module exam
     ============================================================ */

  const DAY6 = {
    id: "d6",
    title: "Day 6 · Review and big exam",
    titleEs: "Repaso general y examen del módulo 0",
    goal: "Consolidar los cinco días y aprobar el examen grande del módulo: 30 preguntas de todo lo visto.",
    canDo: [
      "…introduce myself, ask questions and describe people and places.",
      "…use <strong>to be</strong>, <strong>have/has</strong> and <strong>do/does</strong> without confusing them.",
      "…pass the module 0 exam with 80% or more.",
      "…hold a two-minute conversation about myself.",
    ],
    blocks: [
      {
        title: "The big picture — what you built this week", titleEs: "El mapa · lo que construiste en cinco días",
        kind: "review", minutes: 10,
        html: `
<p>Antes de repasar nada, mira lo que ya tienes. Hace cinco días no podías decir una frase completa.</p>
<table>
<tr><th>Día</th><th>Lo que te llevaste</th></tr>
<tr><td>1</td><td>El verbo <strong>to be</strong> (am/is/are) y presentarte</td></tr>
<tr><td>2</td><td>Números, la hora y las <strong>preguntas WH-</strong></td></tr>
<tr><td>3</td><td>Posesivos, el <strong>'s</strong>, plurales y <strong>have/has</strong></td></tr>
<tr><td>4</td><td><strong>There is / there are</strong>, artículos y preposiciones</td></tr>
<tr><td>5</td><td>Gustos y el auxiliar <strong>do/does</strong></td></tr>
</table>

<div class="box gram"><div class="box-title">📐 Los tres verbos que gobiernan todo — no los mezcles</div>
<p>Este es el resumen que vale por todo el módulo. Si distingues estos tres, ya no hablas como principiante:</p>
<table>
<tr><th></th><th>TO BE</th><th>HAVE</th><th>DO (auxiliar)</th></tr>
<tr><td>Para qué</td><td>ser / estar</td><td>tener</td><td>negar y preguntar con otros verbos</td></tr>
<tr><td>Afirmativo</td><td>I <strong>am</strong> tired</td><td>I <strong>have</strong> a car</td><td>I <strong>work</strong> here</td></tr>
<tr><td>Negativo</td><td>I <strong>am not</strong> tired</td><td>I <strong>don't have</strong> a car</td><td>I <strong>don't work</strong> here</td></tr>
<tr><td>Pregunta</td><td><strong>Are</strong> you tired?</td><td><strong>Do</strong> you have a car?</td><td><strong>Do</strong> you work here?</td></tr>
</table>
<p><strong>Fíjate en lo importante:</strong> <em>to be</em> se niega y pregunta solo. <em>Have</em> y todos los demás
verbos necesitan a <em>do</em>. Ese es el error que más se repite: decir
<span style="color:var(--red)">"Have you a car?"</span> o <span style="color:var(--red)">"I am work here"</span>.</p></div>

<div class="box"><div class="box-title">🗣️ Do this now</div>
Di en voz alta las tres filas de la tabla, las nueve frases, seguidas. Dos veces. Es el mejor repaso
de cinco días que existe y cuesta noventa segundos.</div>`,
      },

      {
        title: "Mixed review — grammar", titleEs: "Repaso mezclado · gramática",
        kind: "review", minutes: 20,
        html: `<p>Veinte preguntas de todo. Aquí lo importante <strong>no es acertar</strong>: es descubrir qué se te olvidó,
mientras todavía hay tiempo de repasarlo antes del examen.</p>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "I ___ a student.", options: ["am", "is", "are", "do"], answer: 0 },
            { q: "She ___ two children.", options: ["have", "has", "is", "does"], answer: 1 },
            { q: "___ you like coffee?", options: ["Are", "Is", "Do", "Does"], answer: 2 },
            { q: "___ you tired?", options: ["Do", "Does", "Are", "Have"], answer: 2, why: "Con adjetivos se usa <em>to be</em>, no <em>do</em>." },
            { q: "There ___ five people here.", options: ["is", "are", "have", "has"], answer: 1 },
            { q: "This is Ana. ___ brother is a doctor.", options: ["His", "Her", "Their", "Your"], answer: 1 },
            { q: "He ___ like meat.", options: ["don't", "doesn't", "isn't", "not"], answer: 1 },
            { q: "___ old are you?", options: ["What", "How", "Who", "Why"], answer: 1 },
            { q: "The plural of PERSON is…", options: ["persons", "people", "peoples", "person"], answer: 1 },
            { q: "I live in ___ apartment.", options: ["a", "an", "the", "some"], answer: 1 },
            { q: "The keys are ___ the table.", options: ["in", "on", "at", "into"], answer: 1 },
            { q: "Which is CORRECT?", options: ["I have 30 years.", "I am 30 years old.", "I have 30 years old.", "I am 30 years."], answer: 1 },
            { q: "Which is CORRECT?", options: ["Where you from?", "Where are you from?", "From where you are?", "You are from where?"], answer: 1 },
            { q: "Which is CORRECT?", options: ["The car of my father.", "My father car.", "My father's car.", "My fathers car."], answer: 2 },
            { q: "Which is CORRECT?", options: ["In my house have three rooms.", "There are three rooms in my house.", "Have three rooms in my house.", "It has three rooms there."], answer: 1 },
            { q: "Which is CORRECT?", options: ["I no like fish.", "I don't like fish.", "I not like fish.", "I doesn't like fish."], answer: 1 },
            { q: "Which is CORRECT?", options: ["He doesn't likes coffee.", "He doesn't like coffee.", "He don't like coffee.", "He not likes coffee."], answer: 1 },
            { q: "— Do you work here? — ___", options: ["Yes, I work.", "Yes, I am.", "Yes, I do.", "Yes, I does."], answer: 2 },
            { q: "'It's a quarter to seven' is…", options: ["7:15", "6:45", "7:45", "6:15"], answer: 1 },
            { q: "'Me gusta cocinar' es:", options: ["I like cook.", "I like cooking.", "Me like cooking.", "I like to cooking."], answer: 1 },
          ],
        },
      },

      {
        title: "Mixed review — listening", titleEs: "Repaso · escucha",
        kind: "listening", minutes: 14,
        html: `<p>Ocho dictados de todo el módulo. Sin mirar nada.</p>`,
        ex: {
          type: "dictation", shuffle: true,
          items: [
            { en: "My name is Ana and I am from Colombia.", es: "Me llamo Ana y soy de Colombia." },
            { en: "How old are you?", es: "¿Cuántos años tienes?" },
            { en: "There are three bedrooms in my house.", es: "Hay tres dormitorios en mi casa." },
            { en: "She doesn't like coffee.", es: "A ella no le gusta el café." },
            { en: "What time is it?", es: "¿Qué hora es?" },
            { en: "My brother has two children.", es: "Mi hermano tiene dos hijos." },
            { en: "Do you work on Saturdays?", es: "¿Trabajas los sábados?" },
            { en: "The keys are next to the door.", es: "Las llaves están al lado de la puerta." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Rest before the exam. Don't study now.">Rest before the exam. Don't study now.</span> 🔊</p>
<p class="es-hint">Descansa antes del examen. No estudies ahora.</p>
<p>En serio: repasar en los cinco minutos previos a un examen <strong>baja</strong> el rendimiento, no lo sube.
Levántate, camina, toma agua y vuelve.</p>`,
      },

      {
        title: "✍️ The verb drill — the big one", titleEs: "Planas · la lista ampliada",
        kind: "drill", minutes: 15,
        html: `<p>Sexto día, y hoy sube el nivel: a los doce de siempre se les suman <strong>seis más</strong>. Estos dieciocho
son los verbos irregulares que más aparecen en inglés real, y con ellos entras al módulo 1 con ventaja.</p>
<div class="box tip"><div class="box-title">Los seis nuevos</div>
give–gave · find–found · tell–told · become–became · leave–left · feel–felt</div>`,
        ex: {
          type: "verbdrill", reps: 3,
          verbs: [
            { base: "be", past: "was", alts: ["were", "was/were", "was / were"], es: "ser / estar" },
            { base: "have", past: "had", es: "tener / haber" },
            { base: "do", past: "did", es: "hacer" },
            { base: "say", past: "said", es: "decir" },
            { base: "go", past: "went", es: "ir" },
            { base: "get", past: "got", es: "conseguir / obtener" },
            { base: "make", past: "made", es: "hacer / fabricar" },
            { base: "know", past: "knew", es: "saber / conocer" },
            { base: "think", past: "thought", es: "pensar" },
            { base: "take", past: "took", es: "tomar / llevar" },
            { base: "see", past: "saw", es: "ver" },
            { base: "come", past: "came", es: "venir" },
            { base: "give", past: "gave", es: "dar" },
            { base: "find", past: "found", es: "encontrar" },
            { base: "tell", past: "told", es: "contar / decir a alguien" },
            { base: "become", past: "became", es: "convertirse en" },
            { base: "leave", past: "left", es: "irse / dejar" },
            { base: "feel", past: "felt", es: "sentir" },
          ],
        },
      },

      {
        title: "Speaking — two minutes about you", titleEs: "Habla · dos minutos sobre ti",
        kind: "speaking", minutes: 16,
        html: `
<p>El examen de verdad de este módulo no es el de opción múltiple: es este. <strong>Dos minutos hablando de ti sin parar</strong>,
juntando todo lo de la semana.</p>
<div class="box"><div class="box-title">El guion (no lo leas mientras hablas — memoriza el orden)</div>
<ol>
<li>Saludo y nombre · <em>Hello, my name is…</em></li>
<li>Edad, país, ciudad · <em>I am… I am from… I live in…</em></li>
<li>Trabajo · <em>I am a…</em></li>
<li>Familia · <em>I have… My mother's name is…</em></li>
<li>Tu casa · <em>There are… In my bedroom there is…</em></li>
<li>Gustos · <em>I like… I don't like… I love…</em></li>
<li>Cierre · <em>I am learning English. Nice to meet you!</em></li>
</ol></div>
<h3>Cómo hacerlo</h3>
<ol>
<li>Cronómetro en <strong>dos minutos</strong>. Grábate con el celular.</li>
<li>Habla sin parar. Si te trabas: repite la última frase y sigue. <strong>No pares y no cambies al español.</strong></li>
<li>Escúchate. Anota tres errores que te oigas. No más de tres.</li>
<li>Vuelve a grabarlo intentando arreglar esos tres.</li>
<li>Guarda la segunda grabación junto a la del día 1. Compáralas: en seis días la diferencia se oye.</li>
</ol>
<p>Y ahora el micrófono, con las frases clave de toda la semana:</p>`,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "Hello, my name is Andres. I am thirty years old.", es: "Hola, me llamo Andrés. Tengo treinta años." },
            { en: "I am from Colombia and I live in Bogota.", es: "Soy de Colombia y vivo en Bogotá." },
            { en: "I have two brothers and one sister.", es: "Tengo dos hermanos y una hermana." },
            { en: "There are four rooms in my house.", es: "Hay cuatro cuartos en mi casa." },
            { en: "I like music, but I don't like fish.", es: "Me gusta la música, pero no me gusta el pescado." },
            { en: "What do you do? Where do you live?", es: "¿A qué te dedicas? ¿Dónde vives?" },
            { en: "I am learning English. Nice to meet you!", es: "Estoy aprendiendo inglés. ¡Mucho gusto!" },
          ],
        },
      },

      {
        title: "🏆 MODULE 0 EXAM", titleEs: "Examen del módulo 0 · 30 preguntas · 80% para aprobar",
        kind: "big exam", minutes: 30,
        html: `
<p>Treinta preguntas de los seis días: gramática, vocabulario, escucha y traducción, todo mezclado y en orden aleatorio.
<strong>80% para aprobar</strong> — o sea 24 de 30.</p>
<div class="box tip"><div class="box-title">Cómo dar este examen</div>
<ul>
<li>Sin mirar apuntes. Si no sabes una, contesta lo que te parezca y sigue: no te quedes atascado.</li>
<li>Si sacas menos de 80%, <strong>repítelo hasta aprobarlo</strong>. Repetir un examen enseña más que releer la lección
— la recuperación activa es la técnica de estudio con más evidencia que existe.</li>
<li>Cuando lo apruebes, marca el día como completado y el módulo 0 queda cerrado.</li>
</ul></div>`,
        ex: {
          type: "exam", pass: 80, dayId: "d6", shuffle: true,
          items: [
            { kind: "choice", q: "I ___ from Peru.", options: ["is", "am", "are", "do"], answer: 1 },
            { kind: "choice", q: "They ___ at home.", options: ["is", "am", "are", "has"], answer: 2 },
            { kind: "choice", q: "___ she a teacher?", options: ["Do", "Does", "Is", "Has"], answer: 2 },
            { kind: "choice", q: "My sister ___ a car.", options: ["have", "has", "is", "does"], answer: 1 },
            { kind: "choice", q: "___ you have a car?", options: ["Are", "Is", "Do", "Have"], answer: 2, why: "<em>Have</em> necesita el auxiliar <em>do</em> para preguntar." },
            { kind: "choice", q: "He ___ like coffee.", options: ["don't", "doesn't", "isn't", "not"], answer: 1 },
            { kind: "choice", q: "There ___ six chairs.", options: ["is", "are", "have", "has"], answer: 1 },
            { kind: "choice", q: "___ is your birthday?", options: ["What", "Where", "When", "Who"], answer: 2 },
            { kind: "choice", q: "___ much is it?", options: ["What", "How", "Who", "Why"], answer: 1 },
            { kind: "choice", q: "This is Luis. ___ sister is a nurse.", options: ["Her", "His", "Their", "Its"], answer: 1 },
            { kind: "choice", q: "The plural of WOMAN is…", options: ["womans", "women", "womens", "womanes"], answer: 1 },
            { kind: "choice", q: "The plural of CHILD is…", options: ["childs", "children", "childes", "childrens"], answer: 1 },
            { kind: "choice", q: "I live in ___ house.", options: ["a", "an", "some", "any"], answer: 0 },
            { kind: "choice", q: "It's ___ hour.", options: ["a", "an", "the", "some"], answer: 1 },
            { kind: "choice", q: "The picture is ___ the wall.", options: ["in", "on", "under", "into"], answer: 1 },
            { kind: "choice", q: "'It's a quarter past nine' is…", options: ["8:45", "9:15", "9:45", "8:15"], answer: 1 },
            { kind: "choice", q: "PARENTS means…", options: ["parientes", "padres", "abuelos", "primos"], answer: 1 },
            { kind: "choice", q: "It's 9 p.m. and you are leaving. You say:", options: ["Good evening.", "Good night.", "Good morning.", "Good afternoon."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I no like fish.", "I don't like fish.", "I not like fish.", "I doesn't like fish."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He doesn't likes meat.", "He doesn't like meat.", "He don't likes meat.", "He no like meat."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["In my house have two rooms.", "There are two rooms in my house.", "Have two rooms in my house.", "It there has two rooms."], answer: 1 },
            { kind: "fill", sentence: "___ are you from?", es: "¿De dónde eres?", answer: "Where" },
            { kind: "fill", sentence: "We ___ ready.", es: "Estamos listos.", answer: "are" },
            { kind: "fill", sentence: "People ___ friendly here.", es: "La gente es amable aquí.", answer: "are" },
            { kind: "fill", sentence: "The past of THINK is ___.", es: "El pasado de think.", answer: "thought" },
            { kind: "fill", sentence: "The past of COME is ___.", es: "El pasado de come.", answer: "came" },
            { kind: "dictation", en: "I am thirty years old.", es: "Tengo treinta años." },
            { kind: "dictation", en: "Where do you live?", es: "¿Dónde vives?" },
            { kind: "translate", es: "Este es el carro de mi hermano.", answer: "This is my brother's car" },
            { kind: "translate", es: "No hay leche en la nevera.", answer: "There is not any milk in the fridge", alts: ["There isn't any milk in the fridge", "There is no milk in the fridge", "There's no milk in the fridge"] },
          ],
        },
      },

      {
        title: "🎉 Module 0 complete", titleEs: "Módulo 0 completado · lo que viene",
        kind: "wrap-up", minutes: 5,
        html: `
<p>Seis días. Si aprobaste el examen, esto es lo que sabes hacer y no sabías el lunes:</p>
<ul>
<li>Presentarte completo y sostener un intercambio de preguntas y respuestas.</li>
<li>Manejar los <strong>tres verbos que gobiernan el inglés cotidiano</strong>: to be, have, do.</li>
<li>Números, hora, familia, casa, comida y gustos: unas 90 palabras nuevas.</li>
<li>El pasado de 18 verbos irregulares.</li>
</ul>
<p>Eso ya es, técnicamente, un <strong>A1 sólido</strong>. La mayoría de la gente que "lleva años intentándolo"
no distingue <em>do</em> de <em>be</em>, y tú lo hiciste en una semana porque fuiste en orden.</p>

<div class="box tip"><div class="box-title">📅 Lo que viene: el módulo 1</div>
<strong>Your daily life</strong> — el presente simple: hablar de tu rutina, la temida <em>-s</em> de la tercera persona
(<em>he work<strong>s</strong></em>), los adverbios de frecuencia (<em>always, usually, never</em>) y los días de la semana.
Ahí desbloqueas el <strong>hito 2 del camino</strong>: contar tu día entero en inglés.</div>

<div class="box warn"><div class="box-title">💾 Antes de cerrar: respalda</div>
Llevas una semana de trabajo guardada solo en este navegador. Ve a <strong>Progress → Copiar código de progreso</strong>
y guárdalo en tus notas o mándatelo por WhatsApp. Treinta segundos ahora te ahorran repetir una semana entera.</div>

<p><span class="en" data-say="One week. You are not a beginner anymore. See you in module one.">One week. You are not a beginner anymore. See you in module one.</span> 🔊
<span class="es-hint">Una semana. Ya no eres principiante. Nos vemos en el módulo uno.</span></p>`,
      },
    ],
  };

  window.DAYS_M0 = (window.DAYS_M0 || []).concat([DAY4, DAY5, DAY6]);
})();
