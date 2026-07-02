"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";

// Configuração das datas e turmas (com horários reais da Tijuca)
const EVENT_DATES = [
  {
    date: "2026-07-14",
    label: "14/07/2026 (Terça-feira)",
    classes: [
      { id: "tijuca-14-08h", label: "Terça — 08h às 10h" },
      { id: "tijuca-14-10h", label: "Terça — 10h às 12h" },
      { id: "tijuca-14-14h", label: "Terça — 14h às 16h" },
      { id: "tijuca-14-16h", label: "Terça — 16h às 18h" },
      { id: "tijuca-14-18h", label: "Terça — 18h às 19:30h" },
    ]
  },
  {
    date: "2026-07-16",
    label: "16/07/2026 (Quinta-feira)",
    classes: [
      { id: "tijuca-16-08h", label: "Quinta — 08h às 10h" },
      { id: "tijuca-16-10h", label: "Quinta — 10h às 12h" },
      { id: "tijuca-16-14h", label: "Quinta — 14h às 16h" },
      { id: "tijuca-16-16h", label: "Quinta — 16h às 18h" },
      { id: "tijuca-16-18h", label: "Quinta — 18h às 19:30h" },
    ]
  },
  {
    date: "2026-07-18",
    label: "18/07/2026 (Sábado)",
    classes: [
      { id: "tijuca-18-08h", label: "Sábado — 08h às 10h" },
      { id: "tijuca-18-10h", label: "Sábado — 10h às 12h" },
      { id: "tijuca-18-12h", label: "Sábado — 12h às 14h" },
      { id: "tijuca-18-14h", label: "Sábado — 14h às 16h" },
    ]
  },
  {
    date: "2026-07-22",
    label: "22/07/2026 (Quarta-feira)",
    classes: [
      { id: "tijuca-22-15h", label: "Quarta — 15h às 17h" },
      { id: "tijuca-22-17h", label: "Quarta — 17h às 19h" },
    ]
  },
  {
    date: "2026-07-24",
    label: "24/07/2026 (Sexta-feira)",
    classes: [
      { id: "tijuca-24-08h", label: "Sexta — 08h às 10h" },
      { id: "tijuca-24-10h", label: "Sexta — 10h às 12h" },
      { id: "tijuca-24-13h", label: "Sexta — 13h às 15h" },
      { id: "tijuca-24-15h", label: "Sexta — 15h às 17h" },
      { id: "tijuca-24-17h", label: "Sexta — 17h às 19h" },
    ]
  }
];

const CATEGORIES: Record<string, string[]> = {
  "Comidas salgadas": [
    "Cachorro-quente",
    "Mini cachorro-quente",
    "Pipoca salgada",
    "Milho cozido",
    "Pão de queijo",
    "Torta salgada",
    "Mini pastéis",
    "Empadinhas",
    "Mini sanduíches",
    "Sanduíches naturais"
  ],
  "Comidas doces": [
    "Bolo de milho",
    "Bolo de fubá",
    "Bolo de aipim",
    "Canjica",
    "Arroz-doce",
    "Curau",
    "Paçoca",
    "Pé de moleque",
    "Cocada",
    "Doce de abóbora",
    "Brigadeiro",
    "Beijinho",
    "Cupcakes decorados"
  ],
  "Opções práticas": [
    "Pipoca pronta",
    "Cookies",
    "Bolinhos individuais",
    "Salgadinhos de forno",
    "Salgadinhos fritos"
  ],
  "Bebidas": [
    "Suco de uva",
    "Suco de laranja",
    "Suco de maracujá",
    "Suco de caju",
    "Mate",
    "Guaraná natural",
    "Refrigerante"
  ],
  "Itens de apoio": [
    "Copos descartáveis",
    "Pratinhos descartáveis",
    "Guardanapos",
    "Talheres descartáveis"
  ],
  "Outro item": [
    "Outro item"
  ]
};

const ALLERGEN_OPTIONS = [
  "Contém leite",
  "Contém ovo",
  "Contém glúten",
  "Contém amendoim",
  "Contém outro tipo de castanha",
  "Não sei informar",
  "Não possui nenhum desses ingredientes"
];

export default function FestaJuninaPage() {
  const [step, setStep] = useState(1);
  
  // Dados do formulário
  const [studentName, setStudentName] = useState("");
  const [responsibleName, setResponsibleName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [classId, setClassId] = useState("");
  const [classLabel, setClassLabel] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [customItem, setCustomItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [allergens, setAllergens] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  // Estado de controle de interface
  const [availableClasses, setAvailableClasses] = useState<{ id: string; label: string }[]>([]);
  const [publicSummary, setPublicSummary] = useState<Record<string, number>>({});
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [errorSummary, setErrorSummary] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successResponse, setSuccessResponse] = useState<any>(null);

  // Atualizar turmas disponíveis quando a data muda
  useEffect(() => {
    if (eventDate) {
      const selected = EVENT_DATES.find(d => d.date === eventDate);
      if (selected) {
        setAvailableClasses(selected.classes);
        // Resetar turma ao mudar a data para evitar inconsistência
        setClassId("");
        setClassLabel("");
        setPublicSummary({});
      }
    } else {
      setAvailableClasses([]);
      setClassId("");
      setClassLabel("");
      setPublicSummary({});
    }
  }, [eventDate]);

  // Carregar o resumo público dos lanches quando data e turma forem selecionados
  useEffect(() => {
    if (eventDate && classId) {
      setLoadingSummary(true);
      setErrorSummary("");
      fetch(`/api/festajunina2026?type=summary&date=${eventDate}&classId=${classId}`)
        .then(res => {
          if (!res.ok) throw new Error("Falha ao carregar o resumo");
          return res.json();
        })
        .then(data => {
          setPublicSummary(data.summary || {});
          setLoadingSummary(false);
        })
        .catch(err => {
          console.error(err);
          setErrorSummary("Não conseguimos carregar o resumo agora. Você ainda pode preencher sua contribuição normalmente.");
          setLoadingSummary(false);
        });
    }
  }, [eventDate, classId]);

  // Manipular clique nos checkboxes de alergênicos
  const handleAllergenChange = (option: string) => {
    if (option === "Não possui nenhum desses ingredientes") {
      // Se marcar 'Nenhum', desmarca todos os outros
      setAllergens(["Não possui nenhum desses ingredientes"]);
    } else {
      // Se marcar outra opção, remove a opção 'Nenhum' e adiciona/remove a opção clicada
      let updated = allergens.filter(a => a !== "Não possui nenhum desses ingredientes");
      if (option === "Não sei informar") {
        // Se marcar 'Não sei informar', desmarca todos os outros exceto ele mesmo
        updated = ["Não sei informar"];
      } else {
        updated = updated.filter(a => a !== "Não sei informar");
        if (updated.includes(option)) {
          updated = updated.filter(a => a !== option);
        } else {
          updated.push(option);
        }
      }
      setAllergens(updated);
    }
  };

  // Mudar turma selecionada e salvar a label correta
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setClassId(val);
    const selectedClass = availableClasses.find(c => c.id === val);
    if (selectedClass) {
      setClassLabel(selectedClass.label);
    } else {
      setClassLabel("");
    }
  };

  // Mudar categoria e resetar item selecionado
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setCategory(val);
    setItem("");
    setCustomItem("");
  };

  // Ir para o passo 2 (Dados do Lanche)
  const handleNextToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !responsibleName.trim() || !eventDate || !classId) {
      alert("Por favor, preencha todos os campos obrigatórios da identificação!");
      return;
    }
    setStep(2);
    // Rolagem suave para o topo do formulário
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  // Ir para o passo 3 (Revisão)
  const handleNextToStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !item || !quantity.trim() || allergens.length === 0) {
      alert("Por favor, preencha todos os campos obrigatórios do item!");
      return;
    }
    if (item === "Outro item" && !customItem.trim()) {
      alert("Por favor, descreva qual é o item que pretende levar!");
      return;
    }
    setStep(3);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  // Submeter formulário
  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/festajunina2026", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_name: studentName,
          responsible_name: responsibleName,
          event_date: eventDate,
          class_id: classId,
          class_label: classLabel,
          category,
          item,
          custom_item: customItem,
          quantity,
          attention_ingredients: allergens,
          notes,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Não foi possível registrar sua contribuição");
      }

      setSuccessResponse(data.contribution);
      setStep(4);
      window.scrollTo({ top: 200, behavior: "smooth" });
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || "Não foi possível registrar sua contribuição neste momento. Confira os campos e tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  // Formatar exibição da data
  const getFormattedDate = (dateStr: string) => {
    const parts = dateStr.split("-");
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateStr;
  };

  // Gerar link para o WhatsApp Web (Unidade Tijuca)
  const getWhatsAppLink = () => {
    if (!successResponse) return "";
    const phone = "5521967261725"; // OBA Tijuca
    const dateFormatted = getFormattedDate(successResponse.event_date);
    const itemName = successResponse.item === "Outro item" ? successResponse.custom_item : successResponse.item;
    
    const text = `Olá! Registrei a contribuição para o Lanche Coletivo Julino da OBA Tijuca:
    
- *Criança:* ${successResponse.student_name}
- *Responsável:* ${successResponse.responsible_name}
- *Dia:* ${dateFormatted}
- *Turma:* ${successResponse.class_label}
- *Item:* ${itemName}
- *Quantidade:* ${successResponse.quantity}
- *Ingredientes:* ${successResponse.attention_ingredients.join(", ")}
${successResponse.notes ? `- *Obs:* ${successResponse.notes}` : ""}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <style jsx global>{`
        .festajunina-page {
          background-color: #fcf8f2;
          color: #3e2723;
          min-height: 100vh;
          font-family: 'Fredoka', 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          background-image: radial-gradient(#f0d2b3 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .banner-junino {
          background: linear-gradient(135deg, #ff9800, #ffb300);
          color: #fff;
          padding: 50px 20px 30px 20px;
          text-align: center;
          position: relative;
          border-bottom: 4px solid #ffe082;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          margin-top: 10px;
          border-radius: 0 0 30px 30px;
        }

        .banner-junino h1 {
          font-family: 'Fredoka', cursive;
          font-size: 2.5rem;
          font-weight: 700;
          text-shadow: 1px 1px 0px #e65100;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .banner-junino p {
          font-size: 1.25rem;
          font-weight: 500;
          max-width: 600px;
          margin: 0 auto 15px auto;
          opacity: 0.95;
          line-height: 1.4;
        }

        .badge-tijuca {
          background-color: #ffb300;
          color: #5d4037;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.9rem;
          display: inline-block;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-transform: uppercase;
        }

        .intro-text-box {
          background-color: #fff;
          border: 3px solid #ffb300;
          border-radius: 20px;
          padding: 30px;
          margin: -25px auto 40px auto;
          max-width: 800px;
          box-shadow: 0 8px 30px rgba(93, 64, 55, 0.08);
          position: relative;
          z-index: 20;
          text-align: center;
        }

        .intro-text-box p {
          line-height: 1.6;
          font-size: 1.05rem;
          color: #5d4037;
          margin-bottom: 0;
        }

        .form-card {
          background-color: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(93, 64, 55, 0.08);
          box-shadow: 0 10px 40px rgba(93, 64, 55, 0.06);
          max-width: 650px;
          margin: 0 auto 80px auto;
          padding: 40px;
          position: relative;
        }

        .step-indicator {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
          position: relative;
          max-width: 450px;
          margin-left: auto;
          margin-right: auto;
        }

        .step-indicator::before {
          content: "";
          position: absolute;
          top: 20px;
          left: 10px;
          right: 10px;
          height: 4px;
          background-color: #efebe9;
          z-index: 1;
        }

        .step-indicator-bar {
          position: absolute;
          top: 20px;
          left: 10px;
          height: 4px;
          background-color: #ff8f00;
          z-index: 1;
          transition: width 0.3s ease;
        }

        .step-dot {
          width: 44px;
          height: 44px;
          background-color: #efebe9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #8d6e63;
          z-index: 2;
          border: 4px solid #fff;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .step-dot.active {
          background-color: #ff8f00;
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(255, 143, 0, 0.3);
        }

        .step-dot.completed {
          background-color: #2e7d32;
          color: #fff;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #e65100;
          margin-bottom: 24px;
          text-align: center;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #5d4037;
          margin-bottom: 8px;
        }

        .form-group label span {
          color: #d84315;
          margin-left: 3px;
        }

        .form-control, select, textarea {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 2px solid #efebe9;
          background-color: #faf8f7;
          color: #3e2723;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .form-control:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #ff8f00;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(255, 143, 0, 0.1);
        }

        .help-text {
          font-size: 0.85rem;
          color: #8d6e63;
          margin-top: 6px;
        }

        /* Card de Resumo de Itens já escolhidos */
        .summary-card {
          background-color: #fffde7;
          border: 2px dashed #fbc02d;
          border-radius: 16px;
          padding: 22px;
          margin-bottom: 24px;
          animation: fadeIn 0.3s ease;
        }

        .summary-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #f57f17;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .summary-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 8px;
        }

        .summary-item {
          background-color: #fff;
          border: 1px solid #fff59d;
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #5d4037;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summary-count {
          background-color: #fbc02d;
          color: #3e2723;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 20px;
        }

        .summary-empty {
          font-size: 0.95rem;
          color: #795548;
          text-align: center;
          font-style: italic;
          padding: 10px 0;
        }

        /* Checkbox dos alergênicos */
        .allergen-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        @media (min-width: 480px) {
          .allergen-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .allergen-checkbox {
          border: 2px solid #efebe9;
          background-color: #faf8f7;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }

        .allergen-checkbox input {
          width: 18px;
          height: 18px;
          accent-color: #ff8f00;
          cursor: pointer;
        }

        .allergen-checkbox:hover {
          border-color: #ffe0b2;
          background-color: #fffde7;
        }

        .allergen-checkbox.selected {
          border-color: #ff8f00;
          background-color: #fff8e1;
        }

        .allergen-checkbox.selected label {
          color: #e65100;
          font-weight: 600;
        }

        .allergen-checkbox label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #5d4037;
          cursor: pointer;
          margin-bottom: 0;
          width: 100%;
        }

        /* Botões de Ação */
        .btn-junino-container {
          display: flex;
          gap: 15px;
          margin-top: 35px;
        }

        .btn-junino {
          flex: 1;
          padding: 15px 24px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-junino-primary {
          background: linear-gradient(185deg, #ff8f00, #ff6f00);
          color: #fff;
          box-shadow: 0 4px 15px rgba(255, 111, 0, 0.25);
        }

        .btn-junino-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 111, 0, 0.35);
        }

        .btn-junino-secondary {
          background-color: #efebe9;
          color: #5d4037;
          border: 1px solid #d7ccc8;
        }

        .btn-junino-secondary:hover {
          background-color: #e0d8d5;
        }

        .btn-junino:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        /* Review Screen */
        .review-box {
          background-color: #faf8f7;
          border: 2px solid #efebe9;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .review-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #efebe9;
        }

        .review-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .review-label {
          font-weight: 600;
          color: #8d6e63;
        }

        .review-value {
          font-weight: 700;
          color: #3e2723;
          text-align: right;
        }

        /* Success Screen */
        .success-box {
          text-align: center;
          padding: 20px 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background-color: #e8f5e9;
          color: #2e7d32;
          font-size: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
          box-shadow: 0 4px 10px rgba(46, 125, 50, 0.15);
        }

        .success-box h3 {
          font-size: 1.8rem;
          color: #2e7d32;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .success-box p {
          font-size: 1.05rem;
          color: #5d4037;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .btn-whatsapp-share {
          background-color: #25d366;
          color: #fff;
          padding: 16px 28px;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.25);
          transition: all 0.2s ease;
        }

        .btn-whatsapp-share:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
          color: #fff;
        }

        .lgpd-text {
          font-size: 0.8rem;
          color: #8d6e63;
          text-align: center;
          line-height: 1.5;
          margin-top: 24px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .step-container {
          animation: fadeIn 0.4s ease-out;
        }

        .error-message-box {
          background-color: #ffebee;
          color: #c62828;
          border: 1px solid #ffcdd2;
          padding: 16px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 24px;
          text-align: center;
        }
      `}</style>

      <div className="festajunina-page">
        
        <header className="banner-junino">
          <div className="container">
            <span className="badge-tijuca">🎨 OBA Tijuca</span>
            <h1>Lanche Coletivo Julino 🌽✨</h1>
            <p>Vamos organizar juntos um momento especial para os nossos alunos.</p>
          </div>
        </header>

        <main className="container section-padding" style={{ position: "relative", zIndex: 15 }}>
          <div className="intro-text-box">
            <p>
              Olá, famílias! No mês de julho teremos nosso lanche coletivo com tema de Festa Junina na unidade Tijuca da Oficina Belas Artes. 
              Para facilitar a organização, pedimos que cada responsável informe abaixo o que deseja levar no dia da turma do aluno.
              Assim montamos um lanche variado e super divertido para todos!
            </p>
          </div>

          <div className="form-card">
            {step < 4 && (
              <div className="step-indicator">
                <div 
                  className="step-indicator-bar" 
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
                <div className={`step-dot ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
                  {step > 1 ? <i className="fa fa-check" /> : "1"}
                </div>
                <div className={`step-dot ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
                  {step > 2 ? <i className="fa fa-check" /> : "2"}
                </div>
                <div className={`step-dot ${step >= 3 ? "active" : ""}`}>
                  3
                </div>
              </div>
            )}

            {submitError && (
              <div className="error-message-box">
                <i className="fa fa-exclamation-triangle mr-2" /> {submitError}
              </div>
            )}

            {/* ETAPA 1: Identificação */}
            {step === 1 && (
              <form onSubmit={handleNextToStep2} className="step-container">
                <h3 className="step-title">Etapa 1: Quem vai levar?</h3>
                
                <div className="form-group">
                  <label htmlFor="studentName">Nome da Criança (Aluno) <span>*</span></label>
                  <input
                    type="text"
                    id="studentName"
                    className="form-control"
                    placeholder="Nome completo do aluno"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="responsibleName">Nome do Responsável <span>*</span></label>
                  <input
                    type="text"
                    id="responsibleName"
                    className="form-control"
                    placeholder="Seu nome"
                    value={responsibleName}
                    onChange={(e) => setResponsibleName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate">Dia do Lanche <span>*</span></label>
                  <select
                    id="eventDate"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  >
                    <option value="">Selecione o dia do lanche</option>
                    {EVENT_DATES.map((d) => (
                      <option key={d.date} value={d.date}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="classId">Turma / Horário <span>*</span></label>
                  <select
                    id="classId"
                    value={classId}
                    onChange={handleClassChange}
                    disabled={!eventDate}
                    required
                  >
                    <option value="">
                      {!eventDate ? "Selecione o dia primeiro..." : "Selecione a turma/horário"}
                    </option>
                    {availableClasses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="btn-junino-container">
                  <button type="submit" className="btn-junino btn-junino-primary">
                    Continuar <i className="fa fa-arrow-right" />
                  </button>
                </div>
              </form>
            )}

            {/* ETAPA 2: Escolha do lanche */}
            {step === 2 && (
              <form onSubmit={handleNextToStep3} className="step-container">
                <h3 className="step-title">Etapa 2: O que você vai trazer?</h3>

                <div className="form-group">
                  <label htmlFor="category">Categoria do Item <span>*</span></label>
                  <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    {Object.keys(CATEGORIES).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="item">Item Escolhido <span>*</span></label>
                  <select
                    id="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    disabled={!category}
                    required
                  >
                    <option value="">
                      {!category ? "Selecione a categoria primeiro..." : "Selecione o item"}
                    </option>
                    {category &&
                      CATEGORIES[category].map((i) => {
                        const count = publicSummary[i] || 0;
                        const labelCount = count > 0 ? ` (${count} ${count === 1 ? 'já escolhido' : 'já escolhidos'})` : '';
                        return (
                          <option key={i} value={i}>
                            {i}{labelCount}
                          </option>
                        );
                      })}
                  </select>
                </div>

                {item === "Outro item" && (
                  <div className="form-group step-container">
                    <label htmlFor="customItem">Qual item você pretende levar? <span>*</span></label>
                    <input
                      type="text"
                      id="customItem"
                      className="form-control"
                      placeholder="Descreva o item"
                      value={customItem}
                      onChange={(e) => setCustomItem(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="quantity">Quantidade Aproximada <span>*</span></label>
                  <input
                    type="text"
                    id="quantity"
                    className="form-control"
                    placeholder="Ex: 1 bolo, 20 unidades, 2 garrafas, 1 pacote"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                  <p className="help-text">Informe a quantidade estimada do item a ser trazido.</p>
                </div>

                <div className="form-group">
                  <label>Ingredientes que merecem atenção <span>*</span></label>
                  <p className="help-text" style={{ marginTop: "-4px", marginBottom: "8px" }}>
                    Marque as opções caso a comida possua algum ingrediente abaixo (para controle de alergias alimentares).
                  </p>
                  
                  <div className="allergen-grid">
                    {ALLERGEN_OPTIONS.map((opt) => {
                      const isSelected = allergens.includes(opt);
                      return (
                        <div 
                          key={opt}
                          className={`allergen-checkbox ${isSelected ? "selected" : ""}`}
                          onClick={() => handleAllergenChange(opt)}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                          />
                          <label>{opt}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Observação (Opcional)</label>
                  <input
                    type="text"
                    id="notes"
                    className="form-control"
                    placeholder="Ex: Já vai fatiado / Precisa de geladeira / Entrego às 15h"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="btn-junino-container">
                  <button 
                    type="button" 
                    className="btn-junino btn-junino-secondary"
                    onClick={() => setStep(1)}
                  >
                    <i className="fa fa-arrow-left" /> Voltar
                  </button>
                  <button type="submit" className="btn-junino btn-junino-primary">
                    Revisar Contribuição <i className="fa fa-arrow-right" />
                  </button>
                </div>
              </form>
            )}

            {/* ETAPA 3: Revisão */}
            {step === 3 && (
              <div className="step-container">
                <h3 className="step-title">Etapa 3: Confirmar Contribuição</h3>
                <p style={{ textAlign: "center", color: "#8d6e63", marginBottom: "20px" }}>
                  Por favor, revise as informações antes de confirmar o envio.
                </p>

                <div className="review-box">
                  <div className="review-row">
                    <span className="review-label">Criança (Aluno):</span>
                    <span className="review-value">{studentName}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-label">Responsável:</span>
                    <span className="review-value">{responsibleName}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-label">Dia do Lanche:</span>
                    <span className="review-value">{getFormattedDate(eventDate)}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-label">Turma / Horário:</span>
                    <span className="review-value">{classLabel}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-label">Item que levará:</span>
                    <span className="review-value">{item === "Outro item" ? customItem : item}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-label">Quantidade:</span>
                    <span className="review-value">{quantity}</span>
                  </div>
                  <div className="review-row">
                    <span className="review-label">Atenção Alimentar:</span>
                    <span className="review-value">{allergens.join(", ")}</span>
                  </div>
                  {notes && (
                    <div className="review-row">
                      <span className="review-label">Observação:</span>
                      <span className="review-value">{notes}</span>
                    </div>
                  )}
                </div>

                <div className="btn-junino-container">
                  <button 
                    type="button" 
                    className="btn-junino btn-junino-secondary"
                    onClick={() => setStep(2)}
                    disabled={submitting}
                  >
                    <i className="fa fa-arrow-left" /> Alterar
                  </button>
                  <button 
                    type="button" 
                    className="btn-junino btn-junino-primary"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>Gravando contribuição...</>
                    ) : (
                      <>Confirmar Contribuição <i className="fa fa-check" /></>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* ETAPA 4: Sucesso */}
            {step === 4 && successResponse && (
              <div className="success-box step-container">
                <div className="success-icon">
                  <i className="fa fa-check" />
                </div>
                <h3>Contribuição Registrada! 🎨🌽</h3>
                <p>
                  Muito obrigado, <strong>{successResponse.responsible_name}</strong>! 
                  A contribuição de <strong>{successResponse.student_name}</strong> foi gravada com sucesso para o dia <strong>{getFormattedDate(successResponse.event_date)}</strong> ({successResponse.class_label}).
                </p>
                <p style={{ fontSize: "0.95rem", color: "#8d6e63" }}>
                  Sua colaboração ajuda a tornar o lanche coletivo dos nossos alunos ainda mais especial.
                </p>

                <div style={{ marginTop: "30px", borderTop: "1px solid #efebe9", paddingTop: "25px" }}>
                  <p style={{ fontWeight: "600", fontSize: "0.95rem", color: "#e65100", marginBottom: "15px" }}>
                    📲 Avise a coordenação da OBA pelo WhatsApp com um clique:
                  </p>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp-share"
                  >
                    <i className="fab fa-whatsapp" /> Enviar mensagem para o WhatsApp
                  </a>
                </div>
              </div>
            )}

            <p className="lgpd-text">
              🔒 Os dados informados serão usados apenas para a organização do lanche coletivo da OBA Tijuca e não serão exibidos publicamente para outros responsáveis.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
