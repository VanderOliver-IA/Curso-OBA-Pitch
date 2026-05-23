"use client";

import { useState, useRef, useEffect } from "react";

const steps = [
  { id: 1, name: "Descoberta", icon: "fa-search", desc: "Explore materiais e estilos para encontrar o que ressoa com você." },
  { id: 2, name: "Fundamentos", icon: "fa-pencil-ruler", desc: "Construção da base técnica. Anatomia, perspectiva e luz sem mitos ou bloqueios." },
  { id: 3, name: "Experimentação", icon: "fa-flask", desc: "Hora de testar. Misturar materiais, errar sem medo e descobrir novas texturas." },
  { id: 4, name: "Identidade", icon: "fa-fingerprint", desc: "Seu traço ganha vida própria. Você deixa de copiar e começa a expressar sua visão única." },
  { id: 5, name: "Maestria", icon: "fa-star", desc: "Domínio técnico aliado à liberdade criativa. Você está pronto para criar seu legado." }
];

export function Methodology() {
  const [currentStep, setCurrentStep] = useState(1);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const activeCard = scrollerRef.current.querySelector(`.step-${currentStep}`) as HTMLElement;
      if (activeCard) {
        const containerWidth = scrollerRef.current.offsetWidth;
        const cardOffset = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        
        scrollerRef.current.scrollTo({
          left: cardOffset - (containerWidth / 2) + (cardWidth / 2),
          behavior: "smooth"
        });
      }
    }
  }, [currentStep]);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <section id="metodologia" className="methodology section-padding">
      <div className="divider divider-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 V46.29 C0,46.29 236,120 600,120 C964,120 1200,46.29 1200,46.29 V0 Z" className="fill-yellow"></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-header reveal reveal-up">
          <span className="section-tag">NOSSA METODOLOGIA</span>
          <h2>Liberdade para <span className="highlight-yellow">criar</span>,<br />apoio para <span className="highlight-yellow">crescer</span>.</h2>
          <p>Aqui, você não é apenas mais um aluno copiando formas. Você percorre uma jornada única de descobertas.</p>
        </div>

        <div className="timeline-scroller reveal reveal-up delay-1" ref={scrollerRef}>
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`timeline-card step-${step.id} ${currentStep === step.id ? 'active' : ''}`} 
              data-step={step.id} 
              data-step-name={step.name}
              onClick={() => setCurrentStep(step.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-bg"></div>
              <div className="card-overlay"></div>
              <div className="step-number">0{step.id}</div>
              <div className="card-info">
                <i className={`fas ${step.icon}`}></i>
                <h3>{step.name}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls Below Cards */}
        <div className="timeline-navigation-controls">
          <button onClick={prevStep} disabled={currentStep === 1} className="timeline-nav prev-timeline" aria-label="Voltar etapa">
            <i className="fas fa-arrow-left"></i>
          </button>

          <div className="timeline-step-indicator">
            <span className="step-text">Etapa {currentStep}: {steps[currentStep - 1].name}</span>
            <div className="progress-line">
              <div className="progress" style={{ width: `${(currentStep / 5) * 100}%`, height: '100%', background: 'var(--yellow-primary)' }}></div>
            </div>
          </div>

          <button onClick={nextStep} disabled={currentStep === 5} className="timeline-nav next-timeline" aria-label="Avançar etapa">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
