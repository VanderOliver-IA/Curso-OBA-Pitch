"use client";

import { useState } from "react";

export function FAQAccordion() {
  const faqs = [
    {
      pergunta: "Precisa saber desenhar para começar?",
      resposta: "Não. A metodologia da OBA respeita o ritmo de cada aluno, desde iniciantes que nunca seguraram um lápis até quem já desenha e quer evoluir."
    },
    {
      pergunta: "A aula experimental é gratuita?",
      resposta: "Sim. A aula experimental é gratuita e serve para o aluno conhecer a metodologia, os professores, o espaço e identificar o curso ideal."
    },
    {
      pergunta: "Quais cursos estarão disponíveis na Gávea?",
      resposta: "A OBA oferece cursos como Mangá, Cartoon & HQ, Desenho Realista, Moda, Pintura em Tela, Comunicação Visual e Cenário & Ambientação."
    },
    {
      pergunta: "Onde fica a OBA Gávea?",
      resposta: "Nossa unidade fica dentro do Shopping da Gávea, na Marquês de São Vicente, 52 — Loja N14, com toda segurança e comodidade."
    },
    {
      pergunta: "Quando será a inauguração oficial?",
      resposta: "A inauguração da nova unidade OBA Gávea será no dia 01 de junho."
    },
    {
      pergunta: "Como faço para entrar na Turma Fundadora?",
      resposta: "Basta preencher o formulário nesta página ou chamar nossa unidade pelo WhatsApp para verificar a disponibilidade de vagas e agendar sua aula experimental."
    },
    {
      pergunta: "A OBA é só para crianças?",
      resposta: "Não. A Oficina Belas Artes atende com maestria crianças, adolescentes, jovens e adultos."
    },
    {
      pergunta: "Posso escolher o curso depois da aula experimental?",
      resposta: "Sim! A aula experimental serve exatamente para isso: ajuda a entender o perfil do aluno e indicar o melhor caminho artístico a seguir."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-fredoka text-oba-brown mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600 text-lg">Tudo o que você precisa saber sobre a nova unidade.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
              >
                <span className="font-bold text-lg text-oba-brown">{faq.pergunta}</span>
                <i className={`fa-solid fa-chevron-down text-oba-teal transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 bg-gray-50 text-gray-700 leading-relaxed border-t border-transparent">
                  {faq.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
