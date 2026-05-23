// OBA V2 - Interactive Script

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Reveal on Scroll (Intersection Observer) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));

    // --- 2. Enhanced Parallax Effect (Hero & Backgrounds) ---
    const hero = document.querySelector('.hero-slider-section');
    const parallaxElements = document.querySelectorAll('[data-speed]');
    const bgParallaxes = document.querySelectorAll('[data-parallax-speed]');

    // Mouse Parallax (Hero)
    // Mouse Parallax (Global)
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 900) return;

        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = clientX - centerX;
        const moveY = clientY - centerY;

        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.05;
            // Use translate3d for better performance
            el.style.transform = `translate3d(${moveX * speed}px, ${moveY * speed}px, 0)`;
        });
    });

    // Scroll Parallax (Backgrounds)
    // const scrollTopBtn = document.getElementById('scrollTop'); // Moved to layout.js
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.app-item');
    const mobileOffset = 200;

    const handleScroll = () => {
        const scrolled = window.pageYOffset;

        bgParallaxes.forEach(el => {
            const speed = el.getAttribute('data-parallax-speed') || 0.05;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });

        // --- 3. Scroll to Top - Moved to layout.js ---

        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.7)';
                navbar.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.07)';
            }
        }

        // --- 4. Mobile Nav Active State ---
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - mobileOffset)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href')?.includes(current)) {
                item.classList.add('active');
            }
        });
    };

    let scrollTicking = false;
    const onScroll = () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    // scrollTopBtn listener moved to layout.js

    // --- 5. Hero Slider Logic ---
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

    if (slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        const slideIntervalTime = 5000;
        let slideInterval;

        const showSlide = (index) => {
            // Remove active class
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Validate index
            if (index >= totalSlides) currentSlide = 0;
            else if (index < 0) currentSlide = totalSlides - 1;
            else currentSlide = index;

            // Add active class
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            showSlide(currentSlide + 1);
        };

        const prevSlide = () => {
            showSlide(currentSlide - 1);
        };

        const startSlider = () => {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
        };

        const resetSlider = () => {
            clearInterval(slideInterval);
            startSlider();
        };

        // Event Listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetSlider();
            });
            dot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showSlide(index);
                    resetSlider();
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            const tag = document.activeElement?.tagName?.toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
            if (e.key === 'ArrowRight') {
                nextSlide();
                resetSlider();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                resetSlider();
            }
        });

        // Initialize
        startSlider();
    }

    // --- 6. (Draggable Floating Logo - Moved to layout.js) ---

    // --- 7. Timeline Logic (Autoplay + Loop + Manual) ---
    const timelineContainer = document.querySelector('.timeline-scroller');
    const prevTimelineBtn = document.querySelector('.prev-timeline');
    const nextTimelineBtn = document.querySelector('.next-timeline');
    const stepText = document.querySelector('.step-text');
    const progressLineEl = document.querySelector('.progress-line');

    if (timelineContainer) {
        const cards = Array.from(document.querySelectorAll('.timeline-card'));
        const totalCards = cards.length;
        let currentIndex = 0; // 0-based index (0 to 4)
        let autoPlayInterval;
        let isUserInteracting = false;
        let isDown = false;
        let startX;
        let scrollLeft;

        // Function to scroll to specific card index
        const scrollToCard = (index) => {
            if (index < 0) index = totalCards - 1; // Loop to last
            if (index >= totalCards) index = 0;   // Loop to first

            currentIndex = index;
            const targetCard = cards[currentIndex];

            // Scroll Logic to Center Target
            // The container padding handles the offset (calc(50% - 160px)), so simply scrolling to the card's offsetLeft works if we account for the padding.
            // Actually, simpler logic: 
            // The scrollLeft required is: card.offsetLeft - (containerWidth/2) + (cardWidth/2)
            // But since we used padding on container, scrollLeft 0 is the start of padding.
            // The most robust way is:
            const containerCenter = timelineContainer.clientWidth / 2;
            const cardCenter = targetCard.offsetLeft + (targetCard.offsetWidth / 2);
            const scrollPos = cardCenter - containerCenter;

            timelineContainer.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });

            updateIndicators(currentIndex);
        };

        // Update Text and Progress Line
        const updateIndicators = (index) => {
            const card = cards[index];
            const step = card.getAttribute('data-step');
            const name = card.getAttribute('data-step-name');

            if (stepText) stepText.textContent = `Etapa ${step}: ${name}`;

            if (progressLineEl) {
                // Determine width based on step (1=20%, 5=100%)
                const percentage = (parseInt(step) / 5) * 100;
                progressLineEl.style.setProperty('--progress-width', `${percentage}%`);
            }
        };

        // Auto Play Function
        const startAutoPlay = () => {
            stopAutoPlay(); // Clear existing to play safe
            autoPlayInterval = setInterval(() => {
                if (!isUserInteracting) {
                    scrollToCard(currentIndex + 1);
                }
            }, 4000); // 4 Seconds
        };

        const stopAutoPlay = () => {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
        };

        // Pause on Interaction
        const userInteractionStart = () => {
            isUserInteracting = true;
            stopAutoPlay();
        };

        const userInteractionEnd = () => {
            isUserInteracting = false;
            startAutoPlay();
        };

        // 1. Navigation Buttons
        if (prevTimelineBtn) {
            prevTimelineBtn.addEventListener('click', () => {
                userInteractionStart();
                scrollToCard(currentIndex - 1);
                setTimeout(userInteractionEnd, 2000); // Restart autoplay after delay
            });
        }

        if (nextTimelineBtn) {
            nextTimelineBtn.addEventListener('click', () => {
                userInteractionStart();
                scrollToCard(currentIndex + 1);
                setTimeout(userInteractionEnd, 2000);
            });
        }

        // 2. Drag / Scroll Handling
        timelineContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            userInteractionStart();
            timelineContainer.style.cursor = 'grabbing';
            startX = e.pageX - timelineContainer.offsetLeft;
            scrollLeft = timelineContainer.scrollLeft;
        });

        timelineContainer.addEventListener('mouseleave', () => {
            isDown = false;
            timelineContainer.style.cursor = 'grab';
            if (isUserInteracting) userInteractionEnd();
        });

        timelineContainer.addEventListener('mouseup', () => {
            isDown = false;
            timelineContainer.style.cursor = 'grab';

            // Snap to nearest card after drag release
            setTimeout(() => {
                // Find nearest card
                const center = timelineContainer.scrollLeft + (timelineContainer.offsetWidth / 2);
                let minDist = Infinity;
                let nearestIndex = currentIndex;

                cards.forEach((card, index) => {
                    const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
                    const dist = Math.abs(center - cardCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        nearestIndex = index;
                    }
                });

                scrollToCard(nearestIndex); // Snap and update index
                userInteractionEnd();
            }, 100);
        });

        timelineContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - timelineContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll fast
            timelineContainer.scrollLeft = scrollLeft - walk;
        });

        // Touch Support
        timelineContainer.addEventListener('touchstart', () => {
            userInteractionStart();
        }, { passive: true });

        timelineContainer.addEventListener('touchend', () => {
            setTimeout(() => {
                // Simple logic to detect current centered card after scroll momentum stops
                // Or simply restart timer
                userInteractionEnd();
            }, 1000);
        });

        // Use Intersection Observer or Scroll Event to keep index updated if user scrolls natively
        // Simpler approach: On scroll end (debounce), detect active card
        let isScrolling;
        timelineContainer.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                // Update current index based on center position without snapping (allows native scroll feel)
                // BUT we want robust state for next/prev buttons.
                const center = timelineContainer.scrollLeft + (timelineContainer.offsetWidth / 2);
                let minDist = Infinity;

                cards.forEach((card, index) => {
                    const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
                    const dist = Math.abs(center - cardCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        currentIndex = index; // Silently update internal state
                    }
                });
                updateIndicators(currentIndex);
            }, 100);
        });


        // Initialize
        // Center the first card immediately
        // Wait for layout paint
        setTimeout(() => {
            scrollToCard(0);
            startAutoPlay();
        }, 100);
    }


    // --- 7. (Mobile Courses Menu Toggle - Removed, now in layout.js) ---

    // --- 8. Contact Form Logic ---
    window.sendWhatsApp = function () {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const courseInput = document.getElementById('course');
        const messageInput = document.getElementById('message');

        const name = nameInput ? nameInput.value : '';
        const phone = phoneInput ? phoneInput.value : '';
        const course = (courseInput && courseInput.value) ? courseInput.value : "Geral";
        const message = messageInput ? messageInput.value : '';

        if (!name || !phone) {
            alert("Por favor, preencha pelo menos seu nome e telefone para iniciarmos a conversa.");
            return;
        }

        const text = `*Novo Contato via Site*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Interesse:* ${course}\n*Mensagem:* ${message}`;
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/5521976406960?text=${encodedText}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value || "Geral";
            const message = document.getElementById('message').value;

            const subject = `Interesse no curso de ${course} - ${name}`;
            const body = `Nome: ${name}\nTelefone: ${phone}\nCurso de Interesse: ${course}\n\nMensagem:\n${message}`;

            window.location.href = `mailto:oba.meier@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }


    // --- 9. FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');

        toggle.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others (optional - standard accordion behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const content = otherItem.querySelector('.faq-content');
                    content.style.maxHeight = null;
                }
            });

            // Toggle current
            item.classList.toggle('active');
            const content = item.querySelector('.faq-content');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Special FAQ - Send WhatsApp
    window.sendFaqWhatsapp = function () {
        const input = document.getElementById('faq-question-input');
        const question = input.value.trim();

        if (!question) {
            alert("Por favor, digite sua dúvida antes de enviar.");
            return;
        }

        const text = `*Dúvida via FAQ do Site*\n\n"${question}"\n\nOlá, gostaria de tirar essa dúvida!`;
        const encodedText = encodeURIComponent(text);
        // Replace with actual number
        const url = `https://wa.me/5521976406960?text=${encodedText}`;

        window.open(url, '_blank', 'noopener,noreferrer');
        input.value = ''; // Clear input (optional)
    };

});
// --- SCHEDULE TOGGLE ---
function switchSchedule(unit) {
    const meier = document.getElementById('schedule-meier');
    const tijuca = document.getElementById('schedule-tijuca');
    const btns = document.querySelectorAll('#horarios .toggle-btn');

    if (!meier || !tijuca) return;

    btns.forEach(btn => btn.classList.remove('active'));

    if (unit === 'meier') {
        meier.style.display = 'grid';
        tijuca.style.display = 'none';
        if (btns[0]) btns[0].classList.add('active');
    } else {
        meier.style.display = 'none';
        tijuca.style.display = 'grid';
        if (btns[1]) btns[1].classList.add('active');
    }
}
