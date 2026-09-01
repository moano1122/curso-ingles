/* ============================================================
   Módulo 1 · Días 10, 11 y 12
   ============================================================ */

(function () {
  "use strict";

  const V = window.VERB_LISTS;

  const THIRD_DRILL = {
    type: "verbdrill", verbs: V.third, reps: 3, field: "third",
    headers: ["Base form", "He / she / it", "Español y regla"],
    placeholder: "he...",
    prompt: "Escribe la forma de <strong>he / she / it</strong> de cada verbo.",
    done: "Un día más. Esta plana se queda contigo hasta el final del módulo.",
  };

  /* ============================================================
     DAY 10 — Always, usually, never
     ============================================================ */

  const DAY10 = {
    id: "d10",
    title: "Day 10 · Always, usually, never",
    titleEs: "Adverbios de frecuencia y los días de la semana",
    goal: "Tu rutina deja de ser una lista y empieza a sonar a persona: con qué frecuencia haces cada cosa y qué días.",
    canDo: [
      "…use <strong>always, usually, often, sometimes, never</strong> in the right position.",
      "…say the days of the week and use <em>on Mondays</em>.",
      "…ask and answer <strong>How often…?</strong>",
      "…say <em>once a week, twice a month, three times a year</em>.",
    ],
    blocks: [
      {
        title: "Warm-up — do and does", titleEs: "Calentamiento · repaso del día 9",
        kind: "review", minutes: 7,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "He ___ live here.", options: ["don't", "doesn't", "not", "isn't"], answer: 1 },
            { q: "___ she work on Saturdays?", options: ["Do", "Does", "Is", "Has"], answer: 1 },
            { q: "Which is CORRECT?", options: ["He doesn't works.", "He doesn't work.", "He don't work.", "He no works."], answer: 1 },
            { q: "___ you tired?", options: ["Do", "Does", "Are", "Have"], answer: 2, why: "Adjetivo detrás → <em>to be</em>." },
            { q: "— Does he speak English? — ___", options: ["Yes, he speaks.", "Yes, he does.", "Yes, he is.", "Yes, he do."], answer: 1 },
            { q: "She doesn't ___ a car.", options: ["has", "have", "haves", "having"], answer: 1 },
          ],
        },
      },

      {
        title: "Vocabulary — days and time expressions", titleEs: "Vocabulario · los días y las expresiones de frecuencia",
        kind: "vocabulary", minutes: 12,
        html: `<div class="box tip"><div class="box-title">Los días van SIEMPRE con mayúscula</div>
En inglés los días de la semana y los meses se escriben con mayúscula inicial: <em>Monday</em>, no "monday".
En español no, y por eso se olvida constantemente. Lo mismo con los idiomas y nacionalidades:
<em>English, Spanish, Colombian</em>.</div>`,
        ex: {
          type: "flashcards",
          items: [
            { en: "Monday", ipa: "/ˈmʌndeɪ/ — MÁN-dei", es: "lunes", ex: "I start work on Monday.", exEs: "Empiezo a trabajar el lunes." },
            { en: "Tuesday", ipa: "/ˈtuːzdeɪ/ — TIÚS-dei", es: "martes", ex: "We have a meeting on Tuesday.", exEs: "Tenemos reunión el martes." },
            { en: "Wednesday", ipa: "/ˈwenzdeɪ/ — UÉNS-dei", es: "miércoles (la D no se pronuncia)", ex: "I study English on Wednesdays.", exEs: "Estudio inglés los miércoles." },
            { en: "Thursday", ipa: "/ˈθɜːrzdeɪ/ — ZÉRS-dei", es: "jueves", ex: "See you on Thursday.", exEs: "Nos vemos el jueves." },
            { en: "Friday", ipa: "/ˈfraɪdeɪ/ — FRÁI-dei", es: "viernes", ex: "I finish early on Fridays.", exEs: "Termino temprano los viernes." },
            { en: "Saturday", ipa: "/ˈsætərdeɪ/ — SÁ-ter-dei", es: "sábado", ex: "I don't work on Saturdays.", exEs: "No trabajo los sábados." },
            { en: "Sunday", ipa: "/ˈsʌndeɪ/ — SÁN-dei", es: "domingo", ex: "I rest on Sundays.", exEs: "Descanso los domingos." },
            { en: "weekend", ipa: "/ˈwiːkend/ — UÍK-end", es: "fin de semana", ex: "What do you do on weekends?", exEs: "¿Qué haces los fines de semana?" },
            { en: "always", ipa: "/ˈɔːlweɪz/ — ÓL-ueis", es: "siempre (100%)", ex: "I always drink coffee.", exEs: "Siempre tomo café." },
            { en: "usually", ipa: "/ˈjuːʒuəli/ — IÚ-shu-a-li", es: "normalmente (80%)", ex: "I usually get up at six.", exEs: "Normalmente me levanto a las seis." },
            { en: "often", ipa: "/ˈɔːfən/ — Ó-fen", es: "a menudo (60%)", ex: "We often eat out.", exEs: "A menudo comemos fuera." },
            { en: "sometimes", ipa: "/ˈsʌmtaɪmz/ — SÁM-taims", es: "a veces (40%)", ex: "I sometimes work late.", exEs: "A veces trabajo hasta tarde." },
            { en: "hardly ever", ipa: "/ˈhɑːrdli ˈevər/", es: "casi nunca (10%)", ex: "He hardly ever calls.", exEs: "Él casi nunca llama." },
            { en: "never", ipa: "/ˈnevər/ — NÉ-ver", es: "nunca (0%)", ex: "I never smoke.", exEs: "Nunca fumo." },
            { en: "once a week", ipa: "/wʌns ə wiːk/ — uáns", es: "una vez por semana", ex: "I go to the gym once a week.", exEs: "Voy al gimnasio una vez por semana." },
          ],
        },
      },

      {
        title: "Grammar — where the adverb goes", titleEs: "Gramática · la posición del adverbio (aquí está la trampa)",
        kind: "grammar", minutes: 17,
        html: `
<p>Los adverbios de frecuencia son fáciles de aprender y difíciles de <em>colocar</em>, porque su sitio en inglés
<strong>no es el mismo que en español</strong>.</p>

<div class="box gram"><div class="box-title">📐 La regla de oro</div>
<p style="font-size:19px;text-align:center;margin:10px 0">
El adverbio va <strong>ANTES del verbo</strong>…<br>
…pero <strong>DESPUÉS de <em>to be</em></strong>.</p>
<table>
<tr><th>Verbo normal → antes</th><th>Verbo TO BE → después</th></tr>
<tr><td><span class="en" data-say="I always drink coffee">I <strong>always</strong> drink coffee.</span> 🔊</td><td><span class="en" data-say="I am always tired">I am <strong>always</strong> tired.</span> 🔊</td></tr>
<tr><td><span class="en" data-say="She never works on Sundays">She <strong>never</strong> works on Sundays.</span> 🔊</td><td><span class="en" data-say="She is never late">She is <strong>never</strong> late.</span> 🔊</td></tr>
<tr><td><span class="en" data-say="We usually have dinner at eight">We <strong>usually</strong> have dinner at eight.</span> 🔊</td><td><span class="en" data-say="They are usually at home">They are <strong>usually</strong> at home.</span> 🔊</td></tr>
</table>
<p>En español decimos "yo tomo café <em>siempre</em>" o "<em>siempre</em> tomo café" — nos da igual.
En inglés <span style="color:var(--red)">"I drink always coffee"</span> suena mal de inmediato.
El adverbio se mete <strong>entre el sujeto y el verbo</strong>.</p></div>

<h3>Y con el auxiliar, va después</h3>
<p>En negativos: <span class="en" data-say="I don't usually work on Saturdays">I don't <strong>usually</strong> work on Saturdays.</span> 🔊</p>

<h3>La excepción de <em>sometimes</em></h3>
<p><strong>Sometimes</strong> es más libre: puede ir al principio de la frase, y suena muy natural.
<span class="en" data-say="Sometimes I work late">Sometimes I work late.</span> 🔊 ·
<span class="en" data-say="I sometimes work late">I sometimes work late.</span> 🔊 — las dos valen.
Los demás adverbios no: <span style="color:var(--red)">"Always I drink coffee"</span> ✗.</p>

<div class="box warn"><div class="box-title">⚠️ Never ya es negativo — no lo dobles</div>
<p>En español decimos "<strong>no</strong> voy <strong>nunca</strong>" con doble negación. En inglés eso está prohibido:</p>
<p><span style="color:var(--red)">"I don't never go"</span> ✗ → <span class="en">I <strong>never</strong> go</span> ✓</p>
<p><em>Never</em> ya significa "nunca", así que la frase va en <strong>afirmativo</strong>.
Y ojo: <span class="en">He never works</span> — con <em>he</em> la -s sigue estando, porque la frase es afirmativa.</p></div>

<h3>How often…? — con qué frecuencia</h3>
<p><span class="en" data-say="How often do you go to the gym?">How often do you go to the gym?</span> 🔊</p>
<p>Se responde con un adverbio o con una expresión de veces:</p>
<table>
<tr><td><span class="en">once a week</span></td><td>una vez por semana</td></tr>
<tr><td><span class="en">twice a week</span></td><td>dos veces por semana <span class="es-hint">(¡no "two times"!)</span></td></tr>
<tr><td><span class="en">three times a week</span></td><td>tres veces por semana</td></tr>
<tr><td><span class="en">every day / every month</span></td><td>todos los días / todos los meses</td></tr>
</table>
<div class="box tip"><div class="box-title">Once y twice</div>
"Una vez" y "dos veces" tienen palabra propia: <strong>once</strong> y <strong>twice</strong>.
A partir de tres se usa <em>times</em>: <em>three times, four times…</em> Decir "two times" se entiende
pero suena a principiante.</div>

<h3>Los días con ON y con -S</h3>
<p><span class="en">on Monday</span> = el lunes (uno concreto) · <span class="en">on Mondays</span> = los lunes (todas las semanas).
Esa -s del plural es la que convierte un día suelto en una costumbre.</p>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ drink coffee in the morning. (always)", es: "Siempre tomo café por la mañana.", answer: "always", why: "Antes del verbo: <em>I always drink</em>." },
            { sentence: "She is ___ late. (never)", es: "Ella nunca llega tarde.", answer: "never", why: "Con <em>to be</em>, el adverbio va después." },
            { sentence: "We ___ have dinner at eight. (usually)", es: "Normalmente cenamos a las ocho.", answer: "usually" },
            { sentence: "He ___ works on Sundays. (never)", es: "Él nunca trabaja los domingos.", answer: "never", hint: "¿La frase es afirmativa o negativa?", why: "Con <em>never</em> la frase va en afirmativo, y la -s se queda." },
            { sentence: "I go to the gym ___ a week. (una vez)", es: "Voy al gimnasio una vez por semana.", answer: "once" },
            { sentence: "I go to the gym ___ a week. (dos veces)", es: "Voy al gimnasio dos veces por semana.", answer: "twice", why: "No \"two times\"." },
            { sentence: "How ___ do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?", answer: "often" },
            { sentence: "I don't work ___ Saturdays.", es: "No trabajo los sábados.", answer: "on" },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Say the days of the week out loud. Then backwards.">Say the days of the week out loud. Then backwards.</span> 🔊</p>
<p class="es-hint">Di los días de la semana en voz alta. Luego al revés.</p>
<p>Ojo con <strong>Wednesday</strong>: se dice "UÉNS-dei", la <em>d</em> del medio no se pronuncia. Es la palabra
que más se falla de las siete.</p>`,
      },

      {
        title: "Build with adverbs", titleEs: "Arma frases con adverbios",
        kind: "grammar", minutes: 10,
        ex: {
          type: "build",
          items: [
            { es: "Siempre tomo café por la mañana.", answer: "I always drink coffee in the morning", extra: ["am", "on"] },
            { es: "Ella nunca llega tarde.", answer: "She is never late", extra: ["doesn't", "not"], why: "Con <em>to be</em>, el adverbio va después del verbo." },
            { es: "Normalmente nos levantamos a las seis.", answer: "We usually get up at six", extra: ["are", "on"] },
            { es: "Él nunca trabaja los domingos.", answer: "He never works on Sundays", extra: ["doesn't", "work"], why: "Afirmativo + never, y la -s se queda." },
            { es: "A veces trabajo hasta tarde.", answer: "Sometimes I work late", alts: ["I sometimes work late"], extra: ["am", "the"] },
            { es: "Voy al gimnasio dos veces por semana.", answer: "I go to the gym twice a week", extra: ["once", "times"] },
          ],
        },
      },

      {
        title: "✍️ The -S drill", titleEs: "Plana de la tercera persona · tercer día",
        kind: "drill", minutes: 12,
        html: `<p>Tercer día con esta plana. Deberías estar acercándote a las tres rondas perfectas.</p>`,
        ex: THIRD_DRILL,
      },

      {
        title: "Listening — how often", titleEs: "Escucha · frecuencia",
        kind: "listening", minutes: 11,
        ex: {
          type: "dictation",
          items: [
            { en: "I always have breakfast at seven.", es: "Siempre desayuno a las siete." },
            { en: "She never works on Sundays.", es: "Ella nunca trabaja los domingos." },
            { en: "We usually go out on Fridays.", es: "Normalmente salimos los viernes." },
            { en: "How often do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?" },
            { en: "I go there twice a week.", es: "Voy allí dos veces por semana." },
            { en: "He is always tired in the morning.", es: "Él siempre está cansado por la mañana." },
            { en: "Sometimes I work late.", es: "A veces trabajo hasta tarde." },
            { en: "I don't usually eat meat.", es: "Normalmente no como carne." },
          ],
        },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Three minutes, then we speak.">Three minutes, then we speak.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — frequency", titleEs: "Pronunciación · frecuencia y días",
        kind: "speaking", minutes: 14,
        html: `<div class="box tip"><div class="box-title">Las tres palabras difíciles de hoy</div>
<strong>Wednesday</strong> = "UÉNS-dei" (sin la d del medio) · <strong>usually</strong> = "IÚ-shu-a-li" (cuatro sílabas,
con sonido de "sh") · <strong>often</strong> = "Ó-fen", la t normalmente no se pronuncia.</div>`,
        ex: {
          type: "speak", target: 68,
          items: [
            { en: "I always drink coffee in the morning.", es: "Siempre tomo café por la mañana." },
            { en: "I usually get up at six thirty.", es: "Normalmente me levanto a las seis y media.", tip: "<em>usually</em> = \"IÚ-shu-a-li\"." },
            { en: "She never works on Sundays.", es: "Ella nunca trabaja los domingos." },
            { en: "I study English on Wednesdays.", es: "Estudio inglés los miércoles.", tip: "\"UÉNS-deis\", sin la d del medio." },
            { en: "How often do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?" },
            { en: "I go to the gym twice a week.", es: "Voy al gimnasio dos veces por semana." },
            { en: "Sometimes I work late.", es: "A veces trabajo hasta tarde." },
            { en: "He is always late for work.", es: "Él siempre llega tarde al trabajo." },
          ],
        },
      },

      {
        title: "Your week", titleEs: "Tu semana · producción propia",
        kind: "production", minutes: 11,
        html: `
<p>Ayer contaste un día. Hoy cuentas <strong>una semana</strong>, que es donde entran los adverbios.</p>
<div class="box">
<p style="margin:6px 0"><span class="en">I always <em>___</em> in the morning.</span></p>
<p style="margin:6px 0"><span class="en">I usually <em>___</em> at <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I sometimes <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I hardly ever <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I never <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">On Mondays I <em>___</em>. On weekends I <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I go to <em>___</em> once / twice a week.</span></p>
</div>
<h3>El reto: la tabla de la semana</h3>
<ol>
<li>Dibuja en el cuaderno una tabla de siete columnas, una por día, con los nombres <strong>en inglés</strong>.</li>
<li>Escribe en cada una qué haces ese día. En inglés, frases cortas.</li>
<li>Cuéntala en voz alta, de lunes a domingo, usando adverbios: <em>On Mondays I usually…</em></li>
<li>Grábate. Y luego escúchate contando <strong>cuántos adverbios usaste</strong>: si son menos de cinco, repítelo.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Siempre tomo café por la mañana.", answer: "I always drink coffee in the morning", alts: ["I always have coffee in the morning"] },
            { es: "Ella nunca llega tarde.", answer: "She is never late" },
            { es: "Normalmente cenamos a las ocho.", answer: "We usually have dinner at eight" },
            { es: "Él casi nunca me llama.", answer: "He hardly ever calls me" },
            { es: "Voy al gimnasio tres veces por semana.", answer: "I go to the gym three times a week" },
            { es: "¿Con qué frecuencia ves televisión?", answer: "How often do you watch TV", alts: ["How often do you watch TV?", "How often do you watch television"] },
            { es: "No trabajo los fines de semana.", answer: "I do not work on weekends", alts: ["I don't work on weekends", "I don't work on the weekends"] },
            { es: "A veces estudio de noche.", answer: "Sometimes I study at night", alts: ["I sometimes study at night"] },
          ],
        },
      },

      {
        title: "🏁 Day 10 exam", titleEs: "Examen del día 10 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d10", shuffle: true,
          items: [
            { kind: "choice", q: "Which is CORRECT?", options: ["I drink always coffee.", "I always drink coffee.", "Always I drink coffee.", "I drink coffee always."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["She never is late.", "She is never late.", "She is not never late.", "Never she is late."], answer: 1, why: "Con <em>to be</em>, el adverbio va después." },
            { kind: "choice", q: "Which is CORRECT?", options: ["I don't never go there.", "I never go there.", "I never don't go there.", "I not never go there."], answer: 1, why: "Nada de doble negación en inglés." },
            { kind: "choice", q: "'Dos veces por semana' es…", options: ["two times a week", "twice a week", "second a week", "two a week"], answer: 1 },
            { kind: "choice", q: "'Una vez al mes' es…", options: ["one time a month", "once a month", "first a month", "one a month"], answer: 1 },
            { kind: "choice", q: "'Miércoles' se escribe…", options: ["Wenesday", "Wednesday", "Wendsday", "Wednsday"], answer: 1 },
            { kind: "choice", q: "How do you write the days of the week?", qEs: "¿Cómo se escriben los días?", options: ["monday, tuesday…", "Monday, Tuesday…", "MONDAY, TUESDAY…", "da igual"], answer: 1, why: "Siempre con mayúscula inicial." },
            { kind: "choice", q: "He ___ works on Sundays. (never)", options: ["never", "doesn't never", "not never", "never doesn't"], answer: 0 },
            { kind: "fill", sentence: "How ___ do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?", answer: "often" },
            { kind: "fill", sentence: "I ___ get up at six. (normalmente)", es: "Normalmente me levanto a las seis.", answer: "usually" },
            { kind: "fill", sentence: "I don't work ___ weekends.", es: "No trabajo los fines de semana.", answer: "on" },
            { kind: "fill", sentence: "The third person of GO is ___.", es: "La forma de he/she de go.", answer: "goes" },
            { kind: "dictation", en: "She never works on Sundays.", es: "Ella nunca trabaja los domingos." },
            { kind: "dictation", en: "I go to the gym twice a week.", es: "Voy al gimnasio dos veces por semana." },
            { kind: "translate", es: "Él siempre está cansado.", answer: "He is always tired" },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 4,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Los siete días de la semana, en voz alta, dos veces. Cuidado con Wednesday.</li>
<li>Cinco frases con adverbio de frecuencia, colocándolo bien.</li>
<li>La regla, en voz alta: <em>"Antes del verbo, después de to be."</em></li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 11</div>
El trabajo y los estudios: vocabulario de oficios y lugares, y cómo describir a qué te dedicas de verdad —
más allá de <em>I am an engineer</em>.</div>
<p><span class="en" data-say="Ten days in a row. Double digits.">Ten days in a row. Double digits.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 11 — Work and study
     ============================================================ */

  const DAY11 = {
    id: "d11",
    title: "Day 11 · Work and study",
    titleEs: "El trabajo, los estudios y hablar de lo que haces",
    goal: "Poder explicar a qué te dedicas de verdad: dónde trabajas, qué haces exactamente, con quién y desde cuándo.",
    canDo: [
      "…answer <em>What do you do?</em> with more than three words.",
      "…name 15 jobs and workplaces.",
      "…use <strong>work as / work for / work in</strong> correctly.",
      "…talk about what I am studying and why.",
    ],
    blocks: [
      {
        title: "Warm-up — frequency", titleEs: "Calentamiento · repaso del día 10",
        kind: "review", minutes: 7,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "Which is CORRECT?", options: ["I drink always coffee.", "I always drink coffee.", "Always I drink coffee.", "I am always drink coffee."], answer: 1 },
            { q: "She ___ late. (never / to be)", options: ["never is", "is never", "doesn't never is", "is not never"], answer: 1 },
            { q: "'Dos veces por semana' es…", options: ["two times a week", "twice a week", "twice the week", "two a week"], answer: 1 },
            { q: "How ___ do you travel?", options: ["much", "many", "often", "long"], answer: 2 },
            { q: "I don't work ___ Saturdays.", options: ["in", "at", "on", "by"], answer: 2 },
            { q: "The past of RUN is…", options: ["runned", "ran", "run", "rune"], answer: 1 },
          ],
        },
      },

      {
        title: "Vocabulary — jobs and workplaces", titleEs: "Vocabulario · oficios y lugares de trabajo",
        kind: "vocabulary", minutes: 12,
        ex: {
          type: "flashcards",
          items: [
            { en: "job", ipa: "/dʒɑːb/ — yob", es: "empleo, puesto concreto", ex: "I have a good job.", exEs: "Tengo un buen empleo." },
            { en: "work", ipa: "/wɜːrk/ — uerk", es: "trabajo (en general) / trabajar", ex: "I have a lot of work today.", exEs: "Tengo mucho trabajo hoy." },
            { en: "office", ipa: "/ˈɔːfɪs/ — Ó-fis", es: "oficina", ex: "I work in an office.", exEs: "Trabajo en una oficina." },
            { en: "company", ipa: "/ˈkʌmpəni/ — CÁM-pa-ni", es: "empresa", ex: "I work for a big company.", exEs: "Trabajo para una empresa grande." },
            { en: "boss", ipa: "/bɔːs/ — bos", es: "jefe", ex: "My boss is very nice.", exEs: "Mi jefe es muy amable." },
            { en: "colleague", ipa: "/ˈkɑːliːɡ/ — CÁ-lig", es: "compañero de trabajo", ex: "My colleagues are friendly.", exEs: "Mis compañeros son amables." },
            { en: "customer", ipa: "/ˈkʌstəmər/ — CÁS-to-mer", es: "cliente", ex: "I talk to customers every day.", exEs: "Hablo con clientes todos los días." },
            { en: "meeting", ipa: "/ˈmiːtɪŋ/ — MÍ-ting", es: "reunión", ex: "I have a meeting at ten.", exEs: "Tengo una reunión a las diez." },
            { en: "salary", ipa: "/ˈsæləri/ — SÁ-la-ri", es: "sueldo", ex: "The salary is good.", exEs: "El sueldo es bueno." },
            { en: "nurse", ipa: "/nɜːrs/ — ners", es: "enfermero/a", ex: "She is a nurse at the hospital.", exEs: "Ella es enfermera en el hospital." },
            { en: "accountant", ipa: "/əˈkaʊntənt/ — a-CÁUN-tant", es: "contador/a", ex: "He works as an accountant.", exEs: "Él trabaja como contador." },
            { en: "salesperson", ipa: "/ˈseɪlzpɜːrsən/", es: "vendedor/a", ex: "I work as a salesperson.", exEs: "Trabajo como vendedor." },
            { en: "mechanic", ipa: "/məˈkænɪk/ — me-CÁ-nik", es: "mecánico", ex: "My uncle is a mechanic.", exEs: "Mi tío es mecánico." },
            { en: "unemployed", ipa: "/ˌʌnɪmˈplɔɪd/", es: "desempleado", ex: "He is unemployed right now.", exEs: "Está desempleado ahora mismo." },
            { en: "self-employed", ipa: "/ˌself ɪmˈplɔɪd/", es: "trabajador independiente", ex: "I am self-employed.", exEs: "Trabajo por mi cuenta." },
          ],
        },
      },

      {
        title: "Match — the workplace", titleEs: "Empareja el vocabulario del trabajo",
        kind: "vocabulary", minutes: 5,
        ex: {
          type: "match",
          pairs: [
            ["boss", "jefe"], ["colleague", "compañero de trabajo"], ["customer", "cliente"],
            ["meeting", "reunión"], ["salary", "sueldo"], ["company", "empresa"],
            ["office", "oficina"], ["nurse", "enfermera"], ["accountant", "contador"],
            ["self-employed", "trabajador independiente"],
          ],
        },
      },

      {
        title: "Grammar — work as, for, in", titleEs: "Gramática · las tres preposiciones del trabajo",
        kind: "grammar", minutes: 15,
        html: `
<p>Cuando te preguntan <span class="en">What do you do?</span>, responder <em>"I am an engineer"</em> está bien,
pero se agota en tres segundos. Con estas tres estructuras puedes hablar un minuto.</p>

<table>
<tr><th>Estructura</th><th>Se usa para</th><th>Ejemplo</th></tr>
<tr><td><strong>work as</strong> + oficio</td><td>el puesto que ocupas</td><td><span class="en" data-say="I work as a teacher">I work <strong>as</strong> a teacher.</span> 🔊</td></tr>
<tr><td><strong>work for</strong> + empresa</td><td>para quién trabajas</td><td><span class="en" data-say="I work for Google">I work <strong>for</strong> Google.</span> 🔊</td></tr>
<tr><td><strong>work in</strong> + lugar o sector</td><td>dónde o en qué área</td><td><span class="en" data-say="I work in a hospital">I work <strong>in</strong> a hospital.</span> 🔊</td></tr>
<tr><td><strong>work with</strong> + personas/cosas</td><td>con quién o con qué</td><td><span class="en" data-say="I work with computers">I work <strong>with</strong> computers.</span> 🔊</td></tr>
</table>

<div class="box tip"><div class="box-title">JOB o WORK — no son intercambiables</div>
<p><strong>job</strong> es contable y concreto: un puesto. <em>I have a good <strong>job</strong>. She has two jobs.</em></p>
<p><strong>work</strong> es incontable y general: la actividad. <em>I have a lot of <strong>work</strong>. I go to work.</em></p>
<p>Por eso <span style="color:var(--red)">"I have a work"</span> ✗ está mal → <span class="en">I have a <strong>job</strong></span> ✓.
Y <span style="color:var(--red)">"I go to the job"</span> ✗ → <span class="en">I go to <strong>work</strong></span> ✓ (sin artículo).</p></div>

<div class="box warn"><div class="box-title">⚠️ Falsos amigos del trabajo</div>
<ul>
<li><strong>actually</strong> NO es "actualmente": significa <em>en realidad, de hecho</em>. "Actualmente" es <em>currently</em>.</li>
<li><strong>carrera</strong> (universitaria) no es <em>career</em>: eso es la trayectoria profesional. La carrera de estudios es
<em>a degree</em> o <em>major</em>. <span class="en">I have a degree in engineering.</span></li>
<li><strong>assist</strong> NO es "asistir a" (una clase): significa <em>ayudar</em>. Asistir a algo es <em>attend</em>.</li>
</ul></div>

<h3>Y para los estudios</h3>
<ul>
<li><span class="en" data-say="I study engineering at university">I study engineering at university.</span> 🔊</li>
<li><span class="en" data-say="I am studying English because I want a better job">I'm studying English because I want a better job.</span> 🔊
<span class="es-hint">— <em>because</em> = porque. La palabra que convierte una respuesta corta en una conversación.</span></li>
<li><span class="en" data-say="I graduated three years ago">I graduated three years ago.</span> 🔊</li>
</ul>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I work ___ a teacher.", es: "Trabajo como profesor.", answer: "as" },
            { sentence: "She works ___ a big company.", es: "Ella trabaja para una empresa grande.", answer: "for" },
            { sentence: "He works ___ a hospital.", es: "Él trabaja en un hospital.", answer: "in", alts: ["at"] },
            { sentence: "I work ___ computers all day.", es: "Trabajo con computadores todo el día.", answer: "with" },
            { sentence: "I have a good ___.", es: "Tengo un buen empleo.", answer: "job", hint: "¿job o work?", why: "Contable y concreto → <strong>job</strong>." },
            { sentence: "I have a lot of ___ today.", es: "Tengo mucho trabajo hoy.", answer: "work", why: "Incontable y general → <strong>work</strong>." },
            { sentence: "I go to ___ by bus.", es: "Voy al trabajo en bus.", answer: "work", why: "<em>go to work</em>, sin artículo." },
            { sentence: "I study English ___ I want a better job.", es: "Estudio inglés porque quiero un mejor trabajo.", answer: "because" },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take five. Think about how you would explain your job to a stranger.">Take five. Think about how you would explain your job to a stranger.</span> 🔊</p>
<p class="es-hint">Descansa cinco. Piensa cómo le explicarías tu trabajo a un desconocido.</p>`,
      },

      {
        title: "✍️ The -S drill", titleEs: "Plana de la tercera persona · cuarto día",
        kind: "drill", minutes: 12,
        html: `<p>Cuarto día. Intenta las tres rondas sin mirar la columna de la derecha.</p>`,
        ex: THIRD_DRILL,
      },

      {
        title: "Listening — talking about work", titleEs: "Escucha · hablando del trabajo",
        kind: "listening", minutes: 11,
        ex: {
          type: "dictation",
          items: [
            { en: "I work as a nurse in a hospital.", es: "Trabajo como enfermera en un hospital." },
            { en: "She works for a big company.", es: "Ella trabaja para una empresa grande." },
            { en: "My boss is very nice.", es: "Mi jefe es muy amable." },
            { en: "I have a meeting at ten o'clock.", es: "Tengo una reunión a las diez." },
            { en: "He works with computers.", es: "Él trabaja con computadores." },
            { en: "I study English because I want a better job.", es: "Estudio inglés porque quiero un mejor trabajo." },
            { en: "What does your brother do?", es: "¿A qué se dedica tu hermano?" },
            { en: "I am self-employed.", es: "Trabajo por mi cuenta." },
          ],
        },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Water, and then the microphone.">Water, and then the microphone.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — your job", titleEs: "Pronunciación · tu trabajo",
        kind: "speaking", minutes: 14,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "I work as an engineer.", es: "Trabajo como ingeniero.", tip: "<em>as an</em> se pega: \"azán\"." },
            { en: "I work for a small company.", es: "Trabajo para una empresa pequeña.", tip: "<em>company</em> = \"CÁM-pa-ni\"." },
            { en: "I work in an office in the center.", es: "Trabajo en una oficina en el centro." },
            { en: "I have a meeting every Monday.", es: "Tengo una reunión todos los lunes." },
            { en: "My colleagues are very friendly.", es: "Mis compañeros son muy amables.", tip: "<em>colleagues</em> = \"CÁ-ligs\", solo dos sílabas." },
            { en: "What do you do? Where do you work?", es: "¿A qué te dedicas? ¿Dónde trabajas?" },
            { en: "I study English because I want a better job.", es: "Estudio inglés porque quiero un mejor trabajo.", tip: "<em>because</em> se contrae a \"bicós\"." },
            { en: "I usually start work at eight and finish at five.", es: "Normalmente empiezo a las ocho y termino a las cinco." },
          ],
        },
      },

      {
        title: "Explain your job", titleEs: "Explica tu trabajo · producción propia",
        kind: "production", minutes: 12,
        html: `
<p>Este es el bloque que más te va a servir en una situación real: una entrevista, un vecino nuevo, un viaje.
<strong>Un minuto explicando a qué te dedicas.</strong></p>
<div class="box">
<p style="margin:6px 0"><span class="en">I work as a / an <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I work for <em>___</em> / I am self-employed.</span></p>
<p style="margin:6px 0"><span class="en">I work in <em>___</em>.</span> <span class="es-hint">(oficina, hospital, casa, la calle…)</span></p>
<p style="margin:6px 0"><span class="en">I work with <em>___</em>.</span> <span class="es-hint">(personas, computadores, números, máquinas…)</span></p>
<p style="margin:6px 0"><span class="en">I usually start at <em>___</em> and finish at <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I like my job because <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I study English because <em>___</em>.</span></p>
</div>
<div class="box tip"><div class="box-title">La palabra que lo cambia todo: <em>because</em></div>
Una respuesta sin <em>because</em> se muere en cinco segundos. Con <em>because</em>, cualquier respuesta se alarga
y suena a conversación. Oblígate hoy a meter <strong>because</strong> tres veces.</div>
<h3>Qué hacer</h3>
<ol>
<li>Escríbelo a mano, completo y verdadero.</li>
<li>Dilo tres veces en voz alta, la última sin mirar.</li>
<li>Grábate. Cronómetro: mínimo <strong>60 segundos</strong>.</li>
<li>Extra: escribe la misma explicación pero <strong>sobre otra persona</strong>, en tercera persona.
Cuenta las eses.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Trabajo como enfermera.", answer: "I work as a nurse" },
            { es: "Ella trabaja para una empresa grande.", answer: "She works for a big company" },
            { es: "Tengo un buen empleo.", answer: "I have a good job", why: "<em>job</em>, no \"a work\"." },
            { es: "Tengo mucho trabajo hoy.", answer: "I have a lot of work today", why: "<em>work</em>, incontable." },
            { es: "Mi jefe es muy amable.", answer: "My boss is very nice", alts: ["My boss is very kind", "My boss is very friendly"] },
            { es: "Él trabaja en un hospital.", answer: "He works in a hospital", alts: ["He works at a hospital"] },
            { es: "Estudio inglés porque quiero viajar.", answer: "I study English because I want to travel" },
            { es: "¿A qué se dedica tu hermana?", answer: "What does your sister do", alts: ["What does your sister do?"] },
          ],
        },
      },

      {
        title: "🏁 Day 11 exam", titleEs: "Examen del día 11 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d11", shuffle: true,
          items: [
            { kind: "choice", q: "I work ___ a teacher.", options: ["as", "for", "in", "like"], answer: 0 },
            { kind: "choice", q: "She works ___ a big company.", options: ["as", "for", "with", "at the"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I have a work.", "I have a job.", "I have job.", "I have the work."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I go to the job.", "I go to job.", "I go to work.", "I go to the work."], answer: 2 },
            { kind: "choice", q: "ACTUALLY means…", options: ["actualmente", "en realidad", "por supuesto", "finalmente"], answer: 1, why: "Falso amigo. \"Actualmente\" es <em>currently</em>." },
            { kind: "choice", q: "COLLEAGUE means…", options: ["colegio", "colega de trabajo", "colección", "cliente"], answer: 1 },
            { kind: "choice", q: "'Trabajo por mi cuenta' es…", options: ["I work for me.", "I am self-employed.", "I work alone.", "I am unemployed."], answer: 1 },
            { kind: "choice", q: "'Desempleado' es…", options: ["self-employed", "unemployed", "non-employed", "without job"], answer: 1 },
            { kind: "fill", sentence: "He works ___ computers.", es: "Él trabaja con computadores.", answer: "with" },
            { kind: "fill", sentence: "I study English ___ I want a better job.", es: "…porque quiero un mejor trabajo.", answer: "because" },
            { kind: "fill", sentence: "I have a ___ at ten o'clock.", es: "Tengo una reunión a las diez.", answer: "meeting" },
            { kind: "fill", sentence: "The third person of FIX is ___.", es: "La forma de he/she de fix.", answer: "fixes" },
            { kind: "dictation", en: "I work as a nurse in a hospital.", es: "Trabajo como enfermera en un hospital." },
            { kind: "dictation", en: "My boss is very nice.", es: "Mi jefe es muy amable." },
            { kind: "translate", es: "¿Dónde trabaja tu padre?", answer: "Where does your father work", alts: ["Where does your father work?", "Where does your dad work", "Where does your dad work?"], why: "Con <em>does</em>, el verbo va sin -s: <strong>work</strong>." },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 4,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Explica tu trabajo en voz alta, un minuto, sin leer.</li>
<li>Di tres frases con <em>because</em>.</li>
<li>Repite: <em>work <strong>as</strong> a job · work <strong>for</strong> a company · work <strong>in</strong> a place · work <strong>with</strong> people.</em></li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 12</div>
El tiempo libre: aficiones, <strong>play / go / do</strong> con actividades (que en español es todo "jugar" o "hacer",
y en inglés no) y el verbo <strong>can</strong> para hablar de lo que sabes hacer.</div>
<p><span class="en" data-say="Eleven days. Keep going.">Eleven days. Keep going.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 12 — Free time
     ============================================================ */

  const DAY12 = {
    id: "d12",
    title: "Day 12 · Free time and CAN",
    titleEs: "Tiempo libre, aficiones y el verbo CAN",
    goal: "Hablar de lo que haces por gusto y de lo que sabes hacer. Play, go, do — y el primer verbo modal del curso.",
    canDo: [
      "…use <strong>play, go and do</strong> with the right activities.",
      "…talk about my hobbies and free time.",
      "…use <strong>can / can't</strong> for ability and permission.",
      "…ask <em>Can you…?</em> and answer short.",
    ],
    blocks: [
      {
        title: "Warm-up — work vocabulary", titleEs: "Calentamiento · repaso del día 11",
        kind: "review", minutes: 7,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "I work ___ a mechanic.", options: ["as", "for", "in", "like"], answer: 0 },
            { q: "Which is CORRECT?", options: ["I have a work.", "I have a job.", "I have works.", "I have the job."], answer: 1 },
            { q: "ACTUALLY means…", options: ["actualmente", "en realidad", "seguramente", "finalmente"], answer: 1 },
            { q: "She ___ for a big company.", options: ["work", "works", "working", "is work"], answer: 1 },
            { q: "I study English ___ I want to travel.", options: ["why", "for", "because", "so"], answer: 2 },
            { q: "The past of BEGIN is…", options: ["beginned", "begun", "began", "beganed"], answer: 2 },
          ],
        },
      },

      {
        title: "Vocabulary — free time", titleEs: "Vocabulario · el tiempo libre",
        kind: "vocabulary", minutes: 12,
        ex: {
          type: "flashcards",
          items: [
            { en: "free time", ipa: "/friː taɪm/", es: "tiempo libre", ex: "What do you do in your free time?", exEs: "¿Qué haces en tu tiempo libre?" },
            { en: "hobby", ipa: "/ˈhɑːbi/ — JÁ-bi", es: "afición, pasatiempo", ex: "My hobby is photography.", exEs: "Mi afición es la fotografía." },
            { en: "read", ipa: "/riːd/ — riid", es: "leer", ex: "I read before bed.", exEs: "Leo antes de dormir." },
            { en: "cook", ipa: "/kʊk/ — kuk", es: "cocinar", ex: "I like cooking on weekends.", exEs: "Me gusta cocinar los fines de semana." },
            { en: "travel", ipa: "/ˈtrævəl/ — TRÁ-vel", es: "viajar", ex: "I travel twice a year.", exEs: "Viajo dos veces al año." },
            { en: "dance", ipa: "/dæns/ — dans", es: "bailar", ex: "We dance salsa on Fridays.", exEs: "Bailamos salsa los viernes." },
            { en: "swim", ipa: "/swɪm/ — suim", es: "nadar", ex: "I go swimming every Sunday.", exEs: "Voy a nadar todos los domingos." },
            { en: "run", ipa: "/rʌn/ — ran", es: "correr", ex: "I go running in the park.", exEs: "Salgo a correr al parque." },
            { en: "gym", ipa: "/dʒɪm/ — yim", es: "gimnasio", ex: "I go to the gym after work.", exEs: "Voy al gimnasio después del trabajo." },
            { en: "party", ipa: "/ˈpɑːrti/ — PÁR-ti", es: "fiesta", ex: "There is a party on Saturday.", exEs: "Hay una fiesta el sábado." },
            { en: "friends", ipa: "/frendz/", es: "amigos", ex: "I meet my friends on Fridays.", exEs: "Me veo con mis amigos los viernes." },
            { en: "go out", ipa: "/ɡoʊ aʊt/", es: "salir (de fiesta, a la calle)", ex: "We go out on weekends.", exEs: "Salimos los fines de semana." },
            { en: "stay home", ipa: "/steɪ hoʊm/", es: "quedarse en casa", ex: "I usually stay home on Sundays.", exEs: "Normalmente me quedo en casa los domingos." },
            { en: "rest", ipa: "/rest/", es: "descansar", ex: "I rest on Sundays.", exEs: "Descanso los domingos." },
            { en: "can", ipa: "/kæn/ — can", es: "poder, saber (hacer algo)", ex: "I can swim.", exEs: "Sé nadar." },
          ],
        },
      },

      {
        title: "Grammar — play, go, do", titleEs: "Gramática · play, go y do con actividades",
        kind: "grammar", minutes: 14,
        html: `
<p>En español decimos "jugar fútbol", "hacer yoga", "ir a nadar" sin pensarlo. En inglés cada tipo de actividad
lleva su verbo fijo, y equivocarse suena raro de inmediato. Son tres reglas y cubren casi todo.</p>

<table>
<tr><th>Verbo</th><th>Se usa con</th><th>Ejemplos</th></tr>
<tr><td><strong>play</strong></td><td>deportes <em>de pelota</em> y juegos</td><td><span class="en" data-say="play soccer">play soccer</span> 🔊, play tennis, play basketball, play cards, play the guitar</td></tr>
<tr><td><strong>go</strong></td><td>actividades terminadas en <strong>-ing</strong></td><td><span class="en" data-say="go swimming">go swimming</span> 🔊, go running, go shopping, go dancing, go fishing</td></tr>
<tr><td><strong>do</strong></td><td>el resto: ejercicio, artes marciales, tareas</td><td><span class="en" data-say="do yoga">do yoga</span> 🔊, do exercise, do karate, do homework, do the dishes</td></tr>
</table>

<div class="box tip"><div class="box-title">Los instrumentos llevan THE, los deportes no</div>
<span class="en">I play <strong>the</strong> guitar</span> ✓ (instrumentos → con artículo)<br>
<span class="en">I play soccer</span> ✓ (deportes → sin artículo)<br>
<span style="color:var(--red)">"I play the soccer"</span> ✗ · <span style="color:var(--red)">"I play guitar"</span> — esta última
se oye mucho en inglés informal, pero lo correcto es <em>play the guitar</em>.</div>

<div class="box warn"><div class="box-title">⚠️ Fútbol: soccer o football</div>
En Estados Unidos <strong>soccer</strong> es nuestro fútbol y <strong>football</strong> es el americano.
En el resto del mundo <em>football</em> es el nuestro. Si estudias con material americano, usa <em>soccer</em>.
Las dos se entienden en cualquier parte.</div>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ soccer on Sundays.", es: "Juego fútbol los domingos.", answer: "play" },
            { sentence: "She ___ swimming twice a week.", es: "Ella va a nadar dos veces por semana.", answer: "goes", hint: "Tercera persona.", why: "<em>go swimming</em> + la -s de she." },
            { sentence: "We ___ yoga in the morning.", es: "Hacemos yoga por la mañana.", answer: "do" },
            { sentence: "He ___ the guitar very well.", es: "Él toca la guitarra muy bien.", answer: "plays" },
            { sentence: "They ___ shopping on Saturdays.", es: "Ellos van de compras los sábados.", answer: "go" },
            { sentence: "I ___ exercise three times a week.", es: "Hago ejercicio tres veces por semana.", answer: "do" },
            { sentence: "My sister ___ running in the park.", es: "Mi hermana sale a correr al parque.", answer: "goes" },
            { sentence: "I play ___ piano.", es: "Toco el piano.", answer: "the", why: "Instrumentos → con artículo." },
          ],
        },
      },

      {
        title: "Grammar — CAN", titleEs: "Gramática · CAN, tu primer verbo modal",
        kind: "grammar", minutes: 13,
        html: `
<p><strong>Can</strong> es el primer <em>verbo modal</em> del curso, y son una familia con reglas propias —
más fáciles, de hecho, que las de los verbos normales.</p>

<div class="box gram"><div class="box-title">📐 Las tres reglas de CAN</div>
<ol>
<li><strong>No cambia nunca.</strong> Ni con he, she, it. <span style="color:var(--red)">"He cans"</span> ✗ →
<span class="en">He <strong>can</strong> swim</span> ✓. Se acabó la -s por un rato.</li>
<li><strong>El verbo que le sigue va desnudo</strong>, sin <em>to</em>.
<span style="color:var(--red)">"I can to swim"</span> ✗ → <span class="en">I can <strong>swim</strong></span> ✓.</li>
<li><strong>No necesita a DO</strong> para negar ni preguntar: se apaña solo, como <em>to be</em>.</li>
</ol></div>

<table>
<tr><th>Afirmativo</th><th>Negativo</th><th>Pregunta</th><th>Respuesta corta</th></tr>
<tr><td><span class="en">I can swim.</span></td><td><span class="en">I <strong>can't</strong> swim.</span></td><td><span class="en"><strong>Can</strong> you swim?</span></td><td>Yes, I can. / No, I can't.</td></tr>
<tr><td><span class="en">He can drive.</span></td><td><span class="en">He can't drive.</span></td><td><span class="en">Can he drive?</span></td><td>Yes, he can. / No, he can't.</td></tr>
</table>
<p>El negativo completo es <em>cannot</em> (una sola palabra) y se contrae a <strong>can't</strong>.</p>

<h3>Para qué sirve</h3>
<ul>
<li><strong>Habilidad:</strong> <span class="en" data-say="I can play the guitar">I can play the guitar.</span> 🔊
<span class="es-hint">— aquí <em>can</em> traduce nuestro "sé", no "puedo": <strong>sé</strong> tocar guitarra.</span></li>
<li><strong>Posibilidad:</strong> <span class="en" data-say="We can go tomorrow">We can go tomorrow.</span> 🔊</li>
<li><strong>Permiso y peticiones:</strong> <span class="en" data-say="Can I use your phone?">Can I use your phone?</span> 🔊 ·
<span class="en" data-say="Can you help me, please?">Can you help me, please?</span> 🔊</li>
</ul>

<div class="box warn"><div class="box-title">⚠️ "Sé nadar", no "conozco nadar"</div>
El error clásico es traducir "sé nadar" con <em>know</em>: <span style="color:var(--red)">"I know swim"</span> ✗.
Para habilidades siempre <strong>can</strong>: <span class="en">I can swim</span> ✓.
<em>Know</em> es para conocer datos o personas: <em>I know the answer. I know Maria.</em></div>

<div class="box tip"><div class="box-title">Can y can't suenan casi igual — y esto importa</div>
En inglés americano <em>can</em> se dice débil, casi "kn", y <strong>can't</strong> lleva la vocal larga y clara: "kánt".
La forma de distinguirlos al oír no es la t final (que casi no se pronuncia) sino <strong>la fuerza</strong>:
si la palabra suena marcada y con vocal clara, es <em>can't</em>. Escucha:
<span class="en" data-say="I can swim">I can swim</span> 🔊 · <span class="en" data-say="I can't swim">I can't swim</span> 🔊</div>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ swim very well.", es: "Sé nadar muy bien.", answer: "can" },
            { sentence: "He ___ drive a car. (no sabe)", es: "Él no sabe conducir.", answer: "can't", alts: ["cannot", "can not"] },
            { sentence: "___ you help me, please?", es: "¿Me puedes ayudar, por favor?", answer: "Can", alts: ["can"] },
            { sentence: "She can ___ the guitar.", es: "Ella sabe tocar la guitarra.", answer: "play", hint: "¿Lleva 'to'?", why: "Después de <em>can</em>, el verbo va sin <em>to</em>." },
            { sentence: "He can ___ three languages. (speak)", es: "Él habla tres idiomas.", answer: "speak", why: "Sin -s: después de un modal el verbo va desnudo." },
            { sentence: "— Can you cook? — Yes, I ___.", es: "— ¿Sabes cocinar? — Sí.", answer: "can" },
            { sentence: "I ___ come tomorrow, I'm busy.", es: "No puedo venir mañana, estoy ocupado.", answer: "can't", alts: ["cannot", "can not"] },
            { sentence: "___ I use your phone?", es: "¿Puedo usar tu teléfono?", answer: "Can", alts: ["can"] },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take five. Think of three things you can do and three you cannot.">Take five. Think of three things you can do and three you can't.</span> 🔊</p>
<p class="es-hint">Descansa cinco. Piensa tres cosas que sabes hacer y tres que no.</p>`,
      },

      {
        title: "✍️ The -S drill", titleEs: "Plana de la tercera persona · quinto día",
        kind: "drill", minutes: 12,
        html: `<p>Quinto día. Y una observación para hoy: fíjate en que <strong>después de <em>can</em> no hay -s</strong>.
Los modales son la única zona del inglés donde la tercera persona te deja en paz.</p>`,
        ex: THIRD_DRILL,
      },

      {
        title: "Listening — hobbies", titleEs: "Escucha · aficiones",
        kind: "listening", minutes: 11,
        ex: {
          type: "dictation",
          items: [
            { en: "I play soccer on Sundays.", es: "Juego fútbol los domingos." },
            { en: "She goes swimming twice a week.", es: "Ella va a nadar dos veces por semana." },
            { en: "We do yoga in the morning.", es: "Hacemos yoga por la mañana." },
            { en: "I can play the guitar.", es: "Sé tocar la guitarra." },
            { en: "He can't drive a car.", es: "Él no sabe conducir." },
            { en: "Can you help me, please?", es: "¿Me puedes ayudar, por favor?" },
            { en: "What do you do in your free time?", es: "¿Qué haces en tu tiempo libre?" },
            { en: "I usually stay home on Sundays.", es: "Normalmente me quedo en casa los domingos." },
          ],
        },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Last stretch. Then the microphone.">Last stretch. Then the microphone.</span> 🔊</p>`,
      },

      {
        title: "Speaking lab — can and can't", titleEs: "Pronunciación · can y can't",
        kind: "speaking", minutes: 14,
        html: `<div class="box tip"><div class="box-title">El reto de hoy es el contraste</div>
Practica <em>can</em> débil y <em>can't</em> fuerte. Si el micrófono te confunde los dos, es exactamente
lo que le pasaría a un nativo: hazlo más marcado.</div>`,
        ex: {
          type: "speak", target: 68,
          items: [
            { en: "I can swim, but I can't dance.", es: "Sé nadar, pero no sé bailar.", tip: "<em>can</em> suave, <strong>can't</strong> fuerte y claro." },
            { en: "I play soccer with my friends.", es: "Juego fútbol con mis amigos." },
            { en: "She goes running in the park.", es: "Ella sale a correr al parque." },
            { en: "We do yoga on Saturday mornings.", es: "Hacemos yoga los sábados por la mañana." },
            { en: "Can you play the guitar?", es: "¿Sabes tocar la guitarra?", tip: "Pregunta de sí/no: la voz sube. ↗" },
            { en: "He can speak three languages.", es: "Él habla tres idiomas.", tip: "<em>speak</em> sin -s: va después de un modal." },
            { en: "What do you do in your free time?", es: "¿Qué haces en tu tiempo libre?" },
            { en: "I usually go out on Friday nights.", es: "Normalmente salgo los viernes por la noche." },
          ],
        },
      },

      {
        title: "Your free time", titleEs: "Tu tiempo libre · producción propia",
        kind: "production", minutes: 11,
        html: `
<div class="box">
<p style="margin:6px 0"><span class="en">In my free time I <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I play <em>___</em> / I go <em>___ing</em> / I do <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I usually do it <em>___ a week</em>.</span> <span class="es-hint">(once, twice, three times)</span></p>
<p style="margin:6px 0"><span class="en">On weekends I usually <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I can <em>___</em> and <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I can't <em>___</em>, but I want to learn.</span></p>
<p style="margin:6px 0"><span class="en">My favorite hobby is <em>___</em> because <em>___</em>.</span></p>
</div>
<h3>El reto: cinco cosas que sabes y cinco que no</h3>
<ol>
<li>Escribe en el cuaderno dos columnas: <strong>I CAN</strong> / <strong>I CAN'T</strong>. Cinco en cada una, verdaderas.</li>
<li>Léelas en voz alta alternando: <em>I can cook. I can't swim. I can drive. I can't dance…</em>
Ese ida y vuelta es el mejor ejercicio para fijar el contraste de sonido.</li>
<li>Ahora pásalas a tercera persona pensando en alguien: <em>He can… She can't…</em>
Fíjate en que <strong>no aparece ninguna -s</strong>.</li>
<li>Grábate contando tu tiempo libre, un minuto.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Juego fútbol los domingos.", answer: "I play soccer on Sundays", alts: ["I play football on Sundays"] },
            { es: "Ella va a nadar dos veces por semana.", answer: "She goes swimming twice a week" },
            { es: "Hacemos yoga por la mañana.", answer: "We do yoga in the morning" },
            { es: "Sé tocar la guitarra.", answer: "I can play the guitar" },
            { es: "Él no sabe conducir.", answer: "He can not drive", alts: ["He can't drive", "He cannot drive", "He can't drive a car", "He cannot drive a car"] },
            { es: "¿Puedes ayudarme, por favor?", answer: "Can you help me, please", alts: ["Can you help me please?", "Can you help me?"] },
            { es: "¿Qué haces en tu tiempo libre?", answer: "What do you do in your free time", alts: ["What do you do in your free time?"] },
            { es: "Ella sabe hablar tres idiomas.", answer: "She can speak three languages", why: "Después de <em>can</em>, el verbo sin -s." },
          ],
        },
      },

      {
        title: "🏁 Day 12 exam", titleEs: "Examen del día 12 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d12", shuffle: true,
          items: [
            { kind: "choice", q: "I ___ soccer on Sundays.", options: ["do", "go", "play", "make"], answer: 2 },
            { kind: "choice", q: "She ___ swimming every week.", options: ["plays", "goes", "does", "makes"], answer: 1 },
            { kind: "choice", q: "We ___ yoga in the morning.", options: ["play", "go", "do", "make"], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I play the soccer.", "I play soccer.", "I do soccer.", "I go soccer."], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["He cans swim.", "He can swims.", "He can swim.", "He can to swim."], answer: 2 },
            { kind: "choice", q: "Which is CORRECT?", options: ["I can to drive.", "I can drive.", "I can driving.", "I can drives."], answer: 1 },
            { kind: "choice", q: "'Sé nadar' es…", options: ["I know swim.", "I know to swim.", "I can swim.", "I can to swim."], answer: 2 },
            { kind: "choice", q: "— Can you cook? — ___", options: ["Yes, I cook.", "Yes, I do.", "Yes, I can.", "Yes, I am."], answer: 2 },
            { kind: "fill", sentence: "He ___ the guitar very well. (play)", es: "Él toca la guitarra muy bien.", answer: "plays" },
            { kind: "fill", sentence: "I play ___ piano.", es: "Toco el piano.", answer: "the" },
            { kind: "fill", sentence: "They ___ shopping on Saturdays.", es: "Van de compras los sábados.", answer: "go" },
            { kind: "fill", sentence: "The third person of TRY is ___.", es: "La forma de he/she de try.", answer: "tries" },
            { kind: "dictation", en: "I can play the guitar.", es: "Sé tocar la guitarra." },
            { kind: "dictation", en: "What do you do in your free time?", es: "¿Qué haces en tu tiempo libre?" },
            { kind: "translate", es: "No sé bailar salsa.", answer: "I can not dance salsa", alts: ["I can't dance salsa", "I cannot dance salsa"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 4,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Cinco frases con <em>I can</em> y cinco con <em>I can't</em>, alternando.</li>
<li>Di seis actividades con su verbo correcto: <em>play…, go …ing, do…</em></li>
<li>La regla del día: <em>"Después de can, el verbo va desnudo y sin s."</em></li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 13</div>
Los pronombres de objeto (<em>me, him, her, us, them</em>) y repaso general. Es el día tranquilo antes del
<strong>día 14</strong>, que trae el examen del módulo y tu segundo hito del camino.</div>
<p><span class="en" data-say="Twelve days. Two more to the milestone.">Twelve days. Two more to the milestone.</span> 🔊</p>`,
      },
    ],
  };

  window.DAYS_M1 = (window.DAYS_M1 || []).concat([DAY10, DAY11, DAY12]);
})();
