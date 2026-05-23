export function BarraDestaques() {
  const destaques = [
    {
      icone: "fa-calendar-check",
      titulo: "01 de junho",
      subtitulo: "Inauguração oficial",
      cor: "text-oba-teal"
    },
    {
      icone: "fa-location-dot",
      titulo: "Shopping da Gávea",
      subtitulo: "Loja N14",
      cor: "text-oba-yellow"
    },
    {
      icone: "fa-gift",
      titulo: "Aula Grátis",
      subtitulo: "Para conhecer a metodologia",
      cor: "text-orange-500"
    },
    {
      icone: "fa-star",
      titulo: "Turma Fundadora",
      subtitulo: "Condição especial",
      cor: "text-oba-brown"
    }
  ];

  return (
    <section className="bg-white py-8 relative z-30 -mt-12 sm:-mt-16 lg:-mt-24">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          {destaques.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full md:w-auto">
              <div className={`text-3xl lg:text-4xl ${item.cor}`}>
                <i className={`fa-solid ${item.icone}`}></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.titulo}</h3>
                <p className="text-gray-500 text-sm">{item.subtitulo}</p>
              </div>
              {/* Divisor vertical em telas grandes */}
              {idx < destaques.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-gray-200 ml-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
