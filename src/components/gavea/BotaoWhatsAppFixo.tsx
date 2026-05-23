"use client";

import { useEffect, useState } from "react";

export function BotaoWhatsAppFixo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão apenas quando rolar um pouco a página (evita conflito visual no hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'click_whatsapp' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
    >
      <a 
        href="https://wa.me/5521974643331?text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20Turma%20Fundadora%20da%20OBA%20G%C3%A1vea%20e%20agendar%20uma%20aula%20experimental." 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] transition-all hover:scale-110 relative group"
        aria-label="Fale conosco no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-4xl"></i>
        
        {/* Tooltip Hover */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale com a OBA Gávea
        </span>
        
        {/* Pulsing effect */}
        <span className="absolute w-full h-full bg-[#25D366] rounded-full opacity-50 animate-ping z-[-1]"></span>
      </a>
    </div>
  );
}
