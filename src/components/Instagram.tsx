export function Instagram() {
  return (
    <section className="instagram section-padding">
      <div className="divider divider-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,60 C1050,90 900,30 750,60 C600,90 450,30 300,60 C150,90 0,60 0,60 Z" className="fill-teal"></path>
          <path d="M0,120 L1200,120 L1200,70 C1050,100 900,40 750,70 C600,100 450,40 300,70 C150,100 0,70 0,70 Z" className="fill-teal layer-2"></path>
          <path d="M0,120 L1200,120 L1200,80 C1050,110 900,50 750,80 C600,110 450,50 300,80 C150,110 0,80 0,80 Z" className="fill-teal layer-3"></path>
        </svg>
      </div>
      <div className="container">
        <div className="insta-header reveal">
          <i className="fab fa-instagram"></i>
          <h2>Veja a <span className="highlight-yellow">OBA</span> em ação</h2>
          <p>Arte que acontece agora. Siga <a href="https://instagram.com/oba.meier" target="_blank" rel="noopener noreferrer" className="insta-link">@oba.meier</a></p>
        </div>

        <div className="insta-grid reveal">
          <script src="https://snapwidget.com/js/snapwidget.js" async></script>
          <iframe 
            src="https://snapwidget.com/embed/1117800" 
            className="snapwidget-widget" 
            allowTransparency={true} 
            frameBorder="0" 
            scrolling="no" 
            style={{ border: "none", overflow: "hidden", width: "100%", height: "400px" }} 
            title="Posts from Instagram"
          ></iframe>
        </div>

        <div className="insta-cta reveal">
          <a href="https://instagram.com/oba.meier" target="_blank" rel="noopener noreferrer" className="btn btn-yellow">
            Ver Perfil Completo
          </a>
        </div>
      </div>
    </section>
  );
}
