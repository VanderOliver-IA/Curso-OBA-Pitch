"use client";

export function Purpose() {
  return (
    <section id="proposito" className="purpose section-padding parallax-section">
      <div className="divider divider-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,60 C1050,90 900,30 750,60 C600,90 450,30 300,60 C150,90 0,60 0,60 Z" className="fill-yellow"></path>
          <path d="M0,120 L1200,120 L1200,70 C1050,100 900,40 750,70 C600,100 450,40 300,70 C150,100 0,70 0,70 Z" className="fill-yellow layer-2"></path>
          <path d="M0,120 L1200,120 L1200,80 C1050,110 900,50 750,80 C600,110 450,50 300,80 C150,110 0,80 0,80 Z" className="fill-yellow layer-3"></path>
        </svg>
      </div>
      <div className="parallax-bg" style={{ background: "radial-gradient(circle at 20% 20%, rgba(30,202,211,0.05) 0%, transparent 50%)" }} data-parallax-speed="0.05"></div>
      <div className="container">
        <div className="section-header reveal reveal-up">
          <h2>A arte não é <span className="highlight-contrast">só técnica</span>.<br />É <span className="highlight-contrast">expressão</span>, equilíbrio e <span className="highlight-contrast">pertencimento</span>.</h2>
          <p>Muitos acham que precisam de "dom". Nós provamos o contrário todos os dias.</p>
        </div>

        <div className="purpose-grid">
          {/* Card 1 */}
          <div className="purpose-card glass reveal reveal-up delay-1">
            <div className="icon-wrapper color-1">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Criatividade</h3>
            <p>Desbloqueie sua mente para novas soluções e ideias inovadoras.</p>
          </div>

          {/* Card 2 */}
          <div className="purpose-card glass reveal reveal-up delay-2">
            <div className="icon-wrapper color-2">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Técnica</h3>
            <p>Domine os fundamentos para executar qualquer visão com precisão.</p>
          </div>

          {/* Card 3 */}
          <div className="purpose-card glass reveal reveal-up delay-3">
            <div className="icon-wrapper color-3">
              <i className="fas fa-star"></i>
            </div>
            <h3>Maestria</h3>
            <p>Alcance a excelência e faça suas obras brilharem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
