import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "festajunina-contribucoes.json");

// Garantir que a pasta data/ exista
function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

// Ler contribuições
function readContributions(): any[] {
  ensureDataFile();
  try {
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Erro ao ler arquivo de contribuições:", error);
    return [];
  }
}

// Salvar contribuições
function saveContributions(data: any[]) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "summary";
    const date = searchParams.get("date");
    const classId = searchParams.get("classId");
    
    const contributions = readContributions().filter(c => c.status === "active");

    if (type === "full") {
      // Proteção por senha simples OBA@2026
      const authHeader = req.headers.get("authorization");
      const paramPassword = searchParams.get("password");
      
      let authenticated = false;
      if (paramPassword === "OBA@2026") {
        authenticated = true;
      } else if (authHeader) {
        // Suporta Bearer ou Basic com OBA@2026
        const token = authHeader.replace("Bearer ", "").replace("Basic ", "").trim();
        if (token === "OBA@2026" || Buffer.from(token, "base64").toString("utf-8") === "OBA@2026" || Buffer.from(token, "base64").toString("utf-8") === "admin:OBA@2026") {
          authenticated = true;
        }
      }

      if (!authenticated) {
        return NextResponse.json({ error: "Acesso não autorizado" }, { status: 401 });
      }

      return NextResponse.json(contributions);
    }

    // Retorna resumo público (sem dados de identificação)
    // Agrupado por data e turma contendo a contagem por item
    let filtered = contributions;
    if (date) filtered = filtered.filter(c => c.event_date === date);
    if (classId) filtered = filtered.filter(c => c.class_id === classId);

    const summary: Record<string, number> = {};
    filtered.forEach(c => {
      const itemKey = c.item === "Outro item" && c.custom_item ? c.custom_item : c.item;
      summary[itemKey] = (summary[itemKey] || 0) + 1;
    });

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Erro na API GET festajunina2026:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      student_name,
      responsible_name,
      event_date,
      class_id,
      class_label,
      category,
      item,
      custom_item,
      quantity,
      attention_ingredients,
      notes,
    } = body;

    // Validações básicas obrigatórias
    if (!student_name || student_name.trim().length < 2) {
      return NextResponse.json({ error: "Nome da criança é obrigatório (min 2 letras)" }, { status: 400 });
    }
    if (!responsible_name || responsible_name.trim().length < 2) {
      return NextResponse.json({ error: "Nome do responsável é obrigatório (min 2 letras)" }, { status: 400 });
    }
    if (!event_date || !class_id || !class_label) {
      return NextResponse.json({ error: "Dia do lanche e turma são obrigatórios" }, { status: 400 });
    }
    if (!category || !item) {
      return NextResponse.json({ error: "Categoria e Item são obrigatórios" }, { status: 400 });
    }
    if (item === "Outro item" && (!custom_item || custom_item.trim() === "")) {
      return NextResponse.json({ error: "Por favor, informe qual item pretende levar" }, { status: 400 });
    }
    if (!quantity || quantity.trim() === "") {
      return NextResponse.json({ error: "Quantidade aproximada é obrigatória" }, { status: 400 });
    }
    if (!attention_ingredients || !Array.isArray(attention_ingredients) || attention_ingredients.length === 0) {
      return NextResponse.json({ error: "Informe os ingredientes que merecem atenção" }, { status: 400 });
    }

    const contributions = readContributions();

    // Criar novo registro de contribuição
    const newContribution = {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      event: "festajunina2026",
      unit: "Tijuca",
      event_date,
      class_id,
      class_label,
      student_name: student_name.trim(),
      responsible_name: responsible_name.trim(),
      category,
      item,
      custom_item: item === "Outro item" ? custom_item.trim() : null,
      quantity: quantity.trim(),
      attention_ingredients,
      notes: notes ? notes.trim() : "",
      status: "active"
    };

    contributions.push(newContribution);
    saveContributions(contributions);

    return NextResponse.json({ success: true, contribution: newContribution });
  } catch (error) {
    console.error("Erro na API POST festajunina2026:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}

// Tratamento de requisições de DELETE para administradores poderem remover/cancelar uma contribuição
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const password = searchParams.get("password");

    if (password !== "OBA@2026") {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: "ID da contribuição é obrigatório" }, { status: 400 });
    }

    const contributions = readContributions();
    const index = contributions.findIndex(c => c.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Contribuição não encontrada" }, { status: 404 });
    }

    // Altera o status para 'cancelled' (regrade negócio 14.6 do PRD)
    contributions[index].status = "cancelled";
    saveContributions(contributions);

    return NextResponse.json({ success: true, message: "Contribuição cancelada com sucesso" });
  } catch (error) {
    console.error("Erro na API DELETE festajunina2026:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
