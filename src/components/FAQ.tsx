"use client";

import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "Preciso saber desenhar para começar?", a: "Não. A OBA trabalha com uma metodologia inclusiva, pensada para iniciantes e também para quem já desenha. O aprendizado acontece no ritmo de cada aluno." },
    { q: "A partir de que idade posso me matricular?", a: "Temos cursos a partir dos 6 anos e outros indicados a partir dos 12 anos, dependendo do curso escolhido." },
    { q: "Como funcionam as aulas?", a: "As aulas são presenciais, práticas e com acompanhamento individual dos professores." },
    { q: "Qual é a duração dos cursos?", a: "Os cursos possuem carga horária definida e funcionam de forma contínua, do básico ao avançado." },
    { q: "Posso fazer mais de um curso ao mesmo tempo?", a: "Sim. É possível combinar cursos de acordo com seus objetivos." },
    { q: "Os cursos servem para quem quer trabalhar com arte?", a: "Sim. Além do hobby, os cursos desenvolvem base técnica e portfólio." },
    { q: "O material está incluso?", a: "Alguns cursos possuem apostilas exclusivas. Os detalhes são explicados na aula experimental." },
    { q: "E se eu faltar a uma aula?", a: "É necessário avisar com pelo menos 24 horas de antecedência para não perder o crédito." },
    { q: "Onde ficam as unidades da OBA?", a: "A OBA possui unidades no Méier e na Tijuca, no Rio de Janeiro." },
    { q: "Como funciona a aula experimental gratuita?", a: "A aula experimental é gratuita, sem compromisso, e serve para conhecer a escola e a metodologia." },
  ];

  return (
    <section id="faq" className="faq section-padding">
      {/* Wave Divider */}
      <div className="wave-container normal-orient">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L1200,0 L1200,60 C1050,90 900,30 750,60 C600,90 450,30 300,60 C150,90 0,60 0,60 Z" className="wave-fill-cyan"></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-header reveal reveal-up">
          <span className="section-tag">Dúvidas Frequentes</span>
          <h2>Perguntas & Respostas</h2>
          <p>Tudo o que você precisa saber antes de vir para a OBA.</p>
        </div>

        <div className="faq-grid reveal reveal-up delay-1">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
              <button className="faq-toggle" onClick={() => toggleFaq(index)}>
                <span>{faq.q}</span>
                <i className={`fas fa-${openIndex === index ? "minus" : "plus"}`}></i>
              </button>
              <div className="faq-content" style={{ maxHeight: openIndex === index ? "200px" : "0px", padding: openIndex === index ? "20px 24px" : "0 24px" }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}

          {/* Special Question 11 */}
          <div className={`faq-item special-faq ${openIndex === 10 ? "active" : ""}`}>
            <button className="faq-toggle" onClick={() => toggleFaq(10)}>
              <span><i className="far fa-comment-dots"></i> Ainda tenho dúvida</span>
              <i className={`fas fa-${openIndex === 10 ? "minus" : "plus"}`}></i>
            </button>
            <div className="faq-content" style={{ maxHeight: openIndex === 10 ? "200px" : "0px", padding: openIndex === 10 ? "20px 24px" : "0 24px" }}>
              <div className="faq-form-wrapper">
                <p>Mande sua pergunta pra gente! Respondemos rapidinho.</p>
                <div className="faq-form">
                  <input type="text" id="faq-question-input" placeholder="Escreva sua dúvida aqui..." className="input-field-sm" />
                  <div className="faq-actions">
                    <button className="btn btn-sm btn-whatsapp">
                      <i className="fab fa-whatsapp"></i> Enviar no Zap
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
