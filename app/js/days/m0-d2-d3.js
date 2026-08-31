/* ============================================================
   Módulo 0 · Días 2 y 3
   Se registran en window.DAYS_M0, que curriculum.js recoge.
   ============================================================ */

(function () {
  "use strict";

  /* ============================================================
     DAY 2 — Numbers, time and questions
     ============================================================ */

  const DAY2 = {
    id: "d2",
    title: "Day 2 · Numbers and questions",
    titleEs: "Números, la hora y las preguntas WH-",
    goal: "Hoy pasas de hablar de ti a poder preguntar. Números, la hora y las seis palabras que abren cualquier conversación.",
    canDo: [
      "…count from 0 to 100 and say any price or phone number.",
      "…tell the time and ask <strong>What time is it?</strong>",
      "…ask questions with <strong>what, where, who, when, why, how</strong>.",
      "…hear the difference between <em>thirteen</em> and <em>thirty</em>.",
      "…have a short conversation of question and answer.",
    ],
    blocks: [
      {
        title: "Warm-up — what you learned yesterday", titleEs: "Calentamiento · repaso rápido del día 1",
        kind: "review", minutes: 5,
        html: `<p>Antes de nada, cinco preguntas del día de ayer. No es para calificarte: es que <strong>recordar algo el día
siguiente es lo que lo mueve de la memoria de corto plazo a la de largo plazo</strong>. Este bloque de repaso va a estar
al principio de cada día del curso, y es de los más importantes aunque parezca el más tonto.</p>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "I ___ from Colombia.", options: ["is", "am", "are", "be"], answer: 1, why: "I → <strong>am</strong>. Siempre." },
            { q: "They ___ my friends.", options: ["is", "am", "are", "be"], answer: 2, why: "They → <strong>are</strong>." },
            { q: "Which one is CORRECT?", qEs: "¿Cuál es correcta?", options: ["I have 30 years.", "I am 30 years old.", "I have 30 years old.", "I am 30 years."], answer: 1, why: "La edad se <em>es</em> en inglés." },
            { q: "The past of GO is…", options: ["goed", "gone", "went", "going"], answer: 2, why: "go → <strong>went</strong>." },
            { q: "The past of SEE is…", options: ["saw", "seed", "seen", "sawed"], answer: 0, why: "see → <strong>saw</strong>." },
          ],
        },
      },

      {
        title: "Numbers 0 to 20", titleEs: "Los números del 0 al 20",
        kind: "vocabulary", minutes: 10,
        html: `
<p>Los números son la parte del idioma que <strong>más rápido se necesita y más tarde se domina</strong>: precios, horas,
teléfonos, direcciones, fechas. Del 0 al 12 hay que memorizar; del 13 al 19 hay una regla.</p>
<table>
<tr><td><strong>0</strong> zero <span class="say" data-say="zero">🔊</span></td><td><strong>1</strong> one <span class="say" data-say="one">🔊</span></td><td><strong>2</strong> two <span class="say" data-say="two">🔊</span></td><td><strong>3</strong> three <span class="say" data-say="three">🔊</span></td></tr>
<tr><td><strong>4</strong> four <span class="say" data-say="four">🔊</span></td><td><strong>5</strong> five <span class="say" data-say="five">🔊</span></td><td><strong>6</strong> six <span class="say" data-say="six">🔊</span></td><td><strong>7</strong> seven <span class="say" data-say="seven">🔊</span></td></tr>
<tr><td><strong>8</strong> eight <span class="say" data-say="eight">🔊</span></td><td><strong>9</strong> nine <span class="say" data-say="nine">🔊</span></td><td><strong>10</strong> ten <span class="say" data-say="ten">🔊</span></td><td><strong>11</strong> eleven <span class="say" data-say="eleven">🔊</span></td></tr>
<tr><td><strong>12</strong> twelve <span class="say" data-say="twelve">🔊</span></td><td><strong>13</strong> thirteen <span class="say" data-say="thirteen">🔊</span></td><td><strong>14</strong> fourteen <span class="say" data-say="fourteen">🔊</span></td><td><strong>15</strong> fifteen <span class="say" data-say="fifteen">🔊</span></td></tr>
<tr><td><strong>16</strong> sixteen <span class="say" data-say="sixteen">🔊</span></td><td><strong>17</strong> seventeen <span class="say" data-say="seventeen">🔊</span></td><td><strong>18</strong> eighteen <span class="say" data-say="eighteen">🔊</span></td><td><strong>19</strong> nineteen <span class="say" data-say="nineteen">🔊</span></td></tr>
<tr><td><strong>20</strong> twenty <span class="say" data-say="twenty">🔊</span></td><td colspan="3"></td></tr>
</table>
<div class="box gram"><div class="box-title">📐 La regla del -TEEN</div>
Del 13 al 19 es <strong>número + TEEN</strong>: six → six<strong>teen</strong>, seven → seven<strong>teen</strong>.
Solo tres se deforman un poco y hay que fijarlos: <strong>thir</strong>teen (no "threeteen"),
<strong>fif</strong>teen (no "fiveteen") y <strong>eigh</strong>teen (una sola t).</div>
<div class="box"><div class="box-title">🗣️ Do this now</div>
Cuenta en voz alta del 0 al 20. Luego <strong>al revés</strong>, del 20 al 0 — cuesta el doble y por eso sirve el doble.
Y después di tu número de teléfono, dígito por dígito, en inglés.</div>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "🎧 Which number is it?", audio: "seven", options: ["6", "7", "11", "17"], answer: 1, sayAnswer: false },
            { q: "🎧 Which number is it?", audio: "twelve", options: ["2", "10", "12", "20"], answer: 2, sayAnswer: false },
            { q: "🎧 Which number is it?", audio: "fifteen", options: ["5", "15", "50", "14"], answer: 1, sayAnswer: false },
            { q: "🎧 Which number is it?", audio: "eighteen", options: ["8", "18", "80", "19"], answer: 1, sayAnswer: false },
            { q: "🎧 Which number is it?", audio: "eleven", options: ["7", "11", "12", "1"], answer: 1, sayAnswer: false },
            { q: "Nine + four = ?", qEs: "Nueve más cuatro", options: ["thirteen", "fourteen", "twelve", "thirty"], answer: 0, why: "9 + 4 = 13 = <strong>thirteen</strong>." },
          ],
        },
      },

      {
        title: "Numbers 20 to 100 — and the 13/30 trap", titleEs: "Del 20 al 100 · y la trampa del 13 contra el 30",
        kind: "listening", minutes: 10,
        html: `
<p>Las decenas terminan en <strong>-TY</strong>:</p>
<table>
<tr><td><strong>20</strong> twenty <span class="say" data-say="twenty">🔊</span></td><td><strong>30</strong> thirty <span class="say" data-say="thirty">🔊</span></td><td><strong>40</strong> forty <span class="say" data-say="forty">🔊</span></td><td><strong>50</strong> fifty <span class="say" data-say="fifty">🔊</span></td></tr>
<tr><td><strong>60</strong> sixty <span class="say" data-say="sixty">🔊</span></td><td><strong>70</strong> seventy <span class="say" data-say="seventy">🔊</span></td><td><strong>80</strong> eighty <span class="say" data-say="eighty">🔊</span></td><td><strong>90</strong> ninety <span class="say" data-say="ninety">🔊</span></td></tr>
<tr><td><strong>100</strong> one hundred <span class="say" data-say="one hundred">🔊</span></td><td colspan="3">Ojo: <strong>forty</strong> pierde la <em>u</em> de <em>four</em>. Es la falta de ortografía más común del inglés.</td></tr>
</table>
<p>Y los intermedios se unen con guion: 21 = <strong>twenty-one</strong> <span class="say" data-say="twenty-one">🔊</span>,
34 = <strong>thirty-four</strong> <span class="say" data-say="thirty-four">🔊</span>, 99 = <strong>ninety-nine</strong> <span class="say" data-say="ninety-nine">🔊</span>.
Igual que en español, pero sin las rarezas de "dieciséis" o "veintidós".</p>

<div class="box warn"><div class="box-title">⚠️ La trampa que arruina precios y horas: -TEEN contra -TY</div>
<p><strong>13</strong> thir<u>teen</u> <span class="say" data-say="thirteen">🔊</span> · <strong>30</strong> <u>thir</u>ty <span class="say" data-say="thirty">🔊</span></p>
<p><strong>15</strong> fif<u>teen</u> <span class="say" data-say="fifteen">🔊</span> · <strong>50</strong> <u>fif</u>ty <span class="say" data-say="fifty">🔊</span></p>
<p>La diferencia real <strong>no está en el sonido final, está en el acento</strong>: en <em>-teen</em> la fuerza va
al <strong>final</strong> (thir-<strong>TEEN</strong>), en <em>-ty</em> va al <strong>principio</strong> (<strong>THIR</strong>-ty).
Esto causa malentendidos de dinero todos los días en el mundo real: "fifteen dollars" y "fifty dollars" no son lo mismo.
Cuando dudes, pregunta: <span class="en" data-say="One five or five zero?">"One five, or five zero?"</span> 🔊 — es lo que hacen los nativos entre ellos.</p></div>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "🎧 Which one do you hear?", audio: "thirteen", options: ["13", "30"], answer: 0, why: "thir-<strong>TEEN</strong>, con la fuerza al final.", sayAnswer: false },
            { q: "🎧 Which one do you hear?", audio: "thirty", options: ["13", "30"], answer: 1, why: "<strong>THIR</strong>-ty, con la fuerza al principio.", sayAnswer: false },
            { q: "🎧 Which one do you hear?", audio: "fifty", options: ["15", "50"], answer: 1, sayAnswer: false },
            { q: "🎧 Which one do you hear?", audio: "sixteen", options: ["16", "60"], answer: 0, sayAnswer: false },
            { q: "🎧 How much is it?", audio: "It is forty-five dollars.", options: ["$14.50", "$45", "$54", "$4.50"], answer: 1, sayAnswer: false },
            { q: "How do you write 40?", qEs: "¿Cómo se escribe 40?", options: ["fourty", "forty", "fourthy", "fortty"], answer: 1, why: "<strong>forty</strong>, sin la <em>u</em>. Aunque 4 sea <em>four</em>." },
          ],
        },
      },

      {
        title: "Number dictation", titleEs: "Dictado de números y precios",
        kind: "listening", minutes: 8,
        html: `<p>Escribe los números <strong>en cifras</strong> (34, no "thirty-four"). Esto es exactamente lo que tu cerebro
tendrá que hacer cuando te digan un precio o un número de habitación.</p>`,
        ex: {
          type: "dictation",
          items: [
            { en: "twenty-one", es: "21" },
            { en: "sixty-eight", es: "68" },
            { en: "ninety-nine", es: "99" },
            { en: "seventeen", es: "17", why: "seven<strong>TEEN</strong> — la fuerza al final." },
            { en: "seventy", es: "70", why: "<strong>SEVEN</strong>-ty — la fuerza al principio." },
            { en: "one hundred", es: "100" },
          ],
        },
      },

      {
        title: "What time is it?", titleEs: "La hora",
        kind: "grammar", minutes: 12,
        html: `
<p>Hay dos formas de decir la hora. La buena noticia: <strong>puedes vivir toda tu vida usando solo la primera</strong>.</p>

<h3>Forma 1 — la fácil (y la más usada hoy)</h3>
<p>Se dicen los números tal cual, como un reloj digital:</p>
<ul>
<li>3:00 → <span class="en" data-say="It's three o'clock">It's three o'clock</span> 🔊 <span class="es-hint">(en punto)</span></li>
<li>3:15 → <span class="en" data-say="It's three fifteen">It's three fifteen</span> 🔊</li>
<li>3:30 → <span class="en" data-say="It's three thirty">It's three thirty</span> 🔊</li>
<li>3:45 → <span class="en" data-say="It's three forty-five">It's three forty-five</span> 🔊</li>
<li>3:05 → <span class="en" data-say="It's three oh five">It's three oh five</span> 🔊 <span class="es-hint">— el cero se dice "oh", como la letra O</span></li>
</ul>

<h3>Forma 2 — la clásica (hay que entenderla, no necesariamente usarla)</h3>
<ul>
<li>3:15 → <span class="en" data-say="It's a quarter past three">It's a quarter past three</span> 🔊 <span class="es-hint">y cuarto</span></li>
<li>3:30 → <span class="en" data-say="It's half past three">It's half past three</span> 🔊 <span class="es-hint">y media</span></li>
<li>3:45 → <span class="en" data-say="It's a quarter to four">It's a quarter to four</span> 🔊 <span class="es-hint">cuarto para las cuatro</span></li>
</ul>
<p><strong>past</strong> = pasada (después) · <strong>to</strong> = para (antes). Fíjate en el detalle traicionero:
"a quarter <em>to</em> four" son las 3:45, no las 4:45 — igual que nuestro "un cuarto para las cuatro".</p>

<div class="box tip"><div class="box-title">AM y PM</div>
El inglés no usa reloj de 24 horas en la vida diaria: no existe "las quince horas". Se usa
<strong>a.m.</strong> (madrugada y mañana) y <strong>p.m.</strong> (tarde y noche).
Las 15:00 son <span class="en" data-say="three p m">3 p.m.</span> 🔊</div>

<div class="box"><div class="box-title">Las preguntas de la hora</div>
<p style="margin:4px 0"><span class="en" data-say="What time is it?">What time is it?</span> 🔊 <span class="es-hint">¿Qué hora es?</span></p>
<p style="margin:4px 0"><span class="en" data-say="What time do you start?">What time do you start?</span> 🔊 <span class="es-hint">¿A qué hora empiezas?</span></p>
<p style="margin:4px 0"><span class="en" data-say="At seven o'clock.">At seven o'clock.</span> 🔊 <span class="es-hint">A las siete. — ojo: la hora lleva <strong>at</strong></span></p></div>`,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "It's 4:30. You say:", options: ["It's four thirty.", "It's thirty four.", "It's four and half.", "It's half four past."], answer: 0, why: "Primero la hora, después los minutos: <strong>four thirty</strong>." },
            { q: "It's 7:15. Another way to say it:", options: ["a quarter to seven", "a quarter past seven", "half past seven", "seven to quarter"], answer: 1, why: "<em>past</em> = ya pasó la hora. 7:15 = a quarter past seven." },
            { q: "'It's a quarter to nine' is…", options: ["9:15", "9:45", "8:45", "8:15"], answer: 2, why: "<em>to</em> = falta para las nueve → <strong>8:45</strong>." },
            { q: "It's 6:05. You say:", options: ["It's six five.", "It's six oh five.", "It's five six.", "It's six zero five."], answer: 1, why: "El cero se dice <strong>oh</strong>: six oh five." },
            { q: "¿Qué hora es en inglés a las 15:00?", options: ["fifteen o'clock", "three p.m.", "three a.m.", "fifteen hours"], answer: 1, why: "En inglés diario no se usa el reloj de 24 horas." },
            { q: "___ time is it?", options: ["Where", "What", "How", "Who"], answer: 1, why: "<strong>What time is it?</strong> es una fórmula fija." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Stand up. Stretch. Count from twenty to zero out loud.">Stand up. Stretch. Count from twenty to zero out loud.</span> 🔊</p>
<p class="es-hint">Levántate. Estira. Cuenta del veinte al cero en voz alta.</p>
<p>Contar hacia atrás mientras caminas es el mejor uso posible de un descanso: el cuerpo descansa y los números
se automatizan sin que estés "estudiando".</p>`,
      },

      {
        title: "Grammar — WH questions", titleEs: "Gramática · las preguntas que abren la conversación",
        kind: "grammar", minutes: 15,
        html: `
<p>Ayer aprendiste a hablar de ti. Eso es un monólogo. Hoy aprendes a <strong>preguntar</strong>, y ahí es donde
empieza la conversación de verdad. Son seis palabras. Con ellas y el verbo <em>to be</em> ya puedes sostener un intercambio.</p>

<table>
<tr><th>Palabra</th><th>Significa</th><th>Ejemplo</th></tr>
<tr><td><strong>What</strong> <span class="say" data-say="what">🔊</span></td><td>Qué / cuál</td><td><span class="en" data-say="What is your name?">What is your name?</span> 🔊</td></tr>
<tr><td><strong>Where</strong> <span class="say" data-say="where">🔊</span></td><td>Dónde</td><td><span class="en" data-say="Where are you from?">Where are you from?</span> 🔊</td></tr>
<tr><td><strong>Who</strong> <span class="say" data-say="who">🔊</span></td><td>Quién</td><td><span class="en" data-say="Who is she?">Who is she?</span> 🔊</td></tr>
<tr><td><strong>When</strong> <span class="say" data-say="when">🔊</span></td><td>Cuándo</td><td><span class="en" data-say="When is the class?">When is the class?</span> 🔊</td></tr>
<tr><td><strong>Why</strong> <span class="say" data-say="why">🔊</span></td><td>Por qué</td><td><span class="en" data-say="Why are you tired?">Why are you tired?</span> 🔊</td></tr>
<tr><td><strong>How</strong> <span class="say" data-say="how">🔊</span></td><td>Cómo</td><td><span class="en" data-say="How are you?">How are you?</span> 🔊</td></tr>
</table>

<h3>La fórmula, y es siempre la misma</h3>
<p style="font-size:19px;text-align:center;background:var(--bg-raised);padding:14px;border-radius:8px">
<strong>WH- + am/is/are + sujeto + resto?</strong></p>
<p><span class="en">Where</span> + <span class="en">are</span> + <span class="en">you</span> + <span class="en">from?</span>
Una vez que ves el patrón, construyes cualquier pregunta cambiando piezas. No hay nada más que memorizar.</p>

<h3>Los combinados de HOW — los más útiles del idioma</h3>
<ul>
<li><strong>How old…?</strong> ¿Qué edad…? — <span class="en" data-say="How old are you?">How old are you?</span> 🔊</li>
<li><strong>How much…?</strong> ¿Cuánto (cuesta)? — <span class="en" data-say="How much is it?">How much is it?</span> 🔊</li>
<li><strong>How many…?</strong> ¿Cuántos? — <span class="en" data-say="How many brothers do you have?">How many brothers…?</span> 🔊</li>
<li><strong>How long…?</strong> ¿Cuánto tiempo? — <span class="en" data-say="How long is the movie?">How long is the movie?</span> 🔊</li>
</ul>

<div class="box warn"><div class="box-title">⚠️ Los tres errores clásicos</div>
<ol>
<li><strong>No olvides el verbo.</strong> <span style="color:var(--red)">"Where you from?"</span> ✗ →
<span class="en">Where <strong>are</strong> you from?</span> ✓. Lo oyes así en canciones porque en el habla muy informal
se lo comen, pero escrito y en una conversación normal está mal.</li>
<li><strong>"How are you?" y "Who are you?" no son lo mismo.</strong> <em>How</em> = cómo estás (saludo).
<em>Who</em> = quién eres (puede sonar agresivo). Una letra de diferencia, dos situaciones muy distintas.</li>
<li><strong>El orden no se negocia.</strong> En español "¿Tú de dónde eres?" funciona. En inglés
<span style="color:var(--red)">"You where are from?"</span> es incomprensible. La palabra WH- va <strong>siempre</strong> primero.</li>
</ol></div>

<p>Ahora completa. <span class="en">Fill in the blank with the correct question word.</span></p>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "___ is your name?", es: "¿Cuál es tu nombre?", answer: "What", alts: ["what"], why: "Para el nombre se usa <strong>what</strong>, no \"which\" ni \"how\"." },
            { sentence: "___ are you from?", es: "¿De dónde eres?", answer: "Where", alts: ["where"], why: "Lugar → <strong>where</strong>." },
            { sentence: "___ old are you?", es: "¿Cuántos años tienes?", answer: "How", alts: ["how"], why: "<strong>How old</strong> = qué edad. Literalmente \"qué tan viejo\"." },
            { sentence: "___ is that man?", es: "¿Quién es ese hombre?", answer: "Who", alts: ["who"], why: "Persona → <strong>who</strong>." },
            { sentence: "___ are you sad?", es: "¿Por qué estás triste?", answer: "Why", alts: ["why"], why: "Razón → <strong>why</strong>. Se responde con <em>because…</em>" },
            { sentence: "___ is your birthday?", es: "¿Cuándo es tu cumpleaños?", answer: "When", alts: ["when"], why: "Tiempo → <strong>when</strong>." },
            { sentence: "How ___ is this shirt?", es: "¿Cuánto cuesta esta camisa?", answer: "much", why: "Precio → <strong>how much</strong>." },
            { sentence: "How ___ people are in your family?", es: "¿Cuántas personas hay en tu familia?", answer: "many", why: "Cosas contables → <strong>how many</strong>." },
          ],
        },
      },

      {
        title: "Build the questions", titleEs: "Arma las preguntas",
        kind: "grammar", minutes: 8,
        ex: {
          type: "build",
          items: [
            { es: "¿De dónde eres?", answer: "Where are you from", extra: ["is", "you're"], why: "WH + verbo + sujeto + resto." },
            { es: "¿Cuál es tu número de teléfono?", answer: "What is your phone number", extra: ["are", "how"], why: "También se dice <em>What's your phone number?</em>" },
            { es: "¿Cuántos años tiene ella?", answer: "How old is she", extra: ["are", "years"], why: "Nada de \"how many years\": es <strong>how old</strong>." },
            { es: "¿Por qué estás cansado?", answer: "Why are you tired", extra: ["is", "because"] },
            { es: "¿Cuánto cuesta?", answer: "How much is it", extra: ["many", "are"], why: "Fórmula fija para preguntar precios." },
            { es: "¿Quiénes son ellos?", answer: "Who are they", extra: ["is", "how"] },
          ],
        },
      },

      {
        title: "Match the questions", titleEs: "Empareja pregunta y respuesta",
        kind: "vocabulary", minutes: 4,
        html: `<p>Cada pregunta con su respuesta natural. Esto entrena algo distinto a la gramática: <strong>saber qué te están
preguntando</strong> en el segundo y medio que tienes para responder.</p>`,
        ex: {
          type: "match",
          pairs: [
            ["Where are you from?", "I'm from Colombia."],
            ["How old are you?", "I'm thirty."],
            ["What is your job?", "I'm an engineer."],
            ["How are you?", "I'm fine, thank you."],
            ["What time is it?", "It's half past six."],
            ["How much is it?", "Twenty dollars."],
            ["Who is she?", "She's my sister."],
            ["When is the class?", "On Monday."],
          ],
        },
      },

      {
        title: "✍️ The verb drill", titleEs: "Las planas de verbos · segundo día",
        kind: "drill", minutes: 12,
        html: `<p>Los mismos doce de ayer. Hoy te van a salir más y te va a molestar menos. Ese es el punto:
<strong>la segunda repetición cuesta la mitad que la primera, y la décima no cuesta nada</strong>.</p>
<div class="box tip"><div class="box-title">Súbele la exigencia</div>
Antes de escribir cada pasado, <strong>dilo en voz alta</strong>. Y si hoy te salen las tres rondas sin un error,
mañana hazlas tapando la columna del español.</div>`,
        ex: { type: "verbdrill", verbs: [], reps: 3 },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Get some water. The next block is speaking.">Get some water. The next block is speaking.</span> 🔊</p>
<p class="es-hint">Toma agua. El siguiente bloque es de hablar.</p>`,
      },

      {
        title: "Speaking lab — asking questions", titleEs: "Pronunciación · preguntar en voz alta",
        kind: "speaking", minutes: 13,
        html: `<p>Las preguntas tienen algo que las afirmaciones no: <strong>entonación</strong>. Y en inglés se nota más que
en español. Escucha bien cómo sube o baja el audio antes de repetir.</p>
<div class="box tip"><div class="box-title">La regla de la entonación</div>
<ul>
<li>Preguntas de <strong>sí o no</strong> (<em>Are you tired?</em>) → la voz <strong>SUBE</strong> al final. ↗</li>
<li>Preguntas con <strong>WH-</strong> (<em>Where are you from?</em>) → la voz <strong>BAJA</strong> al final. ↘</li>
</ul>
Suena al revés de lo que uno esperaría, y es justo por eso que un hispanohablante suena raro preguntando.
Exagéralo hasta que te sienta natural.</div>`,
        ex: {
          type: "speak", target: 70,
          items: [
            { en: "What is your name?", es: "¿Cuál es tu nombre?", tip: "La voz <strong>baja</strong> al final. Y <em>what</em> casi no suena la t final." },
            { en: "Where are you from?", es: "¿De dónde eres?", tip: "Suena pegado: \"uér-ar-yu-from\". No separes las palabras." },
            { en: "How old are you?", es: "¿Cuántos años tienes?", tip: "\"Jáu óuld ar yu\". La <em>h</em> se sopla." },
            { en: "What time is it?", es: "¿Qué hora es?", tip: "Los nativos dicen casi \"uátáimizit\", como una sola palabra." },
            { en: "How much is it?", es: "¿Cuánto cuesta?", tip: "<em>Much</em> con sonido de \"ch\" fuerte al final." },
            { en: "It's a quarter past three.", es: "Son las tres y cuarto.", tip: "<em>Quarter</em> se dice \"KUÓR-ter\"." },
            { en: "My phone number is nine, seven, three.", es: "Mi número es nueve, siete, tres.", tip: "Los teléfonos se dicen dígito por dígito, con pausas." },
            { en: "Are you a student?", es: "¿Eres estudiante?", tip: "Pregunta de sí/no: la voz <strong>sube</strong> al final. ↗" },
          ],
        },
      },

      {
        title: "Your first conversation", titleEs: "Tu primera conversación · el diálogo completo",
        kind: "production", minutes: 8,
        html: `
<p>Con lo de ayer y lo de hoy ya tienes suficiente para un intercambio real. Este es el diálogo que vas a poder
sostener al terminar el bloque. Léelo primero completo, escuchando cada línea:</p>

<div class="box">
<p style="margin:6px 0"><strong>A:</strong> <span class="en" data-say="Hi! How are you?">Hi! How are you?</span> 🔊</p>
<p style="margin:6px 0"><strong>B:</strong> <span class="en" data-say="I'm fine, thank you. And you?">I'm fine, thank you. And you?</span> 🔊</p>
<p style="margin:6px 0"><strong>A:</strong> <span class="en" data-say="I'm good. What is your name?">I'm good. What's your name?</span> 🔊</p>
<p style="margin:6px 0"><strong>B:</strong> <span class="en" data-say="My name is Ana. And you?">My name is Ana. And you?</span> 🔊</p>
<p style="margin:6px 0"><strong>A:</strong> <span class="en" data-say="I'm Carlos. Nice to meet you. Where are you from?">I'm Carlos. Nice to meet you. Where are you from?</span> 🔊</p>
<p style="margin:6px 0"><strong>B:</strong> <span class="en" data-say="I'm from Mexico. And you?">I'm from Mexico. And you?</span> 🔊</p>
<p style="margin:6px 0"><strong>A:</strong> <span class="en" data-say="I'm from Colombia. What do you do?">I'm from Colombia. What do you do?</span> 🔊 <span class="es-hint">— "¿a qué te dedicas?"</span></p>
<p style="margin:6px 0"><strong>B:</strong> <span class="en" data-say="I'm a teacher. Nice to meet you, Carlos!">I'm a teacher. Nice to meet you, Carlos!</span> 🔊</p>
</div>

<div class="box tip"><div class="box-title">🔑 La palabra más útil del diálogo: <em>And you?</em></div>
Devolver la pregunta con <span class="en" data-say="And you?">And you?</span> 🔊 hace tres cosas a la vez: te da tiempo,
mantiene viva la conversación y suena natural. Cuando no sepas qué decir, devuelve la pregunta. Es lo que hacen los
nativos cuando tampoco saben qué decir.</div>

<h3>Qué hacer</h3>
<ol>
<li>Léelo entero <strong>en voz alta</strong>, haciendo las dos voces. Sí, solo, en tu cuarto. Funciona.</li>
<li>Tapa las respuestas de B e improvísalas <strong>con tus datos reales</strong>.</li>
<li>Ahora tapa las de A y hazlas tú.</li>
<li>Grábate haciendo el diálogo completo. Guárdalo junto al de ayer.</li>
</ol>`,
        ex: {
          type: "speak", target: 65,
          items: [
            { en: "Hi! How are you?", es: "¡Hola! ¿Cómo estás?" },
            { en: "I'm fine, thank you. And you?", es: "Estoy bien, gracias. ¿Y tú?", tip: "La joya del bloque. Que te salga sin pensar." },
            { en: "Nice to meet you. Where are you from?", es: "Mucho gusto. ¿De dónde eres?" },
            { en: "What do you do? I'm a teacher.", es: "¿A qué te dedicas? Soy profesor." },
          ],
        },
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 8,
        ex: {
          type: "translate",
          items: [
            { es: "¿De dónde eres?", answer: "Where are you from", alts: ["Where are you from?"] },
            { es: "¿Qué hora es?", answer: "What time is it", alts: ["What time is it?"] },
            { es: "Son las siete y media.", answer: "It is seven thirty", alts: ["It's seven thirty", "It is half past seven", "It's half past seven"] },
            { es: "¿Cuántos años tiene tu hermano?", answer: "How old is your brother", alts: ["How old is your brother?"], why: "<em>How old</em>, nunca \"how many years\"." },
            { es: "¿Cuánto cuesta?", answer: "How much is it", alts: ["How much is it?"] },
            { es: "Estoy bien, gracias. ¿Y tú?", answer: "I am fine, thank you. And you?", alts: ["I'm fine, thank you. And you?", "I am fine thank you and you", "I'm fine thanks. And you?"] },
            { es: "¿Por qué estás aquí?", answer: "Why are you here", alts: ["Why are you here?"] },
            { es: "Tengo cuarenta y cinco años.", answer: "I am forty-five years old", alts: ["I'm forty-five years old", "I am forty five years old", "I'm 45 years old"], why: "Ojo: <strong>forty</strong> sin u." },
          ],
        },
      },

      {
        title: "🏁 Day 2 exam", titleEs: "Examen del día 2 · 80% para aprobar",
        kind: "exam", minutes: 10,
        ex: {
          type: "exam", pass: 80, dayId: "d2", shuffle: true,
          items: [
            { kind: "choice", q: "___ are you from?", options: ["What", "Who", "Where", "When"], answer: 2, why: "Lugar → where." },
            { kind: "choice", q: "___ old are you?", options: ["How", "What", "Why", "Who"], answer: 0, why: "<strong>How old</strong>." },
            { kind: "choice", q: "'It's a quarter to eight' is…", options: ["8:15", "7:45", "8:45", "7:15"], answer: 1, why: "<em>to</em> = falta para las ocho." },
            { kind: "choice", q: "How do you write 40?", options: ["fourty", "forty", "fortey", "fourthy"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["Where you from?", "Where from are you?", "Where are you from?", "You are where from?"], answer: 2, why: "El verbo no se omite y la WH- va primero." },
            { kind: "choice", q: "Someone asks 'How are you?'. You answer:", options: ["I'm Carlos.", "I'm from Peru.", "I'm fine, thank you.", "I'm thirty."], answer: 2, why: "<em>How</em> = cómo estás, no quién eres." },
            { kind: "fill", sentence: "___ much is this?", es: "¿Cuánto cuesta esto?", answer: "How" },
            { kind: "fill", sentence: "___ is your birthday?", es: "¿Cuándo es tu cumpleaños?", answer: "When" },
            { kind: "fill", sentence: "It's 9:00. It's nine ___.", es: "Son las nueve en punto.", answer: "o'clock", alts: ["oclock", "o clock"] },
            { kind: "dictation", en: "thirty-five", es: "35" },
            { kind: "dictation", en: "What time is it?", es: "¿Qué hora es?" },
            { kind: "dictation", en: "Where are you from?", es: "¿De dónde eres?" },
            { kind: "translate", es: "¿Quién es ella?", answer: "Who is she", alts: ["Who is she?", "Who's she"] },
            { kind: "translate", es: "Son las tres y cuarto.", answer: "It is three fifteen", alts: ["It's three fifteen", "It is a quarter past three", "It's a quarter past three"] },
            { kind: "translate", es: "¿Y tú?", answer: "And you", alts: ["And you?"] },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 3,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Di la hora actual en inglés, en voz alta. Y la hora a la que te vas a levantar.</li>
<li>Di tu número de teléfono en inglés, dígito por dígito.</li>
<li>Hazte las seis preguntas WH- a ti mismo y respóndetelas: <em>What's your name? Where are you from? How old are you? What do you do? Why are you learning English? How are you?</em></li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 3</div>
La familia, los posesivos (<em>my, your, his, her</em>) y el plural. Vas a poder hablar de otras personas,
no solo de ti — que es el 80% de lo que uno habla en realidad.</div>
<p><span class="en" data-say="Two days in a row. See you tomorrow.">Two days in a row. See you tomorrow.</span> 🔊</p>`,
      },
    ],
  };

  /* ============================================================
     DAY 3 — This is my family
     ============================================================ */

  const DAY3 = {
    id: "d3",
    title: "Day 3 · This is my family",
    titleEs: "La familia, los posesivos y el plural",
    goal: "Hoy dejas de hablar solo de ti: vas a poder describir a otras personas, decir de quién es cada cosa y usar el plural.",
    canDo: [
      "…name every member of my family in English.",
      "…use <strong>my, your, his, her, our, their</strong> correctly.",
      "…say <strong>Maria's brother</strong> — the possessive with 's.",
      "…make plurals, including the irregular ones.",
      "…use <strong>have / has</strong> to say what I own.",
    ],
    blocks: [
      {
        title: "Warm-up — yesterday's questions", titleEs: "Calentamiento · repaso del día 2",
        kind: "review", minutes: 6,
        ex: {
          type: "choice", shuffle: true,
          items: [
            { q: "___ are you from?", options: ["What", "Where", "Who", "When"], answer: 1 },
            { q: "'It's a quarter to five' is…", options: ["5:15", "4:45", "5:45", "4:15"], answer: 1 },
            { q: "🎧 Which one do you hear?", audio: "sixty", options: ["16", "60"], answer: 1, sayAnswer: false },
            { q: "___ much is it?", options: ["How", "What", "Where", "Why"], answer: 0 },
            { q: "The past of THINK is…", options: ["thinked", "thought", "thinking", "thinks"], answer: 1 },
          ],
        },
      },

      {
        title: "Vocabulary — the family", titleEs: "Vocabulario · la familia",
        kind: "vocabulary", minutes: 12,
        ex: {
          type: "flashcards",
          items: [
            { en: "mother / mom", ipa: "/ˈmʌðər/ — MÁ-der", es: "madre / mamá", ex: "My mother is a nurse.", exEs: "Mi madre es enfermera." },
            { en: "father / dad", ipa: "/ˈfɑːðər/ — FÁ-der", es: "padre / papá", ex: "His father works here.", exEs: "Su padre trabaja aquí." },
            { en: "parents", ipa: "/ˈperənts/", es: "padres (los dos)", ex: "My parents live in Cali.", exEs: "Mis padres viven en Cali." },
            { en: "brother", ipa: "/ˈbrʌðər/ — BRÁ-der", es: "hermano", ex: "I have two brothers.", exEs: "Tengo dos hermanos." },
            { en: "sister", ipa: "/ˈsɪstər/ — SÍS-ter", es: "hermana", ex: "She is my little sister.", exEs: "Ella es mi hermana menor." },
            { en: "son", ipa: "/sʌn/ — san", es: "hijo", ex: "This is my son.", exEs: "Este es mi hijo." },
            { en: "daughter", ipa: "/ˈdɔːtər/ — DÓ-ter", es: "hija", ex: "Her daughter is five.", exEs: "Su hija tiene cinco años." },
            { en: "children / kids", ipa: "/ˈtʃɪldrən/ — CHÍL-dren", es: "hijos, niños", ex: "We have three children.", exEs: "Tenemos tres hijos." },
            { en: "husband", ipa: "/ˈhʌzbənd/ — JÁS-band", es: "esposo", ex: "Her husband is a driver.", exEs: "Su esposo es conductor." },
            { en: "wife", ipa: "/waɪf/ — uáif", es: "esposa", ex: "My wife is from Bogota.", exEs: "Mi esposa es de Bogotá." },
            { en: "grandmother", ipa: "/ˈɡrænmʌðər/", es: "abuela", ex: "My grandmother is eighty.", exEs: "Mi abuela tiene ochenta." },
            { en: "grandfather", ipa: "/ˈɡrænfɑːðər/", es: "abuelo", ex: "His grandfather was a farmer.", exEs: "Su abuelo era campesino." },
            { en: "uncle", ipa: "/ˈʌŋkəl/ — ÁN-col", es: "tío", ex: "My uncle lives in Spain.", exEs: "Mi tío vive en España." },
            { en: "aunt", ipa: "/ænt/ — ant", es: "tía", ex: "This is my aunt Rosa.", exEs: "Esta es mi tía Rosa." },
            { en: "cousin", ipa: "/ˈkʌzən/ — CÁ-sen", es: "primo o prima", ex: "He is my cousin.", exEs: "Él es mi primo." },
          ],
        },
      },

      {
        title: "Match the family", titleEs: "Empareja la familia",
        kind: "vocabulary", minutes: 5,
        html: `<div class="box tip"><div class="box-title">Dos avisos que ahorran vergüenzas</div>
<ul>
<li><strong>cousin</strong> sirve para primo Y prima. El inglés no distingue el género aquí.</li>
<li><strong>parents</strong> son los padres, <span style="color:var(--red)">no "parientes"</span>. Los parientes son
<em>relatives</em>. Es el falso amigo número uno de esta lección.</li>
</ul></div>`,
        ex: {
          type: "match",
          pairs: [
            ["brother", "hermano"], ["sister", "hermana"], ["wife", "esposa"], ["husband", "esposo"],
            ["daughter", "hija"], ["son", "hijo"], ["aunt", "tía"], ["uncle", "tío"],
            ["cousin", "primo o prima"], ["parents", "padres"],
          ],
        },
      },

      {
        title: "Grammar — my, your, his, her", titleEs: "Gramática · los posesivos",
        kind: "grammar", minutes: 18,
        html: `
<p>Ya sabes decir <em>my name</em>. Hoy completas la familia entera de posesivos. Es una tabla corta y una regla
que en español no existe, así que léela despacio porque es de las que más delatan el nivel.</p>

<table>
<tr><th>Pronombre</th><th>Posesivo</th><th>Ejemplo</th></tr>
<tr><td>I</td><td><strong>my</strong></td><td><span class="en" data-say="my brother">my brother</span> 🔊 — mi hermano</td></tr>
<tr><td>You</td><td><strong>your</strong></td><td><span class="en" data-say="your family">your family</span> 🔊 — tu familia</td></tr>
<tr><td>He</td><td><strong>his</strong></td><td><span class="en" data-say="his car">his car</span> 🔊 — su carro (de él)</td></tr>
<tr><td>She</td><td><strong>her</strong></td><td><span class="en" data-say="her car">her car</span> 🔊 — su carro (de ella)</td></tr>
<tr><td>It</td><td><strong>its</strong></td><td><span class="en" data-say="its name">its name</span> 🔊 — su nombre (de una cosa)</td></tr>
<tr><td>We</td><td><strong>our</strong></td><td><span class="en" data-say="our house">our house</span> 🔊 — nuestra casa</td></tr>
<tr><td>They</td><td><strong>their</strong></td><td><span class="en" data-say="their children">their children</span> 🔊 — sus hijos (de ellos)</td></tr>
</table>

<div class="box gram"><div class="box-title">📐 La regla que no existe en español</div>
<p>En español decimos "<em>su</em> carro" y no se sabe si es de él, de ella o de ellos. En inglés
<strong>el posesivo cambia según el DUEÑO</strong>, no según la cosa:</p>
<ul>
<li><span class="en">his car</span> = el carro <strong>de él</strong></li>
<li><span class="en">her car</span> = el carro <strong>de ella</strong></li>
<li><span class="en">their car</span> = el carro <strong>de ellos</strong></li>
</ul>
<p>Y ojo con esto, que es lo contrario a lo que hace tu cabeza: <span class="en">her brother</span> es
"el hermano de ella" — <em>her</em> no cambia porque el hermano sea hombre. El posesivo mira al dueño, nunca al objeto.
<span style="color:var(--red)">"his sister"</span> significa "la hermana <em>de él</em>", no "su hermano".</p></div>

<h3>El apóstrofo 's — "de quién"</h3>
<p>En español decimos "el hermano <strong>de</strong> María". En inglés se le pega un <strong>'s</strong> al dueño
y se pone <strong>primero</strong>:</p>
<p style="font-size:19px;text-align:center;background:var(--bg-raised);padding:12px;border-radius:8px">
el hermano de María → <span class="en" data-say="Maria's brother">Maria<strong>'s</strong> brother</span> 🔊</p>
<ul>
<li><span class="en" data-say="My father's car">My father's car</span> 🔊 — el carro de mi papá</li>
<li><span class="en" data-say="Peter's wife">Peter's wife</span> 🔊 — la esposa de Peter</li>
<li>Si el dueño es plural y ya termina en -s, solo se le pone el apóstrofo:
<span class="en" data-say="my parents' house">my parents' house</span> 🔊 — la casa de mis padres</li>
</ul>

<div class="box warn"><div class="box-title">⚠️ El error de traducir "de" literalmente</div>
<span style="color:var(--red)">"the brother of Maria"</span> se entiende, pero suena a libro del siglo XIX y delata
al instante que estás traduciendo del español. Un nativo dice <span class="en">Maria's brother</span>. Siempre.</div>

<h3>Y para decir lo que tienes: have / has</h3>
<p>Regla gemela a la de <em>to be</em>: <strong>he, she, it → HAS. Todo lo demás → HAVE.</strong></p>
<ul>
<li><span class="en" data-say="I have two brothers">I <strong>have</strong> two brothers</span> 🔊</li>
<li><span class="en" data-say="She has a daughter">She <strong>has</strong> a daughter</span> 🔊</li>
<li><span class="en" data-say="They have three children">They <strong>have</strong> three children</span> 🔊</li>
</ul>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "This is Ana. ___ brother is a doctor.", es: "Esta es Ana. Su hermano (de ella) es médico.", answer: "Her", alts: ["her"], why: "La dueña es Ana → <strong>her</strong>, aunque el hermano sea hombre." },
            { sentence: "This is Luis. ___ sister is a teacher.", es: "Este es Luis. Su hermana (de él) es profesora.", answer: "His", alts: ["his"], why: "El dueño es Luis → <strong>his</strong>, aunque la hermana sea mujer." },
            { sentence: "We live here. This is ___ house.", es: "Vivimos aquí. Esta es nuestra casa.", answer: "our", alts: ["Our"], why: "We → <strong>our</strong>." },
            { sentence: "They are my parents. ___ names are Rosa and Juan.", es: "Son mis padres. Sus nombres son Rosa y Juan.", answer: "Their", alts: ["their"], why: "They → <strong>their</strong>. Ojo: <em>their</em> (de ellos) ≠ <em>there</em> (ahí)." },
            { sentence: "I ___ two sisters.", es: "Tengo dos hermanas.", answer: "have", why: "I → <strong>have</strong>." },
            { sentence: "My brother ___ a car.", es: "Mi hermano tiene un carro.", answer: "has", why: "He / she / it → <strong>has</strong>." },
            { sentence: "That is Peter___ wife.", es: "Esa es la esposa de Peter.", answer: "'s", alts: ["s", "´s", "’s"], hint: "El apóstrofo del dueño.", why: "<strong>Peter's wife</strong>: el dueño primero, con 's." },
            { sentence: "___ is your mother's name?", es: "¿Cómo se llama tu mamá?", answer: "What", alts: ["what"], why: "Fíjate en el doble posesivo: <em>your mother's name</em>." },
          ],
        },
      },

      {
        title: "Take a break", titleEs: "Descanso · 5 minutos",
        kind: "break", minutes: 5,
        html: `<p><span class="en" data-say="Take a break. Think about your family in English.">Take a break. Think about your family in English.</span> 🔊</p>
<p class="es-hint">Descansa. Piensa en tu familia en inglés.</p>
<p>Sin pantalla: recorre mentalmente a tu familia y ponle etiqueta en inglés a cada uno —
<em>my mother, my father, my brother, my aunt…</em> Es estudiar sin que se sienta como estudiar.</p>`,
      },

      {
        title: "Grammar — plurals", titleEs: "Gramática · el plural",
        kind: "grammar", minutes: 15,
        html: `
<p>El plural inglés es más fácil que el español, con una lista corta de excepciones que hay que memorizar
y que aparecen todo el tiempo.</p>

<h3>La regla general: + S</h3>
<p>book → book<strong>s</strong> · car → car<strong>s</strong> · friend → friend<strong>s</strong> · sister → sister<strong>s</strong></p>

<h3>Las tres reglas de ortografía</h3>
<table>
<tr><th>Si termina en…</th><th>Se hace</th><th>Ejemplo</th></tr>
<tr><td>-s, -sh, -ch, -x</td><td>+ ES</td><td>bus → bus<strong>es</strong> · watch → watch<strong>es</strong></td></tr>
<tr><td>consonante + y</td><td>y → IES</td><td>city → cit<strong>ies</strong> · family → famil<strong>ies</strong></td></tr>
<tr><td>-f / -fe</td><td>→ VES</td><td>wife → wi<strong>ves</strong> · life → li<strong>ves</strong></td></tr>
</table>

<div class="box gram"><div class="box-title">📐 Los irregulares — memorízalos, son ocho</div>
<table>
<tr><td>man → <strong>men</strong> <span class="say" data-say="man, men">🔊</span></td><td>hombre → hombres</td></tr>
<tr><td>woman → <strong>women</strong> <span class="say" data-say="woman, women">🔊</span></td><td>mujer → mujeres (¡se dice "UÍ-men"!)</td></tr>
<tr><td>child → <strong>children</strong> <span class="say" data-say="child, children">🔊</span></td><td>niño → niños</td></tr>
<tr><td>person → <strong>people</strong> <span class="say" data-say="person, people">🔊</span></td><td>persona → personas / gente</td></tr>
<tr><td>foot → <strong>feet</strong> <span class="say" data-say="foot, feet">🔊</span></td><td>pie → pies</td></tr>
<tr><td>tooth → <strong>teeth</strong> <span class="say" data-say="tooth, teeth">🔊</span></td><td>diente → dientes</td></tr>
<tr><td>man/woman compuestos</td><td>policeman → policemen</td></tr>
<tr><td>fish, sheep</td><td>no cambian: one fish, two fish</td></tr>
</table></div>

<div class="box warn"><div class="box-title">⚠️ People es plural</div>
<span class="en">People <strong>are</strong> nice</span> ✓, no <span style="color:var(--red)">"people is nice"</span>.
Aunque en español "la gente" sea singular, en inglés <em>people</em> son varias personas y lleva verbo plural. Este error
se oye hasta en gente con años de inglés.</div>`,
        ex: {
          type: "fill",
          items: [
            { sentence: "One city, two ___.", es: "Una ciudad, dos ciudades.", answer: "cities", why: "consonante + y → <strong>ies</strong>." },
            { sentence: "One man, two ___.", es: "Un hombre, dos hombres.", answer: "men" },
            { sentence: "One woman, two ___.", es: "Una mujer, dos mujeres.", answer: "women", why: "Se escribe <em>women</em> y se pronuncia \"UÍ-men\"." },
            { sentence: "One child, two ___.", es: "Un niño, dos niños.", answer: "children" },
            { sentence: "One person, ten ___.", es: "Una persona, diez personas.", answer: "people" },
            { sentence: "One watch, three ___.", es: "Un reloj, tres relojes.", answer: "watches", why: "Termina en -ch → <strong>+ es</strong>." },
            { sentence: "My two ___ are teachers.", es: "Mis dos hermanas son profesoras.", answer: "sisters" },
            { sentence: "People ___ friendly here.", es: "La gente es amable aquí.", answer: "are", why: "<em>People</em> es plural en inglés." },
          ],
        },
      },

      {
        title: "✍️ The verb drill", titleEs: "Las planas · tercer día",
        kind: "drill", minutes: 12,
        html: `<p>Tercer día seguido. Si hoy te salen las tres rondas casi sin errores, ya tienes ganada la mitad del pasado
simple, que es el módulo 3 entero.</p>
<div class="box tip"><div class="box-title">Hoy con una vuelta de tuerca</div>
Después de las tres rondas, escribe <strong>a mano</strong> una frase corta con cada verbo en pasado:
<em>I went to work. I saw my brother.</em> No importa si son tontas. Un verbo dentro de una frase se recuerda
mucho mejor que un verbo en una lista.</div>`,
        ex: { type: "verbdrill", verbs: [], reps: 3 },
      },

      {
        title: "Short break", titleEs: "Descanso corto · 3 minutos",
        kind: "break", minutes: 3,
        html: `<p><span class="en" data-say="Almost done. Water, and then we speak.">Almost done. Water, and then we speak.</span> 🔊</p>
<p class="es-hint">Ya casi. Agua, y después hablamos.</p>`,
      },

      {
        title: "Speaking lab — describing people", titleEs: "Pronunciación · hablar de otros",
        kind: "speaking", minutes: 14,
        html: `<div class="box tip"><div class="box-title">El sonido TH, que aparece en media familia</div>
<em>mother, father, brother, they, their, this, that</em>… todos llevan <strong>TH</strong>, un sonido que el español no tiene.
Se hace <strong>sacando la punta de la lengua entre los dientes</strong> y soplando. Suena a "d" suave con ceceo.
Si dices "mader" o "moder" en vez de "mother", se entiende pero suena marcadísimo. Exagéralo hoy: pon la lengua
donde no te da pena ponerla.</div>`,
        ex: {
          type: "speak", target: 68,
          items: [
            { en: "This is my mother.", es: "Esta es mi madre.", tip: "Dos TH seguidos: <em>this</em> y <em>mother</em>. Lengua entre los dientes en ambos." },
            { en: "My brother has two children.", es: "Mi hermano tiene dos hijos.", tip: "<em>Children</em> se dice \"CHÍL-dren\"." },
            { en: "Her husband is from Peru.", es: "Su esposo (de ella) es de Perú.", tip: "<em>Husband</em> = \"JÁS-band\", con la h soplada." },
            { en: "Their parents live in Colombia.", es: "Sus padres viven en Colombia.", tip: "<em>Their</em> con TH, igual que <em>they</em>." },
            { en: "This is Maria's brother.", es: "Este es el hermano de María.", tip: "El dueño primero, con 's." },
            { en: "I have three sisters and one brother.", es: "Tengo tres hermanas y un hermano.", tip: "Frase larga: dila de corrido, sin cortar." },
            { en: "How many people are in your family?", es: "¿Cuántas personas hay en tu familia?", tip: "<em>How many</em> para cosas contables." },
            { en: "My wife's name is Ana.", es: "Mi esposa se llama Ana.", tip: "Doble posesivo: <em>my wife's name</em>." },
          ],
        },
      },

      {
        title: "Your family in English", titleEs: "Tu familia · producción propia",
        kind: "production", minutes: 10,
        html: `
<p>Como ayer con tu presentación, hoy construyes <strong>tu</strong> descripción familiar. Esto es lo que te llevas del día.</p>
<div class="box">
<p style="margin:6px 0"><span class="en">I have <em>___</em> brothers and <em>___</em> sisters.</span></p>
<p style="margin:6px 0"><span class="en">My mother's name is <em>___</em>. She is <em>___</em> years old.</span></p>
<p style="margin:6px 0"><span class="en">My father's name is <em>___</em>. He is <em>___</em>.</span> <span class="es-hint">(oficio)</span></p>
<p style="margin:6px 0"><span class="en">My parents live in <em>___</em>.</span></p>
<p style="margin:6px 0"><span class="en">I am married / I am single.</span></p>
<p style="margin:6px 0"><span class="en">We are a big family / a small family.</span></p>
</div>
<h3>Qué hacer</h3>
<ol>
<li>Escríbelo a mano con tus datos reales.</li>
<li>Dilo en voz alta tres veces. Tápalo y dilo de memoria.</li>
<li><strong>El reto de hoy:</strong> dibuja tu árbol familiar en el cuaderno y etiqueta a cada persona en inglés
(<em>my aunt Rosa, my cousin Diego</em>). Que sea visual — la memoria visual y la verbal se refuerzan entre sí.</li>
<li>Grábate diciéndolo. Ya llevas tres grabaciones: guárdalas todas.</li>
</ol>`,
      },

      {
        title: "Translate it yourself", titleEs: "Traduce tú",
        kind: "production", minutes: 10,
        ex: {
          type: "translate",
          items: [
            { es: "Tengo dos hermanos.", answer: "I have two brothers", alts: ["I have 2 brothers"] },
            { es: "Ella tiene una hija.", answer: "She has a daughter", alts: ["She has one daughter"], why: "She → <strong>has</strong>." },
            { es: "Este es el carro de mi padre.", answer: "This is my father's car", alts: ["This is my dad's car"], why: "El dueño primero, con 's." },
            { es: "Su esposa (de él) es profesora.", answer: "His wife is a teacher", alts: ["His wife's a teacher"], why: "El dueño es él → <strong>his</strong>." },
            { es: "Sus padres viven en México.", answer: "Their parents live in Mexico", alts: ["His parents live in Mexico", "Her parents live in Mexico"] },
            { es: "Nuestra familia es grande.", answer: "Our family is big", alts: ["Our family is large"] },
            { es: "La gente es amable.", answer: "People are nice", alts: ["People are friendly", "People are kind"], why: "<em>People</em> lleva verbo plural." },
            { es: "¿Cuántos hijos tienes?", answer: "How many children do you have", alts: ["How many children do you have?", "How many kids do you have"], why: "Adelanto del día 5: <em>do you have</em>." },
          ],
        },
      },

      {
        title: "🏁 Day 3 exam", titleEs: "Examen del día 3 · 80% para aprobar",
        kind: "exam", minutes: 12,
        ex: {
          type: "exam", pass: 80, dayId: "d3", shuffle: true,
          items: [
            { kind: "choice", q: "This is Ana. ___ brother is a doctor.", options: ["His", "Her", "Their", "Your"], answer: 1, why: "La dueña es Ana → her." },
            { kind: "choice", q: "This is Luis. ___ sister is a nurse.", options: ["Her", "His", "Its", "Our"], answer: 1, why: "El dueño es Luis → his." },
            { kind: "choice", q: "The plural of WOMAN is…", options: ["womans", "womens", "women", "womanes"], answer: 2 },
            { kind: "choice", q: "The plural of PERSON is…", options: ["persons", "people", "peoples", "personnes"], answer: 1 },
            { kind: "choice", q: "Which is CORRECT?", options: ["the car of my brother", "my brother car", "my brother's car", "my brothers car"], answer: 2 },
            { kind: "choice", q: "PARENTS means…", options: ["parientes", "padres", "primos", "abuelos"], answer: 1, why: "Falso amigo: parientes = <em>relatives</em>." },
            { kind: "fill", sentence: "My sister ___ a son.", es: "Mi hermana tiene un hijo.", answer: "has" },
            { kind: "fill", sentence: "We ___ three children.", es: "Tenemos tres hijos.", answer: "have" },
            { kind: "fill", sentence: "One city, two ___.", es: "Una ciudad, dos ciudades.", answer: "cities" },
            { kind: "fill", sentence: "People ___ friendly here.", es: "La gente es amable aquí.", answer: "are" },
            { kind: "dictation", en: "This is my mother.", es: "Esta es mi madre." },
            { kind: "dictation", en: "My brother has two children.", es: "Mi hermano tiene dos hijos." },
            { kind: "translate", es: "La esposa de Peter es de Chile.", answer: "Peter's wife is from Chile" },
            { kind: "translate", es: "Sus hijos (de ellos) son pequeños.", answer: "Their children are small", alts: ["Their kids are small", "Their children are little"] },
            { kind: "translate", es: "Tengo un primo en España.", answer: "I have a cousin in Spain" },
          ],
        },
      },

      {
        title: "Well done — homework", titleEs: "Bien hecho · tarea de la noche",
        kind: "wrap-up", minutes: 3,
        html: `
<div class="box"><div class="box-title">🌙 Homework · 5 minutos antes de dormir</div>
<ol>
<li>Mira una foto de tu familia y di en voz alta quién es cada uno: <em>This is my mother. This is my brother's wife.</em></li>
<li>Repite la lista de plurales irregulares: <em>man-men, woman-women, child-children, person-people, foot-feet, tooth-teeth.</em></li>
<li>Los doce verbos, una pasada. Y a dormir.</li>
</ol></div>
<div class="box tip"><div class="box-title">Mañana · Day 4</div>
<strong>There is / There are</strong>: describir lugares, decir qué hay y qué no hay, y las preposiciones
(<em>in, on, under, next to</em>). Al terminar vas a poder describir tu casa entera en inglés.</div>
<p><span class="en" data-say="Three days in a row. The chain is getting strong.">Three days in a row. The chain is getting strong.</span> 🔊</p>`,
      },
    ],
  };

  window.DAYS_M0 = (window.DAYS_M0 || []).concat([DAY2, DAY3]);
})();
