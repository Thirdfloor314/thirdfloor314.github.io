// theme: remember an explicit choice, otherwise follow the OS
(function () {
  var root = document.documentElement;
  var media = matchMedia('(prefers-color-scheme: dark)');
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);

  document.getElementById('theme').addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// hairline under the nav once the page scrolls
(function () {
  var nav = document.getElementById('nav');
  var onScroll = function () { nav.classList.toggle('stuck', window.scrollY > 8); };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// fade sections in as they arrive
(function () {
  if (!('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.feature, .card, .skill, .edu, .contact-lede');
  targets.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  targets.forEach(function (el) { io.observe(el); });
})();

// the demo loops quietly while it is on screen, and stops when it isn't
(function () {
  var v = document.querySelector('.demo video');
  if (!v || !('IntersectionObserver' in window)) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { v.play().catch(function () {}); } else { v.pause(); }
    });
  }, { threshold: 0.35 }).observe(v);
})();

document.getElementById('yr').textContent = new Date().getFullYear();
