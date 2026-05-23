"use client";

import { useEffect } from "react";

export function Scripts() {
  useEffect(() => {
    // --- 1. Reveal on Scroll (Intersection Observer) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));

    // --- 2. Enhanced Parallax Effect (Hero & Backgrounds) ---
    const parallaxElements = document.querySelectorAll('[data-speed]') as NodeListOf<HTMLElement>;
    const bgParallaxes = document.querySelectorAll('[data-parallax-speed]') as NodeListOf<HTMLElement>;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 900) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = clientX - centerX;
      const moveY = clientY - centerY;

      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.05');
        el.style.transform = `translate3d(${moveX * speed}px, ${moveY * speed}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      const scrolled = window.scrollY;

      bgParallaxes.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.05');
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
