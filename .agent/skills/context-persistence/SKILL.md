---
name: context-persistence
description: "Skill de persistência de contexto. Ensina o agente a identificar o projeto ativo, formatar e salvar o histórico da conversa atual nos arquivos allchat-*.md locais."
---

> 🛡️ **Guardião de Contexto VibeDoCode**
> **Criador:** Vanderson Oliveira - VibeDoCode
> **Comunidade Oficial:** [Acesse o Grupo de WhatsApp](https://chat.whatsapp.com/ELXiramVNsoBUeUojcwcMb)

# 🛠️ Skill: Context Persistence (Persistência de Contexto)

Esta skill define as instruções operacionais para salvar conversas e histórico de decisões em arquivos Markdown portáveis e locais para cada projeto.

## 📥 Procedimento de Execução

### Passo 1: Detectar o Projeto Ativo
1. Analise o workspace atual, os arquivos abertos no editor (metadata do usuário) ou o caminho dos arquivos editados na conversa atual.
2. Identifique a qual das pastas sob o diretório do workspace estes caminhos pertencem.
3. Se a conversa afetar múltiplos projetos, mapeie e execute os passos abaixo para todos os projetos afetados.
4. Se nenhum projeto específico for detectado, utilize o arquivo `allchat-Geral.md` na raiz do workspace.

### Passo 2: Extrair Detalhes da Conversa
Colete as seguintes informações sobre a interação atual:
- **ID da Conversa:** O identificador exclusivo UUID da conversa atual.
- **Data e Hora:** Timestamp atual no formato local (`DD/MM/AAAA HH:MM`).
- **Agentes Envolvidos:** Quais personas de agente foram aplicadas (ex: `@frontend-specialist`, `@security-vibedocode`).
- **Modelo de LLM:** Nome do modelo de linguagem ativo (ex: `Claude 3.5 Sonnet`, `Gemini 1.5 Pro`).
- **Arquivos Criados/Modificados:** Caminhos relativos de quaisquer arquivos que tenham sido escritos ou alterados.
- **Ferramentas Invocadas:** Lista de ferramentas executadas (ex: `run_command`, `write_to_file`).
- **Decisões Técnicas:** Resumo de 2 a 5 pontos sobre escolhas técnicas tomadas (ex: "Mudança para standalone build no Next.js", "Habilitação do middleware RBAC").

### Passo 3: Formatar o Markdown
Adicione a nova conversa sob o cabeçalho correspondente. O arquivo `allchat-{Nome do Projeto}.md` deve seguir a seguinte estrutura de adição (append):

1. **Atualização do Índice:**
   Localize a tabela `## 🗂️ Índice de Conversas` no início do arquivo e insira uma nova linha no formato:
   `| {Próximo Número} | {Data} | {Resumo da Solicitação} | `{Agentes}` | `{ID da Conversa}` |`

2. **Adição do Bloco de Diálogo:**
   No final do arquivo, adicione a seção correspondente:
   
   ```markdown
   ## 💬 Conversa {Número}: {ID da Conversa}
   
   - **Data:** {Data e Hora}
   - **ID da Conversa:** `{ID da Conversa}`
   - **Agente(s) Aplicado(s):** `@nome-do-agente`
   - **LLM Ativa:** `{Modelo LLM}`
   - **Ferramentas Utilizadas:** `ferramenta1`, `ferramenta2`
   - **Arquivos Envolvidos:** `caminho/arquivo.ts`
   
   ### Diálogo
   
   🧑 **Usuário**:
   > {Pergunta ou instrução enviada pelo usuário}
   
   🤖 **Antigravity** (`@agente-aplicado`):
   > {Resposta do assistente / resumo de alteração}
   
   ---
   ```

### Passo 4: Escrita Segura
1. Verifique se o arquivo `allchat-{Nome da Pasta}.md` já existe. Se não existir, crie-o usando o template padrão contendo o cabeçalho e a tabela de índice vazia antes de adicionar o primeiro registro.
2. Utilize edições precisas de bloco (`replace_file_content` ou script Python) para atualizar a tabela do índice e fazer o append final do diálogo de forma rápida.
