"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  return (
    <>
      {/* Floating Elements */}
      <div id="floating-elements-container">
        {/* WhatsApp Float */}
        <a href="https://wa.me/5521976406960" target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="Contato pelo WhatsApp">
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>

        {/* Scroll Top (Simple version, animation normally handled by JS) */}
        <div 
          className="scroll-top" 
          id="scrollTop" 
          role="button" 
          aria-label="Voltar ao topo" 
          tabIndex={0}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true">
            <circle className="progress-background" cx="50" cy="50" r="48" strokeWidth="4" fill="none"></circle>
            <circle className="progress-bar" cx="50" cy="50" r="48" strokeWidth="4" fill="none" strokeDasharray="301.59" strokeDashoffset="301.59"></circle>
          </svg>
          <i className="fas fa-arrow-up" aria-hidden="true"></i>
        </div>

        {/* MOBILE APP BAR */}
        <div className="mobile-app-bar glass">
          <Link href="/#inicio" className="app-item active">
            <i className="fas fa-home"></i>
            <span>Início</span>
          </Link>
          <button onClick={() => setMobileMenuOpen(true)} className="app-item" id="mobile-courses-btn">
            <i className="fas fa-paint-brush"></i>
            <span>Cursos</span>
          </button>
          <a href="https://wa.me/5521976406960" className="app-item highlight">
            <div className="highlight-circle">
              <i className="fas fa-calendar-check"></i>
            </div>
            <span>Agendar</span>
          </a>
          <Link href="/#localizacao" className="app-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Local</span>
          </Link>
          <Link href="/parceiro" className="app-item">
            <i className="fas fa-handshake"></i>
            <span>Parceiro</span>
          </Link>
        </div>

        {/* MOBILE COURSES MENU */}
        {mobileMenuOpen && (
          <div id="mobile-courses-menu" className="mobile-menu-overlay glass" style={{ display: "flex" }}>
            <div className="mobile-menu-header">
              <h3>Nossos Cursos</h3>
              <button onClick={() => setMobileMenuOpen(false)} id="close-mobile-menu" className="close-btn" aria-label="Fechar menu de cursos">
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div className="mobile-menu-grid">
              <Link href="/cursos/manga" className="mobile-menu-item"><i className="fas fa-book-open" style={{ color: "#FFD700" }}></i> Mangá</Link>
              <Link href="/cursos/realismo" className="mobile-menu-item"><i className="fas fa-eye" style={{ color: "#00bcd4" }}></i> Realismo</Link>
              <Link href="/cursos/cartoon" className="mobile-menu-item"><i className="fas fa-pencil-alt" style={{ color: "#ff9800" }}></i> Cartoon</Link>
              <Link href="/cursos/hq" className="mobile-menu-item"><i className="fas fa-comment-dots" style={{ color: "#5a5a5a" }}></i> HQ</Link>
              <Link href="/cursos/pintura-em-tela" className="mobile-menu-item"><i className="fas fa-palette" style={{ color: "#ff5722" }}></i> Pintura</Link>
              <Link href="/cursos/moda" className="mobile-menu-item"><i className="fas fa-tshirt" style={{ color: "#c2185b" }}></i> Moda</Link>
              <Link href="/cursos/cenario-e-ambientacao" className="mobile-menu-item"><i className="fas fa-building" style={{ color: "#1976d2" }}></i> Cenário</Link>
              <Link href="/cursos/comunicacao-visual" className="mobile-menu-item"><i className="fas fa-bullhorn" style={{ color: "#388e3c" }}></i> Com. Visual</Link>
            </div>
          </div>
        )}

        {/* DRAGGABLE FLOATING LOGO */}
        {logoVisible && (
          <div id="floating-logo" className="floating-logo" style={{ display: "flex" }}>
            <button onClick={() => setLogoVisible(false)} id="hide-logo-btn" className="close-logo" aria-label="Ocultar logo flutuante">
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
            <img src="/images/logo-oba-arty.png" alt="OBA Logo" />
          </div>
        )}
      </div>

      <footer className="footer section-padding">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Info Card */}
            <div className="footer-col footer-card brand-card">
              <img src="/images/logo-oba-arty.png" alt="OBA" className="footer-logo" loading="lazy" />
              <p className="footer-desc">Desperte o artista que existe em você em um ambiente seguro, divertido e sem julgamentos. "A arte é para todos."</p>
              <div className="socials">
                <a href="https://www.instagram.com/oba.meier/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/oba.meier/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="https://wa.me/5521976406960" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            {/* Units Card */}
            <div className="footer-col footer-card units-card">
              <h4>Nossas Unidades</h4>
              <div className="unit-info">
                <h5><i className="fas fa-map-marker-alt"></i> Méier</h5>
                <p>R. Ana Barbosa, 47<br />Méier - RJ</p>
                <p className="footer-phone"><i className="fab fa-whatsapp"></i> (21) 97640-6960</p>
              </div>
              <div className="unit-info">
                <h5><i className="fas fa-map-marker-alt"></i> Tijuca</h5>
                <p>R. Maj. Ávila, 371<br />Tijuca - RJ</p>
                <p className="footer-phone"><i className="fab fa-whatsapp"></i> (21) 96726-1725</p>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="footer-col footer-card links-card">
              <h4>Acesso Rápido</h4>
              <ul className="footer-links">
                <li><Link href="/#inicio">Início</Link></li>
                <li><Link href="/#proposito">Propósito</Link></li>
                <li><Link href="/#metodologia">Metodologia</Link></li>
                <li><Link href="/#cursos">Cursos</Link></li>
                <li><Link href="/parceiro">Parceiro</Link></li>
                <li><Link href="/#localizacao">Agendar Aula</Link></li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2026 Oficina Belas Artes. Todos os direitos reservados. <span style={{ opacity: 0.5, fontSize: "0.85em", fontFamily: "monospace", marginLeft: "10px" }}>V1.01.01</span></p>
            <div className="footer-dev-info">
              <p className="creator">Criado por <a href="https://www.olamundodigital.com.br" target="_blank" rel="noopener noreferrer" className="omd-link">
                <img src="/images/logo-olamundodigital.png" alt="OMD" className="omd-mini-logo" /> OláMundoDigital
              </a></p>
              <a href="https://wa.me/5521998743504?text=Ol%C3%A1%2C%20vimos%20o%20site%20da%20OBA%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site%20similar%21" target="_blank" className="dev-cta omd-gradient-btn" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> Quer um site igual a esse?
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
