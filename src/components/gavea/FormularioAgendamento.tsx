"use client";

import { useState } from "react";

export function FormularioAgendamento() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    idade: "",
    curso: "",
    periodo: "",
    bairro: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dispara tracking GTM (se existir o datalayer globalmente)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'submit_form',
        curso_interesse: formData.curso
      });
    }

    // Formata a mensagem
    const mensagem = `Oi! Meu nome é *${formData.nome}*. Quero saber mais sobre a Turma Fundadora da OBA Gávea e agendar uma aula experimental.%0A%0A*Idade do aluno:* ${formData.idade}%0A*Curso de interesse:* ${formData.curso}%0A*Melhor período para contato:* ${formData.periodo}%0A*Bairro:* ${formData.bairro}`;
    
    // Redireciona para o WhatsApp
    const url = `https://wa.me/5521974643331?text=${mensagem}`;
    window.open(url, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="agendamento" className="py-24 bg-white relative">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-oba-teal text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <div className="md:w-5/12 p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-oba-brown opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold font-fredoka mb-6">Agende sua aula experimental gratuita na OBA Gávea</h2>
              <p className="text-teal-100 text-lg mb-8">
                Venha conhecer a metodologia, conversar com a equipe e descobrir qual curso combina mais com você ou com seu filho.
              </p>
              <div className="flex items-center gap-4 text-teal-100 mt-auto">
                <i className="fa-solid fa-lock"></i>
                <span className="text-sm">Seus dados estão seguros conosco.</span>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 bg-gray-50 p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-gray-800">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome do aluno ou responsável *</label>
                <input 
                  type="text" name="nome" required 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-oba-teal focus:ring focus:ring-oba-teal/20 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp *</label>
                  <input 
                    type="tel" name="whatsapp" required 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-oba-teal focus:ring focus:ring-oba-teal/20 outline-none transition-all"
                    placeholder="(21) 90000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Idade do aluno *</label>
                  <input 
                    type="text" name="idade" required 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-oba-teal focus:ring focus:ring-oba-teal/20 outline-none transition-all"
                    placeholder="Ex: 14 anos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Curso de interesse *</label>
                <select 
                  name="curso" required 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-oba-teal focus:ring focus:ring-oba-teal/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Mangá">Mangá</option>
                  <option value="Cartoon & HQ">Cartoon & HQ</option>
                  <option value="Desenho Realista">Desenho Realista</option>
                  <option value="Pintura em Tela">Pintura em Tela</option>
                  <option value="Moda">Moda</option>
                  <option value="Cenário & Ambientação">Cenário & Ambientação</option>
                  <option value="Comunicação Visual">Comunicação Visual</option>
                  <option value="Ainda não sei">Ainda não sei / Quero descobrir na aula</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Melhor período p/ contato *</label>
                  <select 
                    name="periodo" required 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-oba-teal focus:ring focus:ring-oba-teal/20 outline-none transition-all bg-white"
                  >
                    <option value="">Selecione</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                    <option value="Qualquer horário">Qualquer horário</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bairro de residência *</label>
                  <input 
                    type="text" name="bairro" required 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-oba-teal focus:ring focus:ring-oba-teal/20 outline-none transition-all"
                    placeholder="Ex: Gávea, Leblon..."
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-oba-yellow text-oba-brown hover:bg-yellow-500 font-bold text-lg py-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 mt-4">
                Quero minha aula experimental
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
