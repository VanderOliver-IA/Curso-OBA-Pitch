import { siteData } from "@/data/site-institutional";

export function LocationSection() {
  return (
    <section id="localizacao" className="location section-padding">
      {/* Wave Divider */}
      <div className="wave-container normal-orient">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L1200,0 L1200,60 C1050,90 900,30 750,60 C600,90 450,30 300,60 C150,90 0,60 0,60 Z" className="wave-fill-beige"></path>
        </svg>
      </div>

      <div className="container">
        <div className="split-layout reverse-mobile">
          <div className="loc-info reveal">
            <h2>Sua <span className="highlight-yellow">arte</span> começa <span className="highlight-yellow">aqui</span>.</h2>
            <p>Escolha a unidade mais perto de você e venha tomar um café com a gente.</p>

            {siteData.unidades.map((unit, index) => (
              <div key={index} className="unit-block glass">
                <h3>📍 {unit.name}</h3>
                <p><strong>{unit.address1}</strong><br />{unit.address2}<br />{unit.cep}</p>
                <p className="unit-phone">
                  <a href={`https://wa.me/${unit.whatsappLink}`} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    <i className="fab fa-whatsapp"></i> {unit.whatsapp}
                  </a>
                </p>
                <a href={unit.map} target="_blank" rel="noopener noreferrer" className="btn-sm btn-yellow">Como chegar</a>
              </div>
            ))}
          </div>

          <div className="loc-form-col reveal">
            <div className="loc-form-wrapper glass">
              <h3>Fale com a gente</h3>
              <p>Tire suas dúvidas ou agende sua visita agora mesmo.</p>

              <form id="contact-form">
                <div className="form-group">
                  <input type="text" id="name" className="input-field" placeholder="Seu Nome" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" className="input-field" placeholder="Seu WhatsApp (com DDD)" required />
                </div>
                <div className="form-group">
                  <select id="course" className="input-field" defaultValue="">
                    <option value="" disabled>Tenho interesse em...</option>
                    <option value="Arte Geral">Conhecer a Escola (Geral)</option>
                    <option value="Mangá">Mangá</option>
                    <option value="Desenho Realista">Desenho Realista</option>
                    <option value="Cartoon">Cartoon</option>
                    <option value="HQ">HQ</option>
                    <option value="Pintura em Tela">Pintura em Tela</option>
                    <option value="Moda">Moda</option>
                    <option value="Cenário">Cenário e Ambientação</option>
                    <option value="Comunicação Visual">Comunicação Visual</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea id="message" className="input-field" rows={3} placeholder="Sua mensagem..."></textarea>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-whatsapp">
                    <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
                  </button>
                  <button type="submit" className="btn btn-email">
                    <i className="fas fa-envelope"></i> Enviar por E-mail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
