"use client";

import React, { useState, useEffect } from "react";

interface Contribution {
  id: string;
  created_at: string;
  event: string;
  unit: string;
  event_date: string;
  class_id: string;
  class_label: string;
  student_name: string;
  responsible_name: string;
  category: string;
  item: string;
  custom_item: string | null;
  quantity: string;
  attention_ingredients: string[];
  notes: string;
  status: string;
}

export default function RespostasPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Filtros
  const [filterDate, setFilterDate] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Verificar se já está autenticado no sessionStorage
  useEffect(() => {
    const auth = sessionStorage.getItem("oba_festajunina_auth");
    if (auth === "OBA@2026") {
      setIsAuthenticated(true);
      fetchContributions("OBA@2026");
    }
  }, []);

  // Buscar contribuições completas
  const fetchContributions = async (pass: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/festajunina2026?type=full&password=${encodeURIComponent(pass)}`);
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Senha incorreta!");
        }
        throw new Error("Erro ao carregar os dados das contribuições.");
      }
      const data = await res.json();
      setContributions(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Erro de conexão.");
      setIsAuthenticated(false);
      sessionStorage.removeItem("oba_festajunina_auth");
    } finally {
      setLoading(false);
    }
  };

  // Submissão do formulário de login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    if (password === "OBA@2026") {
      setIsAuthenticated(true);
      sessionStorage.setItem("oba_festajunina_auth", "OBA@2026");
      fetchContributions("OBA@2026");
    } else {
      setPasswordError("Senha de acesso inválida!");
    }
  };

  // Cancelar uma contribuição (lógica administrativa)
  const handleCancelContribution = async (id: string, childName: string) => {
    if (!confirm(`Deseja realmente remover/cancelar a contribuição de "${childName}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/festajunina2026?id=${id}&password=OBA@2026`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erro ao cancelar contribuição");

      alert("Contribuição removida com sucesso!");
      // Recarregar lista
      fetchContributions("OBA@2026");
    } catch (err) {
      console.error(err);
      alert("Não foi possível excluir o registro.");
    }
  };

  // Formatar exibição de data
  const getFormattedDate = (dateStr: string) => {
    const parts = dateStr.split("-");
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateStr;
  };

  // Filtrar contribuições ativas
  const activeContributions = contributions.filter(c => c.status === "active");

  const filteredContributions = activeContributions.filter((c) => {
    const matchesDate = !filterDate || c.event_date === filterDate;
    const matchesClass = !filterClass || c.class_id === filterClass;
    const matchesCategory = !filterCategory || c.category === filterCategory;
    const itemName = c.item === "Outro item" ? (c.custom_item || "") : c.item;
    const matchesSearch = 
      !searchTerm ||
      c.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.responsible_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.notes.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesDate && matchesClass && matchesCategory && matchesSearch;
  });

  // Obter dias e turmas únicos para preenchimento de filtros
  const uniqueDates = Array.from(new Set(activeContributions.map((c) => c.event_date))).sort();
  const uniqueClasses = Array.from(
    new Map(activeContributions.map((c) => [c.class_id, c.class_label])).entries()
  );
  const uniqueCategories = Array.from(new Set(activeContributions.map((c) => c.category))).sort();

  // Exportar dados para CSV
  const exportToCSV = () => {
    if (filteredContributions.length === 0) {
      alert("Nenhum dado para exportar");
      return;
    }

    const headers = [
      "Data de Envio",
      "Dia do Lanche",
      "Turma/Horário",
      "Nome do Aluno",
      "Nome do Responsável",
      "Categoria",
      "Item",
      "Quantidade",
      "Alergênicos/Atenção",
      "Observação"
    ];

    const rows = filteredContributions.map((c) => [
      new Date(c.created_at).toLocaleString("pt-BR"),
      getFormattedDate(c.event_date),
      c.class_label,
      c.student_name,
      c.responsible_name,
      c.category,
      c.item === "Outro item" ? c.custom_item : c.item,
      c.quantity,
      c.attention_ingredients.join(" | "),
      c.notes
    ]);

    const csvContent = 
      "\uFEFF" + // BOM para Excel ler acentuação em UTF-8
      [headers.join(";"), ...rows.map((r) => r.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(";"))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `lanches_festa_junina_oba_tijuca_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <style jsx>{`
          .login-container {
            background-color: #faf6f0;
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Fredoka', 'Outfit', sans-serif;
          }
          .login-card {
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(93, 64, 55, 0.08);
            border: 3px solid #ffb300;
            padding: 40px;
            max-width: 400px;
            width: 100%;
            text-align: center;
          }
          .login-icon {
            font-size: 3.5rem;
            color: #ff8f00;
            margin-bottom: 20px;
          }
          .login-card h2 {
            font-size: 1.6rem;
            color: #e65100;
            font-weight: 700;
            margin-bottom: 12px;
          }
          .login-card p {
            color: #8d6e63;
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 25px;
          }
          .login-input {
            width: 100%;
            padding: 14px 18px;
            border-radius: 12px;
            border: 2px solid #efebe9;
            margin-bottom: 15px;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            outline: none;
            transition: all 0.2s;
          }
          .login-input:focus {
            border-color: #ff8f00;
            box-shadow: 0 0 0 4px rgba(255, 143, 0, 0.1);
          }
          .login-btn {
            width: 100%;
            padding: 14px;
            background: linear-gradient(180deg, #ff8f00, #ff6f00);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(255, 111, 0, 0.2);
            transition: all 0.2s;
          }
          .login-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(255, 111, 0, 0.3);
          }
          .error-text {
            color: #d84315;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 15px;
          }
        `}</style>

        <div className="login-container">
          <div className="login-card">
            <div className="login-icon">
              <i className="fa fa-lock" />
            </div>
            <h2>Acesso Restrito</h2>
            <p>Por favor, insira a senha de organizador para visualizar as respostas do lanche coletivo.</p>
            
            <form onSubmit={handleLoginSubmit}>
              <input
                type="password"
                className="login-input"
                placeholder="Senha de Acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <div className="error-text">{passwordError}</div>}
              <button type="submit" className="login-btn">
                Acessar Painel
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // Métricas calculadas para os cards
  const totalContrib = activeContributions.length;
  const allergenCount = activeContributions.filter(
    (c) => 
      c.attention_ingredients.length > 0 &&
      !c.attention_ingredients.includes("Não possui nenhum desses ingredientes") &&
      !c.attention_ingredients.includes("Não sei informar")
  ).length;

  // Encontrar itens mais trazidos
  const itemCounts: Record<string, number> = {};
  activeContributions.forEach((c) => {
    const key = c.item === "Outro item" ? (c.custom_item || "Outros") : c.item;
    itemCounts[key] = (itemCounts[key] || 0) + 1;
  });
  const topItems = Object.entries(itemCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <>
      <style jsx global>{`
        /* Hack CSS usando :has para esconder componentes globais do site e dar foco na tabela de respostas */
        body:has(.respostas-page-container) .navbar,
        body:has(.respostas-page-container) footer,
        body:has(.respostas-page-container) .whatsapp-popover {
          display: none !important;
        }

        .respostas-page-container {
          background-color: #faf8f5;
          color: #3e2723;
          padding: 30px 20px;
          min-height: 100vh;
          font-family: 'Fredoka', 'Outfit', sans-serif;
        }

        .header-respostas {
          margin-bottom: 30px;
          border-bottom: 2px solid #efebe9;
          padding-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .header-respostas h1 {
          font-size: 1.8rem;
          color: #e65100;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .header-respostas p {
          color: #795548;
          font-size: 0.95rem;
          margin-bottom: 0;
        }

        .action-buttons {
          display: flex;
          gap: 12px;
        }

        .btn-action {
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .btn-action-primary {
          background-color: #ff8f00;
          color: #fff;
        }

        .btn-action-primary:hover {
          background-color: #e65100;
        }

        .btn-action-secondary {
          background-color: #efebe9;
          color: #5d4037;
          border: 1px solid #d7ccc8;
        }

        .btn-action-secondary:hover {
          background-color: #e0d8d5;
        }

        /* Grid de cards de resumo */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .metric-card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          border: 1px solid #efebe9;
          box-shadow: 0 4px 15px rgba(93, 64, 55, 0.03);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .metric-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .metric-details h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: #8d6e63;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .metric-details p {
          font-size: 1.6rem;
          font-weight: 700;
          color: #3e2723;
          margin: 0;
          line-height: 1.1;
        }

        /* Bloco de Filtros */
        .filters-panel {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          border: 1px solid #efebe9;
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
          align-items: flex-end;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #8d6e63;
        }

        .filter-control {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #d7ccc8;
          font-size: 0.9rem;
          outline: none;
          background-color: #faf8f7;
          width: 100%;
        }

        .filter-control:focus {
          border-color: #ff8f00;
          background-color: #fff;
        }

        /* Lista de Respostas */
        .table-responsive {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #efebe9;
          box-shadow: 0 4px 15px rgba(93, 64, 55, 0.03);
          overflow-x: auto;
          margin-bottom: 40px;
        }

        .table-respostas {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.95rem;
        }

        .table-respostas th {
          background-color: #faf8f7;
          color: #5d4037;
          font-weight: 700;
          padding: 14px 18px;
          border-bottom: 2px solid #efebe9;
        }

        .table-respostas td {
          padding: 14px 18px;
          border-bottom: 1px solid #efebe9;
          color: #3e2723;
          vertical-align: middle;
        }

        .table-respostas tr:last-child td {
          border-bottom: none;
        }

        .table-respostas tr:hover td {
          background-color: #fffdf9;
        }

        .badge-allergen {
          background-color: #ffebee;
          color: #c62828;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-block;
          margin: 2px;
          border: 1px solid #ffcdcd;
        }

        .badge-allergen-none {
          background-color: #e8f5e9;
          color: #2e7d32;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-block;
          margin: 2px;
          border: 1px solid #c8e6c9;
        }

        .btn-delete {
          background-color: transparent;
          color: #c62828;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .btn-delete:hover {
          background-color: #ffebee;
          transform: scale(1.1);
        }

        /* Impressão */
        @media print {
          body {
            background-color: #fff !important;
            color: #000 !important;
            padding: 0 !important;
          }
          .respostas-page-container {
            padding: 0 !important;
            background: #fff !important;
          }
          .filters-panel, .action-buttons, .btn-delete, .header-actions-col {
            display: none !important;
          }
          .table-respostas th, .table-respostas td {
            padding: 8px 10px !important;
            border-bottom: 1px solid #000 !important;
          }
          .table-responsive {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      <div className="respostas-page-container">
        <header className="header-respostas">
          <div>
            <h1>Respostas — Lanche Coletivo Julino OBA 🌽</h1>
            <p>Visualização interna para organização do evento (Unidade Tijuca).</p>
          </div>
          <div className="action-buttons">
            <button 
              className="btn-action btn-action-secondary"
              onClick={() => window.print()}
            >
              <i className="fa fa-print" /> Imprimir Lista
            </button>
            <button 
              className="btn-action btn-action-primary"
              onClick={exportToCSV}
            >
              <i className="fa fa-file-csv" /> Exportar CSV
            </button>
            <button 
              className="btn-action btn-action-secondary"
              onClick={() => fetchContributions("OBA@2026")}
              disabled={loading}
            >
              <i className={`fa fa-sync ${loading ? "fa-spin" : ""}`} /> Atualizar
            </button>
          </div>
        </header>

        {error && (
          <div className="error-message-box" style={{ marginBottom: "25px" }}>
            <i className="fa fa-exclamation-triangle mr-2" /> {error}
          </div>
        )}

        {/* CARDS DE RESUMO */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon" style={{ backgroundColor: "#efebe9", color: "#5d4037" }}>
              <i className="fa fa-users" />
            </div>
            <div className="metric-details">
              <h4>Total Contribuições</h4>
              <p>{totalContrib}</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon" style={{ backgroundColor: "#ffebee", color: "#c62828" }}>
              <i className="fa fa-triangle-exclamation" />
            </div>
            <div className="metric-details">
              <h4>Alertas de Alergia</h4>
              <p>{allergenCount}</p>
            </div>
          </div>

          <div className="metric-card" style={{ flexGrow: 1.5 }}>
            <div className="metric-icon" style={{ backgroundColor: "#fffde7", color: "#f57f17" }}>
              <i className="fa fa-crown" />
            </div>
            <div className="metric-details">
              <h4>Itens Mais Trazidos</h4>
              <p style={{ fontSize: "0.95rem", fontWeight: "600", color: "#5d4037", marginTop: "4px" }}>
                {topItems.length > 0
                  ? topItems.map(([item, count]) => `${item} (${count}x)`).join(", ")
                  : "Nenhuma resposta ainda"}
              </p>
            </div>
          </div>
        </div>

        {/* PAINEL DE FILTROS */}
        <div className="filters-panel">
          <div className="filter-group">
            <label htmlFor="filterDate">Filtrar por Dia</label>
            <select
              id="filterDate"
              className="filter-control"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            >
              <option value="">Todos os dias</option>
              {uniqueDates.map(d => (
                <option key={d} value={d}>{getFormattedDate(d)}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filterClass">Filtrar por Turma</label>
            <select
              id="filterClass"
              className="filter-control"
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
            >
              <option value="">Todas as turmas</option>
              {uniqueClasses.map(([id, label]) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filterCategory">Categoria</label>
            <select
              id="filterCategory"
              className="filter-control"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Todas as categorias</option>
              {uniqueCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group" style={{ flexGrow: 1.5 }}>
            <label htmlFor="search">Pesquisar por texto</label>
            <input
              type="text"
              id="search"
              className="filter-control"
              placeholder="Nome da criança, do responsável, item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* TABELA DE DADOS */}
        <div className="table-responsive">
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#8d6e63", fontWeight: "600" }}>
              <i className="fa fa-spinner fa-spin fa-2x" style={{ marginBottom: "10px" }} /><br />
              Carregando dados das contribuições...
            </div>
          ) : filteredContributions.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#8d6e63", fontStyle: "italic" }}>
              Nenhuma contribuição encontrada para os filtros aplicados.
            </div>
          ) : (
            <table className="table-respostas">
              <thead>
                <tr>
                  <th>Dia do Lanche</th>
                  <th>Turma/Horário</th>
                  <th>Aluno</th>
                  <th>Responsável</th>
                  <th>Categoria</th>
                  <th>Item</th>
                  <th>Quantidade</th>
                  <th>Alergênicos</th>
                  <th>Observação</th>
                  <th className="header-actions-col" style={{ width: "60px", textAlign: "center" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredContributions.map((c) => {
                  const itemName = c.item === "Outro item" ? c.custom_item : c.item;
                  const hasAllergens = c.attention_ingredients.length > 0 && 
                    !c.attention_ingredients.includes("Não possui nenhum desses ingredientes") &&
                    !c.attention_ingredients.includes("Não sei informar");

                  return (
                    <tr key={c.id}>
                      <td style={{ fontWeight: "700" }}>{getFormattedDate(c.event_date)}</td>
                      <td>{c.class_label}</td>
                      <td style={{ fontWeight: "700", color: "#e65100" }}>{c.student_name}</td>
                      <td>{c.responsible_name}</td>
                      <td>
                        <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>{c.category}</span>
                      </td>
                      <td style={{ fontWeight: "700" }}>{itemName}</td>
                      <td>{c.quantity}</td>
                      <td>
                        {hasAllergens ? (
                          c.attention_ingredients.map((a) => (
                            <span key={a} className="badge-allergen">{a}</span>
                          ))
                        ) : (
                          <span className="badge-allergen-none">Nenhum</span>
                        )}
                      </td>
                      <td style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#5d4037" }}>
                        {c.notes || "-"}
                      </td>
                      <td className="header-actions-col" style={{ textAlign: "center" }}>
                        <button
                          className="btn-delete"
                          onClick={() => handleCancelContribution(c.id, c.student_name)}
                          title="Cancelar Contribuição"
                        >
                          <i className="fa fa-trash" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
