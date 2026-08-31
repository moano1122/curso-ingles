/* ============================================================
   Motor de ejercicios interactivos.

   Exercises.render(spec, onDone) -> HTMLElement

   spec.type:
     flashcards  { items:[{en, es, ipa, ex, exEs}] }
     choice      { items:[{q, qEs, options:[], answer:idx, why, audio}] }
     fill        { items:[{sentence:"I ___ from Peru.", answer, alts, es, why}] }
     translate   { items:[{es, answer, alts, why}] }
     dictation   { items:[{en, es, why}] }
     build       { items:[{es, answer, extra:[]}] }
     speak       { items:[{en, es, tip}] , target: 70 }
     match       { pairs:[[en, es], ...] }
     verbdrill   { verbs:[{base, past, es}], reps: 3 }
     exam        { items:[ {kind:"choice"|"fill"|"translate"|"dictation"|"build", ...} ], pass: 80, dayId }

   onDone(resultado) -> { correct, total, pct }
   ============================================================ */

(function () {
  "use strict";

  const S = () => window.Speech;

  function el(html) {
    const d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  function shuffle(a) {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /* ============================================================
     Secuenciador genérico: recorre items uno por uno.
     ============================================================ */

  function sequence(items, opts, onDone) {
    const wrap = el(`
      <div class="ex-wrap">
        <div class="ex-head">
          <div class="ex-bar"><div class="ex-bar-fill" style="width:0%"></div></div>
          <div class="ex-count"></div>
        </div>
        <div class="ex-body"></div>
        <div class="ex-feedback"><div class="fb-title"></div><div class="fb-text"></div></div>
        <div class="ex-actions">
          <button class="btn go" data-act="check">Check · Comprobar</button>
          <button class="btn primary" data-act="next" style="display:none">Continue ➜</button>
          <span class="muted" data-hintline></span>
        </div>
      </div>`);

    const body = wrap.querySelector(".ex-body");
    const fb = wrap.querySelector(".ex-feedback");
    const fbT = wrap.querySelector(".fb-title");
    const fbX = wrap.querySelector(".fb-text");
    const bar = wrap.querySelector(".ex-bar-fill");
    const count = wrap.querySelector(".ex-count");
    const btnCheck = wrap.querySelector('[data-act="check"]');
    const btnNext = wrap.querySelector('[data-act="next"]');

    let i = 0, correct = 0;
    const review = [];
    let currentApi = null;

    function paint() {
      count.textContent = `${Math.min(i + 1, items.length)} / ${items.length}`;
      bar.style.width = `${Math.round((i / items.length) * 100)}%`;
    }

    function showFeedback(ok, title, text) {
      fb.className = "ex-feedback show " + (ok ? "ok" : "bad");
      fbT.textContent = title;
      fbX.innerHTML = text || "";
      btnCheck.style.display = "none";
      btnNext.style.display = "";
      btnNext.focus();
    }

    function resolve(ok, itemLabel, correctText, why) {
      if (ok) correct++;
      review.push({ ok, label: itemLabel, correct: correctText });
      showFeedback(
        ok,
        ok ? pickPraise() : "Not quite · Casi",
        ok ? (why || "") : `La respuesta correcta es: <strong>${esc(correctText)}</strong>${why ? "<br>" + why : ""}`
      );
    }

    const PRAISE = ["Correct! · ¡Correcto!", "Nice! · ¡Bien!", "Exactly! · ¡Exacto!", "Well done! · ¡Muy bien!", "That's it! · ¡Eso es!"];
    function pickPraise() { return PRAISE[Math.floor(Math.random() * PRAISE.length)]; }

    function renderItem() {
      fb.className = "ex-feedback";
      btnCheck.style.display = "";
      btnNext.style.display = "none";
      body.innerHTML = "";
      paint();
      const item = items[i];
      const api = { resolve, showFeedback, btnCheck, btnNext, body };
      const mine = RENDERERS[item.kind](body, item, api, opts);
      currentApi = mine;
      if (mine && mine.autoCheck) btnCheck.style.display = "none";
      // El foco va con retardo, así que hay que comprobar que el item
      // no haya cambiado mientras tanto (avanzar rápido lo provocaba).
      if (mine && mine.focus) setTimeout(() => { if (currentApi === mine) mine.focus(); }, 30);
    }

    btnCheck.addEventListener("click", () => { if (currentApi && currentApi.check) currentApi.check(); });
    btnNext.addEventListener("click", () => {
      i++;
      if (i >= items.length) finish();
      else renderItem();
    });

    wrap.addEventListener("keydown", ev => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        if (btnNext.style.display !== "none") btnNext.click();
        else if (btnCheck.style.display !== "none") btnCheck.click();
      }
    });

    function finish() {
      const pct = Math.round((correct / items.length) * 100);
      bar.style.width = "100%";
      count.textContent = `${items.length} / ${items.length}`;
      body.innerHTML = "";
      fb.className = "ex-feedback";
      btnCheck.style.display = "none";
      btnNext.style.display = "none";

      const pass = opts.pass || 0;
      const passed = pct >= pass;
      body.appendChild(el(`
        <div class="exam-result">
          <div class="exam-score ${passed ? "pass" : "fail"}">${pct}%</div>
          <p style="font-size:18px;margin-top:6px">${correct} de ${items.length} correctas</p>
          <p class="muted">${opts.pass
            ? (passed ? "¡Aprobado! Ya puedes cerrar el día con la conciencia tranquila."
                      : `Necesitas ${opts.pass}% para aprobar. Repite el examen — repetir un examen es de los ejercicios que más fijan la memoria.`)
            : "Los errores de hoy son el repaso de mañana."}</p>
          <div class="exam-review">
            ${review.map(r => `<div class="exam-item ${r.ok ? "" : "bad"}">${r.ok ? "✓" : "✗"} ${esc(r.label)}${r.ok ? "" : ` → <strong>${esc(r.correct)}</strong>`}</div>`).join("")}
          </div>
          <div class="row" style="justify-content:center;margin-top:20px">
            <button class="btn" data-act="retry">↻ Repetir</button>
          </div>
        </div>`));
      body.querySelector('[data-act="retry"]').addEventListener("click", () => {
        i = 0; correct = 0; review.length = 0; renderItem();
      });
      if (onDone) onDone({ correct, total: items.length, pct });
    }

    renderItem();
    return wrap;
  }

  /* ============================================================
     Renderizadores por tipo de item
     ============================================================ */

  const RENDERERS = {};

  /* ---------- Opción múltiple ---------- */
  RENDERERS.choice = function (body, item, api) {
    body.appendChild(el(`
      <div>
        <div class="ex-prompt">${esc(item.prompt || "Choose the correct answer · Elige la respuesta correcta")}</div>
        <div class="ex-target">${item.q}${item.qEs ? `<small>${esc(item.qEs)}</small>` : ""}</div>
      </div>`));
    if (item.audio && S().canSpeak()) {
      const r = el('<div class="row" style="margin-bottom:14px"></div>');
      const b = el('<button class="btn small" type="button">🔊 Listen</button>');
      b.addEventListener("click", () => S().say(item.audio));
      r.appendChild(b);
      body.appendChild(r);
      if (item.autoplay !== false) setTimeout(() => S().say(item.audio), 250);
    }
    const list = el('<div class="opt-list"></div>');
    const keys = ["1", "2", "3", "4", "5"];
    item.options.forEach((o, idx) => {
      const b = el(`<button class="opt" type="button"><span class="opt-key">${keys[idx] || ""}</span><span>${o}</span></button>`);
      b.addEventListener("click", () => {
        list.querySelectorAll(".opt").forEach(x => (x.disabled = true));
        const ok = idx === item.answer;
        b.classList.add(ok ? "ok" : "bad");
        if (!ok) list.children[item.answer].classList.add("ok");
        api.resolve(ok, stripTags(item.q), stripTags(item.options[item.answer]), item.why);
        if (item.sayAnswer !== false && S().canSpeak()) S().say(stripTags(item.options[item.answer]));
      });
      list.appendChild(b);
    });
    body.appendChild(list);
    return { autoCheck: true };
  };

  function stripTags(s) { return String(s).replace(/<[^>]*>/g, "").trim(); }

  /* ---------- Rellenar el hueco ---------- */
  RENDERERS.fill = function (body, item, api) {
    const parts = item.sentence.split("___");
    body.appendChild(el(`
      <div>
        <div class="ex-prompt">${esc(item.prompt || "Complete the sentence · Completa la frase")}</div>
        <div class="ex-target">${esc(parts[0])}<span style="color:var(--gold)">______</span>${esc(parts[1] || "")}${item.es ? `<small>${esc(item.es)}</small>` : ""}</div>
      </div>`));
    if (item.hint) body.appendChild(el(`<p class="muted" style="margin-bottom:10px">💡 ${esc(item.hint)}</p>`));
    const input = el('<input class="ex-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type here...">');
    body.appendChild(input);
    return {
      focus: () => input.focus(),
      check() {
        const v = input.value.trim();
        if (!v) { input.focus(); return; }
        const ok = S().equals(v, item.answer, item.alts);
        input.classList.add(ok ? "ok" : "bad");
        input.disabled = true;
        api.resolve(ok, item.sentence.replace("___", "___"), item.answer, item.why);
        if (S().canSpeak()) S().say(item.sentence.replace("___", item.answer));
      },
    };
  };

  /* ---------- Traducir al inglés ---------- */
  RENDERERS.translate = function (body, item, api) {
    body.appendChild(el(`
      <div>
        <div class="ex-prompt">${esc(item.prompt || "Write this in English · Escríbelo en inglés")}</div>
        <div class="ex-target">${esc(item.es)}</div>
      </div>`));
    if (item.hint) body.appendChild(el(`<p class="muted" style="margin-bottom:10px">💡 ${esc(item.hint)}</p>`));
    const input = el('<input class="ex-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in English...">');
    body.appendChild(input);
    return {
      focus: () => input.focus(),
      check() {
        const v = input.value.trim();
        if (!v) { input.focus(); return; }
        let ok = S().equals(v, item.answer, item.alts);
        let why = item.why;
        if (!ok && (S().almost(v, item.answer) || (item.alts || []).some(a => S().almost(v, a)))) {
          ok = true;
          why = `Casi exacto: se escribe <strong>${esc(item.answer)}</strong>. Te la doy por buena, pero fíjate en la ortografía.`;
        }
        input.classList.add(ok ? "ok" : "bad");
        input.disabled = true;
        api.resolve(ok, item.es, item.answer, why);
        if (S().canSpeak()) S().say(item.answer);
      },
    };
  };

  /* ---------- Dictado: oír y escribir ---------- */
  RENDERERS.dictation = function (body, item, api) {
    body.appendChild(el(`
      <div>
        <div class="ex-prompt">Listen and write what you hear · Escucha y escribe lo que oyes</div>
        <div class="ex-target" style="font-size:20px;color:var(--text-dim)">🎧</div>
      </div>`));
    const row = el('<div class="row" style="margin-bottom:14px"></div>');
    const b1 = el('<button class="btn primary" type="button">🔊 Play</button>');
    const b2 = el('<button class="btn" type="button">🐢 Slow</button>');
    b1.addEventListener("click", () => S().say(item.en));
    b2.addEventListener("click", () => S().say(item.en, { rate: 0.55 }));
    row.append(b1, b2);
    body.appendChild(row);
    if (!S().canSpeak()) {
      body.appendChild(el('<p class="muted">Tu navegador no tiene voces instaladas. Usa Chrome o Edge para los dictados.</p>'));
    }
    const input = el('<input class="ex-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type what you hear...">');
    body.appendChild(input);
    setTimeout(() => S().say(item.en), 350);
    return {
      focus: () => input.focus(),
      check() {
        const v = input.value.trim();
        if (!v) { input.focus(); return; }
        let ok = S().equals(v, item.en);
        let why = item.es ? `<em>${esc(item.es)}</em>${item.why ? "<br>" + item.why : ""}` : item.why;
        if (!ok && S().almost(v, item.en)) {
          ok = true;
          why = `Se escribe <strong>${esc(item.en)}</strong> — lo oíste bien, revisa la ortografía.<br>` + (why || "");
        }
        input.classList.add(ok ? "ok" : "bad");
        input.disabled = true;
        api.resolve(ok, "🎧 " + item.en, item.en, why);
      },
    };
  };

  /* ---------- Construir la frase con banco de palabras ---------- */
  RENDERERS.build = function (body, item, api) {
    body.appendChild(el(`
      <div>
        <div class="ex-prompt">Build the sentence · Arma la frase</div>
        <div class="ex-target">${esc(item.es)}</div>
      </div>`));
    const answer = el('<div class="bank-answer"></div>');
    const pool = el('<div class="bank-pool"></div>');
    body.append(answer, pool);

    const target = item.answer.split(/\s+/);
    const chips = shuffle(target.concat(item.extra || []));
    const picked = [];

    chips.forEach((w, idx) => {
      const c = el(`<button class="word-chip" type="button" data-i="${idx}">${esc(w)}</button>`);
      c.addEventListener("click", () => {
        c.classList.add("used");
        const inAns = el(`<button class="word-chip" type="button">${esc(w)}</button>`);
        inAns.addEventListener("click", () => { inAns.remove(); c.classList.remove("used"); picked.splice(picked.indexOf(inAns), 1); });
        picked.push(inAns);
        answer.appendChild(inAns);
      });
      pool.appendChild(c);
    });

    return {
      check() {
        const said = picked.map(p => p.textContent).join(" ");
        if (!said) return;
        const ok = S().equals(said, item.answer, item.alts);
        api.resolve(ok, item.es, item.answer, item.why);
        pool.querySelectorAll(".word-chip").forEach(c => (c.disabled = true));
        picked.forEach(p => (p.disabled = true));
        if (S().canSpeak()) S().say(item.answer);
      },
    };
  };

  /* ---------- Hablar (reconocimiento de voz) ---------- */
  RENDERERS.speak = function (body, item, api, opts) {
    const target = opts.target || 70;
    body.appendChild(el(`
      <div>
        <div class="ex-prompt">Say this out loud · Dilo en voz alta</div>
        <div class="ex-target">${esc(item.en)}<small>${esc(item.es || "")}</small></div>
      </div>`));

    const row = el('<div class="row" style="justify-content:center"></div>');
    const bListen = el('<button class="btn" type="button">🔊 Hear it</button>');
    const bSlow = el('<button class="btn" type="button">🐢 Slow</button>');
    bListen.addEventListener("click", () => S().say(item.en));
    bSlow.addEventListener("click", () => S().say(item.en, { rate: 0.55 }));
    row.append(bListen, bSlow);
    body.appendChild(row);

    if (item.tip) body.appendChild(el(`<p class="muted" style="text-align:center;margin-top:10px">💡 ${item.tip}</p>`));

    const heard = el('<div class="heard"></div>');
    const scoreBox = el('<div class="score-ring"></div>');

    if (!S().canListen()) {
      body.appendChild(el(`<p class="muted" style="text-align:center;margin-top:16px">
        Tu navegador no tiene reconocimiento de voz (usa <strong>Chrome</strong> o <strong>Edge</strong> para que te califique la pronunciación).
        Igual dilo en voz alta 5 veces y márcalo tú.</p>`));
      const selfRow = el('<div class="row" style="justify-content:center;margin-top:12px"></div>');
      const ok = el('<button class="btn go" type="button">✓ Lo dije bien</button>');
      const no = el('<button class="btn" type="button">Me costó</button>');
      ok.addEventListener("click", () => api.resolve(true, item.en, item.en, "Autoevaluado."));
      no.addEventListener("click", () => api.resolve(false, item.en, item.en, "Repítelo 5 veces más antes de seguir."));
      selfRow.append(ok, no);
      body.appendChild(selfRow);
      return { autoCheck: true };
    }

    const mic = el('<button class="mic-btn" type="button" title="Hold nothing — just click and speak">🎤</button>');
    body.appendChild(mic);
    body.appendChild(el('<p class="muted" style="text-align:center">Click the mic and say the sentence · Haz clic y dilo</p>'));
    body.append(scoreBox, heard);

    let attempts = 0;
    mic.addEventListener("click", () => {
      if (mic.classList.contains("listening")) return;
      mic.classList.add("listening");
      heard.textContent = "Listening...";
      scoreBox.textContent = "";
      S().listen((text, err) => {
        mic.classList.remove("listening");
        attempts++;
        if (err) {
          heard.innerHTML = `<span class="muted">${err === "not-allowed"
            ? "El navegador no dio permiso al micrófono. Haz clic en el candado de la barra de direcciones y permite el micrófono."
            : "No te oí. Acércate al micrófono e inténtalo otra vez."}</span>`;
          return;
        }
        const r = S().score(text, item.en);
        scoreBox.textContent = r.pct + "%";
        scoreBox.style.color = r.pct >= target ? "var(--green)" : r.pct >= 50 ? "var(--gold)" : "var(--red)";
        heard.innerHTML = `<div style="font-size:14px;color:var(--text-faint)">Te oí: "${esc(r.heard)}"</div>${S().marksHTML(r.marks)}`;
        Store.recordSpeak(item.en, r.pct);
        if (r.pct >= target) {
          api.resolve(true, "🎤 " + item.en, item.en, `Pronunciación: <strong>${r.pct}%</strong>. ${attempts === 1 ? "Y al primer intento." : ""}`);
        } else if (attempts >= 3) {
          api.resolve(false, "🎤 " + item.en, item.en, `Mejor intento: ${r.pct}%. Las palabras en rojo son las que no se entendieron — escúchalas lento y sigue mañana.`);
        } else {
          heard.innerHTML += `<div class="muted" style="margin-top:6px">Necesitas ${target}% para pasar. Intento ${attempts} de 3.</div>`;
        }
      });
    });

    return { autoCheck: true };
  };

  /* ============================================================
     Widgets completos (no secuencia de items)
     ============================================================ */

  /* ---------- Flashcards ---------- */
  function flashcards(spec, onDone) {
    const items = spec.items;
    const wrap = el(`
      <div class="ex-wrap">
        <div class="ex-head">
          <div class="ex-bar"><div class="ex-bar-fill" style="width:0%"></div></div>
          <div class="ex-count"></div>
        </div>
        <div class="ex-body"></div>
        <div class="ex-actions">
          <button class="btn" data-act="prev">← Back</button>
          <button class="btn primary" data-act="next">Next →</button>
          <span class="muted">Haz clic en la tarjeta para ver el significado · Space = voltear</span>
        </div>
      </div>`);
    const body = wrap.querySelector(".ex-body");
    let i = 0, flipped = false, seen = new Set();

    function paint() {
      const it = items[i];
      seen.add(i);
      wrap.querySelector(".ex-count").textContent = `${i + 1} / ${items.length}`;
      wrap.querySelector(".ex-bar-fill").style.width = `${Math.round((seen.size / items.length) * 100)}%`;
      body.innerHTML = "";
      const card = el(`
        <div class="flash-card">
          <div class="flash-en">${esc(it.en)}</div>
          ${it.ipa ? `<div class="flash-ipa">${esc(it.ipa)}</div>` : ""}
          ${flipped ? `<div class="flash-es">${esc(it.es)}</div>` : `<div class="flash-hint">click para ver el significado</div>`}
          ${flipped && it.ex ? `<div class="flash-ex">"${esc(it.ex)}"${it.exEs ? `<br><span style="font-style:normal;color:var(--text-faint)">${esc(it.exEs)}</span>` : ""}</div>` : ""}
        </div>`);
      card.addEventListener("click", () => { flipped = !flipped; paint(); if (flipped) Speech.say(it.ex || it.en); });
      body.appendChild(card);
      const row = el('<div class="row" style="justify-content:center;margin-top:12px"></div>');
      const b = el('<button class="btn" type="button">🔊 Listen</button>');
      b.addEventListener("click", () => Speech.say(it.en));
      row.appendChild(b);
      if (it.ex) {
        const b2 = el('<button class="btn" type="button">🔊 Frase completa</button>');
        b2.addEventListener("click", () => Speech.say(it.ex));
        row.appendChild(b2);
      }
      body.appendChild(row);
      Store.seeWord(it.en, true);
      if (seen.size === items.length && onDone) onDone({ correct: items.length, total: items.length, pct: 100 });
    }

    wrap.querySelector('[data-act="prev"]').addEventListener("click", () => { i = (i - 1 + items.length) % items.length; flipped = false; paint(); });
    wrap.querySelector('[data-act="next"]').addEventListener("click", () => { i = (i + 1) % items.length; flipped = false; paint(); });
    paint();
    return wrap;
  }

  /* ---------- Emparejar inglés / español ---------- */
  function match(spec, onDone) {
    const pairs = spec.pairs;
    const wrap = el(`
      <div class="ex-wrap">
        <div class="ex-head">
          <div class="ex-bar"><div class="ex-bar-fill" style="width:0%"></div></div>
          <div class="ex-count"></div>
        </div>
        <div class="ex-prompt">Match each word with its meaning · Une cada palabra con su significado</div>
        <div class="match-grid"><div class="match-col" data-col="en"></div><div class="match-col" data-col="es"></div></div>
        <div class="ex-feedback"><div class="fb-title"></div><div class="fb-text"></div></div>
      </div>`);
    const colEn = wrap.querySelector('[data-col="en"]');
    const colEs = wrap.querySelector('[data-col="es"]');
    let sel = null, done = 0, misses = 0;

    shuffle(pairs).forEach(([en], idx) => {
      const b = el(`<button class="match-item" type="button">${esc(en)}</button>`);
      b.dataset.key = en;
      b.addEventListener("click", () => { Speech.say(en); pick(b, "en"); });
      colEn.appendChild(b);
    });
    shuffle(pairs).forEach(([en, es]) => {
      const b = el(`<button class="match-item" type="button">${esc(es)}</button>`);
      b.dataset.key = en;
      b.addEventListener("click", () => pick(b, "es"));
      colEs.appendChild(b);
    });

    function pick(b, side) {
      if (b.classList.contains("matched")) return;
      if (!sel) { clearSel(); sel = { b, side }; b.classList.add("sel"); return; }
      if (sel.side === side) { clearSel(); sel = { b, side }; b.classList.add("sel"); return; }
      const ok = sel.b.dataset.key === b.dataset.key;
      if (ok) {
        sel.b.classList.remove("sel");
        sel.b.classList.add("matched");
        b.classList.add("matched");
        done++;
        Store.seeWord(b.dataset.key, true);
        update();
      } else {
        misses++;
        Store.seeWord(b.dataset.key, false);
        b.classList.add("wrong");
        sel.b.classList.add("wrong");
        const a = sel.b;
        setTimeout(() => { a.classList.remove("wrong", "sel"); b.classList.remove("wrong"); }, 380);
      }
      sel = null;
    }
    function clearSel() { wrap.querySelectorAll(".sel").forEach(x => x.classList.remove("sel")); }

    function update() {
      wrap.querySelector(".ex-count").textContent = `${done} / ${pairs.length}`;
      wrap.querySelector(".ex-bar-fill").style.width = `${Math.round((done / pairs.length) * 100)}%`;
      if (done === pairs.length) {
        const fb = wrap.querySelector(".ex-feedback");
        fb.className = "ex-feedback show ok";
        fb.querySelector(".fb-title").textContent = "All matched! · ¡Todas emparejadas!";
        fb.querySelector(".fb-text").textContent = misses === 0
          ? "Sin un solo error. Ese vocabulario ya es tuyo."
          : `${misses} intento${misses > 1 ? "s" : ""} fallido${misses > 1 ? "s" : ""}. Las que fallaste vuelven mañana en el repaso.`;
        const pct = Math.max(0, 100 - misses * 8);
        if (onDone) onDone({ correct: pairs.length, total: pairs.length, pct });
      }
    }
    update();
    return wrap;
  }

  /* ---------- Planas de verbos ---------- */
  function verbdrill(spec, onDone) {
    const verbs = spec.verbs;
    const reps = spec.reps || 3;
    const wrap = el(`
      <div class="ex-wrap">
        <div class="ex-head">
          <div class="ex-bar"><div class="ex-bar-fill" style="width:0%"></div></div>
          <div class="ex-count"></div>
        </div>
        <div class="ex-prompt">Escribe el <strong>pasado</strong> de cada verbo. Cuando la ronda esté completa y correcta, empieza otra.
        Son <strong>${reps} rondas</strong> — es la plana de toda la vida, pero corrigiéndote al instante.</div>
        <div data-slot="table"></div>
        <div class="ex-feedback"><div class="fb-title"></div><div class="fb-text"></div></div>
        <div class="ex-actions">
          <button class="btn go" data-act="check">Check round · Corregir ronda</button>
          <button class="btn" data-act="listen">🔊 Escuchar la lista</button>
          <div class="reps" data-slot="reps"></div>
        </div>
      </div>`);

    let round = 0;
    const slot = wrap.querySelector('[data-slot="table"]');
    const repsSlot = wrap.querySelector('[data-slot="reps"]');
    const fb = wrap.querySelector(".ex-feedback");

    function paintReps() {
      repsSlot.innerHTML = Array.from({ length: reps }, (_, k) => `<div class="rep-dot ${k < round ? "on" : ""}"></div>`).join("");
      wrap.querySelector(".ex-count").textContent = `Ronda ${Math.min(round + 1, reps)} / ${reps}`;
      wrap.querySelector(".ex-bar-fill").style.width = `${Math.round((round / reps) * 100)}%`;
    }

    function paintTable() {
      const order = round === 0 ? verbs : shuffle(verbs);
      slot.innerHTML = `
        <table class="drill-table">
          <thead><tr><th>Base form</th><th>Past simple</th><th>Español</th></tr></thead>
          <tbody>
            ${order.map((v, i) => `
              <tr>
                <td style="width:26%"><strong>${esc(v.base)}</strong></td>
                <td style="width:38%"><input type="text" data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="past..."></td>
                <td class="drill-es">${esc(v.es)}</td>
              </tr>`).join("")}
          </tbody>
        </table>`;
      slot.dataset.order = JSON.stringify(order.map(v => v.base));
      const inputs = slot.querySelectorAll("input");
      inputs.forEach((inp, k) => {
        inp.addEventListener("keydown", ev => {
          if (ev.key === "Enter") { ev.preventDefault(); if (inputs[k + 1]) inputs[k + 1].focus(); else wrap.querySelector('[data-act="check"]').click(); }
        });
      });
      if (inputs[0]) inputs[0].focus();
    }

    wrap.querySelector('[data-act="listen"]').addEventListener("click", () => {
      Speech.say(verbs.map(v => `${v.base}, ${v.past}.`).join(" "), { rate: 0.8 });
    });

    wrap.querySelector('[data-act="check"]').addEventListener("click", () => {
      const order = JSON.parse(slot.dataset.order);
      const inputs = Array.from(slot.querySelectorAll("input"));
      let wrong = 0;
      inputs.forEach((inp, i) => {
        const v = verbs.find(x => x.base === order[i]);
        const ok = Speech.equals(inp.value, v.past, v.alts);
        inp.classList.remove("ok", "bad");
        inp.classList.add(ok ? "ok" : "bad");
        if (!ok) { wrong++; inp.value = v.past; Store.seeWord(v.base, false); }
        else Store.seeWord(v.base, true);
      });
      fb.className = "ex-feedback show " + (wrong === 0 ? "ok" : "bad");
      fb.querySelector(".fb-title").textContent = wrong === 0 ? "Perfect round! · ¡Ronda perfecta!" : `${wrong} error${wrong > 1 ? "es" : ""}`;
      fb.querySelector(".fb-text").innerHTML = wrong === 0
        ? "Siguiente ronda con los verbos en otro orden — así memorizas el verbo, no la posición."
        : "Los campos en rojo ya tienen la forma correcta escrita. <strong>Léelos en voz alta</strong> antes de seguir: la boca recuerda lo que el ojo olvida.";
      round++;
      paintReps();
      if (round >= reps) {
        Store.verbDrillDone();
        fb.querySelector(".fb-title").textContent = "Drill complete! · ¡Plana terminada!";
        fb.querySelector(".fb-text").innerHTML = "Hazla otra vez mañana. Diez días de esta plana y los verbos irregulares dejan de existir como problema.";
        wrap.querySelector('[data-act="check"]').textContent = "↻ Otra vez";
        round = 0;
        if (onDone) onDone({ correct: verbs.length * reps - wrong, total: verbs.length * reps, pct: 100 });
      }
      setTimeout(paintTable, wrong === 0 ? 900 : 2600);
    });

    paintReps();
    paintTable();
    return wrap;
  }

  /* ============================================================
     Entrada pública
     ============================================================ */

  function render(spec, onDone) {
    if (spec.type === "flashcards") return flashcards(spec, onDone);
    if (spec.type === "match") return match(spec, onDone);
    if (spec.type === "verbdrill") return verbdrill(spec, onDone);

    const items = (spec.items || []).map(it => Object.assign({ kind: it.kind || spec.type }, it));
    const list = spec.shuffle ? shuffle(items) : items;
    return sequence(list, { pass: spec.pass, target: spec.target }, res => {
      if (spec.dayId && spec.type === "exam") Store.recordExam(spec.dayId, res.pct);
      if (onDone) onDone(res);
    });
  }

  window.Exercises = { render, shuffle, esc };
})();
