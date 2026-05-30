# 🛡️ Guardião de Contexto VibeDoCode
# Criador: Vanderson Oliveira - VibeDoCode
# Comunidade Oficial: https://chat.whatsapp.com/ELXiramVNsoBUeUojcwcMb

import os
import glob
import json
import re
import argparse
from datetime import datetime

def get_project_folders(workspace_dir):
    folders = []
    if not os.path.exists(workspace_dir):
        return folders
    for name in os.listdir(workspace_dir):
        path = os.path.join(workspace_dir, name)
        if os.path.isdir(path) and not name.startswith("."):
            folders.append(name)
    folders.sort()
    return folders

def parse_overview_file(filepath):
    conversation = {
        "id": "",
        "created_at": "",
        "messages": [],
        "files_modified": set(),
        "agents_used": set(),
        "tools_used": set(),
        "raw_text_for_matching": ""
    }
    
    # Extrair UUID da pasta pai
    conv_id = os.path.basename(os.path.dirname(os.path.dirname(os.path.dirname(filepath))))
    conversation["id"] = conv_id
    
    if not os.path.exists(filepath):
        return None
        
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    raw_content_accumulator = []
    
    for line in lines:
        try:
            data = json.loads(line)
        except Exception:
            continue
            
        source = data.get("source", "")
        msg_type = data.get("type", "")
        created_at = data.get("created_at", "")
        content = data.get("content", "")
        tool_calls = data.get("tool_calls", [])
        
        if not conversation["created_at"] and created_at:
            conversation["created_at"] = created_at
            
        if content:
            raw_content_accumulator.append(content)
        
        if tool_calls:
            for tc in tool_calls:
                name = tc.get("name", "")
                conversation["tools_used"].add(name)
                args = tc.get("args", {})
                for key in ["TargetFile", "AbsolutePath", "Cwd"]:
                    val = args.get(key, "")
                    if val:
                        raw_content_accumulator.append(str(val))
                        if key in ["TargetFile", "AbsolutePath"]:
                            conversation["files_modified"].add(os.path.basename(val.replace("\"", "")))
        
        if source == "USER_EXPLICIT" and msg_type == "USER_INPUT":
            req_text = content
            if "<USER_REQUEST>" in content:
                parts = content.split("<USER_REQUEST>")
                if len(parts) > 1:
                    req_text = parts[1].split("</USER_REQUEST>")[0].strip()
            
            conversation["messages"].append({
                "role": "user",
                "timestamp": created_at,
                "content": req_text
            })
            
        elif source == "MODEL" and content:
            agent_applied = "assistant"
            agent_match = re.search(r"🤖 \*\*Applying knowledge of `?@([^`\s]+)`?\*\*", content)
            if agent_match:
                agent_applied = agent_match.group(1)
                conversation["agents_used"].add(agent_applied)
                
            conversation["messages"].append({
                "role": "assistant",
                "timestamp": created_at,
                "content": content,
                "agent": agent_applied
            })
            
    conversation["raw_text_for_matching"] = "\n".join(raw_content_accumulator)
    return conversation

def map_conversation_to_projects(conversation, project_folders):
    matched_projects = []
    text = conversation["raw_text_for_matching"]
    text_upper = text.upper()
    
    for folder in project_folders:
        if folder.upper() in text_upper:
            matched_projects.append(folder)
            continue
            
        num_prefix_match = re.match(r"^(\d+)\s*-\s*(.*)$", folder)
        if num_prefix_match:
            num = num_prefix_match.group(1)
            name_part = num_prefix_match.group(2)
            
            patterns = [
                f"/{num} -", f"/{num}-", f"/{num}/", f"PASTAS/{num}", f"PASTA {num}"
            ]
            if any(p.upper() in text_upper for p in patterns):
                matched_projects.append(folder)
                continue
                
            clean_name = name_part.replace(" - Finalizado", "").strip()
            if len(clean_name) > 4 and clean_name.upper() in text_upper:
                matched_projects.append(folder)
                continue
        else:
            if folder.upper() in text_upper:
                matched_projects.append(folder)
                
    return list(set(matched_projects))

def generate_markdown(project, conversations):
    now_str = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    
    md = []
    md.append(f"# 📋 AllChat — {project}")
    md.append("")
    md.append(f"> **Contexto do Projeto:** Histórico completo de conversas e decisões.")
    md.append(f"> **Última atualização:** {now_str}")
    md.append(f"> **Total de conversas salvas:** {len(conversations)}")
    md.append("")
    md.append("---")
    md.append("")
    md.append("## 🗂️ Índice de Conversas")
    md.append("")
    md.append("| # | Data | Título / Solicitação Inicial | Agente | ID da Conversa |")
    md.append("|---|------|-----------------------------|--------|----------------|")
    
    for idx, conv in enumerate(conversations, 1):
        date_str = conv["created_at"]
        if date_str:
            try:
                dt = datetime.strptime(date_str, "%Y-%m-%dT%H:%M:%SZ")
                date_str = dt.strftime("%d/%m/%Y")
            except Exception:
                pass
                
        snippet = "Conversa sem requisições explícitas"
        for msg in conv["messages"]:
            if msg["role"] == "user":
                snippet = msg["content"].replace("\n", " ").replace("|", "\\|")
                if len(snippet) > 80:
                    snippet = snippet[:80] + "..."
                break
                
        agents = ", ".join(conv["agents_used"]) if conv["agents_used"] else "default"
        md.append(f"| {idx} | {date_str} | {snippet} | `{agents}` | `{conv['id']}` |")
        
    md.append("")
    md.append("---")
    md.append("")
    
    for idx, conv in enumerate(conversations, 1):
        date_str = conv["created_at"]
        if date_str:
            try:
                dt = datetime.strptime(date_str, "%Y-%m-%dT%H:%M:%SZ")
                date_str = dt.strftime("%d/%m/%Y %H:%M")
            except Exception:
                pass
                
        md.append(f"## 💬 Conversa {idx}: {conv['id']}")
        md.append("")
        md.append(f"- **Data:** {date_str}")
        md.append(f"- **ID da Conversa:** `{conv['id']}`")
        if conv["agents_used"]:
            md.append(f"- **Agente(s) Aplicado(s):** " + ", ".join(f"`@{a}`" for a in conv["agents_used"]))
        if conv["tools_used"]:
            md.append(f"- **Ferramentas Utilizadas:** " + ", ".join(f"`{t}`" for t in conv["tools_used"]))
        if conv["files_modified"]:
            md.append(f"- **Arquivos Envolvidos:** " + ", ".join(f"`{f}`" for f in conv["files_modified"]))
        md.append("")
        md.append("### Diálogo")
        md.append("")
        
        for msg in conv["messages"]:
            role = "🧑 **Usuário**" if msg["role"] == "user" else "🤖 **Antigravity**"
            md.append(f"{role}:")
            md.append(f"> {msg['content'].strip().replace(chr(10), chr(10) + '> ')}")
            md.append("")
            
        md.append("---")
        md.append("")
        
    return "\n".join(md)

def main():
    parser = argparse.ArgumentParser(description="Extrai históricos de conversas do Antigravity e gera arquivos allchat-*.md nos projetos.")
    parser.add_argument("--workspace", default=os.getcwd(), help="Caminho do diretório workspace onde estão os projetos (Padrão: diretório atual)")
    parser.add_argument("--brain", default=os.path.expanduser("~/.gemini/antigravity/brain"), help="Caminho do diretório de dados 'brain' do Antigravity")
    
    args = parser.parse_args()
    
    workspace_dir = os.path.abspath(args.workspace)
    brain_dir = os.path.abspath(args.brain)
    
    print(f"Diretório Workspace: {workspace_dir}")
    print(f"Diretório de Logs (Brain): {brain_dir}")
    
    if not os.path.exists(workspace_dir):
        print(f"ERRO: Pasta do workspace não existe: {workspace_dir}")
        return
    if not os.path.exists(brain_dir):
        print(f"ERRO: Pasta brain não existe: {brain_dir}")
        return
        
    project_folders = get_project_folders(workspace_dir)
    print(f"Encontrados {len(project_folders)} pastas/projetos mapeáveis.")
    
    # Buscar todos os overview.txt
    log_files = glob.glob(os.path.join(brain_dir, "*", ".system_generated", "logs", "overview.txt"))
    print(f"Encontrados {len(log_files)} arquivos overview.txt.")
    
    parsed_conversations = []
    for filepath in log_files:
        conv = parse_overview_file(filepath)
        if conv and conv["messages"]:
            parsed_conversations.append(conv)
            
    print(f"Processadas {len(parsed_conversations)} conversas com diálogos válidos.")
    
    project_mappings = {folder: [] for folder in project_folders}
    project_mappings["Geral"] = []
    
    for conv in parsed_conversations:
        matched = map_conversation_to_projects(conv, project_folders)
        if matched:
            for folder in matched:
                project_mappings[folder].append(conv)
        else:
            project_mappings["Geral"].append(conv)
            
    generated_count = 0
    for project, convs in project_mappings.items():
        if project == "Geral":
            if not convs:
                continue
            dest_path = os.path.join(workspace_dir, "allchat-Geral.md")
        else:
            filename = f"allchat-{project}.md"
            dest_path = os.path.join(workspace_dir, project, filename)
            
        print(f"Gerando {dest_path} com {len(convs)} conversas...")
        md_content = generate_markdown(project, convs)
        
        try:
            with open(dest_path, "w", encoding="utf-8") as f:
                f.write(md_content)
            generated_count += 1
        except Exception as e:
            print(f"Erro ao salvar em {project}: {e}")
            
    print(f"Processamento concluído! Gerados/atualizados {generated_count} arquivos allchat.")

if __name__ == "__main__":
    main()
