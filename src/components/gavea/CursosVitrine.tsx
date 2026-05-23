export function CursosVitrine() {
  const cursos = [
    {
      titulo: "Mangá",
      descricao: "Para quem ama animes, cultura geek, personagens e estilo japonês.",
      icone: "fa-pencil"
    },
    {
      titulo: "Cartoon & HQ",
      descricao: "Para criar personagens, histórias em quadrinhos e narrativas visuais.",
      icone: "fa-book-open"
    },
    {
      titulo: "Desenho Realista",
      descricao: "Para desenvolver técnica, luz, sombra, textura e proporção.",
      icone: "fa-eye"
    },
    {
      titulo: "Pintura em Tela",
      descricao: "Para explorar cor, composição e expressão artística.",
      icone: "fa-palette"
    },
    {
      titulo: "Moda",
      descricao: "Para quem quer desenvolver croquis, estilo e criação visual.",
      icone: "fa-shirt"
    },
    {
      titulo: "Cenário & Ambientação",
      descricao: "Para quem busca aprofundar composição, perspectiva e espaços.",
      icone: "fa-building"
    },
    {
      titulo: "Comunicação Visual",
      descricao: "Para aplicações artísticas com olhar criativo e comercial.",
      icone: "fa-bullhorn"
    }
  ];

  return (
    <section className="py-24 bg-oba-teal text-white relative">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-fredoka mb-6">Escolha seu caminho artístico</h2>
          <p className="text-xl text-teal-100">
            Na OBA, cada aluno evolui no seu ritmo. Seja para desenhar personagens, criar histórias, desenvolver técnica realista, pintar telas ou explorar novas possibilidades criativas, existe um curso para começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cursos.map((curso, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all cursor-default group">
              <div className="w-14 h-14 rounded-full bg-oba-yellow text-oba-brown flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${curso.icone}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{curso.titulo}</h3>
              <p className="text-teal-100 leading-relaxed text-sm">
                {curso.descricao}
              </p>
            </div>
          ))}
          
          <div className="bg-oba-yellow text-oba-brown p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg transform transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-4 font-fredoka">Não sabe qual escolher?</h3>
            <p className="mb-6 font-medium">A aula experimental te ajuda a descobrir.</p>
            <a href="#agendamento" className="btn bg-oba-brown text-white hover:bg-gray-900 px-6 py-2 rounded-full font-bold w-full">
              Descobrir meu curso
            </a>
          </div>
        </div>
      </div>

      {/* SVG Divider Inferior (Onda Branca para conectar com a próxima seção) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-24 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,114.41,192.27,98.6,236.4,87.05,279.52,70.92,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
