"use client";

import { useState } from "react";
import { siteData } from "@/data/site-institutional";

export function Schedule() {
  const [unit, setUnit] = useState<"meier" | "tijuca" | "gavea">("meier");

  return (
    <section id="horarios" className="schedule section-padding">
      <div className="divider divider-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,60 C1050,90 900,30 750,60 C600,90 450,30 300,60 C150,90 0,60 0,60 Z" className="fill-beige"></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-header reveal reveal-up">
          <span className="section-tag">Agenda</span>
          <div className="schedule-title-img reveal-up delay-1" style={{ display: "flex", justifyContent: "center" }}>
            <img 
              src="images/escolhaseuhorario.png" 
              alt="Escolha seu Horário" 
              style={{ maxWidth: "525px", width: "100%", height: "auto", position: "relative", zIndex: 1 }} 
              className="parallax-img" 
              data-speed="0.03" 
            />
          </div>
        </div>

        {/* UNIT TOGGLE BUTTONS */}
        <div className="plans-toggle-container reveal reveal-up" style={{ marginTop: "20px" }}>
          <div className="plans-toggle">
            <button 
              className={`toggle-btn ${unit === "meier" ? "active" : ""}`} 
              onClick={() => setUnit("meier")}
            >
              Unidade Méier
            </button>
            <button 
              className={`toggle-btn ${unit === "tijuca" ? "active" : ""}`} 
              onClick={() => setUnit("tijuca")}
            >
              Unidade Tijuca
            </button>
            <button 
              className={`toggle-btn ${unit === "gavea" ? "active" : ""}`} 
              onClick={() => setUnit("gavea")}
            >
              Unidade Gávea
            </button>
          </div>
        </div>

        <div className="schedule-container reveal reveal-up delay-1" style={{ marginTop: "10px" }}>
          <div id={`schedule-${unit}`} className="schedule-grid">
            {siteData.horarios[unit].map((daySchedule, idx) => (
              <div key={idx} className="schedule-day">
                <div 
                  className="day-header" 
                  style={daySchedule.day === "Sábado" || daySchedule.day === "Domingo" ? { background: "var(--yellow-primary)", color: "var(--graphite)" } : undefined}
                >
                  {daySchedule.day}
                </div>
                {daySchedule.slots.map((slot, sIdx) => (
                  <div key={sIdx} className={`time-slot ${slot === "-" ? "empty" : ""}`}>
                    {slot}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }} className="reveal reveal-up">
          <img src="images/hero-desktop/arty-2.png" alt="Arty" width="120" style={{ display: "inline-block" }} />
        </div>
      </div>
    </section>
  );
}
