/* NEXENER, página oficial v3: comportamiento de la página (idiomas, menú, video, carrusel, formulario).
   Se ejecuta una vez montada la página, desde src/routes/index.tsx. */
/* eslint-disable */
export function initNexener() {
  'use strict';
  var d = document, root = d.documentElement;
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  /* ------------------------------------------------------------------
     1. Idiomas (español en el HTML, inglés en este diccionario)
     ------------------------------------------------------------------ */
  var EN = {
    'skip': 'Skip to content',
    'nav.1': 'Services', 'nav.2': 'Who we serve', 'nav.3': 'Platforms', 'nav.4': 'About', 'nav.5': 'Contact',
    'hero.h1': '<span class="ln">Leading the new era</span> <span class="ln">of the power system.</span>',
    'hero.lede': 'Strategic and technical advisory for system operators, regulators and power companies, built on specialised engineering and artificial intelligence.',
    'hero.cta1': 'Talk to an expert',
    'p1.t': 'Markets and regulation', 'p1.d': 'Design, simulation and regulatory analysis.',
    'p2.t': 'Planning and operation', 'p2.d': 'Expansion, renewables and reliability.',
    'p3.t': 'Analytics and AI', 'p3.d': 'Intelligent agents for engineering.',
    'fact': 'years of experience in the power systems of Chile, Canada and the United States.',
    'hero.eye': 'Energy &amp; AI Advisory', 'brand.tag': 'Energy &amp; AI Advisory', 'brand.slogan': 'Engineering Intelligence Powered by AI', 'pl.k1': 'Energy Market Simulator', 'pl.k2': 'Power-System Engineering Agent', 'pp2.r': 'COO · AI &amp; Data Science', 'pp3.r': 'CCO · Business Development',
    'st.eye': 'Who we are', 'st.h2': 'Where power engineering meets <em>artificial intelligence.</em>',
    'st.big': 'The energy transition demands faster, more precise decisions. We combine power engineering and artificial intelligence so that every technical and regulatory decision rests on evidence.',
    'tr1.t': 'Mission', 'tr1.d': 'To accelerate technical and regulatory decisions in the power sector through rigorous engineering and artificial intelligence.',
    'tr2.t': 'Vision', 'tr2.d': 'To be the reference firm for integrating power engineering and artificial intelligence.',
    'tr3.t': 'Values', 'tr3.d': 'Technical rigour, independence, transparency and expert judgement in every recommendation.',
    'sv.eye': 'Services',
    'sv.h2': 'What problem can we <em>solve together?</em>',
    'sv.lede': 'We focus on the highest-impact technical and regulatory decisions, where the cost of error is high.',
    'c.go': 'Let’s talk',
    'c1.t': 'Electricity market design', 'c1.d': 'Market rules, ancillary services and remuneration mechanisms, validated in simulation before implementation.',
    'c2.t': 'Grid planning and operation', 'c2.d': 'Expansion, integration of renewables and storage, system stability and reliability.',
    'c3.t': 'Investment evaluation', 'c3.d': 'Generation, storage and transmission, assessed across multiple regulatory and operating scenarios.',
    'c4.t': 'Analytics and artificial intelligence', 'c4.d': 'Specialised agents that prepare models, run simulations and interpret results with your team.',
    'c5.t': 'Implementation and training', 'c5.d': 'Integration with your existing tools, specialist training and ongoing technical support.',
    'sc.eye': 'Who we serve',
    'sc.h2': 'Serving those who plan, operate and regulate <em>the power system.</em>',
    'r1.t': 'System and market operators', 'r1.d': 'Rules and ancillary services validated before they go live.',
    'r2.t': 'Regulators and public bodies', 'r2.d': 'Regulatory alternatives compared through reproducible simulation.',
    'r3.t': 'Power sector companies', 'r3.d': 'Bidding strategy and investments assessed before capital is committed.',
    'r4.t': 'Universities and research centres', 'r4.d': 'Applied research and specialist training.',
    'pl.eye': 'Platforms',
    'pl.h2': 'Proprietary technology, built on <em>power engineering.</em>',
    'pl.lede': 'We turn expert knowledge into everyday tools for technical teams.',
    'pl.dev': 'In development',
    'pl.ps': 'An engineering agent that assists specialists in power system studies.',
    'pl.tag': 'Day-ahead market',
    'pl.desc': 'A platform to design, simulate and monitor competitive electricity markets.',
    'ch.s': 'Supply', 'ch.d': 'Demand', 'ch.p': 'Marginal price', 'ch.h': 'Hour',
    'ag1.t': 'Representation agents', 'ag1.d': 'They bid for the participants absent from each session.',
    'ag2.t': 'Assistant agents', 'ag2.d': 'They help prepare bids. The decision stays with the person.',
    'ag3.t': 'Monitoring agents', 'ag3.d': 'They review market competition after each session.',
    'pl.go': 'Discover EMSIM',
    'bd.eye': 'How we work',
    'bd.h2': 'Expert judgement decides.<br>Artificial intelligence <em>multiplies its reach.</em>',
    'f1.t': 'Quantitative evidence', 'f1.d': 'Every recommendation is backed by reproducible simulations.',
    'f2.t': 'Expert oversight', 'f2.d': 'AI assists; critical decisions are made by specialists.',
    'f3.t': 'Traceability', 'f3.d': 'Identifiable sources and auditable results.',
    'f4.t': 'Technology independence', 'f4.d': 'We select each AI model on performance, cost and security, with no vendor lock-in.',
    'tm.eye': 'Team',
    'tm.h2': 'Leadership with expertise in <em>energy, data and business.</em>',
    'tm.lede': 'International experience in power systems and native capabilities in artificial intelligence.',
    'pp1.b': 'More than 30 years of experience in power system planning and operation, renewable energy and markets in Chile, Canada and the United States. Ph.D. in Electrical Engineering (Polytechnique Montréal) and MBA (ESADE).',
    'pp2.b': 'Leads operations and the development of AI agents and analytical capabilities across Nexener’s platforms.',
    'pp3.b': 'Leads commercial strategy, client relationships and strategic partnerships. Business degree and Master’s in Marketing.',
    'q.eye': 'Our promise', 'q.t': 'Engineering intelligence, powered by AI.',
    'ct.eye': 'Contact',
    'ct.h2': 'Let’s discuss your next <em>energy challenge.</em>',
    'ct.lede': 'Tell us about the decision you face in power systems, markets or artificial intelligence.',
    'fm.name': 'Name', 'fm.org': 'Company', 'fm.mail': 'Email', 'fm.topic': 'Topic', 'fm.other': 'Another topic', 'fm.msg': 'Message', 'fm.send': 'Send message',
    'fm.note': 'Your email application will open with the message ready to send.',
    'ft.site': 'Site', 'ft.write': 'Write to us', 'ft.credit': 'Photography: Pexels and Unsplash', 'ft.top': 'Back to top'
  };
  var ATTR = {
    es: { 'a.home': 'NEXENER, inicio', 'a.main': 'Principal', 'a.menu': 'Abrir menú', 'a.menuclose': 'Cerrar menú', 'a.menunav': 'Menú', 'a.pause': 'Pausar el video de fondo', 'a.play': 'Reanudar el video de fondo', 'a.prev': 'Anterior', 'a.next': 'Siguiente', 'a.chart': 'Pausar la simulación ilustrativa', 'a.chartplay': 'Reanudar la simulación ilustrativa', 'a.plot': 'Ejemplo ilustrativo: la curva de oferta y la demanda de cada hora determinan el precio marginal.', 'fm.err': 'Complete su nombre, un correo válido y el mensaje.', 'e.name': 'Escriba su nombre.', 'e.email': 'Escriba un correo válido.', 'e.message': 'Escriba su mensaje.', 'fm.ok': 'Listo. Revise su aplicación de correo y pulse enviar.', 'lang': 'Cambiar a inglés', 'subject': 'Consulta desde nexener.com' },
    en: { 'a.home': 'NEXENER, home', 'a.main': 'Main', 'a.menu': 'Open menu', 'a.menuclose': 'Close menu', 'a.menunav': 'Menu', 'a.pause': 'Pause background video', 'a.play': 'Resume background video', 'a.prev': 'Previous', 'a.next': 'Next', 'a.chart': 'Pause the illustrative simulation', 'a.chartplay': 'Resume the illustrative simulation', 'a.plot': 'Illustrative example: the supply curve and each hour’s demand set the marginal price.', 'fm.err': 'Please fill in your name, a valid email and the message.', 'e.name': 'Enter your name.', 'e.email': 'Enter a valid email.', 'e.message': 'Write your message.', 'fm.ok': 'Done. Check your email application and press send.', 'lang': 'Switch to Spanish', 'subject': 'Enquiry from nexener.com' }
  };
  var ES = {};
  $$('[data-t]').forEach(function (n) { if (!(n.dataset.t in ES)) ES[n.dataset.t] = n.innerHTML; });
  var lang = 'es';
  function tr(k) { return ATTR[lang][k] || (lang === 'en' ? EN[k] : ES[k]) || ''; }
  function plain(html) { var t = d.createElement('div'); t.innerHTML = html; return t.textContent; }

  /* Palabras envueltas: títulos que suben y párrafo que se enciende */
  function wrapWords(el, mode) {
    var i = 0;
    (function walk(node, acc) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var f = d.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { f.appendChild(d.createTextNode(' ')); return; }
            if (mode === 'rise') {
              var w = d.createElement('span'), wi = d.createElement('span');
              w.className = 'w'; wi.className = 'wi'; wi.style.setProperty('--i', i++); wi.textContent = p;
              w.appendChild(wi); f.appendChild(w);
            } else {
              var h = d.createElement('span'); h.className = 'hw' + (acc ? ' acc' : ''); h.textContent = p; f.appendChild(h);
            }
          });
          node.replaceChild(f, n);
        } else if (n.nodeType === 1) { walk(n, acc || n.tagName === 'EM'); }
      });
    })(el, false);
  }
  function dress() {
    $$('[data-split]').forEach(function (el) { wrapWords(el, 'rise'); });
  }

  function setLang(l, first) {
    lang = l; root.lang = l;
    if (!first || l === 'en') {
      $$('[data-t]').forEach(function (n) { var k = n.dataset.t, v = l === 'en' ? EN[k] : ES[k]; if (v != null) n.innerHTML = v; });
    }
    $$('[data-t-attr]').forEach(function (n) {
      n.dataset.tAttr.split(';').forEach(function (pair) { var a = pair.split(':'); var v = ATTR[l][a[1]] || plain(tr(a[1])); if (v) n.setAttribute(a[0], v); });
    });
    var lb = $('#lang'); lb.textContent = l === 'es' ? 'EN' : 'ES'; lb.setAttribute('aria-label', ATTR[l].lang);
    d.title = l === 'es' ? 'NEXENER | Asesoría en energía, electricidad e inteligencia artificial' : 'NEXENER | Energy, electricity and AI advisory';
    dress();
    if (!first) { onScroll(true); syncStates(); railSync(); lastY = window.pageYOffset; nav.classList.remove('is-away'); }
    try { localStorage.setItem('nx-lang', l); } catch (e) {}
  }

  /* ------------------------------------------------------------------
     2. Navegación y menú
     ------------------------------------------------------------------ */
  var nav = $('#nav'), burger = $('#burger'), lastY = 0;
  function menu(open) {
    root.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', tr(open ? 'a.menuclose' : 'a.menu'));
  }
  burger.addEventListener('click', function () { menu(!root.classList.contains('menu-open')); });
  $$('#menu a').forEach(function (a) { a.addEventListener('click', function () { menu(false); }); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('menu-open')) { menu(false); burger.focus(); } });
  $('#lang').addEventListener('click', function () { setLang(lang === 'es' ? 'en' : 'es'); });

  /* ------------------------------------------------------------------
     3. Hero: fondo en movimiento
     ------------------------------------------------------------------ */
  var hero = $('.hero'), video = $('#heroVideo'), pauseBtn = $('#heroPause');
  var userPaused = false, heroSeen = true;
  /* El video viaja dentro del archivo en dos formatos (MP4 y WebM). Se prueba primero el que
     el navegador declara poder reproducir y, si falla o no avanza, se pasa al siguiente. */
  (function loadVideo() {
    video.muted = true; video.defaultMuted = true; video.playsInline = true;
    var tries = [], at = -1, timer = null;
    var force = (/[?&]v=(webm|mp4)/.exec(location.search) || [])[1];
    [['heroMp4', 'video/mp4', 'video/mp4; codecs="avc1.4D4028"', '/assets/hero.mp4'], ['heroWebm', 'video/webm', 'video/webm; codecs="vp9"', '/assets/hero.webm']].forEach(function (f) {
      var el = d.getElementById(f[0]), b64 = el ? el.textContent.replace(/\s+/g, '') : '';
      if (el) el.parentNode.removeChild(el);
      if (force && f[1].indexOf(force) < 0) return;
      var can = video.canPlayType(f[2]) !== '';
      if (b64.length > 100) {
        tries.push({ can: can, kind: 0, make: function () {
          var bin = atob(b64), n = bin.length, u8 = new Uint8Array(n);
          for (var k = 0; k < n; k++) u8[k] = bin.charCodeAt(k);
          return URL.createObjectURL(new Blob([u8], { type: f[1] }));
        } });
        tries.push({ can: can, kind: 1, make: function () { return 'data:' + f[1] + ';base64,' + b64; } });
      } else { tries.push({ can: can, kind: 0, make: function () { return f[3]; } }); }
    });
    tries.sort(function (a, b) { return (b.can - a.can) || (a.kind - b.kind); });
    function next() {
      clearTimeout(timer); at++;
      if (at >= tries.length) return;
      try { video.src = tries[at].make(); video.load(); } catch (e) { next(); return; }
      timer = setTimeout(function () { if (video.readyState < 2) next(); }, 6000);
    }
    video.addEventListener('error', next);
    video.addEventListener('playing', function () { clearTimeout(timer); });
    next();
  })();
  function paint() {
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-pressed', userPaused);
      pauseBtn.setAttribute('aria-label', tr(userPaused ? 'a.play' : 'a.pause'));
    }
    hero.classList.toggle('is-paused', userPaused);
  }
  function syncHero() {
    paint();
    if (userPaused || !heroSeen || d.hidden) { video.pause(); return; }
    video.muted = true;
    var p = video.play(); if (p && p.catch) p.catch(function () {});
  }
  if (pauseBtn) pauseBtn.addEventListener('click', function () { userPaused = !userPaused; syncHero(); });
  d.addEventListener('visibilitychange', syncHero);
  video.addEventListener('canplay', function () { if (video.paused) syncHero(); });
  /* Algunos navegadores solo permiten iniciar el video tras un primer gesto */
  ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(function (ev) {
    window.addEventListener(ev, function () { if (video.paused && !userPaused) syncHero(); }, { passive: true });
  });

  /* ------------------------------------------------------------------
     3b. Líneas en movimiento sobre la sección Sectores (canvas)
     ------------------------------------------------------------------ */
  (function ribbon() {
    var cv = $('.sect__lines'); if (!cv || !cv.getContext) return;
    var c = cv.getContext('2d'), w = 0, h = 0, grad, t = 3 + Math.random() * 2, seen = false, raf = 0, last = 0, TAU = 6.2832;
    var o = { lines: 26, cy: .16, a1: .05, f1: .7, a3: .02, f3: 1.9, sp: .1, f2: 1.1, ph: 2.2, alpha: .5 };
    function size() {
      var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); c.setTransform(dpr, 0, 0, dpr, 0, 0);
      grad = c.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'rgba(156,192,238,0)'); grad.addColorStop(.45, 'rgba(156,192,238,.35)'); grad.addColorStop(1, 'rgba(132,207,92,.6)');
    }
    function draw(dt) {
      t += dt * .06;
      var N = w < 720 ? 16 : o.lines, step = Math.max(8, w / 150), hh = Math.min(h, w * .7);
      c.clearRect(0, 0, w, h); c.lineWidth = 1; c.strokeStyle = grad;
      for (var i = 0; i < N; i++) {
        var u = i / (N - 1) - .5; c.beginPath();
        for (var x = -step; x <= w + step; x += step) {
          var nx = x / w;
          var base = h * o.cy + Math.sin(nx * o.f1 * TAU + t * .5) * hh * o.a1 + Math.sin(nx * o.f3 * TAU - t * .3) * hh * o.a3;
          var spread = Math.sin(nx * o.f2 * TAU + t * .38 + o.ph) * hh * o.sp;
          var y = base + u * spread * 2 + Math.sin(nx * 7 + u * 5 + t * .7) * 3 * u;
          if (x === -step) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.globalAlpha = o.alpha * (.3 + .7 * (1 - Math.abs(u) * 1.5)); c.stroke();
      }
    }
    function loop(now) { raf = 0; draw(Math.min(.05, (now - last) / 1000 || .016)); last = now; if (seen && !reduce) raf = requestAnimationFrame(loop); }
    size(); draw(0);
    window.addEventListener('resize', function () { size(); draw(0); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        seen = es[0].isIntersecting;
        if (seen && !raf && !reduce) { last = performance.now(); raf = requestAnimationFrame(loop); }
      }).observe(cv);
    }
  })();

  /* ------------------------------------------------------------------
     4. Hilos (SVG) al estilo de una estructura tensada
     ------------------------------------------------------------------ */
  $$('[data-strings]').forEach(function (svg) {
    var n = 40, h = '';
    for (var i = 0; i <= n; i++) {
      var t = i / n, x1 = Math.pow(t, 1.25) * 600, y2 = Math.pow(t, .8) * 600, len = Math.ceil(Math.hypot(600 - x1, y2)) + 4;
      h += '<line x1="' + x1.toFixed(1) + '" y1="0" x2="600" y2="' + y2.toFixed(1) + '" style="--i:' + i + ';--l:' + len + '"/>';
    }
    svg.innerHTML = h;
  });

  /* ------------------------------------------------------------------
     6. Desplazamiento: barra de progreso, cámara, palabras, parallax
     ------------------------------------------------------------------ */
  var heroMedia = $('.hero__media'), heroBody = $('.hero__body'), heroFoot = $('.hero__foot');
  var pars = $$('[data-par]'), band = $('[data-band]'), ticking = false, vh = window.innerHeight;
  function frame(force) {
    ticking = false;
    var y = window.pageYOffset;
    var hh = hero.offsetHeight;
    nav.classList.toggle('is-solid', y > hh - 90);
    if (!root.classList.contains('menu-open')) {
      if (y > lastY + 4 && y > 220) nav.classList.add('is-away'); else if (y < lastY - 4 || y < 220) nav.classList.remove('is-away');
    }
    lastY = y;
    if (reduce) return;
    if (y < hh * 1.05) {
      var p = y / hh;
      heroMedia.style.transform = 'translate3d(0,' + (y * .28).toFixed(1) + 'px,0) scale(' + (1 + p * .06).toFixed(4) + ')';
      var o = clamp(1 - y / (vh * .62), 0, 1);
      heroBody.style.opacity = o; heroBody.style.transform = 'translate3d(0,' + (-y * .1).toFixed(1) + 'px,0)';
      heroFoot.style.opacity = clamp(1 - y / (vh * .4), 0, 1);
    }
    pars.forEach(function (img) {
      var box = img.parentNode.getBoundingClientRect(); if (box.bottom < -100 || box.top > vh + 100) return;
      var extra = (img.offsetHeight - box.height) / 2, off = (box.top + box.height / 2 - vh / 2) * parseFloat(img.dataset.par);
      img.style.transform = 'translate3d(0,' + clamp(off, -extra, extra).toFixed(1) + 'px,0)';
    });
    if (band) {
      var b = band.getBoundingClientRect();
      if (b.top < vh + 50 && b.bottom > -50) {
        var e = clamp((vh - b.top) / (vh * .8), 0, 1); e = 1 - Math.pow(1 - e, 3);
        band.style.setProperty('--cx', (window.innerWidth >= 720 ? (1 - e) * Math.min(84, window.innerWidth * .056) : 0).toFixed(1) + 'px');
      }
    }
  }
  function onScroll(force) { if (force === true) { frame(true); return; } if (!ticking) { ticking = true; requestAnimationFrame(function () { frame(false); }); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { vh = window.innerHeight; railSync(); onScroll(true); });

  /* ------------------------------------------------------------------
     7. Apariciones al entrar en pantalla
     ------------------------------------------------------------------ */
  var seenOnce = [];
  function syncStates() { seenOnce.forEach(function (el) { el.classList.add('is-in'); }); if (root.classList.contains('is-ready')) $('.hero__title').classList.add('is-in'); }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); seenOnce.push(e.target); io.unobserve(e.target); } });
    }, { threshold: .18, rootMargin: '0px 0px -6% 0px' });
    $$('[data-io],.rv,[data-strings]').forEach(function (el) { io.observe(el); });

    var live = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.target === hero) { heroSeen = e.isIntersecting; syncHero(); }
      });
    }, { threshold: 0 });
    live.observe(hero);

    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) { var a = $('.nav__links a[href="#' + e.target.id + '"]'); if (a) a.classList.toggle('is-here', e.isIntersecting); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { spy.observe(s); });
  } else {
    $$('[data-io],.rv,[data-strings]').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ------------------------------------------------------------------
     8. Carrusel de servicios
     ------------------------------------------------------------------ */
  var rail = $('#cards'), prevB = $('#prev'), nextB = $('#next'), railProg = $('#railProg'), railNow = $('#railNow');
  function cardStep() { var c = $('.card', rail); return c.getBoundingClientRect().width + 18; }
  function railSync() {
    var max = rail.scrollWidth - rail.clientWidth, p = max > 2 ? clamp(rail.scrollLeft / max, 0, 1) : 0;
    prevB.disabled = rail.scrollLeft < 4; nextB.disabled = rail.scrollLeft > max - 4;
    var track = railProg.parentNode.clientWidth, share = clamp(rail.clientWidth / rail.scrollWidth, .18, 1);
    railProg.style.width = (share * 100) + '%'; railProg.style.transform = 'translateX(' + (p * track * (1 - share)).toFixed(1) + 'px)';
    var st = cardStep(), n = $$('.card', rail).length, vis = Math.max(1, Math.floor((rail.clientWidth - parseFloat(getComputedStyle(rail).paddingRight) + 20) / st));
    var first = clamp(Math.round(rail.scrollLeft / st) + 1, 1, n - vis + 1), last = Math.min(n, first + vis - 1);
    railNow.textContent = vis > 1 ? pad(first) + '–' + pad(last) : pad(max > 2 && rail.scrollLeft > max - 4 ? n : first);
  }
  rail.addEventListener('scroll', railSync, { passive: true });
  prevB.addEventListener('click', function () { rail.scrollBy({ left: -cardStep(), behavior: reduce ? 'auto' : 'smooth' }); });
  nextB.addEventListener('click', function () { rail.scrollBy({ left: cardStep(), behavior: reduce ? 'auto' : 'smooth' }); });
  (function drag() {
    var down = false, sx = 0, sl = 0, moved = false;
    rail.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse' || e.button) return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; });
    window.addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 6) { moved = true; rail.classList.add('is-drag'); } if (moved) rail.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', function () { if (!down) return; down = false; setTimeout(function () { rail.classList.remove('is-drag'); }, 0); });
    rail.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    rail.addEventListener('dragstart', function (e) { e.preventDefault(); });
  })();
  $$('[data-topic]').forEach(function (a) { a.addEventListener('click', function () { $('#f-topic').selectedIndex = +a.dataset.topic; }); });

  /* ------------------------------------------------------------------
     9. Sectores: la imagen acompaña a la fila activa
     ------------------------------------------------------------------ */
  var rows = $$('#rows .row'), shots = $$('#view img'), rowCur = 0, z = 1;
  function rowOn(i) {
    if (i === rowCur) return;
    rows.forEach(function (r, k) { r.classList.toggle('is-active', k === i); });
    var old = shots[rowCur], im = shots[i]; rowCur = i;
    im.classList.remove('is-on'); im.style.zIndex = ++z; void im.offsetWidth; im.classList.add('is-on');
    setTimeout(function () { if (old !== shots[rowCur]) old.classList.remove('is-on'); }, 1100);
  }
  rows.forEach(function (r, i) { ['mouseenter', 'focus', 'click'].forEach(function (ev) { r.addEventListener(ev, function () { rowOn(i); }); }); });

  /* ------------------------------------------------------------------
     11. Formulario: abre el correo del visitante con el mensaje listo
     ------------------------------------------------------------------ */
  var form = $('#form'), note = $('#formNote'), msg = $('#f-msg');
  msg.addEventListener('input', function () { msg.style.height = 'auto'; msg.style.height = Math.min(320, msg.scrollHeight + 2) + 'px'; });
  function fieldState(el, ok) {
    var box = el.parentNode, err = $('.field__err', box);
    el.setAttribute('aria-invalid', !ok);
    if (ok) { if (err) box.removeChild(err); el.removeAttribute('aria-describedby'); return; }
    if (!err) { err = d.createElement('span'); err.className = 'field__err'; err.id = el.id + '-err'; err.setAttribute('role', 'alert'); box.appendChild(err); }
    err.textContent = tr('e.' + el.name); el.setAttribute('aria-describedby', err.id);
  }
  ['name', 'email', 'message'].forEach(function (k) { form.elements[k].addEventListener('input', function () { if (this.getAttribute('aria-invalid') === 'true') fieldState(this, this.value.trim() !== ''); }); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, bad = null;
    [f.name, f.email, f.message].forEach(function (el) {
      var ok = el.value.trim() !== '' && (el.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim()));
      fieldState(el, ok); if (!ok && !bad) bad = el;
    });
    if (bad) { note.textContent = tr('fm.err'); note.style.color = '#FFC9B8'; bad.focus(); return; }
    var body = f.message.value.trim() + '\n\n' + f.name.value.trim() + (f.org.value.trim() ? '\n' + f.org.value.trim() : '') + '\n' + f.email.value.trim();
    var topic = f.topic.options[f.topic.selectedIndex].text;
    window.location.href = 'mailto:info@nexener.com?subject=' + encodeURIComponent(tr('subject') + ': ' + topic) + '&body=' + encodeURIComponent(body);
    note.textContent = tr('fm.ok'); note.style.color = '';
  });

  /* ------------------------------------------------------------------
     12. Arranque
     ------------------------------------------------------------------ */
  var saved = null; try { saved = localStorage.getItem('nx-lang'); } catch (e) {}
  var want = saved || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  var forced = /[?&]lang=(es|en)/.exec(location.search); if (forced) want = forced[1];
  setLang(want, true);
  railSync(); frame(true);

  function ready() {
    if (root.classList.contains('is-ready')) return;
    root.classList.add('is-ready');
    $('.hero__title').classList.add('is-in');
    syncHero();
    setTimeout(function () { var i = $('.intro'); if (i) i.parentNode.removeChild(i); root.classList.add('is-loaded'); }, 2600);
  }
  var t0 = performance.now(), hold = reduce || /[?&]nointro/.test(location.search) ? 0 : 1250;
  function arm() { setTimeout(ready, Math.max(0, hold - (performance.now() - t0))); }
  if (d.fonts && d.fonts.ready) { d.fonts.ready.then(arm); setTimeout(ready, 2800); } else arm();
}
