// ============================================================
// OBA Online — App JS Dinâmico (Espetáculo Visual)
// ============================================================
(function () {
  'use strict';

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a, .mobile-nav-link');
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');

  window.toggleMobileMenu = function() {
    sidebar.classList.toggle('mobile-active');
    mobileOverlay.classList.toggle('active');
  };
  const progressBar = document.getElementById('main-progress');
  const pctText = document.getElementById('pct-text');

  // ─── Scroll Spy & Progress ───────────────────────────────
  function handleScroll() {
    const scrollPos = window.scrollY + 200;
    
    // Update Progress
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalScroll = docHeight - winHeight;
    const scrollPercent = Math.min((window.scrollY / totalScroll) * 100, 100);
    
    if (progressBar) progressBar.style.width = scrollPercent + '%';
    const topProgressBar = document.getElementById('top-progress-fill');
    if (topProgressBar) topProgressBar.style.width = scrollPercent + '%';
    if (pctText) pctText.textContent = Math.round(scrollPercent) + '%';

    // Update Active Nav
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
            
            // Auto-scroll logic for Sidebar (7-item window centering)
            if (link.closest('.sidebar-nav')) {
              const navContainer = link.closest('.sidebar-nav');
              const containerHeight = navContainer.clientHeight;
              const linkOffsetTop = link.offsetTop;
              const linkHeight = link.offsetHeight;
              
              const targetScrollTop = linkOffsetTop - (containerHeight / 2) + (linkHeight / 2);
              
              navContainer.scrollTo({
                top: Math.max(0, targetScrollTop),
                behavior: 'smooth'
              });
            }
          }
        });
      }
    });

    // Bar Chart & Donut Animation Trigger
    const barSections = document.querySelectorAll('#financeiro, #divisao');
    barSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0) {
            const bars = sec.querySelectorAll('.bar-anim');
            bars.forEach(bar => {
                if(bar.style.height === '' || bar.style.height === '0px') {
                    bar.style.height = bar.dataset.height;
                }
            });
            // Donut animation
            const circles = sec.querySelectorAll('circle[stroke-dasharray]');
            circles.forEach(c => {
              c.style.transition = 'stroke-dashoffset 2s ease-out';
            });
        }
    });
  }

  // ─── Intersection Observer (Reveal) ──────────────────────
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  // ─── Smooth Scroll & Auto Close Mobile ───────────────────
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSec = document.querySelector(targetId);
      if(targetSec) {
        window.scrollTo({
          top: targetSec.offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Fecha o menu no mobile caso esteja aberto
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('mobile-active');
        mobileOverlay.classList.remove('active');
      }
    });
  });

  window.addEventListener('scroll', handleScroll);
  // Inicialização
  handleScroll();

})();
