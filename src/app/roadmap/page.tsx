"use client";
import { Sidebar } from "@/components/Sidebar";
import { FinancialChart } from "@/components/FinancialChart";
import { siteData } from "@/data/site-content";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen pl-64 bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-accent-teal/30 text-accent-teal text-[10px] font-bold tracking-widest uppercase mb-6 bg-accent-teal/5">
              • {siteData.hero.badge}
            </span>
            <h1 className="text-7xl font-bold text-white mb-2 leading-tight">
              OBA <span className="text-accent-teal">Online</span>
            </h1>
            <h2 className="text-3xl font-medium text-slate-300 mb-8 border-b-2 border-accent-gold w-fit pb-2">
              {siteData.hero.subtitle}
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl">
              {siteData.hero.description.split("plataforma digital escalável").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-accent-gold font-bold">plataforma digital escalável</span>}
                </span>
              ))}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {siteData.hero.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/50 border border-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-accent-teal mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="italic text-accent-gold text-xl font-medium opacity-80">
              "{siteData.hero.quote}"
            </p>
          </motion.div>
        </div>

        {/* Character Image */}
        <motion.div 
          className="absolute right-12 top-1/2 -translate-y-1/2 w-[500px] aspect-square flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/images/character.png" 
            alt="Personagem OBA Online" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(20,184,166,0.2)]"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </section>

      {/* Visão do Projeto */}
      <section id="visao" className="min-h-screen py-24 px-12 bg-slate-900/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            {siteData.visao.title}
          </h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-red-400" /> O Problema
              </h3>
              {siteData.visao.problem.map((item) => (
                <div key={item.id} className="p-6 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-red-400/20 transition-colors">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-accent-teal font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-accent-teal" /> A Solução
              </h3>
              {siteData.visao.solution.map((item) => (
                <div key={item.id} className="p-6 rounded-2xl bg-accent-teal/5 border border-accent-teal/10 hover:border-accent-teal/30 transition-colors">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Público-Alvo */}
      <section id="publico" className="min-h-screen py-24 px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Público-Alvo</h2>
          <div className="grid grid-cols-3 gap-8">
            {siteData.publico.personas.map((persona, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${persona.color} border border-white/10 backdrop-blur-md relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-6xl font-black">{persona.age}</div>
                </div>
                <div className="text-accent-teal font-bold text-xs tracking-widest uppercase mb-4">FAIXA {persona.age}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{persona.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{persona.target}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura Pedagógica */}
      <section id="estrutura" className="min-h-screen py-24 px-12 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Estrutura do Curso</h2>
          <div className="grid grid-cols-3 gap-8">
            {siteData.estrutura.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-black text-white/5 absolute -top-12 -left-4 leading-none select-none italic">
                  {step.level}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-accent-teal mb-6">{step.title}</h3>
                  <div className="space-y-3">
                    {step.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-accent-gold" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section id="negocio" className="min-h-screen py-24 px-12 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Modelo de Negócio</h2>
          <div className="space-y-4">
            {siteData.negocio.map((offer, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="p-8 rounded-2xl bg-card border border-white/5 flex items-center justify-between group hover:border-accent-teal/30 transition-all shadow-xl"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-teal transition-colors">{offer.item}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{offer.type}</span>
                  </div>
                </div>
                <div className="text-2xl font-black text-accent-gold">{offer.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funil de Vendas */}
      <section id="funil" className="min-h-screen py-24 px-12 bg-slate-900/50 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Estratégia de Vendas</h2>
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white mb-6">Pilar Perpétuo</h3>
              <div className="relative space-y-4">
                {["Anúncios (Meta/Google)", "Isca Digital (Ebook)", "Página de Vendas", "Checkout + Upsell"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-slate-300 font-medium">{step}</span>
                  </div>
                ))}
                <div className="absolute left-8 top-8 bottom-8 w-[1px] bg-accent-teal/20 -z-10" />
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-accent-teal/5 border border-accent-teal/10 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Picos de Faturamento</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Estratégia de lançamentos trimestrais seguindo o modelo de 4 dias de antecipação e 7 dias de carrinho aberto.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Semana do Desenho", "OBA Experience", "Desafio 7 Dias", "Black OBA"].map((tag, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financeiro */}
      <section id="financeiro" className="min-h-screen py-24 px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projeção Financeira</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Metas de faturamento e escala baseadas em investimento de tráfego pago e conversão orgânica.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            {siteData.financeiro.metrics.map((metric, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{metric.label}</h4>
                <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                <p className="text-slate-500 text-xs">{metric.description}</p>
              </div>
            ))}
          </div>
          
          <FinancialChart />
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="min-h-screen py-24 px-12 bg-slate-900/50 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Sócios e Liderança</h2>
          <div className="grid grid-cols-2 gap-12">
            {[
              { name: "Leonardo Carvalho", role: "Fundador & Marca", bio: "Responsável pela autoridade artística e técnica do conteúdo.", color: "accent-gold" },
              { name: "Vanderson Oliveira", role: "Estrategista Digital", bio: "Gestão operacional, tráfego e infraestrutura tecnológica.", color: "accent-teal" }
            ].map((member, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-white/5 group hover:border-white/10 transition-colors">
                <div className={`w-20 h-20 rounded-2xl bg-${member.color === 'accent-teal' ? 'teal-500' : 'amber-500'}/10 mb-6 flex items-center justify-center`}>
                  <div className={`w-10 h-10 rounded-full bg-${member.color === 'accent-teal' ? 'teal-500' : 'amber-500'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${member.color === 'accent-teal' ? 'text-accent-teal' : 'text-accent-gold'}`}>{member.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="min-h-screen py-24 px-12 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Roadmap 2025</h2>
          <div className="relative space-y-12">
            {[
              { phase: "Fase 1: Fundação", items: ["Contrato Social", "Gravação Módulo 1", "Setup Plataforma"], date: "Mês 01" },
              { phase: "Fase 2: Construção", items: ["Produção de Conteúdo", "Funil de Email", "Orgânico"], date: "Mês 02" },
              { phase: "Fase 3: Escala", items: ["Tráfego Pago", "Captação Leads", "Webinar"], date: "Mês 03" },
              { phase: "Fase 4: Lançamento", items: ["Abertura de Carrinho", "Suporte Alunos", "Escala"], date: "Mês 04" }
            ].map((node, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent-teal border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform" />
                  {i < 3 && <div className="w-[2px] h-full bg-white/5" />}
                </div>
                <div className="pb-12">
                  <span className="text-accent-gold font-bold text-xs uppercase tracking-widest">{node.date}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{node.phase}</h3>
                  <div className="flex gap-3 flex-wrap">
                    {node.items.map((item, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé / Fechamento */}
      <section id="fechamento" className="h-screen py-24 px-12 flex items-center justify-center bg-accent-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
        <div className="text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-6xl font-black text-slate-900 mb-8 leading-tight">Vamos construir o futuro da arte juntos?</h2>
            <p className="text-slate-800 text-xl font-medium mb-12 opacity-80 italic">"A transição digital da OBA não é apenas um curso, é um legado."</p>
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Iniciar Implementação
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
