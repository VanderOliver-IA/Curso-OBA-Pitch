export const siteData = {
  navigation: [
    { id: "inicio", label: "Início", icon: "Home" },
    { id: "visao", label: "Visão", icon: "Eye" },
    { id: "publico", label: "Público-Alvo", icon: "Users" },
    { id: "estrutura", label: "Estrutura", icon: "Layers" },
    { id: "negocio", label: "Modelo de Negócio", icon: "TrendingUp" },
    { id: "funil", label: "Funil de Vendas", icon: "Filter" },
    { id: "financeiro", label: "Financeiro", icon: "BarChart" },
    { id: "equipe", label: "Equipe", icon: "UserGroup" },
    { id: "roadmap", label: "Roadmap", icon: "Calendar" },
    { id: "kpis", label: "KPIs", icon: "Activity" },
    { id: "fechamento", label: "Fechamento", icon: "CheckCircle" },
  ],
  hero: {
    title: "OBA Online",
    subtitle: "Oficina Belas Artes",
    badge: "PLANO ESTRATÉGICO 2025",
    description: "Transformando a maior escola de arte do Rio de Janeiro em uma plataforma digital escalável de ensino artístico para todo o Brasil.",
    stats: [
      { value: "+2.000", label: "alunos transformados" },
      { value: "7+", label: "cursos presenciais" },
      { value: "2", label: "unidades RJ" }
    ],
    quote: "A arte é para todos."
  },
  visao: {
    title: "Visão do Projeto",
    problem: [
      { id: 1, title: "Escassez Física", desc: "Poucas escolas estruturadas fora dos grandes centros." },
      { id: 2, title: "Mito do Dom", desc: "Vergonha de começar por acreditar que não nasceu para isso." },
      { id: 3, title: "Cursos Fragmentados", desc: "Excesso de informação desorganizada no YouTube." }
    ],
    solution: [
      { id: 1, title: "Escalabilidade", desc: "Alcance nacional através de plataforma digital de alta performance." },
      { id: 2, title: "Método OBA", desc: "Trilhas progressivas que transformam o iniciante em mestre." },
      { id: 3, title: "Comunidade", desc: "Acompanhamento real e feedback especializado." }
    ]
  },
  publico: {
    personas: [
      { age: "13-17", title: "Entusiastas", target: "Anime, Mangá e personagens", color: "from-blue-500/20 to-teal-500/20" },
      { age: "18-30", title: "Profissionais", target: "Design, Ilustração e Carreira", color: "from-teal-500/20 to-emerald-500/20" },
      { age: "30-50", title: "Hobby/Desenvolvimento", target: "Relaxamento e Terapia Ocupacional", color: "from-emerald-500/20 to-gold-500/20" }
    ]
  },
  estrutura: [
    { level: "01", title: "Fundamentos", items: ["Coordenação Motora", "Formas Básicas", "Perspectiva", "Sombras"] },
    { level: "02", title: "Técnicas", items: ["Realismo", "Cartoon", "Personagens", "Cenários"] },
    { level: "03", title: "Especialidades", items: ["Retrato", "Ilustração Digital", "Anatomia", "HQ"] }
  ],
  negocio: [
    { item: "Módulo Avulso", price: "R$ 47 – 97", type: "Low Ticket" },
    { item: "Curso Completo", price: "R$ 197 – 397", type: "Carro-chefe" },
    { item: "Vitalício Premium", price: "R$ 997+", type: "High Ticket" }
  ],
  financeiro: {
    projection: [
      { month: "Jan", revenue: 45000, profit: 15000 },
      { month: "Fev", revenue: 52000, profit: 18000 },
      { month: "Mar", revenue: 48000, profit: 16000 },
      { month: "Abr", revenue: 61000, profit: 22000 },
      { month: "Mai", revenue: 55000, profit: 19000 },
      { month: "Jun", revenue: 67000, profit: 25000 },
    ],
    metrics: [
      { label: "Receita Lançamento", value: "R$ 74.550", description: "Meta de 150 alunos a R$ 497" },
      { label: "Meta Ano 1", value: "R$ 500K+", description: "Faturamento bruto projetado" },
      { label: "Meta de Alunos", value: "2.000", description: "No primeiro ano" }
    ]
  }
};
