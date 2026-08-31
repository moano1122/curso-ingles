/* ============================================================
   Sesión guiada: pantalla completa, bloque por bloque.
   A diferencia del curso de guitarra, aquí el cronómetro NO
   empuja: los ejercicios se responden a tu ritmo y tú decides
   cuándo pasar. El tiempo es una guía, no un látigo.

   SessionPlayer.start(blocks, meta)
   blocks: [{ title, titleEs, kind, minutes, html, ex }]
   ============================================================ */

(function () {
  "use strict";

  const overlay = () => document.getElementById("sessionOverlay");
  let current = null;

  function fmt(sec) {
    const neg = sec < 0;
    const s0 = Math.abs(sec);
    const m = Math.floor(s0 / 60), s = s0 % 60;
    return `${neg ? "+" : ""}${m}:${String(s).padStart(2, "0")}`;
  }

  function renderBlock() {
    const { blocks, idx } = current;
    const b = blocks[idx];
    const ov = overlay();
    if (window.speechSynthesis) speechSynthesis.cancel();

    const segs = blocks.map((_, i) =>
      `<div class="sess-seg ${i < idx ? "done" : i === idx ? "current" : ""}"></div>`).join("");

    ov.innerHTML = `
      <div class="sess-top">
        <button class="btn ghost" data-act="quit">✕ Salir</button>
        <div class="sess-progress-track">${segs}</div>
        <div style="font-size:13px;color:var(--text-dim);white-space:nowrap">Block ${idx + 1}/${blocks.length}</div>
      </div>
      <div class="sess-body">
        <div class="sess-block-kind">${b.kind || "practice"}</div>
        <div class="sess-block-title">${b.title}</div>
        ${b.titleEs ? `<div class="sess-block-es">${b.titleEs}</div>` : ""}
        <div class="sess-timer" id="sessTimer">${fmt(current.secondsLeft)}</div>
        <div class="sess-controls">
          <button class="btn" data-act="pause">⏸ Pause</button>
          <button class="btn primary" data-act="next">${idx === blocks.length - 1 ? "✔ Finish the day" : "Next block ➜"}</button>
        </div>
        ${b.html ? `<div class="sess-instructions lesson-content">${b.html}</div>` : ""}
        <div data-slot="ex"></div>
        ${idx < blocks.length - 1 ? `<div style="font-size:13px;color:var(--text-faint);margin-top:10px">Next up: ${blocks[idx + 1].title}</div>` : ""}
      </div>`;

    if (b.ex) {
      const holder = ov.querySelector('[data-slot="ex"]');
      const node = Exercises.render(b.ex, res => {
        if (res && res.pct != null && b.ex.type !== "flashcards") {
          Store.addXP(Math.round(res.pct / 10) + 5, b.title);
        }
      });
      holder.appendChild(node);
    }

    // Las traducciones ocultas se revelan al hacer clic
    ov.querySelectorAll(".reveal").forEach(r => {
      r.addEventListener("click", () => r.classList.toggle("shown"));
    });
    // Botones de audio inline: <span class="speak" data-say="Hello">
    ov.querySelectorAll("[data-say]").forEach(s => {
      s.style.cursor = "pointer";
      s.addEventListener("click", () => Speech.say(s.dataset.say));
    });

    ov.querySelector('[data-act="quit"]').addEventListener("click", quit);
    ov.querySelector('[data-act="next"]').addEventListener("click", nextBlock);
    ov.querySelector('[data-act="pause"]').addEventListener("click", togglePause);
    ov.scrollTop = 0;
  }

  function tick() {
    if (!current || current.paused) return;
    current.secondsLeft--;
    current.elapsed++;
    const t = document.getElementById("sessTimer");
    if (t) {
      t.textContent = fmt(current.secondsLeft);
      t.classList.toggle("warn", current.secondsLeft <= 0);
    }
  }

  function togglePause() {
    current.paused = !current.paused;
    const btn = overlay().querySelector('[data-act="pause"]');
    if (btn) btn.textContent = current.paused ? "▶ Resume" : "⏸ Pause";
  }

  function nextBlock() {
    if (!current) return;
    if (current.idx >= current.blocks.length - 1) { finish(); return; }
    current.idx++;
    current.secondsLeft = current.blocks[current.idx].minutes * 60;
    renderBlock();
  }

  function finish() {
    const minutes = Math.max(1, Math.round(current.elapsed / 60));
    const meta = current.meta || {};
    clearInterval(current.interval);
    if (window.speechSynthesis) speechSynthesis.cancel();

    Store.logStudy(minutes);
    Store.sessionDone();
    Store.addXP(30 + Math.round(minutes / 2), "Session completed");

    const totalToday = Store.minutesToday();
    const day = meta.day;
    const examPct = day ? Store.examScore(day.id) : 0;

    overlay().innerHTML = `
      <div class="sess-done">
        <div class="big">🎉</div>
        <h1 style="margin:12px 0 6px">Session complete!</h1>
        <p style="color:var(--text-dim);font-size:17px">
          ${minutes} minutos de inglés · ${totalToday} min hoy en total
          ${totalToday >= Store.DAILY_GOAL ? " · 🏆 ¡Meta de 2 horas cumplida!" : totalToday >= Store.STREAK_MIN ? " · 🔥 Tu racha está a salvo" : ""}
        </p>
        <p style="color:var(--text-dim);max-width:600px;margin:10px auto">
          Lo que practicaste hoy se consolida mientras duermes. Mañana te va a salir más fácil aunque no lo toques —
          y si lo tocas 10 minutos antes de dormir, mucho más.
        </p>
        ${day ? `
        <div style="max-width:600px;margin:22px auto 0;text-align:left;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px 20px">
          <strong>${day.title} — ¿lo das por dominado?</strong>
          <div style="font-size:13px;color:var(--text-dim);margin:4px 0 10px">
            ${examPct ? `Tu mejor nota en el examen de hoy: <strong style="color:${examPct >= 80 ? "var(--green)" : "var(--gold)"}">${examPct}%</strong>.` : "Aún no has hecho el examen del día."}
            Marca el día solo si te sientes capaz de usar esto mañana en una frase tuya.
          </div>
          <div style="font-size:14px;color:var(--text-dim);margin-bottom:10px">
            <strong>I can…</strong><ul style="margin-left:20px">${(day.canDo || []).map(c => `<li>${c}</li>`).join("")}</ul>
          </div>
          <button class="btn ${Store.isDayDone(day.id) ? "" : "go"}" data-act="markday">
            ${Store.isDayDone(day.id) ? "✓ Día completado" : "✓ Marcar el día como completado"}
          </button>
        </div>` : ""}
        <div style="margin-top:20px;display:flex;gap:12px;justify-content:center">
          <button class="btn primary big" data-act="close">Back to Today</button>
        </div>
      </div>`;

    const mark = overlay().querySelector('[data-act="markday"]');
    if (mark) {
      mark.addEventListener("click", () => {
        if (Store.completeDay(day.id, 60)) {
          mark.textContent = "✓ Día completado";
          mark.classList.remove("go");
          if (window.UI) UI.toast("✅", `${day.title} completed`, "Mañana continúas con el siguiente día");
        }
      });
    }
    overlay().querySelector('[data-act="close"]').addEventListener("click", () => {
      close();
      location.hash = "#/hoy";
      if (window.UI) UI.route();
    });
    current = null;
  }

  function quit() {
    if (!current) return close();
    const minutes = Math.round(current.elapsed / 60);
    clearInterval(current.interval);
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (minutes >= 1) {
      Store.logStudy(minutes);
      Store.addXP(minutes, "Práctica parcial");
    }
    close();
    if (window.UI) UI.route();
  }

  function close() {
    if (current) { clearInterval(current.interval); current = null; }
    if (window.speechSynthesis) speechSynthesis.cancel();
    overlay().classList.add("hidden");
    overlay().innerHTML = "";
    document.body.style.overflow = "";
  }

  function start(blocks, meta = {}) {
    current = {
      blocks, idx: 0,
      secondsLeft: blocks[0].minutes * 60,
      elapsed: 0, paused: false, meta,
      interval: setInterval(tick, 1000),
    };
    overlay().classList.remove("hidden");
    document.body.style.overflow = "hidden";   // el fondo no debe moverse detrás del overlay
    window.scrollTo(0, 0);
    renderBlock();
  }

  window.SessionPlayer = { start, close };
})();
