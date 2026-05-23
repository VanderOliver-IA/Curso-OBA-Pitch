/**
 * OBA - Layout Manager
 * Centralizes Header, Footer and Floating Elements
 */

document.addEventListener('DOMContentLoaded', () => {
    const isSubPage = window.location.pathname.includes('/cursos/');
    const pathPrefix = isSubPage ? '../' : '';

    renderHeader(pathPrefix);
    renderFooter(pathPrefix);
    renderFloatingElements(pathPrefix);
    initAnchorOffsetNavigation();
});

function renderHeader(prefix) {
    const headerPlaceholder = document.getElementById('navbar-placeholder');
    if (!headerPlaceholder) return;

    headerPlaceholder.innerHTML = `
    <nav class="navbar glass">
        <div class="container nav-content">
            <ul class="nav-links">
                <li><a href="${prefix}index.php#inicio" class="nav-item">Início</a></li>
                <li><a href="${prefix}index.php#proposito" class="nav-item">Por que Arte?</a></li>
                <li><a href="${prefix}index.php#metodologia" class="nav-item">Metodologia</a></li>
                <li class="dropdown-trigger">
                    <a href="${prefix}index.php#cursos" class="nav-item">Cursos <i class="fas fa-chevron-down" style="font-size: 0.7em; margin-left: 5px;"></i></a>
                    <ul class="dropdown-menu glass">
                        <li><a href="${prefix}cursos/manga.php"><i class="fas fa-book-open"></i> Mangá</a></li>
                        <li><a href="${prefix}cursos/realismo.php"><i class="fas fa-eye"></i> Desenho Realista</a></li>
                        <li><a href="${prefix}cursos/cartoon.php"><i class="fas fa-pencil-alt"></i> Cartoon</a></li>
                        <li><a href="${prefix}cursos/hq.php"><i class="fas fa-comment-dots"></i> HQ</a></li>
                        <li><a href="${prefix}cursos/pintura-em-tela.php"><i class="fas fa-palette"></i> Pintura em Tela</a></li>
                        <li><a href="${prefix}cursos/moda.php"><i class="fas fa-tshirt"></i> Moda</a></li>
                        <li><a href="${prefix}cursos/cenario-e-ambientacao.php"><i class="fas fa-building"></i> Cenário</a></li>
                        <li><a href="${prefix}cursos/comunicacao-visual.php"><i class="fas fa-bullhorn"></i> Com. Visual</a></li>
                    </ul>
                </li>
                <li><a href="${prefix}parceiro.php" class="nav-item">Parceiro</a></li>
                <li><a href="${prefix}index.php#localizacao" class="nav-item">Unidades</a></li>
            </ul>
            <a href="https://wa.me/5521976406960" class="btn btn-primary desktop-cta">Agendar Aula Experimental</a>
        </div>
    </nav>
    `;
}

function renderFooter(prefix) {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    footerPlaceholder.innerHTML = `
    <footer class="footer section-padding">
        <div class="container">
            <div class="footer-grid">
                <!-- Brand Info Card -->
                <div class="footer-col footer-card brand-card">
                    <img src="${prefix}images/logo-oba-arty.png" alt="OBA" class="footer-logo" loading="lazy">
                    <p class="footer-desc">Desperte o artista que existe em você em um ambiente seguro, divertido e sem julgamentos. "A arte é para todos."</p>
                    <div class="socials">
                        <a href="https://www.instagram.com/oba.meier/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/oba.meier/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="https://wa.me/5521976406960" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <!-- Units Card -->
                <div class="footer-col footer-card units-card">
                    <h4>Nossas Unidades</h4>
                    <div class="unit-info">
                        <h5><i class="fas fa-map-marker-alt"></i> Méier</h5>
                        <p>R. Ana Barbosa, 47<br>Méier - RJ</p>
                        <p class="footer-phone"><i class="fab fa-whatsapp"></i> (21) 97640-6960</p>
                    </div>
                    <div class="unit-info">
                        <h5><i class="fas fa-map-marker-alt"></i> Tijuca</h5>
                        <p>R. Maj. Ávila, 371<br>Tijuca - RJ</p>
                        <p class="footer-phone"><i class="fab fa-whatsapp"></i> (21) 96726-1725</p>
                    </div>
                </div>

                <!-- Quick Links Card -->
                <div class="footer-col footer-card links-card">
                    <h4>Acesso Rápido</h4>
                    <ul class="footer-links">
                        <li><a href="${prefix}index.php#inicio">Início</a></li>
                        <li><a href="${prefix}index.php#proposito">Propósito</a></li>
                        <li><a href="${prefix}index.php#metodologia">Metodologia</a></li>
                        <li><a href="${prefix}index.php#cursos">Cursos</a></li>
                        <li><a href="${prefix}parceiro.php">Parceiro</a></li>
                        <li><a href="${prefix}index.php#localizacao">Agendar Aula</a></li>
                    </ul>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; 2026 Oficina Belas Artes. Todos os direitos reservados.</p>
                <div class="footer-dev-info">
                    <p class="creator">Criado por <a href="https://www.olamundodigital.com.br" target="_blank" rel="noopener" class="omd-link">
                        <img src="${prefix}images/logo-olamundodigital.png" alt="OMD" class="omd-mini-logo"> OláMundoDigital
                    </a></p>
                    <a href="https://wa.me/5521998743505?text=Ol%C3%A1%2C%20vimos%20o%20site%20da%20OBA%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site%20similar%21" target="_blank" class="dev-cta omd-gradient-btn" rel="noopener">
                        <i class="fab fa-whatsapp"></i> Quer um site igual a esse?
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

function renderFloatingElements(prefix) {
    const body = document.body;

    // Create container for floating elements if it doesn't exist
    let floatingContainer = document.getElementById('floating-elements-container');
    if (!floatingContainer) {
        floatingContainer = document.createElement('div');
        floatingContainer.id = 'floating-elements-container';
        body.appendChild(floatingContainer);
    }

    const isSubPage = window.location.pathname.includes('/cursos/');
    // On subpages, links should be just normal anchors if possible, or link back to index
    // Note: The logic handles prefixing well.

    floatingContainer.innerHTML = `
        <!-- WhatsApp Float -->
        <a href="https://wa.me/5521976406960" target="_blank" rel="noopener" class="float-wa">
            <i class="fab fa-whatsapp"></i>
        </a>

        <!-- Scroll Top -->
        <div class="scroll-top" id="scrollTop">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle class="progress-background" cx="50" cy="50" r="48" stroke-width="4" fill="none"></circle>
                <circle class="progress-bar" cx="50" cy="50" r="48" stroke-width="4" fill="none" stroke-dasharray="301.59" stroke-dashoffset="301.59"></circle>
            </svg>
            <i class="fas fa-arrow-up"></i>
        </div>

        <!-- MOBILE APP BAR -->
        <div class="mobile-app-bar glass">
            <a href="${prefix}index.php#inicio" class="app-item active">
                <i class="fas fa-home"></i>
                <span>Início</span>
            </a>
            <a href="${isSubPage ? prefix + 'index.php#cursos' : '#cursos'}" class="app-item" id="mobile-courses-btn">
                <i class="fas fa-paint-brush"></i>
                <span>Cursos</span>
            </a>
            <a href="https://wa.me/5521976406960" class="app-item highlight">
                <div class="highlight-circle">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <span>Agendar</span>
            </a>
            <a href="${prefix}index.php#localizacao" class="app-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Local</span>
            </a>
            <a href="${prefix}parceiro.php" class="app-item">
                <i class="fas fa-handshake"></i>
                <span>Parceiro</span>
            </a>
        </div>

        <!-- MOBILE COURSES MENU -->
        <div id="mobile-courses-menu" class="mobile-menu-overlay glass">
            <div class="mobile-menu-header">
                <h3>Nossos Cursos</h3>
                <button id="close-mobile-menu" class="close-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="mobile-menu-grid">
                <a href="${prefix}cursos/manga.php" class="mobile-menu-item"><i class="fas fa-book-open"></i> Mangá</a>
                <a href="${prefix}cursos/realismo.php" class="mobile-menu-item"><i class="fas fa-eye"></i> Realismo</a>
                <a href="${prefix}cursos/cartoon.php" class="mobile-menu-item"><i class="fas fa-pencil-alt"></i> Cartoon</a>
                <a href="${prefix}cursos/hq.php" class="mobile-menu-item"><i class="fas fa-comment-dots"></i> HQ</a>
                <a href="${prefix}cursos/pintura-em-tela.php" class="mobile-menu-item"><i class="fas fa-palette"></i> Pintura</a>
                <a href="${prefix}cursos/moda.php" class="mobile-menu-item"><i class="fas fa-tshirt"></i> Moda</a>
                <a href="${prefix}cursos/cenario-e-ambientacao.php" class="mobile-menu-item"><i class="fas fa-building"></i> Cenário</a>
                <a href="${prefix}cursos/comunicacao-visual.php" class="mobile-menu-item"><i class="fas fa-bullhorn"></i> Com. Visual</a>
            </div>
        </div>

        <!-- DRAGGABLE FLOATING LOGO -->
        <div id="floating-logo" class="floating-logo" style="display: flex;">
            <button id="hide-logo-btn" class="close-logo"><i class="fas fa-times"></i></button>
            <img src="${prefix}images/logo-oba-arty.png" alt="OBA Logo">
        </div>
    `;

    // Initialize interactions immediately after injection
    initFloatingInteractions();
}

/**
 * Initializes logic for elements injected by renderFloatingElements
 */
function initFloatingInteractions() {

    // --- 1. Mobile Menu Logic ---
    const mobileCoursesBtn = document.getElementById('mobile-courses-btn');
    const mobileMenu = document.getElementById('mobile-courses-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    if (mobileCoursesBtn && mobileMenu) {
        mobileCoursesBtn.addEventListener('click', (e) => {
            // Em mobile, o botão "Cursos" abre o seletor de cursos.
            if (window.innerWidth <= 900) {
                e.preventDefault();
                mobileMenu.classList.add('active');
            }
        });
    }

    if (closeMobileMenu && mobileMenu) {
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close on outside click
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });

        // Fecha o menu ao escolher um curso.
        const courseItems = mobileMenu.querySelectorAll('.mobile-menu-item');
        courseItems.forEach((item) => {
            item.addEventListener('click', () => mobileMenu.classList.remove('active'));
        });
    }

    // --- 2. Floating Logo Drag Logic ---
    const logoWidget = document.getElementById('floating-logo');
    const closeWidgetBtn = document.getElementById('hide-logo-btn');

    if (logoWidget && closeWidgetBtn) {
        // Ensure it's visible initially
        logoWidget.style.display = 'flex';
        logoWidget.style.opacity = '1';

        // Close functionality
        closeWidgetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            logoWidget.style.opacity = '0';
            setTimeout(() => {
                logoWidget.style.display = 'none';
            }, 300);
        });

        // Dragging Logic
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        const startDrag = (e) => {
            if (e.target === closeWidgetBtn || closeWidgetBtn.contains(e.target)) return;

            isDragging = true;
            const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

            startX = clientX;
            startY = clientY;

            const style = window.getComputedStyle(logoWidget);
            initialLeft = parseInt(style.left) || 0;
            initialTop = parseInt(style.top) || 0;

            logoWidget.style.cursor = 'grabbing';
            logoWidget.style.transition = 'none'; // Disable transition during drag
        };

        const onDrag = (e) => {
            if (!isDragging) return;

            e.preventDefault(); // Prevent scrolling
            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

            const dx = clientX - startX;
            const dy = clientY - startY;

            logoWidget.style.left = `${initialLeft + dx}px`;
            logoWidget.style.top = `${initialTop + dy}px`;
        };

        const stopDrag = () => {
            if (isDragging) {
                isDragging = false;
                logoWidget.style.cursor = 'grab';
                logoWidget.style.transition = 'transform 0.1s'; // Re-enable transition
            }
        };

        // Mouse Events
        logoWidget.addEventListener('mousedown', startDrag);
        window.addEventListener('mousemove', onDrag);
        window.addEventListener('mouseup', stopDrag);

        // Touch Events
        logoWidget.addEventListener('touchstart', startDrag, { passive: false });
        window.addEventListener('touchmove', onDrag, { passive: false });
        window.addEventListener('touchend', stopDrag);
    }

    // --- 3. Scroll Top Logic ---
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        const progressBar = scrollTopBtn.querySelector('.progress-bar');
        const circumference = 301.59; // 2 * pi * 48
        const visibilityOffset = window.innerWidth <= 900 ? 220 : 420;

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Add scroll listener for visibility and progress
        window.addEventListener('scroll', () => {
            // Visibility
            if (window.scrollY > visibilityOffset) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }

            // Progress calculation
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollTotal > 0) {
                const scrollProgress = window.scrollY / scrollTotal;
                const offset = circumference - (scrollProgress * circumference);
                if (progressBar) {
                    progressBar.style.strokeDashoffset = offset;
                }
            }
        }, { passive: true });

        // Initial check
        if (window.scrollY > visibilityOffset) scrollTopBtn.classList.add('visible');
    }

    // --- 4. Mobile Logo Scroll Logic ---
    const logoElement = document.getElementById('floating-logo');
    if (logoElement) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 900) { // Only active on mobile
                if (window.scrollY > 50) {
                    logoElement.classList.add('mobile-scrolled');
                } else {
                    logoElement.classList.remove('mobile-scrolled');
                }
            }
        }, { passive: true });
    }
}

function initAnchorOffsetNavigation() {
    const normalizePath = (path) => {
        const clean = (path || '/').split('?')[0].replace(/\/+$/, '');
        return clean || '/';
    };

    const homeAliases = new Set(['/', '/index.php', '/index.html', '/php/index.php']);

    const isSamePagePath = (targetPath) => {
        const current = normalizePath(window.location.pathname);
        const target = normalizePath(targetPath);
        return current === target || (homeAliases.has(current) && homeAliases.has(target));
    };

    const getHeaderOffset = () => {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        return navbarHeight + 14;
    };

    const scrollToHashWithOffset = (hash) => {
        if (!hash) return;
        const id = hash.replace('#', '');
        const target = document.getElementById(id);
        if (!target) return;
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getHeaderOffset());
        window.scrollTo({ top, behavior: 'smooth' });
    };

    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href*="#"]');
        if (!anchor) return;

        const rawHref = anchor.getAttribute('href');
        if (!rawHref || rawHref.startsWith('javascript:')) return;

        let url;
        try {
            url = new URL(rawHref, window.location.href);
        } catch {
            return;
        }

        if (!url.hash || !isSamePagePath(url.pathname)) return;

        const targetId = url.hash.slice(1);
        if (!document.getElementById(targetId)) return;

        e.preventDefault();
        scrollToHashWithOffset(url.hash);
        history.replaceState(null, '', `#${targetId}`);
    });

    if (window.location.hash) {
        setTimeout(() => scrollToHashWithOffset(window.location.hash), 40);
    }
}
