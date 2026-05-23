export function CTAFinal() {
  return (
    <section className="py-24 relative overflow-hidden bg-oba-teal text-white text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-tr from-oba-brown to-oba-teal rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold font-fredoka mb-8 leading-tight">
          Faça parte da primeira turma da <span className="text-oba-yellow">OBA Gávea</span>
        </h2>
        <p className="text-xl text-teal-50 mb-10">
          As vagas para a Turma Fundadora são limitadas. Agende sua aula experimental gratuita agora e garanta sua matrícula com condições especiais de lançamento.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#agendamento" className="btn btn-primary bg-oba-yellow text-oba-brown hover:bg-yellow-500 font-bold px-10 py-5 rounded-full text-xl shadow-2xl transition-transform hover:-translate-y-1 w-full sm:w-auto">
            Quero agendar minha aula grátis
          </a>
          <a 
            href="https://wa.me/5521974643331?text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20Turma%20Fundadora%20da%20OBA%20G%C3%A1vea%20e%20agendar%20uma%20aula%20experimental." 
            target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-oba-yellow font-bold text-lg flex items-center gap-2 underline underline-offset-4"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-20 pointer-events-none w-64 lg:w-96">
        <img src="/images/arty-3.png" alt="Arty Decorativa" className="w-full h-auto" />
      </div>
    </section>
  );
}
