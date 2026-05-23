export function ProvasSociais() {
  const depoimentos = [
    {
      texto: "Meu filho começou sem confiança e hoje ama mostrar os desenhos que faz na OBA. A evolução dele é visível a cada semana.",
      autor: "Mãe de aluno OBA",
      icone: "fa-user-group"
    },
    {
      texto: "Eu achava que não conseguiria desenhar, mas a metodologia me ajudou a evoluir passo a passo. Os professores são incríveis.",
      autor: "Aluno OBA",
      icone: "fa-face-smile"
    }
  ];

  // Placeholder para a galeria (usaremos algumas imagens abstratas por enquanto)
  const galeria = [
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-fredoka text-oba-brown mb-6">Uma nova unidade. A mesma metodologia que já transforma alunos.</h2>
          <p className="text-lg text-gray-600">
            A OBA Gávea carrega a mesma essência que já ajudou centenas de alunos a descobrirem seu potencial criativo no Rio de Janeiro.
          </p>
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {depoimentos.map((dep, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="w-12 h-12 bg-oba-teal/10 rounded-full flex items-center justify-center text-oba-teal text-xl absolute top-8 left-8">
                <i className={`fa-solid ${dep.icone}`}></i>
              </div>
              <p className="text-gray-700 italic text-lg pl-16 mb-6">"{dep.texto}"</p>
              <div className="pl-16">
                <p className="font-bold text-oba-brown">— {dep.autor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Galeria Simples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galeria.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-md group">
              <img 
                src={img} 
                alt="Trabalho de Aluno OBA" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
