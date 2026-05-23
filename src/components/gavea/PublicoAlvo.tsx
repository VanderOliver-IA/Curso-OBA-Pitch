export function PublicoAlvo() {
  const publicos = [
    {
      titulo: "Para crianças e adolescentes",
      descricao: "Uma atividade criativa que estimula foco, imaginação, autoestima e desenvolvimento artístico.",
      icone: "fa-child-reaching",
      cor: "bg-oba-yellow text-oba-brown"
    },
    {
      titulo: "Para jovens apaixonados por desenho",
      descricao: "Um espaço para evoluir no mangá, cartoon, realismo, personagens e técnicas visuais.",
      icone: "fa-masks-theater",
      cor: "bg-oba-teal text-white"
    },
    {
      titulo: "Para adultos",
      descricao: "Uma forma de sair da rotina, desenvolver um novo hobby e reconectar com a própria criatividade.",
      icone: "fa-user-tie",
      cor: "bg-orange-500 text-white"
    },
    {
      titulo: "Para quem quer se profissionalizar",
      descricao: "Base técnica, prática constante e orientação para evoluir com mais segurança.",
      icone: "fa-briefcase",
      cor: "bg-oba-brown text-white"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-fredoka text-oba-brown mb-6">A OBA é para quem quer criar, aprender e evoluir</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publicos.map((item, idx) => (
            <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-inner ${item.cor}`}>
                <i className={`fa-solid ${item.icone}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-oba-brown mb-3">{item.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#agendamento" className="btn btn-primary bg-oba-teal text-white hover:bg-teal-600 px-10 py-4 text-lg rounded-full font-bold shadow-xl transition-transform hover:scale-105">
            Agendar aula experimental
          </a>
        </div>
      </div>
    </section>
  );
}
