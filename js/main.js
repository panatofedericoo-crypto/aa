/* ============================================
   NOVA — interazioni JS (vanilla, zero dipendenze)
============================================ */
(function () {
  'use strict';

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  const loaderNum = document.getElementById('loaderNum');
  const hero = document.getElementById('hero');

  let n = 0;
  const counter = setInterval(() => {
    n += Math.floor(Math.random() * 12) + 4;
    if (n >= 100) { n = 100; clearInterval(counter); finishLoad(); }
    loaderNum.textContent = n;
  }, 90);

  function finishLoad() {
    setTimeout(() => {
      loader.classList.add('is-done');
      if (hero) hero.classList.add('is-in');
    }, 350);
  }

  /* ---------- Cursore personalizzato ---------- */
  const cursor = document.getElementById('cursor');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (cursor && fine) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();

    document.querySelectorAll('[data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* ---------- Navbar: nascondi allo scroll giù, mostra allo scroll su ---------- */
  const nav = document.getElementById('nav');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 200) nav.classList.add('is-hidden');
    else nav.classList.remove('is-hidden');
    lastY = y;
  }, { passive: true });

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.querySelectorAll('.nav__links a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('is-open'))
    );
  }

  /* ---------- Reveal allo scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
        if (entry.target.classList.contains('stat')) animateCount(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- Contatore numerico animato ---------- */
  function animateCount(stat) {
    const el = stat.querySelector('[data-count]');
    if (!el) return;
    const target = parseInt(el.dataset.count, 10);
    const dur = 1400;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    })(start);
  }

  /* ---------- Form contatti (demo, nessun invio reale) ---------- */
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      msg.textContent = `Grazie! Ti scriviamo a ${email} entro 24 ore.`;
      form.reset();
    });
  }
})();
