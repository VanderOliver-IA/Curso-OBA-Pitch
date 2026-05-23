export function TurmaFundadora() {
  const beneficios = [
    "Matrícula zero para os primeiros inscritos.",
    "Prioridade na escolha dos horários.",
    "Aula experimental gratuita.",
    "Acesso antecipado às informações da unidade.",
    "Experiência de boas-vindas exclusiva.",
    "Possibilidade de fazer parte do início da comunidade OBA Gávea."
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Lado Esquerdo - Destacado */}
          <div className="md:w-2/5 bg-oba-teal text-white p-10 flex flex-col justify-center">
            <i className="fa-solid fa-crown text-5xl text-oba-yellow mb-6"></i>
            <h2 className="text-3xl font-bold font-fredoka mb-4">Entre para a primeira turma da OBA Gávea</h2>
            <p className="text-gray-100 text-lg">
              Os primeiros alunos da nova unidade terão acesso a uma condição especial de lançamento para começar essa história junto com a OBA.
            </p>
          </div>
          
          {/* Lado Direito - Benefícios */}
          <div className="md:w-3/5 p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-oba-brown mb-6">Benefícios Exclusivos:</h3>
            <ul className="space-y-4 mb-8">
              {beneficios.map((beneficio, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-oba-teal mt-1 text-lg"></i>
                  <span className="text-gray-700">{beneficio}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 italic mb-6">
              * As condições da Turma Fundadora são válidas para as primeiras vagas da unidade Gávea.
            </p>
            <a href="#agendamento" className="btn btn-primary bg-oba-yellow text-oba-brown hover:bg-yellow-500 self-start text-lg px-8 py-3 rounded-full font-bold shadow-md transition-transform hover:scale-105">
              Quero fazer parte da Turma Fundadora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
