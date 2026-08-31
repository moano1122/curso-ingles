# 🗣️ Your English Path

Curso interactivo de inglés desde cero para adultos, con speaking, examen diario, racha y XP.
Corre 100% en el navegador, sin cuentas, sin servidores y sin internet más allá de las voces del sistema.

## Cómo abrirlo

**Desde cualquier PC (recomendado):** sube el repo a GitHub Pages y abre la URL pública.

**Sin internet, en este PC:** doble clic en `Abrir Curso.bat` (necesita Python) — arranca un servidor local y abre el curso en `http://localhost:8770`.

> **Usa Chrome o Edge.** El reconocimiento de voz (la calificación de pronunciación) solo existe ahí; en Firefox y Safari el resto del curso funciona pero el micrófono no.

> El progreso se guarda en el navegador de cada PC y para cada dirección por separado. Elige UNA forma de abrirlo como oficial y, para mover el progreso entre equipos, usa Progress → *Descargar respaldo* / *Restaurar desde archivo*.

## En qué se basa el curso

| Fuente | Qué se tomó |
|---|---|
| **Duolingo / Anki** | Racha diaria con umbral amable (20 min), XP y niveles, logros, repetición del vocabulario fallado |
| **Ciencia del aprendizaje** | *Testing effect* (el examen enseña más que releer), práctica distribuida, descansos obligatorios, consolidación durante el sueño |
| **Enfoque comunicativo** | Se produce desde el día 1: hablar y escribir por encima de leer y reconocer |
| **Listas de frecuencia** | Los 12 verbos irregulares más usados como plana diaria — cubren buena parte de la conversación real |
| **Errores típicos del hispanohablante** | Cada bloque de gramática señala los calcos del español que delatan el nivel (*"I have 30 years"*, *"I am agree"*, omitir el pronombre) |

## Estructura

- `app/` — la aplicación (HTML/CSS/JS puro, sin dependencias ni build)
  - `js/speech.js` — voz: síntesis (el curso te habla) y reconocimiento (tú le hablas), con puntuación palabra por palabra
  - `js/exercises.js` — motor de ejercicios: flashcards, opción múltiple, rellenar, traducir, dictado, banco de palabras, emparejar, speaking, planas de verbos y exámenes
  - `js/curriculum.js` — el contenido del curso (módulos, días, bloques)
  - `js/session.js` — la sesión guiada bloque a bloque
  - `js/store.js` — progreso, racha, XP, notas de examen y logros (localStorage)
  - `js/main.js` — router y vistas (Today, Course, Practice, Progress)

## El camino: 7 hitos

1. **Introduce yourself** — decir quién eres sin pensarlo *(Day 1)*
2. **Talk about your day** — tu rutina en presente simple
3. **Tell what happened** — contar algo en pasado
4. **Survive out there** — pedir, preguntar, comprar, resolver
5. **Talk about the future** — planes e intenciones
6. **Understand real English** — un minuto de audio nativo sin subtítulos
7. **A 10-minute conversation** — conversación libre sin cambiar al español

## Estado

- ✅ **Day 1 construido y jugable** (~125 min): abecedario, saludos, verbo *to be* completo, dictado, planas de verbos, laboratorio de pronunciación, tu propia presentación y examen final con nota.
- ⏳ Días 2-6 del módulo 0 esbozados; módulos 1-7 pendientes de construir.
- 🎤 Speaking con calificación automática palabra por palabra (Chrome/Edge).
- ✍️ Plana diaria de los 12 verbos irregulares esenciales, siempre disponible en *Practice*.
