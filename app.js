// ============================================================
// OBA Online — V.1.01.00 (Strategic Edition) App JS
// ============================================================
(function () {
  'use strict';

  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.sidebar-nav a, .mobile-nav-link');
  const sidebar   = document.getElementById('sidebar');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const progressBar   = document.getElementById('main-progress');
  const pctText       = document.getElementById('pct-text');

  // ─── Mobile menu toggle ───────────────────────────────────
  window.toggleMobileMenu = function () {
    sidebar.classList.toggle('mobile-active');
    mobileOverlay.classList.toggle('active');
  };

  // ─── Sidebar scroll-to-active-center ─────────────────────
  function centerActiveNav(link) {
    const nav = document.querySelector('.sidebar-nav');
    if (!nav || !link) return;
    const navTop    = nav.getBoundingClientRect().top;
    const linkTop   = link.getBoundingClientRect().top;
    const offset    = linkTop - navTop - (nav.clientHeight / 2) + (link.clientHeight / 2);
    nav.scrollBy({ top: offset, behavior: 'smooth' });
  }

  // ─── Scroll Spy & Progress ────────────────────────────────
  function handleScroll() {
    const scrollPos = window.scrollY + 220;

    // Progress
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct   = Math.min((window.scrollY / totalScroll) * 100, 100);
    if (progressBar) progressBar.style.width = scrollPct + '%';
    const topFill = document.getElementById('top-progress-fill');
    if (topFill)  topFill.style.width = scrollPct + '%';
    if (pctText)  pctText.textContent = Math.round(scrollPct) + '%';

    // Active nav
    let currentId = '';
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) currentId = sec.id;
    });
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === '#' + currentId;
      link.classList.toggle('active', isActive);
      if (isActive) centerActiveNav(link);
    });

    // Bar chart animation
    const barSections = document.querySelectorAll('#financeiro, #societaria');
    barSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        sec.querySelectorAll('.bar-anim').forEach(bar => {
          if (!bar.dataset.animated) {
            bar.style.height = bar.dataset.height || bar.dataset.barHeight;
            bar.dataset.animated = '1';
          }
        });
        // Divisao bars
        sec.querySelectorAll('.divisao-bar[data-width]').forEach(bar => {
          if (!bar.dataset.animated) {
            bar.style.width = bar.dataset.width;
            bar.dataset.animated = '1';
          }
        });
      }
    });
  }

  // ─── Intersection Observer (Reveal) ──────────────────────
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObs.observe(el);
  });

  // ─── Smooth Scroll & Mobile Close ────────────────────────
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      if (window.innerWidth <= 960) {
        sidebar.classList.remove('mobile-active');
        mobileOverlay.classList.remove('active');
      }
    });
  });

  // ─── Expandable Cards ("Ver Mais") ───────────────────────
  document.querySelectorAll('.expandable-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const target = document.getElementById(this.dataset.target);
      if (!target) return;
      const isOpen = target.classList.toggle('expanded');
      target.style.maxHeight = isOpen ? target.scrollHeight + 'px' : '0';
      this.textContent = isOpen ? '▲ Recolher' : '▼ ' + (this.dataset.label || 'Ver Detalhes');
    });
  });

  // ─── Scroll overlay close ────────────────────────────────
  mobileOverlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-active');
    mobileOverlay.classList.remove('active');
  });

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

})();
