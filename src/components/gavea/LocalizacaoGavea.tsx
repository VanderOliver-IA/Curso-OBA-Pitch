"use client";

export function LocalizacaoGavea() {
  const handleMapClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'click_google_maps' });
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Texto / Infos */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold font-fredoka text-oba-brown mb-6">
              A OBA Gávea fica dentro do Shopping da Gávea
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Um espaço criativo em uma localização prática, segura e acessível para quem mora, estuda ou circula pela Gávea e região.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <i className="fa-solid fa-location-dot text-oba-teal text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-900">Endereço Completo</h4>
                  <p className="text-gray-600 mt-1">
                    Marquês de São Vicente, 52<br/>
                    <strong>Loja N14 (2º Piso)</strong><br/>
                    Gávea, Rio de Janeiro — RJ<br/>
                    CEP: 22451-040
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://maps.app.goo.gl/n2771CpQLBE8hQsG8" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleMapClick}
                className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 shadow-md transition-colors"
              >
                <i className="fa-solid fa-map-location-dot"></i>
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:w-2/3 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] border-4 border-white bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3087093258525!2d-43.23073712530232!3d-22.975660879206263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd50bb0029db5%3A0xe5a3c0c058774fdb!2sShopping%20da%20G%C3%A1vea!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Mapa de Localização OBA Gávea"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
