# Task 006: Comportamentos e Integrações (GTM / WhatsApp)
**Status: ✅ Concluída**

## Detalhes
- **Tipo:** Behavior
- **Camada:** Integração

## Escopo
Implementar a inteligência de negócios da landing page, garantindo que botões direcionam corretamente e conversões são rastreadas.

## Tarefas
1. Implementar o scroll suave. Todos os botões primários da página (ex: "Quero agendar minha aula") devem deslizar até a div do Formulário.
2. Configurar a lógica do Formulário para que no "onSubmit" ele direcione o lead para o WhatsApp contendo uma string formatada (com Nome, Idade e Curso de interesse) e disparar o evento de conversão.
3. Adicionar os `data-layer` push events recomendados (`view_landing_obagavea`, `click_cta_hero`, `click_whatsapp`, `submit_form`) nos elementos corretos.
4. Testar a URL customizada do WhatsApp (`wa.me`) para o número configurado (`(21) 97464-3331`).
