"use client";

export function ApresentacaoGavea() {
  const pontos = [
    "Dentro do Shopping da Gávea.",
    "Fácil acesso e segurança.",
    "Ambiente totalmente criativo.",
    "Cursos para diferentes idades.",
    "Metodologia inclusiva.",
    "Professores especialistas."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagem */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Fallback caso não tenha imagem do shopping, usa uma cor ou imagem abstrata */}
              <div className="aspect-video bg-gray-200 w-full h-full relative">
                <img 
                  src="/images/unidades.jpg" 
                  alt="Shopping da Gávea" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-oba-teal opacity-20"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-oba-brown flex items-center gap-2">
                  <i className="fa-solid fa-map-pin text-oba-teal"></i>
                  Loja N14 - 2º Piso
                </div>
              </div>
            </div>
          </div>
          
          {/* Texto */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold font-fredoka text-oba-brown mb-6">
              Um novo espaço criativo no coração da Gávea
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A OBA Gávea nasce para aproximar a arte de quem mora, estuda ou circula pela Zona Sul. Um espaço pensado para quem sempre quis aprender a desenhar, evoluir sua técnica ou encontrar uma atividade criativa, acolhedora e transformadora.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pontos.map((ponto, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-oba-yellow/20 flex items-center justify-center text-oba-yellow shrink-0">
                    <i className="fa-solid fa-star text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-700">{ponto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
