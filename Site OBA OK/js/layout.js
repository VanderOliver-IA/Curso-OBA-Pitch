document.addEventListener('DOMContentLoaded', () => {
    initFloatingInteractions();
    initAnchorOffsetNavigation();
});

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
