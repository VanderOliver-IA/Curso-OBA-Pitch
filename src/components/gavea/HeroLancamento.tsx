export function HeroLancamento() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-oba-brown text-white">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-oba-teal to-oba-brown" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texto Principal */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-oba-yellow text-oba-brown font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-wider animate-bounce">
              Vagas Limitadas para Turma Fundadora
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white font-fredoka">
              A OBA chegou à Gávea.<br/>
              <span className="text-oba-yellow">Faça parte da Turma Fundadora.</span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              A nova unidade da Oficina Belas Artes inaugura no dia <strong>01 de junho</strong>, dentro do <strong>Shopping da Gávea</strong>, trazendo cursos de desenho e pintura para crianças, adolescentes, jovens e adultos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#agendamento" className="btn btn-primary text-lg px-8 py-4 bg-oba-teal hover:bg-teal-600 text-white rounded-full transition-all transform hover:scale-105 font-bold shadow-lg">
                Quero agendar minha aula grátis
              </a>
              <a href="https://wa.me/5521974643331?text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20Turma%20Fundadora%20da%20OBA%20G%C3%A1vea%20e%20agendar%20uma%20aula%20experimental." target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg px-8 py-4 bg-white text-oba-brown hover:bg-gray-100 rounded-full transition-all font-bold shadow-lg flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
                Falar com a OBA Gávea
              </a>
            </div>
          </div>

          {/* Imagem / Arty */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* O ideal seria usar uma imagem de alta resolução da Arty aqui */}
              <img 
                src="/images/arty-1.png" 
                alt="Arty - Mascote OBA Gávea" 
                className="w-full h-auto drop-shadow-2xl relative z-10"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-oba-teal rounded-full opacity-20 blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ondas SVG (Divisor) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-24 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,114.41,192.27,98.6,236.4,87.05,279.52,70.92,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
