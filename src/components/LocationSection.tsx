"use client";

import { useState } from "react";
import { siteData } from "@/data/site-institutional";

export function LocationSection() {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("Agendar Aula Experimental");
  const [message, setMessage] = useState("");

  const unit = selectedUnit !== null ? siteData.unidades[selectedUnit] : null;

  const handleSelectUnit = (index: number) => {
    setSelectedUnit(index);
    // Scroll suave ao formulário no mobile
    const form = document.getElementById("contact-form");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const buildWhatsAppMessage = () => {
    const unitName = unit?.name ?? "uma unidade";
    const courseTxt = course ? ` sobre ${course}` : "";
    const msgTxt = message ? `\n\n💬 Mensagem: ${message}` : "";
    return encodeURIComponent(
      `Olá! Sou ${name || "um interessado"} e tenho interesse${courseTxt} na OBA ${unitName}.${msgTxt}\n\nMeu WhatsApp: ${phone}`
    );
  };

  const handleWhatsApp = () => {
    if (!unit) return;
    const text = buildWhatsAppMessage();
    window.open(`https://wa.me/${unit.whatsappLink}?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    if (!unit) return;
    const courseTxt = course ? ` - ${course}` : "";
    const subject = encodeURIComponent(`Contato via Site${courseTxt}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nWhatsApp: ${phone}\nInteresse: ${course || "Geral"}\n\n${message}`
    );
    window.open(`mailto:${unit.email}?subject=${subject}&body=${body}`, "_blank");
  };

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

          {/* LEFT — Cards de Unidades */}
          <div className="loc-info reveal">
            <h2>Sua <span className="highlight-yellow">arte</span> começa <span className="highlight-yellow">aqui</span>.</h2>
            <p>Escolha a unidade mais perto de você e venha tomar um café com a gente.</p>

            {siteData.unidades.map((unit, index) => (
              <div
                key={index}
                className={`unit-block glass ${selectedUnit === index ? "unit-block--active" : ""}`}
              >
                <h3>📍 {unit.name}</h3>
                <p>
                  <strong>{unit.address1}</strong><br />
                  {unit.address2}<br />
                  {unit.cep}
                </p>

                {/* Linha de WhatsApp + botão "Fale com OBA" */}
                <div className="unit-contact-row">
                  <p className="unit-phone" style={{ margin: 0 }}>
                    <a
                      href={`https://wa.me/${unit.whatsappLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit" }}
                    >
                      <i className="fab fa-whatsapp"></i> {unit.whatsapp}
                    </a>
                  </p>
                  <a
                    href={`https://wa.me/${unit.whatsappLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fale-oba"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Fale com OBA {unit.name === "Shopping da Gávea" ? "Gávea" : unit.name}
                  </a>
                </div>

                <div className="unit-actions-row">
                  <a href={unit.map} target="_blank" rel="noopener noreferrer" className="btn-sm btn-yellow">
                    Como chegar
                  </a>
                  <button
                    type="button"
                    className={`btn-sm btn-select-unit ${selectedUnit === index ? "btn-select-unit--active" : ""}`}
                    onClick={() => handleSelectUnit(index)}
                  >
                    {selectedUnit === index ? "✔ Unidade selecionada" : "Selecionar para contato"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Formulário */}
          <div className="loc-form-col reveal">
            <div className="loc-form-wrapper glass">
              <h3>Fale com a gente</h3>
              <p>Tire suas dúvidas ou agende sua visita agora mesmo.</p>

              {/* Seletor de Unidade */}
              <div className="form-group unit-selector-group">
                <label className="unit-selector-label">
                  <i className="fas fa-map-marker-alt"></i> Escolha sua unidade
                </label>
                <div className="unit-selector-tabs">
                  {siteData.unidades.map((u, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`unit-tab ${selectedUnit === index ? "unit-tab--active" : ""}`}
                      onClick={() => setSelectedUnit(index)}
                    >
                      {u.name === "Shopping da Gávea" ? "Gávea" : u.name}
                    </button>
                  ))}
                </div>
                {selectedUnit !== null && (
                  <div className="unit-selected-badge">
                    <i className="fab fa-whatsapp"></i>
                    <span>{siteData.unidades[selectedUnit].whatsapp}</span>
                    <span className="unit-badge-dot">•</span>
                    <i className="fas fa-envelope"></i>
                    <span>{siteData.unidades[selectedUnit].email}</span>
                  </div>
                )}
              </div>

              <form id="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    placeholder="Seu Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    className="input-field"
                    placeholder="Seu WhatsApp (com DDD)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    id="course"
                    className="input-field"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    <option value="" disabled>Tenho interesse em...</option>
                    <option value="Agendar Aula Experimental">Agendar Aula Experimental</option>
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
                  <textarea
                    id="message"
                    className="input-field"
                    rows={3}
                    placeholder="Sua mensagem..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className={`btn btn-whatsapp ${!selectedUnit && selectedUnit !== 0 ? "btn-disabled" : ""}`}
                    onClick={handleWhatsApp}
                    disabled={selectedUnit === null}
                    title={selectedUnit === null ? "Selecione uma unidade primeiro" : ""}
                  >
                    <i className="fab fa-whatsapp"></i>
                    {selectedUnit !== null
                      ? `Enviar para OBA ${siteData.unidades[selectedUnit].name === "Shopping da Gávea" ? "Gávea" : siteData.unidades[selectedUnit].name} via WhatsApp`
                      : "Enviar por WhatsApp"}
                  </button>
                  <button
                    type="button"
                    className={`btn btn-email ${!selectedUnit && selectedUnit !== 0 ? "btn-disabled" : ""}`}
                    onClick={handleEmail}
                    disabled={selectedUnit === null}
                    title={selectedUnit === null ? "Selecione uma unidade primeiro" : ""}
                  >
                    <i className="fas fa-envelope"></i>
                    {selectedUnit !== null
                      ? `Enviar E-mail para OBA ${siteData.unidades[selectedUnit].name === "Shopping da Gávea" ? "Gávea" : siteData.unidades[selectedUnit].name}`
                      : "Enviar por E-mail"}
                  </button>
                  {selectedUnit === null && (
                    <p className="form-hint">
                      <i className="fas fa-info-circle"></i> Selecione uma unidade acima para enviar sua mensagem
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
