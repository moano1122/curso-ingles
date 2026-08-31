/* ============================================================
   Currículo — "Your English Path"

   Principios de diseño:
   - Adulto de 30 años que ya oyó inglés toda la vida pero nunca
     lo estructuró. No se empieza por el abecedario porque sí:
     se empieza por poder DECIR algo el primer día.
   - Instrucciones y títulos en inglés desde el minuto uno
     (classroom English), con el español al lado como red de
     seguridad, nunca como muleta permanente.
   - Cada día: vocabulario -> gramática -> escucha -> planas ->
     habla -> producción propia -> examen. Ese orden no es
     casual: se reconoce antes de producir.
   - Sesiones de ~2 horas con dos descansos reales.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Los 7 hitos del camino ---------- */
  const MILESTONES = [
    { id: "H1", label: "Introduce yourself", desc: "Decir quién eres, de dónde eres y a qué te dedicas — sin pensarlo", dayId: "d1", mod: "Module 0" },
    { id: "H2", label: "Talk about your day", desc: "Contar tu rutina diaria en presente simple", dayId: "d14", mod: "Module 1" },
    { id: "H3", label: "Tell what happened", desc: "Contar algo que te pasó ayer, en pasado, sin trabarte", dayId: "d32", mod: "Module 3" },
    { id: "H4", label: "Survive out there", desc: "Pedir comida, preguntar direcciones, comprar, resolver un problema", dayId: "d42", mod: "Module 4" },
    { id: "H5", label: "Talk about the future", desc: "Planes, intenciones y promesas: will, going to", dayId: "d50", mod: "Module 5" },
    { id: "H6", label: "Understand real English", desc: "Entender un minuto de audio nativo sin subtítulos", dayId: "d58", mod: "Module 6" },
    { id: "H7", label: "A 10-minute conversation", desc: "Conversación libre de 10 minutos sin cambiar al español", dayId: "d66", mod: "Module 7" },
  ];

  /* ---------- Los 12 verbos de la plana diaria ---------- */
  const CORE_VERBS = [
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

  /* ============================================================
     DAY 1 — Hello! I am...
     ============================================================ */

  const DAY1 = {
    id: "d1",
    title: "Day 1 · Hello! I am…",
    titleEs: "Hola, yo soy… — presentarte en inglés",
    goal: "Al terminar hoy vas a poder presentarte en inglés: quién eres, de dónde eres, a qué te dedicas y cómo te sientes.",
    canDo: [
      "…say my name, my country and my job in English.",
      "…use <strong>am / is / are</strong> without thinking about it.",
      "…make negatives (I'm not) and questions (Are you…?).",
      "…spell my name out loud, letter by letter.",
      "…recognize and write the past of 12 essential verbs.",
    ],
    minutes: 132,
    blocks: [

      /* ---------- 1. Bienvenida ---------- */
      {
        title: "Welcome — read this first", titleEs: "Bienvenida · léelo, son 5 minutos que valen el curso entero",
        kind: "start", minutes: 5,
        html: `
<p>Bienvenido. Antes de la primera palabra, tres cosas que deciden si esto funciona o no.</p>

<h3>1. Tú no empiezas de cero</h3>
<p>Llevas 30 años oyendo inglés: canciones, películas, marcas, videojuegos, letreros. Ya sabes cientos de palabras
(<em>stop, computer, hotel, chocolate, internet, taxi, hospital, problem, music, doctor</em>…). Lo que no tienes es
<strong>estructura</strong>: el andamio que convierte palabras sueltas en frases tuyas. Eso es exactamente lo que
vamos a construir, y por eso este curso no empieza por el abecedario — empieza por hacerte hablar hoy mismo.</p>

<h3>2. La regla de oro: producir &gt; entender</h3>
<p>Escuchar inglés es cómodo y da sensación de progreso. Pero el idioma se instala cuando lo <strong>produces</strong>:
cuando escribes una frase que no habías visto y cuando la dices en voz alta aunque suene mal. Por eso este curso te va
a hacer teclear y hablar mucho más de lo que te hace leer. <strong>Habla en voz alta aunque estés solo.</strong>
Si vas a susurrar, mejor no lo digas: el músculo de la boca también aprende, y solo aprende en voz alta.</p>

<h3>3. Classroom English — las instrucciones que vas a ver todos los días</h3>
<p>Desde hoy las instrucciones van en inglés. No para complicarte: para que en dos semanas estas frases dejen de
traducirse en tu cabeza y simplemente <em>signifiquen</em>. Haz clic en el altavoz de cada una para oírla:</p>
<table>
<tr><th>English</th><th>Español</th></tr>
<tr><td><span class="en" data-say="Listen and repeat">Listen and repeat</span> 🔊</td><td>Escucha y repite</td></tr>
<tr><td><span class="en" data-say="Say it out loud">Say it out loud</span> 🔊</td><td>Dilo en voz alta</td></tr>
<tr><td><span class="en" data-say="Choose the correct answer">Choose the correct answer</span> 🔊</td><td>Elige la respuesta correcta</td></tr>
<tr><td><span class="en" data-say="Fill in the blank">Fill in the blank</span> 🔊</td><td>Rellena el espacio</td></tr>
<tr><td><span class="en" data-say="Write it in English">Write it in English</span> 🔊</td><td>Escríbelo en inglés</td></tr>
<tr><td><span class="en" data-say="Try again">Try again</span> 🔊</td><td>Inténtalo otra vez</td></tr>
<tr><td><span class="en" data-say="One more time">One more time</span> 🔊</td><td>Una vez más</td></tr>
<tr><td><span class="en" data-say="Take a break">Take a break</span> 🔊</td><td>Toma un descanso</td></tr>
</table>

<div class="box tip"><div class="box-title">✅ Antes de seguir</div>
<ul>
<li>Ponte <strong>audífonos</strong> si los tienes. El oído aprende mejor sin ruido de fondo.</li>
<li>Vas a usar el <strong>micrófono</strong> en el bloque de speaking. Cuando el navegador lo pida, dale permiso.</li>
<li>Ten a mano <strong>papel y lápiz</strong>. En serio: hay un bloque de planas y escribir a mano fija más que teclear.</li>
</ul></div>

<div class="box"><div class="box-title">🎯 Today's goal</div>
<p style="margin:0"><span class="en">By the end of today you can introduce yourself in English.</span>
<span class="es-hint">Al final de hoy puedes presentarte en inglés.</span></p></div>`,
      },

      /* ---------- 2. El alfabeto ---------- */
      {
        title: "The alphabet — spell your name", titleEs: "El abecedario · deletrear tu nombre",
        kind: "listening", minutes: 8,
        html: `
<p>Esto no es relleno de primaria: <strong>deletrear es la habilidad de supervivencia número uno</strong>. En un aeropuerto,
en un hotel, en una llamada, en una entrevista — lo primero que te van a pedir es tu nombre, y lo segundo,
que lo deletrees. Un adulto que no sabe deletrear en inglés queda mudo en el minuto dos.</p>
<p>Escucha el abecedario completo y repítelo en voz alta con el audio. Fíjate en las letras traicioneras:</p>
<table>
<tr><th>Letra</th><th>Se dice</th><th>Ojo porque…</th></tr>
<tr><td><strong>E</strong></td><td>"ii" 🔊<span data-say="E" class="say">🔊</span></td><td>suena como nuestra <em>i</em></td></tr>
<tr><td><strong>I</strong></td><td>"ái" <span data-say="I" class="say">🔊</span></td><td>suena como <em>ai</em>, no como <em>i</em></td></tr>
<tr><td><strong>G</strong></td><td>"yii" <span data-say="G" class="say">🔊</span></td><td>se confunde con la J</td></tr>
<tr><td><strong>J</strong></td><td>"yéi" <span data-say="J" class="say">🔊</span></td><td>se confunde con la G</td></tr>
<tr><td><strong>H</strong></td><td>"éich" <span data-say="H" class="say">🔊</span></td><td>nada que ver con "hache"</td></tr>
<tr><td><strong>W</strong></td><td>"dábol iu" <span data-say="W" class="say">🔊</span></td><td>literalmente "doble u"</td></tr>
<tr><td><strong>Y</strong></td><td>"uái" <span data-say="Y" class="say">🔊</span></td><td>igual que la palabra <em>why</em></td></tr>
</table>
<div class="box"><div class="box-title">🗣️ Do this now</div>
<p style="margin:0"><span class="en" data-say="Spell your first name and your last name out loud, three times.">Spell your first name and your last name out loud, three times.</span> 🔊<br>
<span class="es-hint">Deletrea tu nombre y tu apellido en voz alta, tres veces.</span> Si te trabas en alguna letra, escúchala arriba y vuelve a empezar.</p></div>
<p>Ahora un ejercicio: vas a <strong>oír una letra o una palabra deletreada</strong> y elegir cuál es.</p>`,
        ex: {
          type: "choice",
          items: [
            { q: "🎧 Which letter is it?", qEs: "¿Qué letra es?", audio: "E", options: ["A", "E", "I", "U"], answer: 1, why: "<strong>E</strong> en inglés suena \"ii\". Nuestra <em>i</em> española es la E inglesa.", sayAnswer: false },
            { q: "🎧 Which letter is it?", qEs: "¿Qué letra es?", audio: "I", options: ["E", "A", "I", "Y"], answer: 2, why: "<strong>I</strong> suena \"ái\". Por eso <em>I am</em> se oye \"ái am\".", sayAnswer: false },
            { q: "🎧 Which letter is it?", qEs: "¿Qué letra es?", audio: "G", options: ["J", "G", "H", "K"], answer: 1, why: "<strong>G</strong> = \"yii\", <strong>J</strong> = \"yéi\". La diferencia está en la vocal.", sayAnswer: false },
            { q: "🎧 Which letter is it?", qEs: "¿Qué letra es?", audio: "J", options: ["G", "Z", "J", "Y"], answer: 2, why: "<strong>J</strong> = \"yéi\", con sonido de <em>a-i</em>.", sayAnswer: false },
            { q: "🎧 Which letter is it?", qEs: "¿Qué letra es?", audio: "W", options: ["V", "U", "W", "M"], answer: 2, why: "<strong>W</strong> = \"double u\" (doble u). Es la letra con el nombre más largo del inglés.", sayAnswer: false },
            { q: "🎧 What word is being spelled?", qEs: "¿Qué palabra están deletreando?", audio: "N. A. M. E.", options: ["MAN", "NAME", "MEAN", "NEAT"], answer: 1, why: "N-A-M-E = <strong>name</strong> (nombre).", sayAnswer: false },
            { q: "🎧 What word is being spelled?", qEs: "¿Qué palabra están deletreando?", audio: "J. O. B.", options: ["JOB", "JOG", "GOB", "JOY"], answer: 0, why: "J-O-B = <strong>job</strong> (trabajo, empleo).", sayAnswer: false },
            { q: "🎧 What word is being spelled?", qEs: "¿Qué palabra están deletreando?", audio: "Y. E. S.", options: ["YES", "IS", "EYES", "USE"], answer: 0, why: "Y-E-S = <strong>yes</strong> (sí).", sayAnswer: false },
          ],
        },
      },

      /* ---------- 3. Vocabulario 1 ---------- */
      {
        title: "Vocabulary 1 — greetings and courtesy", titleEs: "Vocabulario 1 · saludos y cortesía",
        kind: "vocabulary", minutes: 8,
        html: `<p>Catorce expresiones que vas a usar el 100% de las veces que abras la boca en inglés.
Pasa las tarjetas, <strong>escucha cada una y repítela imitando el audio</strong> — no leyendo como si fuera español.
Haz clic en la tarjeta para ver el significado.</p>`,
        ex: {
          type: "flashcards",
          items: [
            { en: "Hello", ipa: "/həˈloʊ/", es: "Hola", ex: "Hello! How are you?", exEs: "¡Hola! ¿Cómo estás?" },
            { en: "Hi", ipa: "/haɪ/", es: "Hola (informal)", ex: "Hi, I'm Carlos.", exEs: "Hola, soy Carlos." },
            { en: "Good morning", ipa: "/ɡʊd ˈmɔːrnɪŋ/", es: "Buenos días (antes del mediodía)", ex: "Good morning, everyone.", exEs: "Buenos días a todos." },
            { en: "Good afternoon", ipa: "/ɡʊd ˌæftərˈnuːn/", es: "Buenas tardes (12 h – 18 h)", ex: "Good afternoon, sir.", exEs: "Buenas tardes, señor." },
            { en: "Good evening", ipa: "/ɡʊd ˈiːvnɪŋ/", es: "Buenas noches (al llegar, después de las 18 h)", ex: "Good evening. Table for two, please.", exEs: "Buenas noches. Mesa para dos, por favor." },
            { en: "Good night", ipa: "/ɡʊd naɪt/", es: "Buenas noches (SOLO al despedirte o irte a dormir)", ex: "Good night, see you tomorrow.", exEs: "Buenas noches, nos vemos mañana." },
            { en: "Goodbye / Bye", ipa: "/ɡʊdˈbaɪ/", es: "Adiós / Chao", ex: "Bye! Have a good day.", exEs: "¡Chao! Que tengas buen día." },
            { en: "Please", ipa: "/pliːz/", es: "Por favor", ex: "Coffee, please.", exEs: "Café, por favor." },
            { en: "Thank you", ipa: "/ˈθæŋk juː/", es: "Gracias", ex: "Thank you very much.", exEs: "Muchas gracias." },
            { en: "You're welcome", ipa: "/jʊr ˈwelkəm/", es: "De nada", ex: "— Thank you! — You're welcome.", exEs: "— ¡Gracias! — De nada." },
            { en: "Excuse me", ipa: "/ɪkˈskjuːz miː/", es: "Disculpe (para pedir permiso o atención)", ex: "Excuse me, where is the bathroom?", exEs: "Disculpe, ¿dónde está el baño?" },
            { en: "I'm sorry", ipa: "/aɪm ˈsɑːri/", es: "Lo siento (para disculparte por algo)", ex: "I'm sorry, I'm late.", exEs: "Lo siento, llegué tarde." },
            { en: "Nice to meet you", ipa: "/naɪs tə ˈmiːt juː/", es: "Mucho gusto / encantado", ex: "Nice to meet you, Anna.", exEs: "Mucho gusto, Anna." },
            { en: "See you tomorrow", ipa: "/siː juː təˈmɑːroʊ/", es: "Nos vemos mañana", ex: "Bye, see you tomorrow!", exEs: "¡Chao, nos vemos mañana!" },
          ],
        },
      },
      {
        title: "Match the greetings", titleEs: "Empareja los saludos con su significado",
        kind: "vocabulary", minutes: 4,
        html: `<p>Sin mirar las tarjetas. Si fallas una, no pasa nada — las que fallas hoy son justo las que el curso te va a repetir mañana.</p>`,
        ex: {
          type: "match",
          pairs: [
            ["Good morning", "Buenos días"],
            ["Good evening", "Buenas noches (al llegar)"],
            ["Good night", "Buenas noches (al despedirte)"],
            ["You're welcome", "De nada"],
            ["Excuse me", "Disculpe"],
            ["I'm sorry", "Lo siento"],
            ["Nice to meet you", "Mucho gusto"],
            ["See you tomorrow", "Nos vemos mañana"],
          ],
        },
      },

      /* ---------- 4. Gramática: TO BE ---------- */
      {
        title: "Grammar — the verb TO BE", titleEs: "Gramática · el verbo TO BE (ser y estar)",
        kind: "grammar", minutes: 15,
        html: `
<p>Este es <strong>el</strong> verbo. El más usado del idioma, el que aparece en la primera frase que vas a decir hoy
y el que más se equivoca la gente que aprendió inglés "de oído". Si lo dominas, media conversación básica es tuya.</p>

<h3>La idea que te ahorra un año</h3>
<p>En español tenemos <strong>dos</strong> verbos: <em>ser</em> (permanente) y <em>estar</em> (temporal). En inglés
hay <strong>uno solo</strong>: <strong>to be</strong>. "Yo soy médico" y "yo estoy cansado" usan el mismo verbo:
<span class="en">I am a doctor</span> / <span class="en">I am tired</span>. Es una de las poquísimas veces
en que el inglés es más fácil que el español. Aprovéchala.</p>

<h3>Las tres formas — y solo son tres</h3>
<table>
<tr><th>Pronombre</th><th>To be</th><th>Contracción (lo que la gente dice de verdad)</th><th>Ejemplo</th></tr>
<tr><td><strong>I</strong> (yo)</td><td><strong>am</strong></td><td>I'm</td><td><span class="en" data-say="I am from Colombia">I'm from Colombia</span> 🔊</td></tr>
<tr><td><strong>You</strong> (tú / usted / ustedes)</td><td><strong>are</strong></td><td>You're</td><td><span class="en" data-say="You are my friend">You're my friend</span> 🔊</td></tr>
<tr><td><strong>He</strong> (él)</td><td><strong>is</strong></td><td>He's</td><td><span class="en" data-say="He is a teacher">He's a teacher</span> 🔊</td></tr>
<tr><td><strong>She</strong> (ella)</td><td><strong>is</strong></td><td>She's</td><td><span class="en" data-say="She is tired">She's tired</span> 🔊</td></tr>
<tr><td><strong>It</strong> (ello: cosa o animal)</td><td><strong>is</strong></td><td>It's</td><td><span class="en" data-say="It is a good book">It's a good book</span> 🔊</td></tr>
<tr><td><strong>We</strong> (nosotros)</td><td><strong>are</strong></td><td>We're</td><td><span class="en" data-say="We are ready">We're ready</span> 🔊</td></tr>
<tr><td><strong>They</strong> (ellos / ellas)</td><td><strong>are</strong></td><td>They're</td><td><span class="en" data-say="They are at home">They're at home</span> 🔊</td></tr>
</table>
<p><strong>Memoriza el patrón, no la tabla:</strong> <em>I → am. He, she, it → is. Todo lo demás → are.</em>
Dilo en voz alta cinco veces así, como un mantra. Es literalmente todo lo que hay que saber.</p>

<h3>Negativo: solo añade NOT</h3>
<p><span class="en">I am <strong>not</strong> tired</span> → <span class="en" data-say="I'm not tired">I'm not tired</span> 🔊 ·
<span class="en">He is <strong>not</strong> here</span> → <span class="en" data-say="He isn't here">He isn't here</span> 🔊 ·
<span class="en">They are <strong>not</strong> ready</span> → <span class="en" data-say="They aren't ready">They aren't ready</span> 🔊</p>
<p>Las contracciones negativas: <strong>I'm not</strong> (no existe "amn't"), <strong>isn't</strong>, <strong>aren't</strong>.</p>

<h3>Pregunta: dale la vuelta</h3>
<p>Para preguntar, <strong>el verbo salta al frente</strong>. Es un giro mecánico:</p>
<table>
<tr><th>Afirmación</th><th>Pregunta</th><th>Respuesta corta</th></tr>
<tr><td>You <strong>are</strong> Colombian.</td><td><strong>Are</strong> you Colombian?</td><td>Yes, I am. / No, I'm not.</td></tr>
<tr><td>She <strong>is</strong> a doctor.</td><td><strong>Is</strong> she a doctor?</td><td>Yes, she is. / No, she isn't.</td></tr>
<tr><td>They <strong>are</strong> here.</td><td><strong>Are</strong> they here?</td><td>Yes, they are. / No, they aren't.</td></tr>
</table>
<div class="box tip"><div class="box-title">Ojo con la respuesta corta</div>
En inglés <strong>no se responde solo "Yes"</strong> — suena cortante, casi grosero. Se responde
<span class="en">Yes, I am.</span> / <span class="en">No, I'm not.</span> Y en el "Yes" <strong>nunca</strong> se contrae:
se dice <em>Yes, I am</em>, jamás "Yes, I'm".</div>

<div class="box warn"><div class="box-title">⚠️ Los 4 errores que delatan a un hispanohablante</div>
<ol>
<li><strong>Nunca omitas el pronombre.</strong> En español decimos "Soy de Colombia" sin el "yo". En inglés
<span style="color:var(--red)">"Am from Colombia"</span> está mal. Siempre: <span class="en">I am from Colombia</span>.
El pronombre no es opcional, es obligatorio.</li>
<li><strong>La edad se "es", no se "tiene".</strong> <span style="color:var(--red)">"I have 30 years"</span> ✗ →
<span class="en">I am 30 years old</span> ✓. Traducirlo literal es el error #1 de toda Latinoamérica.</li>
<li><strong>Estar de acuerdo NO lleva to be.</strong> <span style="color:var(--red)">"I am agree"</span> ✗ →
<span class="en">I agree</span> ✓.</li>
<li><strong>Los oficios llevan "a".</strong> <span style="color:var(--red)">"I am doctor"</span> ✗ →
<span class="en">I am <strong>a</strong> doctor</span> ✓. En inglés, un oficio en singular siempre lleva <em>a / an</em>.</li>
</ol></div>

<p>Ahora a usarlo. Diez frases para rellenar. <span class="en">Fill in the blank with <strong>am</strong>, <strong>is</strong> or <strong>are</strong>.</span></p>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "I ___ from Colombia.", es: "Soy de Colombia.", answer: "am", alts: ["'m"], hint: "I → ?", why: "<strong>I</strong> siempre va con <strong>am</strong>. Sin excepciones en todo el idioma." },
            { sentence: "She ___ my sister.", es: "Ella es mi hermana.", answer: "is", why: "He, she, it → <strong>is</strong>." },
            { sentence: "They ___ at work.", es: "Ellos están en el trabajo.", answer: "are", why: "They → <strong>are</strong>. Y fíjate: aquí <em>to be</em> traduce \"estar\"." },
            { sentence: "You ___ a good friend.", es: "Eres un buen amigo.", answer: "are", why: "<strong>You</strong> siempre lleva <em>are</em>, sea \"tú\", \"usted\" o \"ustedes\"." },
            { sentence: "We ___ ready.", es: "Estamos listos.", answer: "are", why: "We → <strong>are</strong>." },
            { sentence: "It ___ a beautiful city.", es: "Es una ciudad hermosa.", answer: "is", why: "<strong>It</strong> se usa para cosas, lugares y animales. En español no lo traducimos, pero en inglés no se puede omitir." },
            { sentence: "He ___ not a teacher.", es: "Él no es profesor.", answer: "is", why: "El negativo es simplemente <em>is + not</em> → <strong>isn't</strong>." },
            { sentence: "___ you tired?", es: "¿Estás cansado?", answer: "Are", alts: ["are"], hint: "En la pregunta el verbo va primero.", why: "Pregunta con <em>you</em> → <strong>Are you…?</strong> Respuesta: <em>Yes, I am / No, I'm not.</em>" },
            { sentence: "My parents ___ from Medellín.", es: "Mis padres son de Medellín.", answer: "are", hint: "\"My parents\" = they", why: "<em>My parents</em> son varias personas = <strong>they</strong> → <em>are</em>." },
            { sentence: "I ___ 30 years old.", es: "Tengo 30 años.", answer: "am", why: "En inglés la edad se <em>es</em>, no se <em>tiene</em>: <strong>I am 30 years old</strong>. Nunca \"I have 30 years\"." },
          ],
        },
      },
      {
        title: "Build the sentences", titleEs: "Arma las frases con el banco de palabras",
        kind: "grammar", minutes: 7,
        html: `<p>Ahora al revés: te doy la frase en español y las palabras sueltas. Ármala en el orden correcto.
El <strong>orden de las palabras</strong> es la otra mitad de la gramática inglesa, y es mucho más rígido que en español.</p>`,
        ex: {
          type: "build",
          items: [
            { es: "Soy de Colombia.", answer: "I am from Colombia", extra: ["is", "the"], why: "Sujeto + verbo + resto. Siempre." },
            { es: "Ella no es profesora.", answer: "She is not a teacher", extra: ["am", "are"], why: "Fíjate en la <strong>a</strong> antes del oficio: <em>a teacher</em>." },
            { es: "¿Eres de México?", answer: "Are you from Mexico", extra: ["is", "am"], why: "En la pregunta el verbo va <strong>antes</strong> del sujeto: <em>Are you…?</em>" },
            { es: "Ellos están en casa.", answer: "They are at home", extra: ["is", "in", "the"], why: "\"En casa\" es <strong>at home</strong>, sin artículo. Es una expresión fija." },
            { es: "Mi nombre es Andrés.", answer: "My name is Andres", alts: ["My name is Andrés"], extra: ["am", "are", "I"], why: "También puedes decir <em>I am Andres</em> — más corto y más natural en el habla real." },
            { es: "Tengo treinta años.", answer: "I am thirty years old", extra: ["have", "is"], why: "Recuerda: la edad se <strong>es</strong> en inglés, no se tiene." },
          ],
        },
      },

      /* ---------- 5. Descanso ---------- */
      {
        title: "Take a break", titleEs: "Descanso · 5 minutos, de verdad",
        kind: "break", minutes: 5,
        html: `
<p><span class="en" data-say="Stand up. Walk. Drink some water. Look out the window.">Stand up. Walk. Drink some water. Look out the window.</span> 🔊</p>
<p class="es-hint">Levántate. Camina. Toma agua. Mira por la ventana.</p>
<div class="box tip"><div class="box-title">Por qué este descanso no es tiempo perdido</div>
Tu cerebro no consolida mientras recibe información, sino en las pausas. Cinco minutos sin pantalla ahora hacen
que la segunda hora rinda casi igual que la primera. Si sigues de largo, la segunda hora rinde la mitad.
<strong>No mires el celular</strong> — eso no es un descanso, es cambiar de trabajo.</div>
<p>Si quieres hacer algo útil sin esfuerzo: repite en voz alta, mirando al techo, <em>I am, you are, he is, she is, it is, we are, they are.</em> Cinco veces. Y ya.</p>`,
      },

      /* ---------- 6. Vocabulario 2 ---------- */
      {
        title: "Vocabulary 2 — who you are", titleEs: "Vocabulario 2 · las palabras para hablar de ti",
        kind: "vocabulary", minutes: 9,
        html: `<p>Las piezas que te faltan para construir tu presentación. Escucha, repite, y fíjate especialmente
en las palabras donde <strong>el acento cae distinto</strong> que en español (marcadas con la sílaba en mayúscula).</p>`,
        ex: {
          type: "flashcards",
          items: [
            { en: "name", ipa: "/neɪm/", es: "nombre", ex: "My name is Ana.", exEs: "Mi nombre es Ana." },
            { en: "country", ipa: "/ˈkʌntri/ — CUN-tri", es: "país", ex: "What country are you from?", exEs: "¿De qué país eres?" },
            { en: "city", ipa: "/ˈsɪti/ — SI-ti", es: "ciudad", ex: "I am from a small city.", exEs: "Soy de una ciudad pequeña." },
            { en: "job", ipa: "/dʒɑːb/", es: "trabajo, empleo", ex: "I like my job.", exEs: "Me gusta mi trabajo." },
            { en: "student", ipa: "/ˈstuːdənt/ — STIU-dent", es: "estudiante", ex: "I am a student.", exEs: "Soy estudiante." },
            { en: "teacher", ipa: "/ˈtiːtʃər/ — TII-cher", es: "profesor, profesora", ex: "She is an English teacher.", exEs: "Ella es profesora de inglés." },
            { en: "engineer", ipa: "/ˌendʒɪˈnɪr/ — en-yi-NÍAR", es: "ingeniero/a", ex: "He is an engineer.", exEs: "Él es ingeniero." },
            { en: "driver", ipa: "/ˈdraɪvər/ — DRÁI-ver", es: "conductor, chofer", ex: "My brother is a driver.", exEs: "Mi hermano es conductor." },
            { en: "friend", ipa: "/frend/", es: "amigo, amiga", ex: "This is my friend Luis.", exEs: "Este es mi amigo Luis." },
            { en: "family", ipa: "/ˈfæməli/ — FÁ-mi-li", es: "familia", ex: "My family is big.", exEs: "Mi familia es grande." },
            { en: "married", ipa: "/ˈmærid/ — MÁ-rid", es: "casado/a", ex: "I am married.", exEs: "Estoy casado." },
            { en: "single", ipa: "/ˈsɪŋɡəl/ — SÍN-gol", es: "soltero/a", ex: "She is single.", exEs: "Ella es soltera." },
            { en: "happy", ipa: "/ˈhæpi/ — JÁ-pi", es: "feliz, contento", ex: "I am happy today.", exEs: "Estoy contento hoy." },
            { en: "tired", ipa: "/ˈtaɪərd/ — TÁI-erd", es: "cansado/a", ex: "I am tired.", exEs: "Estoy cansado." },
            { en: "years old", ipa: "/jɪrz oʊld/", es: "años (de edad)", ex: "I am thirty years old.", exEs: "Tengo treinta años." },
          ],
        },
      },
      {
        title: "Match — who you are", titleEs: "Empareja el vocabulario nuevo",
        kind: "vocabulary", minutes: 4,
        ex: {
          type: "match",
          pairs: [
            ["country", "país"], ["city", "ciudad"], ["job", "trabajo"],
            ["teacher", "profesor"], ["engineer", "ingeniero"], ["driver", "conductor"],
            ["married", "casado"], ["single", "soltero"], ["tired", "cansado"], ["family", "familia"],
          ],
        },
      },

      /* ---------- 7. Listening ---------- */
      {
        title: "Listening — dictation", titleEs: "Escucha y escribe (dictado)",
        kind: "listening", minutes: 10,
        html: `
<p>El ejercicio más incómodo del día y el que más te va a servir. Vas a oír una frase y escribirla.
Puedes repetirla las veces que quieras y ponerla en lento 🐢.</p>
<div class="box tip"><div class="box-title">Cómo hacerlo bien</div>
<ul>
<li>Escucha <strong>la frase entera</strong> una vez sin escribir nada. Luego escribe.</li>
<li>Si no entiendes una palabra, escribe lo que <em>te parece</em> que oíste y comprueba. Adivinar y fallar
enseña más que volver a escuchar diez veces.</li>
<li>El acierto no es la ortografía perfecta: es <strong>separar las palabras correctamente</strong>. El inglés hablado
pega las palabras (<em>I'm from</em> suena "áimfrom") y ese es justo el músculo que estás entrenando.</li>
</ul></div>`,
        ex: {
          type: "dictation",
          items: [
            { en: "Hello, my name is Peter.", es: "Hola, mi nombre es Peter." },
            { en: "I am from Colombia.", es: "Soy de Colombia.", why: "Fíjate que <em>I am</em> suena casi como una sola palabra." },
            { en: "She is a teacher.", es: "Ella es profesora." },
            { en: "Nice to meet you.", es: "Mucho gusto.", why: "Suena \"náis tu miit iu\" — las tres palabras se pegan." },
            { en: "They are not at home.", es: "Ellos no están en casa." },
            { en: "Are you from Mexico?", es: "¿Eres de México?" },
            { en: "I am thirty years old.", es: "Tengo treinta años." },
            { en: "My friend is an engineer.", es: "Mi amigo es ingeniero.", why: "<strong>an</strong> engineer, no \"a engineer\": antes de sonido de vocal se usa <em>an</em>." },
          ],
        },
      },

      /* ---------- 8. Planas de verbos ---------- */
      {
        title: "✍️ The verb drill — write it 3 times", titleEs: "Las planas de verbos · el ritual diario",
        kind: "drill", minutes: 12,
        html: `
<p>Esto es una <strong>plana</strong>, la de toda la vida — pero con corrección instantánea y con los verbos en
desorden en cada ronda, para que memorices el verbo y no la posición en la lista.</p>
<p>Los <strong>12 verbos más frecuentes del inglés</strong>. No están elegidos por gusto: entre estos doce cubren
alrededor de una cuarta parte de todos los verbos que aparecen en una conversación normal. Y los doce son
<strong>irregulares</strong>, o sea que no hay reglas — hay que grabarlos. La plana es la herramienta más aburrida
y más eficaz que existe para eso.</p>

<div class="box"><div class="box-title">📝 Hazlo también a mano</div>
Abre el cuaderno y escribe la lista completa <strong>a mano, tres veces</strong>, diciendo cada verbo en voz alta
mientras lo escribes: <em>"go, went… go, went…"</em>. Escribir a mano activa memoria motora que teclear no toca, y
decirlo en voz alta añade la memoria auditiva. Tres canales a la vez. Luego haz las 3 rondas de aquí abajo.</div>

<div class="box tip"><div class="box-title">Esta plana es diaria</div>
Vas a repetir esta misma plana <strong>todos los días de las próximas dos semanas</strong>, y la encuentras siempre
en <em>Practice → Verb drill</em>. Al día 10 la haces sin pensar y los verbos irregulares dejan de ser un problema
para el resto de tu vida. Es la inversión con mejor retorno de todo el curso.</div>

<p><span class="en">Write the past simple of each verb. Three rounds.</span>
<span class="es-hint">Escribe el pasado de cada verbo. Tres rondas.</span></p>`,
        ex: { type: "verbdrill", verbs: CORE_VERBS, reps: 3 },
      },

      /* ---------- 9. Descanso corto ---------- */
      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Stretch your hands. Breathe. The next block is speaking.">Stretch your hands. Breathe. The next block is speaking.</span> 🔊</p>
<p class="es-hint">Estira las manos. Respira. El siguiente bloque es de hablar.</p>
<p>Prepara el micrófono. Si estás en un sitio donde te da pena hablar en voz alta, es el momento de cambiarte de cuarto:
el bloque de speaking <strong>no funciona susurrando</strong>.</p>`,
      },

      /* ---------- 10. Speaking ---------- */
      {
        title: "Speaking lab", titleEs: "Laboratorio de pronunciación · habla en voz alta",
        kind: "speaking", minutes: 13,
        html: `
<p>Ocho frases. Para cada una: <strong>escúchala</strong> (🔊), <strong>escúchala lento</strong> (🐢),
y <strong>dila al micrófono</strong>. El curso te la califica palabra por palabra: en verde lo que se entendió,
en rojo lo que no. Necesitas <strong>70%</strong> para pasar, y tienes 3 intentos por frase.</p>
<div class="box tip"><div class="box-title">Tres trucos que suben el puntaje de inmediato</div>
<ul>
<li><strong>Exagera.</strong> Abre más la boca de lo que te parece necesario. Lo que a ti te suena exagerado, para un
nativo suena normal.</li>
<li><strong>No pronuncies las palabras sueltas.</strong> Di la frase como un bloque: <em>I'm from Colombia</em> es
"áim-from-co-LOM-bia", no cuatro palabras separadas.</li>
<li><strong>El acento inglés se come vocales.</strong> En <em>Colombia</em> la sílaba fuerte es LOM y las demás casi
desaparecen. Marcar todas las sílabas igual es lo que más "acento latino" produce.</li>
</ul></div>
<div class="box warn"><div class="box-title">Si el micrófono no funciona</div>
El reconocimiento de voz solo existe en <strong>Chrome</strong> y <strong>Edge</strong> (en Firefox y Safari no).
Si no te aparece el botón del micrófono, ábrelo en Chrome. Y la primera vez el navegador pide permiso: acéptalo.</div>`,
        ex: {
          type: "speak",
          target: 70,
          items: [
            { en: "Hello, my name is Andres.", es: "Hola, mi nombre es Andrés.", tip: "El <strong>h</strong> de <em>hello</em> se pronuncia soplando, como una jota muy suave: \"jelóu\"." },
            { en: "Nice to meet you.", es: "Mucho gusto.", tip: "Se dice de corrido: \"náistumíchu\". No separes las palabras." },
            { en: "I am from Colombia.", es: "Soy de Colombia.", tip: "En inglés <em>Colombia</em> lleva el acento en LOM: co-LOM-bia." },
            { en: "I am thirty years old.", es: "Tengo treinta años.", tip: "<em>Thirty</em> empieza con la lengua entre los dientes: \"zzzír-ti\". Es el sonido que no existe en español." },
            { en: "I am an engineer.", es: "Soy ingeniero.", tip: "<em>Engineer</em> lleva el acento al final: en-yi-NÍAR." },
            { en: "She is my friend.", es: "Ella es mi amiga.", tip: "Ojo con <em>she</em> (\"shíi\") — no lo digas como \"chi\"." },
            { en: "Are you from Mexico?", es: "¿Eres de México?", tip: "La pregunta sube de tono al final. Súbelo de verdad, aunque te sienta raro." },
            { en: "Thank you very much. Goodbye.", es: "Muchas gracias. Adiós.", tip: "<em>Thank</em> también lleva la lengua entre los dientes. \"Zzzénk iu\"." },
          ],
        },
      },

      /* ---------- 11. Producción propia ---------- */
      {
        title: "Your own introduction", titleEs: "Tu propia presentación · esto es lo que te llevas de hoy",
        kind: "production", minutes: 8,
        html: `
<p>Todo lo de hoy existía para llegar a este bloque. Vas a escribir <strong>tu</strong> presentación, con tus datos
reales, y decirla en voz alta hasta que salga sin leer.</p>

<h3>La plantilla</h3>
<div class="box">
<p style="margin:6px 0"><span class="en">Hello! My name is <em>_______</em>.</span> <span class="es-hint">Hola, mi nombre es…</span></p>
<p style="margin:6px 0"><span class="en">I am <em>_______</em> years old.</span> <span class="es-hint">Tengo … años.</span></p>
<p style="margin:6px 0"><span class="en">I am from <em>_______</em>.</span> <span class="es-hint">Soy de…</span></p>
<p style="margin:6px 0"><span class="en">I live in <em>_______</em>.</span> <span class="es-hint">Vivo en… (verbo nuevo, regalado)</span></p>
<p style="margin:6px 0"><span class="en">I am <em>a/an _______</em>.</span> <span class="es-hint">Soy … (oficio — no olvides el "a")</span></p>
<p style="margin:6px 0"><span class="en">I am married / I am single.</span> <span class="es-hint">Estoy casado / soltero.</span></p>
<p style="margin:6px 0"><span class="en">I am learning English. Nice to meet you!</span> <span class="es-hint">Estoy aprendiendo inglés. ¡Mucho gusto!</span></p>
</div>

<h3>Qué hacer con ella — en este orden</h3>
<ol>
<li><strong>Escríbela a mano</strong> en el cuaderno, completa, con tus datos.</li>
<li><strong>Léela en voz alta</strong> tres veces, despacio.</li>
<li><strong>Tápala y dila de memoria.</strong> Si te trabas, mira, tápala otra vez y vuelve a empezar desde el principio.</li>
<li>Cuando salga entera sin mirar: <strong>grábate con el celular</strong> y escúchate. Va a sonar raro — a todo el mundo
le suena raro su propia voz. Escúchalo igual: es el mejor detector de errores que tienes.</li>
<li>Guarda esa grabación. En el día 30 la vas a volver a oír y no vas a creer que eras tú.</li>
</ol>

<div class="box tip"><div class="box-title">🎤 Y ahora dilo aquí</div>
Abajo tienes las frases de la plantilla para practicar la pronunciación. Cambia mentalmente los datos por los tuyos
mientras las dices — el curso califica la frase modelo, pero tu boca está aprendiendo la tuya.</div>`,
        ex: {
          type: "speak",
          target: 65,
          items: [
            { en: "Hello! My name is Andres and I am thirty years old.", es: "¡Hola! Mi nombre es Andrés y tengo treinta años.", tip: "Frase larga: respira antes, dila de corrido, no palabra por palabra." },
            { en: "I am from Colombia and I live in Bogota.", es: "Soy de Colombia y vivo en Bogotá.", tip: "<em>Live</em> aquí se dice \"liv\", corto — no \"láiv\"." },
            { en: "I am an engineer and I am learning English.", es: "Soy ingeniero y estoy aprendiendo inglés.", tip: "<em>English</em> se dice \"ÍN-glish\", con la I al principio bien marcada." },
          ],
        },
      },

      /* ---------- 12. Traducción ---------- */
      {
        title: "Translate it yourself", titleEs: "Traduce tú · sin banco de palabras, sin ayudas",
        kind: "production", minutes: 8,
        html: `<p>Ahora sin muletas: te doy el español y escribes el inglés desde cero. Este es el ejercicio que de verdad
mide si aprendiste hoy, porque no hay nada que reconocer — hay que producir.</p>
<p class="muted">Se aceptan contracciones (<em>I'm</em>) y formas completas (<em>I am</em>). Un error de ortografía pequeño te lo perdona, pero te lo señala.</p>`,
        ex: {
          type: "translate",
          items: [
            { es: "Hola, mi nombre es María.", answer: "Hello, my name is Maria", alts: ["Hi, my name is Maria", "Hello my name is Maria", "Hello, my name is María"] },
            { es: "Soy de Colombia.", answer: "I am from Colombia", alts: ["I'm from Colombia"] },
            { es: "Ella es profesora.", answer: "She is a teacher", alts: ["She's a teacher"], why: "No olvides la <strong>a</strong>: los oficios en singular siempre la llevan." },
            { es: "No estoy cansado.", answer: "I am not tired", alts: ["I'm not tired"], why: "El negativo es <em>am + not</em>. No existe \"amn't\"." },
            { es: "¿Eres estudiante?", answer: "Are you a student", alts: ["Are you a student?"], why: "Verbo primero en la pregunta, y la <em>a</em> antes de <em>student</em>." },
            { es: "Ellos están en casa.", answer: "They are at home", alts: ["They're at home"], why: "<strong>At home</strong>, expresión fija, sin artículo." },
            { es: "Tengo treinta años.", answer: "I am thirty years old", alts: ["I'm thirty years old", "I am 30 years old", "I'm 30 years old"], why: "La edad se <em>es</em>, nunca se <em>tiene</em>." },
            { es: "Mucho gusto.", answer: "Nice to meet you", why: "Literalmente \"agradable conocerte\". No intentes traducir \"mucho gusto\" palabra por palabra: es una expresión fija." },
          ],
        },
      },

      /* ---------- 13. Examen ---------- */
      {
        title: "🏁 Day 1 exam", titleEs: "Examen del día 1 · necesitas 80% para aprobar",
        kind: "exam", minutes: 10,
        html: `
<p>Quince preguntas mezcladas de todo lo de hoy: gramática, vocabulario, escucha y traducción.
<strong>Necesitas 80% para aprobar.</strong> Si no lo logras, repítelo — repetir un examen fija más memoria
que releer la lección, y eso está medido.</p>
<p class="muted">Tu mejor nota se guarda y la ves siempre en Progress.</p>`,
        ex: {
          type: "exam", pass: 80, dayId: "d1", shuffle: true,
          items: [
            { kind: "choice", q: "I ___ a student.", qEs: "Soy estudiante.", options: ["am", "is", "are", "be"], answer: 0, why: "<strong>I</strong> siempre con <em>am</em>." },
            { kind: "choice", q: "She ___ from Peru.", qEs: "Ella es de Perú.", options: ["am", "are", "is", "be"], answer: 2, why: "He / she / it → <strong>is</strong>." },
            { kind: "choice", q: "___ they at home?", qEs: "¿Están ellos en casa?", options: ["Is", "Am", "Be", "Are"], answer: 3, why: "They → <em>are</em>, y en pregunta va primero." },
            { kind: "choice", q: "Which one is CORRECT?", qEs: "¿Cuál es correcta?", options: ["I have 25 years.", "I am 25 years old.", "I have 25 years old.", "I am 25 years."], answer: 1, why: "La edad en inglés se <strong>es</strong>: <em>I am 25 years old</em>." },
            { kind: "choice", q: "Which one is CORRECT?", qEs: "¿Cuál es correcta?", options: ["Am from Chile.", "I from Chile.", "I am from Chile.", "From Chile I am."], answer: 2, why: "El pronombre <strong>nunca</strong> se omite en inglés." },
            { kind: "choice", q: "You meet someone for the first time. You say:", qEs: "Conoces a alguien por primera vez. Dices:", options: ["See you tomorrow.", "You're welcome.", "Nice to meet you.", "Excuse me."], answer: 2, why: "<em>Nice to meet you</em> = mucho gusto." },
            { kind: "choice", q: "Someone says 'Thank you'. You answer:", qEs: "Alguien te da las gracias. Respondes:", options: ["You're welcome.", "I'm sorry.", "Good night.", "Please."], answer: 0, why: "<em>You're welcome</em> = de nada." },
            { kind: "choice", q: "It's 9 p.m. and you are LEAVING. You say:", qEs: "Son las 9 de la noche y te vas. Dices:", options: ["Good evening.", "Good night.", "Good afternoon.", "Good morning."], answer: 1, why: "<em>Good evening</em> es para <strong>llegar</strong> de noche; <em>good night</em> para <strong>irte</strong>." },
            { kind: "fill", sentence: "We ___ ready.", es: "Estamos listos.", answer: "are", why: "We → are." },
            { kind: "fill", sentence: "He ___ not my brother.", es: "Él no es mi hermano.", answer: "is", why: "He → is. Negativo: <em>is not / isn't</em>." },
            { kind: "fill", sentence: "The past of GO is ___.", es: "El pasado de \"go\".", answer: "went", why: "go → <strong>went</strong>. Irregular puro." },
            { kind: "fill", sentence: "The past of THINK is ___.", es: "El pasado de \"think\".", answer: "thought", why: "think → <strong>thought</strong>. Se dice \"zzzot\", con la lengua entre los dientes." },
            { kind: "dictation", en: "I am not a teacher.", es: "No soy profesor." },
            { kind: "dictation", en: "Are you from Colombia?", es: "¿Eres de Colombia?" },
            { kind: "translate", es: "Ella no está cansada.", answer: "She is not tired", alts: ["She isn't tired", "She's not tired"], why: "<em>is not</em> → <strong>isn't</strong>." },
          ],
        },
      },

      /* ---------- 14. Cierre ---------- */
      {
        title: "Well done — homework for tonight", titleEs: "Bien hecho · la tarea de esta noche (5 minutos)",
        kind: "wrap-up", minutes: 3,
        html: `
<p>Terminaste dos horas de inglés estructurado. Eso ya te pone por delante de la mayoría de la gente que
"lleva años intentándolo".</p>

<h3>Lo que sabes hacer ahora y no sabías esta mañana</h3>
<ul>
<li>Presentarte: nombre, edad, país, oficio, estado civil.</li>
<li>Usar <strong>am / is / are</strong> en afirmativo, negativo y pregunta.</li>
<li>Deletrear tu nombre.</li>
<li>Saludar y despedirte según la hora del día sin meter la pata.</li>
<li>Reconocer el pasado de los 12 verbos más usados del idioma.</li>
</ul>

<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Di tu presentación completa en voz alta, una vez. Sin mirar.</li>
<li>Lee la lista de los 12 verbos en voz alta, una vez: <em>be–was, have–had, do–did…</em></li>
<li>Y ya. No estudies más. <strong>Dormir después de estudiar es parte del estudio</strong>: la consolidación de lo
aprendido pasa mientras duermes, y lo último que repasas antes de dormir es lo que mejor se fija.</li>
</ol></div>

<div class="box tip"><div class="box-title">Mañana · Day 2</div>
Números, la hora, y las <strong>WH- questions</strong>: what, where, who, how. Ahí empiezas a poder preguntar,
que es lo que convierte un monólogo en una conversación.</div>

<p><span class="en" data-say="See you tomorrow. Same time. Don't break the chain.">See you tomorrow. Same time. Don't break the chain.</span> 🔊
<span class="es-hint">Nos vemos mañana. A la misma hora. No rompas la cadena.</span></p>`,
      },
    ],
  };

  /* ============================================================
     Los días que vienen (aún sin construir)
     ============================================================ */

  const M0 = {
    id: "m0", icon: "🌱",
    title: "Module 0 · Foundations",
    sub: "Semana 1 · Presentarte, preguntar, contar y describir. La base sobre la que va todo lo demás.",
    days: [DAY1].concat(window.DAYS_M0 || []),
  };

  /* Los módulos que aún no están construidos. El plan completo son
     ~11 semanas (unos 3 meses a 6 días por semana, 2 h diarias). */
  const LOCKED = [
    { id: "m1", icon: "☀️", title: "Module 1 · Your daily life", sub: "Semana 2 (días 7-14) · Presente simple, rutinas, la -s de la tercera persona, adverbios de frecuencia y los días de la semana", locked: true },
    { id: "m2", icon: "💬", title: "Module 2 · Right now", sub: "Semanas 3-4 (días 15-22) · Presente continuo, ropa y clima, el cuerpo, y el inglés de las situaciones cotidianas — cierra el mes 1", locked: true },
    { id: "m3", icon: "🕰️", title: "Module 3 · The past", sub: "Semanas 5-6 (días 23-32) · Pasado simple, verbos regulares e irregulares, contar historias y anécdotas", locked: true },
    { id: "m4", icon: "🌎", title: "Module 4 · Out in the world", sub: "Semanas 7-8 (días 33-42) · Restaurantes, direcciones, compras, aeropuerto, hotel y resolver problemas — cierra el mes 2", locked: true },
    { id: "m5", icon: "🚀", title: "Module 5 · The future", sub: "Semana 9 (días 43-50) · Will, going to, planes, promesas y condicionales básicos", locked: true },
    { id: "m6", icon: "🎧", title: "Module 6 · Real English", sub: "Semana 10 (días 51-58) · Escucha de audio nativo, acentos, contracciones habladas y phrasal verbs", locked: true },
    { id: "m7", icon: "🗣️", title: "Module 7 · Conversation", sub: "Semanas 11-12 (días 59-66) · Conversación libre, mantener el turno, ganar tiempo y sonar natural — cierra el mes 3", locked: true },
  ];

  /* Los bloques de planas declaran verbs: [] y se rellenan aquí, para
     que la lista viva en un solo sitio. */
  function fillVerbDrills(days) {
    days.forEach(d => (d.blocks || []).forEach(b => {
      if (b.ex && b.ex.type === "verbdrill" && (!b.ex.verbs || !b.ex.verbs.length)) b.ex.verbs = CORE_VERBS;
    }));
    return days;
  }
  fillVerbDrills(M0.days);

  window.Curriculum = {
    MILESTONES,
    CORE_VERBS,
    MODULES: [M0].concat(LOCKED),
    allDays() {
      return this.MODULES.filter(m => m.days).reduce((a, m) => a.concat(m.days.map(d => Object.assign({ moduleId: m.id }, d))), []);
    },
  };
})();
