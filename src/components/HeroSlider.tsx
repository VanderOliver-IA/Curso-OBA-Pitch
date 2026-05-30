"use client";

import { useState, useEffect } from "react";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="hero-slider-section">
      {/* Global Background Elements (Persist across slides) */}
      <div className="hero-bg-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="hero-pattern"></div>
      </div>

      {/* Slider Wrapper */}
      <div className="hero-slider">
        
        {/* SLIDE 1 (Original) */}
        <div className={`hero-slide ${current === 0 ? "active" : ""}`}>
          <div className="container hero-container">
            <div className="hero-text">
              <div className="hero-tagline animate-text delay-1">
                <span className="icon">🎨</span>
                <span>Transformando paixão em domínio técnico</span>
              </div>
              <h1 className="animate-text delay-2">Sua arte levada <br />a <span className="highlight">sério.</span></h1>
              <p className="animate-text delay-3">Na Oficina Belas Artes, você aprende técnica de verdade para expressar sua visão única. Sem julgamentos, apenas evolução.</p>
              <div className="hero-ctas animate-text delay-4">
                <a href="#localizacao" className="btn btn-hero-glass">
                  <span>Começar Aula Experimental</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="hero-social-proof animate-text delay-5">
                <div className="avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <span>+2.000 alunos transformados</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              {/* Desktop Visual (Original) */}
              <div className="hero-desktop-visual">
                <div className="hero-mural" data-speed="0.05">
                  <div className="mural-item p1"></div>
                  <div className="mural-item p2"></div>
                  <div className="mural-item p3"></div>
                </div>
                <picture>
                  <source srcSet="images/hero-desktop/arty-2.webp" type="image/webp" />
                  <img src="images/hero-desktop/arty-2.png" alt="Mascote Arty da Oficina Belas Artes" className="arty-float animate-visual" loading="eager" width="480" height="480" fetchPriority="high" />
                </picture>
                <div className="float-element element-1 glass animate-float delay-3">
                  <i className="fas fa-pencil-alt"></i>
                  <span>Técnica Real</span>
                </div>
                <div className="float-element element-2 glass animate-float delay-4">
                  <i className="fas fa-palette"></i>
                  <span>Criação Livre</span>
                </div>
              </div>

              {/* Mobile Visual (New) */}
              <div className="hero-mobile-visual">
                <picture>
                  <source srcSet="images/hero-mobile/aula-experimental-gratis.webp" type="image/webp" />
                  <img src="images/hero-mobile/aula-experimental-gratis.png" alt="Aula experimental gratuita na Oficina Belas Artes" className="hero-img-mobile" style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} width="400" height="600" loading="eager" fetchPriority="high" />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className={`hero-slide ${current === 1 ? "active" : ""}`}>
          <div className="container hero-container">
            <div className="hero-text">
              <div className="hero-tagline animate-text delay-1">
                <span className="icon">✏️</span>
                <span>Explore seu potencial criativo</span>
              </div>
              <h2 className="animate-text delay-2">Descubra seu <br />próprio <span className="highlight">traço.</span></h2>
              <p className="animate-text delay-3">Do Mangá ao Realismo, nossos mentores guiam você em cada etapa. Aqui, cada erro é um aprendizado e cada traço é uma conquista.</p>
              <div className="hero-ctas animate-text delay-4">
                <a href="#cursos" className="btn btn-hero-glass">
                  <span>Conhecer Cursos</span>
                  <i className="fas fa-paint-brush"></i>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-desktop-visual">
                <div className="hero-mural" data-speed="0.05">
                  <div className="mural-item p1" style={{ top: "15%", right: "15%", transform: "rotate(-5deg)" }}></div>
                  <div className="mural-item p2" style={{ bottom: "20%", left: "5%", transform: "rotate(8deg)" }}></div>
                </div>
                <picture>
                  <source srcSet="images/hero-desktop/arty-5.webp" type="image/webp" />
                  <img src="images/hero-desktop/arty-5.png" alt="Mascote Arty explorando sua criatividade" className="arty-float animate-visual" loading="lazy" width="480" height="480" />
                </picture>
                <div className="float-element element-1 glass animate-float delay-3" style={{ top: "20%", left: "0" }}>
                  <i className="fas fa-shapes"></i>
                  <span>Fundamentos</span>
                </div>
              </div>

              <div className="hero-mobile-visual">
                <picture>
                  <source srcSet="images/hero-mobile/nossos-cursos.webp" type="image/webp" />
                  <img src="images/hero-mobile/nossos-cursos.png" alt="Cursos de artes na Oficina Belas Artes" className="hero-img-mobile" style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} width="400" height="600" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className={`hero-slide ${current === 2 ? "active" : ""}`}>
          <div className="container hero-container">
            <div className="hero-text">
              <div className="hero-tagline animate-text delay-1">
                <span className="icon">🤝</span>
                <span>Faça parte da nossa comunidade</span>
              </div>
              <h2 className="animate-text delay-2">Um espaço para <br /><span className="highlight">criar</span> e pertencer.</h2>
              <p className="animate-text delay-3">A arte conecta pessoas. Junte-se a uma turma vibrante, apaixonada e pronta para compartilhar inspirações.</p>
              <div className="hero-ctas animate-text delay-4">
                <a href="#localizacao" className="btn btn-hero-glass">
                  <span>Visitar Unidade</span>
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-desktop-visual">
                <picture>
                  <source srcSet="images/hero-desktop/arty-3.webp" type="image/webp" />
                  <img src="images/hero-desktop/arty-3.png" alt="Mascote Arty representando a comunidade da Oficina Belas Artes" className="arty-float animate-visual" loading="lazy" decoding="async" width="480" height="480" />
                </picture>
                <div className="float-element element-2 glass animate-float delay-3" style={{ bottom: "30%", right: "0" }}>
                  <i className="fas fa-heart"></i>
                  <span>Amizade & Arte</span>
                </div>
              </div>
              <div className="hero-mobile-visual">
                <picture>
                  <source srcSet="images/hero-mobile/arty-3.webp" type="image/webp" />
                  <img src="images/hero-mobile/arty-3.png" alt="Mascote Arty da comunidade OBA" className="hero-img-mobile" style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }} width="400" height="600" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button onClick={prevSlide} className="slider-arrow prev-slide" aria-label="Ir para slide anterior" title="Slide Anterior"><i className="fas fa-chevron-left" aria-hidden="true"></i></button>
      <button onClick={nextSlide} className="slider-arrow next-slide" aria-label="Ir para próximo slide" title="Próximo Slide"><i className="fas fa-chevron-right" aria-hidden="true"></i></button>

      {/* Indicators */}
      <div className="slider-dots">
        <span className={`dot ${current === 0 ? "active" : ""}`} onClick={() => setCurrent(0)} role="button" tabIndex={0} aria-label="Ir para o slide 1"></span>
        <span className={`dot ${current === 1 ? "active" : ""}`} onClick={() => setCurrent(1)} role="button" tabIndex={0} aria-label="Ir para o slide 2"></span>
        <span className={`dot ${current === 2 ? "active" : ""}`} onClick={() => setCurrent(2)} role="button" tabIndex={0} aria-label="Ir para o slide 3"></span>
      </div>

      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
