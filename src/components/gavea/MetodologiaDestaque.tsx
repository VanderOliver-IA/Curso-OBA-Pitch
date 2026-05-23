export function MetodologiaDestaque() {
  const pilares = [
    {
      titulo: "Método progressivo",
      descricao: "O aluno aprende passo a passo, com acompanhamento em cada etapa do desenho."
    },
    {
      titulo: "Respeito ao estilo individual",
      descricao: "Cada aluno é incentivado a desenvolver sua própria expressão visual."
    },
    {
      titulo: "Ambiente acolhedor",
      descricao: "A OBA valoriza a evolução pessoal de cada um, sem comparações irreais."
    },
    {
      titulo: "Professores especialistas",
      descricao: "Orientação técnica de forma acessível e didática para todas as idades."
    }
  ];

  return (
    <section className="py-24 bg-oba-brown text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-oba-yellow opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-oba-teal opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold font-fredoka mb-8 leading-tight">
              Você não precisa saber desenhar para começar
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Na OBA, cada aluno evolui no seu ritmo. Nossa metodologia acolhe desde quem nunca segurou um lápis até quem já desenha e quer aprimorar sua técnica. Aqui, a arte é construída com prática, orientação e liberdade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {pilares.map((pilar, idx) => (
                <div key={idx}>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-oba-yellow mb-4 border border-white/20">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{pilar.titulo}</h4>
                  <p className="text-sm text-gray-400">{pilar.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative max-w-md w-full text-center">
              <i className="fa-solid fa-quote-left text-5xl text-oba-yellow/30 absolute top-4 left-4"></i>
              <p className="text-2xl font-fredoka text-oba-yellow relative z-10 mt-6 mb-8 italic leading-relaxed">
                "O segredo não é nascer sabendo. É ter o método certo para evoluir."
              </p>
              
              <a href="#agendamento" className="btn w-full block bg-white text-oba-brown hover:bg-oba-yellow px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-colors">
                Agendar aula experimental
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* SVG Divider Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-24 fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,114.41,192.27,98.6,236.4,87.05,279.52,70.92,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
