// ============================================================
// OBA Online — App JS Dinâmico (Espetáculo Visual)
// ============================================================
(function () {
  'use strict';

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');
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
    if (pctText) pctText.textContent = Math.round(scrollPercent) + '%';

    // Update Active Nav
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
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

  // ─── Interação do Menu ───────────────────────────────────
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  window.addEventListener('scroll', handleScroll);
  // Inicialização
  handleScroll();

})();
