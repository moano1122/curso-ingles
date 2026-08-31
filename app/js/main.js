/* ============================================================
   UI principal: router por hash y vistas
   (Today, Course, Day, Practice, Progress).
   ============================================================ */

(function () {
  "use strict";

  const main = () => document.getElementById("main");

  /* ---------------- Utilidades ---------------- */

  function toast(ico, title, sub) {
    const c = document.getElementById("toastContainer");
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `<div class="t-ico">${ico}</div><div><div class="t-title">${title}</div>${sub ? `<div class="t-sub">${sub}</div>` : ""}</div>`;
    c.appendChild(t);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 350); }, 3800);
  }

  function refreshSidebar() {
    const streak = Store.currentStreak();
    document.getElementById("streakDays").textContent = streak;
    document.getElementById("streakWidget").classList.toggle("cold", streak === 0);
    const li = Store.levelInfo();
    document.getElementById("levelLabel").textContent = `Level ${li.level}`;
    document.getElementById("xpLabel").textContent = `${Store.state.xp} XP`;
    document.getElementById("xpFill").style.width = `${Math.round(li.into / li.needed * 100)}%`;
  }

  function esc(s) { return Exercises.esc(s); }

  function currentDay() {
    const days = Curriculum.allDays();
    return days.find(d => !d.soon && !Store.isDayDone(d.id)) || days.find(d => !d.soon);
  }

  function moduleProgress(m) {
    if (!m.days) return { done: 0, total: 0, pct: 0 };
    const built = m.days.filter(d => !d.soon);
    const done = built.filter(d => Store.isDayDone(d.id)).length;
    return { done, total: m.days.length, pct: Math.round(done / m.days.length * 100) };
  }

  function milestonesDone() {
    return Curriculum.MILESTONES.filter(h => Store.isDayDone(h.dayId)).length;
  }

  function bindSay(root) {
    root.querySelectorAll("[data-say]").forEach(s => {
      s.style.cursor = "pointer";
      s.addEventListener("click", () => Speech.say(s.dataset.say));
    });
  }

  /* ---------------- Vista: TODAY ---------------- */

  function viewHoy() {
    const day = currentDay();
    const minToday = Store.minutesToday();
    const streak = Store.currentStreak();
    const hDone = milestonesDone();
    const pct = Math.round(hDone / Curriculum.MILESTONES.length * 100);
    const totalH = (Store.totalMinutes() / 60).toFixed(1);
    const hour = new Date().getHours();
    const hi = hour < 12 ? "Good morning" : hour < 19 ? "Good afternoon" : "Good evening";
    const hiEs = hour < 12 ? "Buenos días" : hour < 19 ? "Buenas tardes" : "Buenas noches";

    main().innerHTML = `
      <h1>${hi} 👋</h1>
      <p class="page-sub">${hiEs}. ${minToday >= Store.DAILY_GOAL
        ? "Meta de hoy cumplida — dos horas de inglés. Lo que hagas ahora es ganancia."
        : minToday >= Store.STREAK_MIN
        ? `Llevas ${minToday} min hoy: la racha está a salvo. La meta completa son ${Store.DAILY_GOAL}.`
        : streak > 0
        ? `Racha de ${streak} día${streak > 1 ? "s" : ""} en juego. Con 20 minutos la defiendes.`
        : "Hoy es un buen día para empezar la cadena. Dale al botón y ya."}</p>

      ${Store.needsBackup() ? `
      <div class="card" style="border-color:var(--gold)">
        <div class="row">
          <span style="font-size:26px">💾</span>
          <div style="flex:1;min-width:220px">
            <strong>Haz un respaldo de tu progreso</strong>
            <div class="muted">Llevas ${(Store.totalMinutes() / 60).toFixed(1)} h de trabajo guardadas solo en este navegador.
            Un respaldo toma cinco segundos y te protege de un borrado accidental o de un cambio de PC.</div>
          </div>
          <a class="btn go" href="#/progreso">Ir a respaldar</a>
        </div>
      </div>` : ""}

      <div class="card hero-goal">
        <div class="big-emoji">🎯</div>
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;align-items:baseline">
            <strong>The path to your first real conversation</strong>
            <span style="color:var(--text-dim);font-size:14px">${hDone}/${Curriculum.MILESTONES.length} milestones</span>
          </div>
          <div class="goal-bar-outer"><div class="goal-bar-inner" style="width:${Math.max(2, pct)}%"></div></div>
          <div class="milestone-list">
            ${Curriculum.MILESTONES.map((h, i) => {
              const done = Store.isDayDone(h.dayId);
              const isCurrent = !done && i === hDone;
              return `<span class="milestone ${done ? "done" : isCurrent ? "current" : ""}" title="${esc(h.desc)} — ${h.mod}">${done ? "✓ " : ""}${h.id}: ${esc(h.label)} <span style="opacity:0.7">· ${h.mod}</span></span>`;
            }).join("")}
          </div>
          <div style="font-size:12px;color:var(--text-faint);margin-top:8px">Los hitos avanzan al completar el día que los contiene, no por tiempo acumulado.</div>
        </div>
      </div>

      ${day && !day.soon ? `
      <div class="card today-session-card">
        <div style="position:relative">
          <h2 style="margin-top:0">Today's session · ${esc(day.title)}</h2>
          <p style="color:var(--text-dim);margin-bottom:4px">${esc(day.goal)}</p>
          <div class="session-blocks-preview">
            ${day.blocks.map(b => `<div class="block-preview"><span class="block-min">${b.minutes} min</span> ${b.title} <span style="color:var(--text-faint)">· ${b.kind}</span></div>`).join("")}
          </div>
          <div class="row">
            <button class="btn primary big" id="startSession">▶ Start session (${day.blocks.reduce((a, b) => a + b.minutes, 0)} min)</button>
            <span style="font-size:13.5px;color:var(--text-dim)">¿Poco tiempo hoy? Los primeros bloques (20 min) ya salvan la racha.</span>
          </div>
        </div>
      </div>` : `
      <div class="card"><h2 style="margin-top:0">Ya completaste todo lo construido 🎉</h2>
      <p class="muted">Pide el siguiente módulo y el curso sigue creciendo. Mientras tanto, entra a <a href="#/practica" style="color:var(--accent)">Practice</a>: la plana de verbos y el repaso de vocabulario están siempre disponibles.</p></div>`}

      <div class="stat-row">
        <div class="stat-tile"><div class="stat-num">${minToday}<span style="font-size:15px;color:var(--text-dim)"> / ${Store.DAILY_GOAL} min</span></div><div class="stat-cap">estudiados hoy</div></div>
        <div class="stat-tile"><div class="stat-num">🔥 ${streak}</div><div class="stat-cap">días de racha (récord: ${Store.state.streak.best})</div></div>
        <div class="stat-tile"><div class="stat-num">${totalH} h</div><div class="stat-cap">de inglés acumuladas</div></div>
        <div class="stat-tile"><div class="stat-num">${Store.state.wordsLearned}</div><div class="stat-cap">palabras practicadas</div></div>
      </div>`;

    const btn = document.getElementById("startSession");
    if (btn) btn.addEventListener("click", () => SessionPlayer.start(day.blocks, { day }));
  }

  /* ---------------- Vista: COURSE ---------------- */

  function viewCurso() {
    main().innerHTML = `
      <h1>The course</h1>
      <p class="page-sub">Ocho módulos, del "yo soy" a una conversación de diez minutos. <strong>Nada se bloquea por tiempo</strong>:
      puedes entrar a cualquier día ya construido y marcarlo cuando lo domines. Los módulos con 🔒 aún no existen —
      pídelos cuando te acerques y el curso crece contigo.</p>
      <div id="moduleList"></div>`;

    const list = document.getElementById("moduleList");
    Curriculum.MODULES.forEach(m => {
      const p = moduleProgress(m);
      const card = document.createElement("div");
      card.className = `card module-card ${m.locked ? "locked" : ""}`;
      card.innerHTML = `
        <div class="module-head">
          <div class="module-icon">${m.locked ? "🔒" : m.icon}</div>
          <div>
            <div class="module-title">${esc(m.title)}</div>
            <div class="module-sub">${esc(m.sub)}</div>
          </div>
          ${m.locked ? "" : `<div class="module-progress">${p.done}/${p.total} days<div class="mini-bar"><div class="mini-fill" style="width:${p.pct}%"></div></div></div>`}
        </div>`;
      if (!m.locked) card.addEventListener("click", () => { location.hash = `#/modulo/${m.id}`; });
      list.appendChild(card);
    });
  }

  /* ---------------- Vista: MODULE ---------------- */

  function viewModulo(modId) {
    const m = Curriculum.MODULES.find(x => x.id === modId);
    if (!m || !m.days) { location.hash = "#/curso"; return; }
    main().innerHTML = `
      <div class="breadcrumb"><a href="#/curso">The course</a> › ${esc(m.title)}</div>
      <h1>${m.icon} ${esc(m.title)}</h1>
      <p class="page-sub">${esc(m.sub)}</p>
      <div class="card" id="dayList" style="padding:8px"></div>`;
    const list = document.getElementById("dayList");
    m.days.forEach(d => {
      const done = Store.isDayDone(d.id);
      const score = Store.examScore(d.id);
      const row = document.createElement("div");
      row.className = `day-row ${done ? "done" : ""}`;
      row.innerHTML = `
        <div class="day-check">${done ? "✓" : ""}</div>
        <div style="flex:1">
          <div style="font-weight:600">${esc(d.title)} ${d.soon ? '<span class="day-tag" style="background:var(--bg-hover);color:var(--text-faint)">soon</span>' : ""}</div>
          <div style="font-size:13px;color:var(--text-dim)">${esc(d.titleEs || "")}</div>
        </div>
        ${score ? `<div class="muted">exam ${score}%</div>` : ""}`;
      if (!d.soon) row.addEventListener("click", () => { location.hash = `#/dia/${m.id}/${d.id}`; });
      else row.style.opacity = "0.5";
      list.appendChild(row);
    });
  }

  /* ---------------- Vista: DAY ---------------- */

  function viewDia(modId, dayId) {
    const m = Curriculum.MODULES.find(x => x.id === modId);
    const d = m && m.days && m.days.find(x => x.id === dayId);
    if (!d || d.soon) { location.hash = "#/curso"; return; }
    const done = Store.isDayDone(d.id);
    const total = d.blocks.reduce((a, b) => a + b.minutes, 0);

    main().innerHTML = `
      <div class="breadcrumb"><a href="#/curso">The course</a> › <a href="#/modulo/${m.id}">${esc(m.title)}</a> › ${esc(d.title)}</div>
      <h1>${esc(d.title)}</h1>
      <p class="page-sub">${esc(d.titleEs || "")}</p>
      <div class="card">
        <h3 style="margin-top:0">Today's goal</h3>
        <p>${esc(d.goal)}</p>
        <h3>By the end of this day, I can…</h3>
        <ul class="lesson-content" style="margin-left:20px">${(d.canDo || []).map(c => `<li>${c}</li>`).join("")}</ul>
        <div class="row" style="margin-top:18px">
          <button class="btn primary big" id="go">▶ ${done ? "Repetir el día" : "Start"} (${total} min)</button>
          ${Store.examScore(d.id) ? `<span class="muted">Mejor nota del examen: <strong style="color:${Store.examScore(d.id) >= 80 ? "var(--green)" : "var(--gold)"}">${Store.examScore(d.id)}%</strong></span>` : ""}
        </div>
      </div>
      <h2>Blocks</h2>
      <div class="card" style="padding:10px 14px">
        ${d.blocks.map((b, i) => `<div class="block-preview" style="padding:6px 4px"><span class="block-min">${b.minutes} min</span> <strong>${b.title}</strong> <span style="color:var(--text-faint)">· ${b.kind}</span></div>`).join("")}
      </div>`;
    document.getElementById("go").addEventListener("click", () => SessionPlayer.start(d.blocks, { day: d }));
  }

  /* ---------------- Vista: PRACTICE ---------------- */

  function viewPractica() {
    main().innerHTML = `
      <h1>Practice</h1>
      <p class="page-sub">Herramientas sueltas para los días que no alcanzan las dos horas, o para rematar antes de dormir.</p>
      <div class="tool-grid">
        <div class="card tool-card">
          <h3>✍️ Verb drill</h3>
          <p class="muted">La plana de los 12 verbos esenciales, tres rondas en orden aleatorio. Hazla todos los días.</p>
          <p class="muted">Planas completadas: <strong>${Store.state.verbDrills}</strong></p>
          <button class="btn go" data-tool="verbs">Start the drill</button>
        </div>
        <div class="card tool-card">
          <h3>🎤 Pronunciation lab</h3>
          <p class="muted">Escribe cualquier frase en inglés, escúchala y practica tu pronunciación con calificación.</p>
          <button class="btn primary" data-tool="speak">Open the lab</button>
        </div>
        <div class="card tool-card">
          <h3>🔁 Hard words</h3>
          <p class="muted">Las palabras que más has fallado, en tarjetas. ${Store.hardWords().length ? `Tienes <strong>${Store.hardWords().length}</strong> pendientes.` : "Aún no has fallado ninguna — vuelve después de un par de días."}</p>
          <button class="btn" data-tool="hard" ${Store.hardWords().length ? "" : "disabled"}>Review them</button>
        </div>
        <div class="card tool-card">
          <h3>🔊 Voice settings</h3>
          <p class="muted">Elige la voz y la velocidad con la que el curso te habla.</p>
          <div class="row"><select id="voiceSel" style="flex:1"></select></div>
          <div class="row" style="margin-top:10px"><span class="muted">Speed</span><input type="range" id="rate" min="0.5" max="1.2" step="0.05" style="flex:1"><span class="muted" id="rateVal"></span></div>
          <div class="row" style="margin-top:10px"><button class="btn small" id="testVoice">🔊 Test</button></div>
        </div>
      </div>
      <div id="toolSlot"></div>`;

    const slot = document.getElementById("toolSlot");

    main().querySelectorAll("[data-tool]").forEach(b => {
      b.addEventListener("click", () => {
        slot.innerHTML = "";
        const t = b.dataset.tool;
        if (t === "verbs") {
          slot.appendChild(el(`<h2>Verb drill</h2>`));
          slot.appendChild(Exercises.render({ type: "verbdrill", verbs: Curriculum.CORE_VERBS, reps: 3 }, () => {
            Store.addXP(25, "Verb drill");
            Store.logStudy(10);
          }));
        } else if (t === "hard") {
          const words = Store.hardWords(15);
          slot.appendChild(el(`<h2>Hard words</h2>`));
          slot.appendChild(Exercises.render({
            type: "flashcards",
            items: words.map(w => ({ en: w, es: "(la fallaste antes — dile el significado en voz alta antes de voltear)", ipa: "" })),
          }));
        } else if (t === "speak") {
          slot.appendChild(pronunciationLab());
        }
        slot.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* Ajustes de voz */
    const sel = document.getElementById("voiceSel");
    const voices = Speech.voiceList();
    if (!voices.length) {
      sel.innerHTML = "<option>No hay voces en inglés instaladas</option>";
      sel.disabled = true;
    } else {
      const saved = localStorage.getItem("eng_voice");
      sel.innerHTML = voices.map(v => `<option ${v.name === saved ? "selected" : ""}>${esc(v.name)} (${v.lang})</option>`).join("");
      sel.addEventListener("change", () => Speech.setVoice(voices[sel.selectedIndex].name));
    }
    const rate = document.getElementById("rate");
    const rateVal = document.getElementById("rateVal");
    rate.value = localStorage.getItem("eng_rate") || 0.9;
    rateVal.textContent = rate.value + "×";
    rate.addEventListener("input", () => { localStorage.setItem("eng_rate", rate.value); rateVal.textContent = rate.value + "×"; });
    document.getElementById("testVoice").addEventListener("click", () =>
      Speech.say("Hello! This is how I sound. Nice to meet you."));
  }

  function el(html) {
    const d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  function pronunciationLab() {
    const wrap = el(`
      <div class="card">
        <h2 style="margin-top:0">🎤 Pronunciation lab</h2>
        <p class="muted">Escribe una frase en inglés, escúchala y luego dila al micrófono. El curso te la califica palabra por palabra.</p>
        <div class="row">
          <input type="text" id="labPhrase" style="flex:1;min-width:240px" value="I am learning English every day." >
          <button class="btn" id="labPlay">🔊 Listen</button>
          <button class="btn" id="labSlow">🐢 Slow</button>
        </div>
        <div id="labSlot" style="margin-top:14px"></div>
      </div>`);
    const inp = wrap.querySelector("#labPhrase");
    wrap.querySelector("#labPlay").addEventListener("click", () => Speech.say(inp.value));
    wrap.querySelector("#labSlow").addEventListener("click", () => Speech.say(inp.value, { rate: 0.55 }));

    const slot = wrap.querySelector("#labSlot");
    if (!Speech.canListen()) {
      slot.innerHTML = '<p class="muted">Tu navegador no tiene reconocimiento de voz. Usa Chrome o Edge para que te califique.</p>';
      return wrap;
    }
    const mic = el('<button class="mic-btn" type="button">🎤</button>');
    const heard = el('<div class="heard"></div>');
    const score = el('<div class="score-ring"></div>');
    slot.append(mic, score, heard);
    mic.addEventListener("click", () => {
      if (mic.classList.contains("listening")) return;
      mic.classList.add("listening");
      heard.textContent = "Listening...";
      score.textContent = "";
      const target = inp.value;
      Speech.listen((text, err) => {
        mic.classList.remove("listening");
        if (err) { heard.innerHTML = '<span class="muted">No te oí, o el micrófono no tiene permiso.</span>'; return; }
        const r = Speech.score(text, target);
        score.textContent = r.pct + "%";
        score.style.color = r.pct >= 80 ? "var(--green)" : r.pct >= 50 ? "var(--gold)" : "var(--red)";
        heard.innerHTML = `<div style="font-size:14px;color:var(--text-faint)">Te oí: "${esc(r.heard)}"</div>${Speech.marksHTML(r.marks)}`;
        Store.recordSpeak(target, r.pct);
      });
    });
    return wrap;
  }

  /* ---------------- Vista: PROGRESS ---------------- */

  function viewProgreso() {
    const li = Store.levelInfo();
    const days = Object.keys(Store.state.studyLog).length;
    const exams = Object.entries(Store.state.examScores);
    const speaks = Object.values(Store.state.speakRecords);
    const avgSpeak = speaks.length ? Math.round(speaks.reduce((a, b) => a + b, 0) / speaks.length) : 0;
    const snaps = Store.snapshots();

    main().innerHTML = `
      <h1>Progress</h1>
      <p class="page-sub">Todo esto vive en el navegador de este equipo. Para llevarlo a otro PC usa el respaldo de abajo.</p>

      <div class="stat-row">
        <div class="stat-tile"><div class="stat-num">Level ${li.level}</div><div class="stat-cap">${Store.state.xp} XP · faltan ${li.needed - li.into} para el siguiente</div></div>
        <div class="stat-tile"><div class="stat-num">🔥 ${Store.currentStreak()}</div><div class="stat-cap">racha actual (récord ${Store.state.streak.best})</div></div>
        <div class="stat-tile"><div class="stat-num">${(Store.totalMinutes() / 60).toFixed(1)} h</div><div class="stat-cap">en ${days} día${days === 1 ? "" : "s"} de estudio</div></div>
        <div class="stat-tile"><div class="stat-num">${Store.state.wordsLearned}</div><div class="stat-cap">palabras practicadas</div></div>
        <div class="stat-tile"><div class="stat-num">${Store.state.verbDrills}</div><div class="stat-cap">planas de verbos</div></div>
        <div class="stat-tile"><div class="stat-num">${avgSpeak}%</div><div class="stat-cap">pronunciación media (${speaks.length} frases)</div></div>
      </div>

      <h2>Últimas 4 semanas</h2>
      <div class="card"><div class="cal-grid" id="cal"></div>
      <p class="muted" style="margin-top:12px">Cada cuadro es un día. Más verde = más minutos. El objetivo no es que todos estén oscuros: es que no haya dos blancos seguidos.</p></div>

      ${exams.length ? `<h2>Exámenes</h2><div class="card">${exams.map(([id, pct]) => {
        const d = Curriculum.allDays().find(x => x.id === id);
        return `<div class="block-preview"><span class="block-min" style="color:${pct >= 80 ? "var(--green)" : "var(--gold)"}">${pct}%</span> ${esc(d ? d.title : id)}</div>`;
      }).join("")}</div>` : ""}

      <h2>Achievements</h2>
      <div class="badge-grid">
        ${Store.BADGES.map(b => {
          const got = Store.state.badges[b.id];
          return `<div class="badge ${got ? "" : "locked"}"><div class="b-ico">${b.ico}</div><div class="b-name">${b.name}</div><div class="b-desc">${b.desc}</div></div>`;
        }).join("")}
      </div>

      <h2>Respaldo</h2>
      <div class="card">
        <p class="muted">El progreso vive en este navegador. Cada dirección (localhost y la web) guarda el suyo por separado.
        Lo más cómodo para pasarlo de un PC a otro es el <strong>código de progreso</strong>: se copia y se pega, sin archivos.</p>
        <div class="row">
          <button class="btn go" id="codeBtn">📋 Copiar código de progreso</button>
          <button class="btn" id="pasteBtn">📥 Pegar un código</button>
          <button class="btn" id="expBtn">⬇ Descargar respaldo</button>
          <button class="btn" id="impBtn">⬆ Restaurar desde archivo</button>
          <input type="file" id="impFile" accept=".json" style="display:none">
        </div>
        <div id="codeSlot"></div>
        ${Store.state.lastBackup ? `<p class="muted" style="margin-top:10px">Último respaldo descargado: ${Store.state.lastBackup}</p>` : ""}
      </div>

      <h2>Recuperar progreso</h2>
      <div class="card">
        <p class="muted">El curso guarda una <strong>instantánea por día</strong>, además de una copia espejo. Si algo se pierde o
        se borra por error, se restaura desde aquí. Nada de esto se elimina al usar "Borrar todo".</p>
        ${snaps.length ? `
          <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">
            ${snaps.slice().reverse().slice(0, 12).map(s => {
              const d = s.data || {};
              const dias = Object.keys(d.completedDays || {}).length;
              const horas = (Object.values(d.studyLog || {}).reduce((a, b) => a + b, 0) / 60).toFixed(1);
              return `<div class="row" style="border-top:1px solid var(--border);padding-top:6px">
                <div style="flex:1">
                  <strong>${s.day}</strong> ${s.tag ? `<span class="day-tag">${esc(s.tag)}</span>` : ""}
                  <div class="muted">${d.xp || 0} XP · ${dias} día${dias === 1 ? "" : "s"} completado${dias === 1 ? "" : "s"} · ${horas} h · racha ${(d.streak || {}).best || 0}</div>
                </div>
                <button class="btn small" data-restore="${s.t}">Restaurar</button>
              </div>`;
            }).join("")}
          </div>` : `<p class="muted">Todavía no hay instantáneas — aparecen a medida que estudias.</p>`}

        <h3>Si ya no queda nada que recuperar</h3>
        <p class="muted">Cuando el navegador borró todos los datos del sitio no hay nada que rescatar. En ese caso se puede
        reconstruir el progreso a mano: dime cuántos días del curso alcanzaste a completar y cuántos días seguidos llevabas.
        No inventa historial — solo marca lo que confirmes.</p>
        <div class="row">
          <label class="muted">Días completados <input type="number" id="rbDays" min="0" max="70" value="0" style="width:80px"></label>
          <label class="muted">Racha <input type="number" id="rbStreak" min="0" max="365" value="0" style="width:80px"></label>
          <button class="btn" id="rbBtn">Reconstruir</button>
        </div>
      </div>

      <div class="card" style="border-color:var(--red)">
        <h3 style="margin-top:0;color:var(--red)">Zona peligrosa</h3>
        <p class="muted">Borra el progreso de este navegador. Antes de borrar se guarda una instantánea etiquetada,
        así que se puede deshacer desde "Recuperar progreso" — pero no lo uses por curiosidad.</p>
        <div class="row">
          <input type="text" id="wipeWord" placeholder="Escribe BORRAR para habilitar" style="min-width:230px">
          <button class="btn ghost" id="resetBtn" style="color:var(--red)" disabled>Borrar todo</button>
        </div>
      </div>`;

    /* Calendario */
    const cal = document.getElementById("cal");
    const today = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      const key = Store.dateKey(d);
      const min = Store.state.studyLog[key] || 0;
      const lvl = min === 0 ? "" : min < 30 ? "p1" : min < 90 ? "p2" : "p3";
      cal.innerHTML += `<div class="cal-cell ${lvl} ${i === 0 ? "today" : ""}" title="${key}: ${min} min">${d.getDate()}</div>`;
    }

    document.getElementById("expBtn").addEventListener("click", () => {
      const blob = new Blob([Store.exportData()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `ingles-progreso-${Store.todayStr()}.json`;
      a.click();
      Store.markBackup();
      toast("💾", "Respaldo descargado", "Guárdalo donde no se pierda");
    });

    /* Código de progreso: copiar / pegar entre equipos */
    const codeSlot = document.getElementById("codeSlot");
    document.getElementById("codeBtn").addEventListener("click", () => {
      const code = Store.exportCode();
      codeSlot.innerHTML = `<p class="muted" style="margin-top:12px">Copia todo este texto y pégalo en el otro PC con "Pegar un código":</p>
        <textarea readonly style="width:100%;height:90px;background:var(--bg-raised);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:10px;font-family:Consolas,monospace;font-size:12px">${code}</textarea>`;
      const ta = codeSlot.querySelector("textarea");
      ta.select();
      if (navigator.clipboard) navigator.clipboard.writeText(code).then(
        () => toast("📋", "Código copiado", "Ya lo puedes pegar en el otro PC"),
        () => toast("📋", "Selecciónalo y copia con Ctrl+C", ""));
      Store.markBackup();
    });
    document.getElementById("pasteBtn").addEventListener("click", () => {
      codeSlot.innerHTML = `<p class="muted" style="margin-top:12px">Pega aquí el código que copiaste en el otro PC:</p>
        <textarea id="pasteArea" style="width:100%;height:90px;background:var(--bg-raised);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:10px;font-family:Consolas,monospace;font-size:12px" placeholder="ENG1:..."></textarea>
        <div class="row" style="margin-top:8px"><button class="btn go" id="pasteGo">Restaurar desde el código</button></div>`;
      codeSlot.querySelector("#pasteGo").addEventListener("click", () => {
        try {
          Store.importCode(codeSlot.querySelector("#pasteArea").value);
          toast("✅", "Progreso restaurado", "Se guardó una instantánea del estado anterior");
          route();
        } catch (e) { toast("⚠️", "No se pudo restaurar", e.message); }
      });
    });

    /* Restaurar una instantánea */
    main().querySelectorAll("[data-restore]").forEach(b => {
      b.addEventListener("click", () => {
        try {
          Store.restoreSnapshot(b.dataset.restore);
          toast("↩️", "Progreso restaurado", "Volviste al estado de esa fecha");
          route();
        } catch (e) { toast("⚠️", "No se pudo restaurar", e.message); }
      });
    });

    /* Reconstrucción manual */
    document.getElementById("rbBtn").addEventListener("click", () => {
      const days = Number(document.getElementById("rbDays").value) || 0;
      const streak = Number(document.getElementById("rbStreak").value) || 0;
      if (!days && !streak) { toast("🤔", "Pon al menos un número", ""); return; }
      Store.manualRebuild({ daysDone: days, streak });
      toast("🛠️", "Progreso reconstruido", `${days} día(s) marcados, racha ${streak}`);
      route();
    });
    document.getElementById("impBtn").addEventListener("click", () => document.getElementById("impFile").click());
    document.getElementById("impFile").addEventListener("change", ev => {
      const f = ev.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try { Store.importData(r.result); toast("✅", "Progreso restaurado", ""); route(); }
        catch (e) { toast("⚠️", "No se pudo restaurar", e.message); }
      };
      r.readAsText(f);
    });
    const wipeWord = document.getElementById("wipeWord");
    const resetBtn = document.getElementById("resetBtn");
    wipeWord.addEventListener("input", () => { resetBtn.disabled = wipeWord.value.trim().toUpperCase() !== "BORRAR"; });
    resetBtn.addEventListener("click", () => {
      if (resetBtn.disabled) return;
      Store.wipe();
      location.reload();
    });
  }

  /* ---------------- Router ---------------- */

  function route() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    const h = location.hash.replace(/^#\//, "") || "hoy";
    const parts = h.split("/");
    const r = parts[0];

    document.querySelectorAll(".nav-link").forEach(a =>
      a.classList.toggle("active", a.dataset.route === r));

    if (r === "curso") viewCurso();
    else if (r === "modulo") viewModulo(parts[1]);
    else if (r === "dia") viewDia(parts[1], parts[2]);
    else if (r === "practica") viewPractica();
    else if (r === "progreso") viewProgreso();
    else viewHoy();

    bindSay(main());
    refreshSidebar();
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  window.UI = { toast, refreshSidebar, route };
  route();

  // Si al arrancar hubo que rescatar el progreso, decirlo — en silencio no.
  if (Store.recoveredFrom) {
    setTimeout(() => toast("♻️", "Progreso recuperado", `La copia principal falló y se restauró desde ${Store.recoveredFrom}`), 600);
  }
})();
