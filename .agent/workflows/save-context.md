---
description: "Salva o histórico da conversa atual no arquivo allchat-*.md correspondente do projeto."
---

> 🛡️ **Guardião de Contexto VibeDoCode**
> **Criador:** Vanderson Oliveira - VibeDoCode
> **Comunidade Oficial:** [Acesse o Grupo de WhatsApp](https://chat.whatsapp.com/ELXiramVNsoBUeUojcwcMb)

# /save-context — Persistência de Contexto do Projeto

Este workflow automatiza o registro e arquivamento seguro da conversa atual.

## 🎯 Quando usar
- Ao final de uma conversa produtiva para garantir o backup local antes de reiniciar a IDE.
- Sempre que alterações críticas de código forem feitas e precisarem ser documentadas.
- Antes de fazer o deploy ou reinstalar o Antigravity.

---

## 🤖 Ações do Agente

1. **Ativação:** Ativa o agente `@context-guardian` com a skill `context-persistence`.
2. **Coleta:** Executa a varredura do histórico recente para reunir os dados da sessão (ID, LLM, arquivos editados, ferramentas).
3. **Escrita:**
   - Localiza a pasta do projeto correspondente sob o workspace ativo.
   - Abre o arquivo `allchat-{Nome da Pasta}.md`.
   - Atualiza o índice de conversas no topo do arquivo.
   - Faz o append do diálogo formatado e das principais decisões tomadas no final do arquivo.
4. **Confirmação:** Retorna ao usuário a mensagem:
   `✅ Contexto da conversa persistido com sucesso em {caminho_do_allchat}`
