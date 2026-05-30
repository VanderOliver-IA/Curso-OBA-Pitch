export const siteData = {
  header: {
    logo: "/images/logo-oba-arty.png",
    menu: [
      { label: "Início", href: "#inicio" },
      { label: "Por que Arte?", href: "#proposito" },
      { label: "Metodologia", href: "#metodologia" },
      { label: "Cursos", href: "#cursos" },
      { label: "Horários", href: "#horarios" },
      { label: "Unidades", href: "#localizacao" },
    ],
    cta: {
      label: "Agendar Aula Experimental",
      href: "https://wa.me/5521976406960",
    }
  },
  hero: {
    slides: [
      {
        tagline: "Transformando paixão em domínio técnico",
        title: "Sua arte levada a sério.",
        description: "Na Oficina Belas Artes, você aprende técnica de verdade para expressar sua visão única. Sem julgamentos, apenas evolução.",
        cta: { label: "Começar Aula Experimental", href: "https://wa.me/5521976406960" },
        image: "/images/hero-desktop/arty-2.png",
        stats: "+2.000 alunos transformados",
        floats: ["Técnica Real", "Criação Livre"]
      },
      {
        tagline: "Explore seu potencial criativo",
        title: "Descubra seu próprio traço.",
        description: "Do Mangá ao Realismo, nossos mentores guiam você em cada etapa. Aqui, cada erro é um aprendizado e cada traço é uma conquista.",
        cta: { label: "Conhecer Cursos", href: "#cursos" },
        image: "/images/hero-desktop/arty-5.png",
        floats: ["Fundamentos"]
      },
      {
        tagline: "Faça parte da nossa comunidade",
        title: "Um espaço para criar e pertencer.",
        description: "A arte conecta pessoas. Junte-se a uma turma vibrante, apaixonada e pronta para compartilhar inspirações.",
        cta: { label: "Visitar Unidade", href: "#localizacao" },
        image: "/images/hero-desktop/arty-3.png",
        floats: ["Amizade & Arte"]
      }
    ]
  },
  proposito: {
    title: "A arte não é só técnica. É expressão, equilíbrio e pertencimento.",
    subtitle: "Muitos acham que precisam de 'dom'. Nós provamos o contrário todos os dias.",
    cards: [
      { icon: "Lightbulb", title: "Criatividade", desc: "Desbloqueie sua mente para novas soluções e ideias inovadoras." },
      { icon: "Tools", title: "Técnica", desc: "Domine os fundamentos para executar qualquer visão com precisão." },
      { icon: "Star", title: "Maestria", desc: "Alcance a excelência e faça suas obras brilharem." }
    ]
  },
  metodologia: {
    tag: "NOSSA METODOLOGIA",
    title: "Liberdade para criar, apoio para crescer.",
    description: "Aqui, você não é apenas mais um aluno copiando formas. Você percorre uma jornada única de descobertas.",
    steps: [
      { id: "01", title: "Descoberta", desc: "Explore materiais e estilos para encontrar o que ressoa com você." },
      { id: "02", title: "Fundamentos", desc: "Construção da base técnica. Anatomia, perspectiva e luz sem mitos ou bloqueios." },
      { id: "03", title: "Experimentação", desc: "Hora de testar. Misturar materiais, errar sem medo e descobrir novas texturas." },
      { id: "04", title: "Identidade", desc: "Seu traço ganha vida própria. Você deixa de copiar e começa a expressar sua visão única." },
      { id: "05", title: "Maestria", desc: "Domínio técnico aliado à liberdade criativa. Você está pronto para criar seu legado." }
    ]
  },
  cursos: {
    tag: "Nossas Oficinas",
    title: "Encontre sua expressão",
    description: "Do traço clássico ao digital. Qual universo você quer explorar?",
    items: [
      { id: "manga", name: "Mangá", image: "/images/cursos/manga-card.png", href: "/cursos/manga" },
      { id: "realismo", name: "Desenho Realista", image: "/images/cursos/realismo-card.png", href: "/cursos/realismo" },
      { id: "cartoon", name: "Cartoon", image: "/images/cursos/cartoon-card.png", href: "/cursos/cartoon" },
      { id: "hq", name: "HQ", image: "/images/cursos/hq-card.png", href: "/cursos/hq" },
      { id: "pintura", name: "Pintura em Tela", image: "/images/cursos/pintura-card.png", href: "/cursos/pintura-em-tela" },
      { id: "moda", name: "Moda", image: "/images/cursos/moda-card.png", href: "/cursos/moda" },
      { id: "cenario", name: "Cenário e Ambientação", image: "/images/cursos/cenario-card.png", href: "/cursos/cenario-e-ambientacao" },
      { id: "comunicacao", name: "Comunicação Visual", image: "/images/cursos/comunicacao-visual-card.png", href: "/cursos/comunicacao-visual" }
    ]
  },
  horarios: {
    meier: [
      { day: "Segunda", slots: ["-", "-", "14h às 16h", "16h às 18h", "18h às 19:30h"] },
      { day: "Terça", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "-"] },
      { day: "Quarta", slots: ["-", "-", "14h às 16h", "16h às 18h", "18h às 19:30h"] },
      { day: "Quinta", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "-"] },
      { day: "Sexta", slots: ["08h às 10h", "10h às 12h", "13h às 15h", "15h às 17h", "17h às 19h"] },
      { day: "Sábado", slots: ["08h às 10h", "10h às 12h", "12h às 14h", "14h às 16h", "-"] },
    ],
    tijuca: [
      { day: "Terça", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "18h às 19:30h"] },
      { day: "Quarta", slots: ["-", "15h às 17h", "-", "-", "-"] },
      { day: "Quinta", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "18h às 19:30h"] },
      { day: "Sexta", slots: ["08h às 10h", "10h às 12h", "13h às 15h", "15h às 17h", "17h às 19h"] },
      { day: "Sábado", slots: ["08h às 10h", "10h às 12h", "12h às 14h", "14h às 16h", "-"] },
    ],
    gavea: [
      { day: "Terça", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "18h às 20h"] },
      { day: "Quinta", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "18h às 20h"] },
      { day: "Sexta", slots: ["08h às 10h", "10h às 12h", "14h às 16h", "16h às 18h", "18h às 20h"] },
      { day: "Sábado", slots: ["08h às 10h", "10h às 12h", "12h às 14h", "14h às 16h", "Avulsa 16h-20h"] },
      { day: "Domingo", slots: ["-", "-", "-", "Aula Avulsa", "13h às 20h"] },
    ]
  },
  unidades: [
    {
      name: "Méier",
      slug: "meier",
      address1: "R. Ana Barbosa, 47",
      address2: "Méier, Rio de Janeiro - RJ",
      cep: "CEP: 20735-120",
      whatsapp: "(21) 97640-6960",
      whatsappLink: "5521976406960",
      email: "obameier@gmail.com",
      map: "https://www.google.com/maps/search/?api=1&query=R.+Ana+Barbosa,+47+-+Méier,+Rio+de+Janeiro+-+RJ,+20735-120"
    },
    {
      name: "Tijuca",
      slug: "tijuca",
      address1: "R. Maj. Ávila, 371",
      address2: "Tijuca, Rio de Janeiro - RJ",
      cep: "CEP: 21862-765",
      whatsapp: "(21) 96726-1725",
      whatsappLink: "5521967261725",
      email: "obatijuca@gmail.com",
      map: "https://www.google.com/maps/search/?api=1&query=R.+Maj.+Ávila,+371+-+Tijuca,+Rio+de+Janeiro+-+RJ,+21862-765"
    },
    {
      name: "Shopping da Gávea",
      slug: "gavea",
      address1: "Marquês de São Vicente, 52 Loja n14 segundo piso",
      address2: "Gávea, Rio de Janeiro - RJ",
      cep: "CEP: 22451-040",
      whatsapp: "(21) 97464-3331",
      whatsappLink: "5521974643331",
      email: "obagavea@gmail.com",
      map: "https://maps.app.goo.gl/n2771CpQLBE8hQsG8"
    }
  ],
  faq: [
    { q: "Preciso saber desenhar para começar?", a: "Não. A OBA trabalha com uma metodologia inclusiva, pensada para iniciantes e também para quem já desenha. O aprendizado acontece no ritmo de cada aluno." },
    { q: "A partir de que idade posso me matricular?", a: "Temos cursos a partir dos 6 anos e outros indicados a partir dos 12 anos, dependendo do curso escolhido." },
    { q: "Como funcionam as aulas?", a: "As aulas são presenciais, práticas e com acompanhamento individual dos professores." },
    { q: "Qual é a duração dos cursos?", a: "Os cursos possuem carga horária definida e funcionam de forma contínua, do básico ao avançado." },
    { q: "Posso fazer mais de um curso ao mesmo tempo?", a: "Sim. É possível combinar cursos de acordo com seus objetivos." },
    { q: "Os cursos servem para quem quer trabalhar com arte?", a: "Sim. Além do hobby, os cursos desenvolvem base técnica e portfólio." },
    { q: "O material está incluso?", a: "Alguns cursos possuem apostilas exclusivas. Os detalhes são explicados na aula experimental." },
    { q: "E se eu faltar a uma aula?", a: "É necessário avisar com pelo menos 24 horas de antecedência para não perder o crédito." }
  ]
};
