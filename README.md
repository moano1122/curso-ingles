# 🗣️ Your English Path

Curso interactivo de inglés desde cero para adultos, con speaking, exámenes, racha y planas de verbos.
Corre 100% en el navegador, sin cuentas, sin servidores y sin internet más allá de las voces del sistema.

## Cómo abrirlo

**Desde cualquier PC:** https://moano1122.github.io/curso-ingles/

**Sin internet, en el PC principal:** doble clic en `Abrir Curso.bat` (necesita Python) — arranca un servidor local en `http://localhost:8770`.

> **Usa Chrome o Edge.** El reconocimiento de voz (la calificación de pronunciación) solo existe ahí; en Firefox y Safari el resto del curso funciona pero el micrófono no.

## El progreso y cómo no perderlo

El progreso vive en el navegador, y **cada dirección guarda el suyo por separado** (`localhost` y la URL pública son sitios distintos para el navegador). Elige una como oficial.

Para que un accidente no cueste semanas de trabajo, el progreso se guarda **por triplicado**:

| Copia | Cuándo se escribe | Para qué sirve |
|---|---|---|
| Principal | En cada cambio | La que se usa normalmente |
| Espejo | En cada cambio | Si la principal falta o se corrompe, se restaura sola al arrancar |
| Instantáneas | Una por día (últimas 30) | Volver al estado de cualquier día reciente |

Además: antes de borrar o restaurar siempre se guarda una instantánea etiquetada, el botón de borrado exige escribir `BORRAR`, y el curso avisa cada 7 días para que descargues un respaldo.

**Para pasar el progreso a otro PC:** Progress → *Copiar código de progreso* → pegarlo en el otro con *Pegar un código*. Sin archivos.

## El plan: 3 meses

66 días a ~2 h diarias, seis días por semana. Ocho módulos:

| Módulo | Días | Contenido | Mes |
|---|---|---|---|
| **0 · Foundations** | 1-6 | *to be*, preguntas WH-, familia, *there is/are*, gustos y *do/does* | 1 |
| **1 · Your daily life** | 7-14 | Presente simple, la -s de tercera persona, *do/does*, frecuencia, trabajo, tiempo libre, *can* | 1 |
| **2 · Right now** | 15-22 | Presente continuo, ropa, clima, cuerpo, situaciones cotidianas | 1 |
| **3 · The past** | 23-32 | Pasado simple, regulares e irregulares, contar historias | 2 |
| **4 · Out in the world** | 33-42 | Restaurante, direcciones, compras, aeropuerto, hotel, problemas | 2 |
| **5 · The future** | 43-50 | *Will*, *going to*, planes, promesas, condicionales básicos | 3 |
| **6 · Real English** | 51-58 | Audio nativo, acentos, contracciones habladas, phrasal verbs | 3 |
| **7 · Conversation** | 59-66 | Conversación libre, mantener el turno, sonar natural | 3 |

### Los 7 hitos del camino

1. **Introduce yourself** — decir quién eres sin pensarlo *(día 1)*
2. **Talk about your day** — tu rutina en presente simple *(día 14)*
3. **Tell what happened** — contar algo en pasado *(día 32)*
4. **Survive out there** — pedir, preguntar, comprar, resolver *(día 42)*
5. **Talk about the future** — planes e intenciones *(día 50)*
6. **Understand real English** — un minuto de audio nativo sin subtítulos *(día 58)*
7. **A 10-minute conversation** — conversación libre sin cambiar al español *(día 66)*

## En qué se basa el curso

| Fuente | Qué se tomó |
|---|---|
| **Duolingo / Anki** | Racha diaria con umbral amable (20 min), XP y niveles, logros, repetición del vocabulario fallado |
| **Ciencia del aprendizaje** | *Testing effect* (el examen enseña más que releer), repaso al día siguiente al inicio de cada sesión, práctica distribuida, descansos obligatorios |
| **Enfoque comunicativo** | Se produce desde el día 1: hablar y escribir por encima de leer y reconocer |
| **Listas de frecuencia** | Los verbos irregulares más usados como plana diaria (12 el día 1, 18 el día 6, 24 desde el módulo 1) |
| **Errores típicos del hispanohablante** | Cada bloque de gramática señala los calcos del español que delatan el nivel (*"I have 30 years"*, *"Me like coffee"*, *"In my house have three rooms"*) |

## Estructura

- `app/` — la aplicación (HTML/CSS/JS puro, sin dependencias ni build)
  - `js/speech.js` — voz: síntesis y reconocimiento, con puntuación palabra por palabra
  - `js/exercises.js` — motor de ejercicios: flashcards, opción múltiple, rellenar, traducir, dictado, banco de palabras, emparejar, speaking, planas y exámenes
  - `js/curriculum.js` — hitos, verbos base, día 1 y ensamblado de módulos
  - `js/days/` — un archivo por tramo de días (`m0-d2-d3.js`, `m0-d4-d6.js`…)
  - `js/session.js` — la sesión guiada bloque a bloque
  - `js/store.js` — progreso, racha, XP, exámenes, logros y el sistema de respaldo
  - `js/main.js` — router y vistas (Today, Course, Practice, Progress)

## Estado

- ✅ **Módulos 0 y 1 completos: días 1 a 14** (~115-135 min cada uno), con examen por día y examen grande al cerrar cada módulo (30 y 35 preguntas).
- ✅ 172 bloques y ~700 ejercicios verificados uno a uno; ~150 palabras de vocabulario con audio.
- ✅ **Hito 1** (presentarte) y **hito 2** (contar tu día completo) construidos.
- ✅ Speaking con calificación automática palabra por palabra (Chrome/Edge).
- ✅ Dos planas diarias: los 24 verbos irregulares más frecuentes y la **-s de tercera persona**.
- ✅ Progreso a prueba de accidentes: copia espejo, instantáneas diarias y código de progreso.
- ⏳ Módulos 2 a 7 pendientes de construir (días 15 a 66).
