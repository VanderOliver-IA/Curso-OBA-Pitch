# PRD — Página de Contribuição para Lanche Coletivo Julino OBA 2026

## 1. Nome do Projeto

Página de Contribuição — Lanche Coletivo Julino OBA Tijuca 2026

## 2. URL do Projeto

Página principal para responsáveis:

`oficinabelasartes.com.br/eventos/festajunina2026`

Página interna para organizadores:

`oficinabelasartes.com.br/eventos/festajunina2026/respostas`

## 3. Contexto

No mês de julho, a Oficina Belas Artes realizará um lanche coletivo com tema de Festa Junina/Julina para os alunos da unidade Tijuca.

A página terá a função de substituir o uso de Google Forms por uma experiência mais organizada, visual e integrada ao site da OBA.

O objetivo é permitir que cada responsável informe o que pretende levar para o lanche da turma do aluno, evitando excesso de itens repetidos e facilitando a organização da equipe.

## 4. Objetivo Principal

Criar uma página simples, responsiva e objetiva para coletar a contribuição dos responsáveis para o lanche coletivo da unidade Tijuca, permitindo que:

1. O responsável escolha obrigatoriamente o dia do lanche.
2. O responsável escolha obrigatoriamente a turma/horário do aluno.
3. O responsável informe o nome da criança.
4. O responsável selecione o item que pretende levar.
5. O responsável visualize, antes de enviar, quais itens já foram escolhidos por outros responsáveis para aquela turma e data.
6. A equipe organizadora visualize todas as respostas completas em uma página separada, organizada por dia, turma e horário.

## 5. Ajuste Estrutural da Ideia Original

A ideia original está correta, mas precisa de alguns ajustes para funcionar bem tecnicamente e na prática.

### 5.1. A unidade não precisa ser escolhida

Como o evento será apenas para a unidade Tijuca, não deve existir campo para selecionar Méier ou Tijuca.

A unidade será fixa como:

Unidade: Tijuca

Isso reduz erro de preenchimento e deixa a experiência mais simples.

### 5.2. Dia e turma precisam ser campos separados

No arquivo original, havia um campo único chamado “Nome do aluno e Turma”. Para este projeto, isso deve ser separado em campos obrigatórios:

* Nome da criança
* Dia do lanche
* Turma/horário

Isso permite organizar corretamente as respostas na página dos organizadores.

### 5.3. A página precisa de armazenamento

Mesmo que não seja necessário um banco de dados dedicado, a página precisa guardar as respostas em algum lugar para conseguir:

* Mostrar o que já foi escolhido.
* Contar quantas pessoas escolheram cada item.
* Exibir as respostas completas para os organizadores.
* Evitar perda de informações quando a página for recarregada.

Recomendação técnica:

Usar armazenamento simples no próprio ambiente do site, preferencialmente uma destas opções:

1. Custom Post Type no WordPress.
2. Tabela simples no banco já existente do WordPress.
3. Arquivo JSON protegido no servidor.
4. Opção interna do WordPress via `wp_options`, caso o volume seja pequeno.

Não é necessário criar um banco externo ou sistema robusto de autenticação complexa.

### 5.4. Responsáveis não devem ver nomes de outras crianças

Na página principal, o responsável poderá ver apenas o resumo dos itens escolhidos, por exemplo:

* Paçoca — 2 contribuições
* Refrigerante — 1 contribuição
* Guardanapos — 1 contribuição

Ele não verá:

* Nome da criança
* Nome do responsável
* Observações internas
* Lista individual de respostas

Essas informações ficarão apenas na página dos organizadores.

### 5.5. A página de respostas precisa ter proteção simples

Mesmo não sendo um sistema sensível, a página `/respostas` exibirá nomes de crianças e responsáveis.

Por isso, ela não deve ficar totalmente pública.

Recomendação mínima:

* Proteger a página por senha simples.
* Bloquear indexação no Google com `noindex`.
* Não exibir link público para essa página na página principal.
* Opcionalmente, permitir acesso apenas para usuários administradores do WordPress.

## 6. Escopo do Projeto

### 6.1. Dentro do escopo

A página deve conter:

* Identidade visual da OBA.
* Texto de apresentação do lanche coletivo.
* Formulário de contribuição.
* Escolha obrigatória de dia.
* Escolha obrigatória de turma/horário.
* Nome da criança.
* Nome do responsável.
* Seleção de item.
* Campo para quantidade aproximada.
* Campo para alergênicos/ingredientes de atenção.
* Campo para observação opcional.
* Resumo público dos itens já escolhidos por turma e dia.
* Confirmação visual após envio.
* Página de respostas para organizadores.
* Filtros por dia, turma, horário e categoria.
* Possibilidade de exportar ou copiar os dados.

### 6.2. Fora do escopo

Não será necessário:

* Login para responsáveis.
* Pagamento online.
* Upload de arquivos.
* Sistema de estoque.
* Integração com WhatsApp.
* Integração com Google Forms.
* Envio automático de e-mail.
* Banco de dados externo.
* Área do aluno.
* Cadastro completo de responsáveis.

## 7. Público-Alvo da Página

### 7.1. Responsáveis

Pais, mães e responsáveis pelos alunos da unidade Tijuca que precisam informar o que irão levar para o lanche coletivo.

Necessidades principais:

* Preencher rapidamente.
* Entender o que já foi escolhido.
* Evitar levar algo muito repetido.
* Ter clareza sobre o dia e a turma correta.

### 7.2. Organizadores da OBA

Equipe interna da unidade Tijuca responsável por organizar o lanche.

Necessidades principais:

* Ver quem respondeu.
* Saber o que cada criança/responsável irá levar.
* Organizar por dia, turma e horário.
* Identificar excessos ou faltas de itens.
* Conferir alergênicos ou ingredientes que merecem atenção.

## 8. Datas do Evento

A página será criada para a unidade Tijuca nos seguintes dias:

* 14 de julho de 2026
* 16 de julho de 2026
* 18 de julho de 2026
* 22 de julho de 2026
* 24 de julho de 2026

Essas datas devem aparecer em formato claro no formulário:

* 14/07/2026
* 16/07/2026
* 18/07/2026
* 22/07/2026
* 24/07/2026

## 9. Estrutura Recomendada da Página Principal

URL:

`/eventos/festajunina2026`

### 9.1. Hero / Cabeçalho

Título sugerido:

Lanche Coletivo Julino — OBA Tijuca 🎨🌽

Subtítulo:

Vamos organizar juntos um momento especial para os alunos da Oficina Belas Artes.

Texto de apoio:

No mês de julho, teremos nosso lanche coletivo com tema de Festa Junina na unidade Tijuca. Para facilitar a organização, cada responsável poderá informar abaixo o que deseja enviar para a turma do aluno.

Pode ser uma comida típica, uma bebida, um item de apoio ou uma opção prática para quem está com a rotina corrida.

### 9.2. Aviso importante

Exibir em destaque:

Antes de escolher o item, selecione o dia e a turma do aluno. Assim você poderá ver o que outros responsáveis já escolheram para aquele mesmo horário.

### 9.3. Etapa 1 — Identificação da turma

Campos obrigatórios:

1. Dia do lanche
2. Turma/horário
3. Nome da criança
4. Nome do responsável

### 9.4. Etapa 2 — Resumo do que já foi escolhido

Depois que o responsável selecionar o dia e a turma/horário, a página deve carregar automaticamente um resumo com os itens já escolhidos para aquela turma.

Exemplo visual:

Itens já escolhidos para essa turma:

* Paçoca — 2 contribuições
* Suco de uva — 1 contribuição
* Guardanapos — 1 contribuição
* Bolo de milho — 1 contribuição

Mensagem de apoio:

Essas informações ajudam as famílias a escolherem itens variados para o lanche coletivo.

### 9.5. Etapa 3 — Escolha da contribuição

Campos obrigatórios:

1. Categoria do item
2. Item escolhido
3. Quantidade aproximada
4. Ingredientes que merecem atenção

Campo opcional:

* Observação

### 9.6. Etapa 4 — Confirmação

Antes de enviar, mostrar um resumo:

Você está confirmando:

* Criança: [Nome]
* Responsável: [Nome]
* Dia: [Data]
* Turma/horário: [Turma]
* Item: [Item]
* Quantidade: [Quantidade]
* Atenção alimentar: [Alergênicos]

Botão:

Confirmar contribuição

### 9.7. Mensagem após envio

Mensagem sugerida:

Contribuição registrada com sucesso! 🎨🌽

Muito obrigado pela participação. A colaboração de cada família ajuda a tornar esse momento ainda mais especial para os nossos alunos.

## 10. Campos do Formulário

### 10.1. Dia do lanche

Tipo: seleção obrigatória

Opções:

* 14/07/2026
* 16/07/2026
* 18/07/2026
* 22/07/2026
* 24/07/2026

### 10.2. Turma/horário

Tipo: seleção obrigatória

Observação técnica:

Os horários reais das turmas devem ser cadastrados em um arquivo de configuração ou diretamente no código antes da publicação.

Estrutura recomendada:

* Turma — Horário
* Exemplo: Terça — 09h
* Exemplo: Terça — 14h
* Exemplo: Quinta — 10h
* Exemplo: Sábado — 09h

Importante:

Não inventar horários finais sem confirmação da OBA. O sistema deve permitir cadastrar os horários reais da unidade Tijuca.

### 10.3. Nome da criança

Tipo: resposta curta
Obrigatório: sim

Validação:

* Mínimo de 2 caracteres.
* Não permitir campo vazio.

### 10.4. Nome do responsável

Tipo: resposta curta
Obrigatório: sim

Validação:

* Mínimo de 2 caracteres.
* Não permitir campo vazio.

### 10.5. Categoria do item

Tipo: seleção obrigatória

Opções:

* Comidas salgadas
* Comidas doces
* Opções práticas
* Bebidas
* Itens de apoio
* Outro item

### 10.6. Item escolhido

Tipo: seleção obrigatória

A lista de itens deve mudar de acordo com a categoria selecionada.

#### Comidas salgadas

* Cachorro-quente
* Mini cachorro-quente
* Pipoca salgada
* Milho cozido
* Pão de queijo
* Torta salgada
* Mini pastéis
* Empadinhas
* Mini sanduíches
* Sanduíches naturais

#### Comidas doces

* Bolo de milho
* Bolo de fubá
* Bolo de aipim
* Canjica
* Arroz-doce
* Curau
* Paçoca
* Pé de moleque
* Cocada
* Doce de abóbora
* Brigadeiro
* Beijinho
* Cupcakes decorados

#### Opções práticas

* Pipoca pronta
* Cookies
* Bolinhos individuais
* Salgadinhos de forno
* Salgadinhos fritos

#### Bebidas

* Suco de uva
* Suco de laranja
* Suco de maracujá
* Suco de caju
* Mate
* Guaraná natural
* Refrigerante

#### Itens de apoio

* Copos descartáveis
* Pratinhos descartáveis
* Guardanapos
* Talheres descartáveis

#### Outro item

Quando selecionar “Outro item”, exibir campo obrigatório:

Qual item você pretende levar?

### 10.7. Quantidade aproximada

Tipo: resposta curta
Obrigatório: sim

Texto de ajuda:

Exemplos: 1 bolo, 20 unidades, 2 garrafas, 1 pacote, 1 bandeja.

### 10.8. Ingredientes que merecem atenção

Tipo: caixas de seleção
Obrigatório: sim

Opções:

* Contém leite
* Contém ovo
* Contém glúten
* Contém amendoim
* Contém outro tipo de castanha
* Não sei informar
* Não possui nenhum desses ingredientes

Regra:

Permitir múltipla seleção, exceto quando a opção “Não possui nenhum desses ingredientes” for marcada. Nesse caso, desmarcar automaticamente as demais opções.

### 10.9. Observação

Tipo: campo de texto curto
Obrigatório: não

Exemplos de uso:

* Vai cortado.
* Vai em porções individuais.
* Precisa ficar na geladeira.
* Entrego no início da aula.

## 11. Funcionamento da Visualização Pública para Responsáveis

A visualização pública deve ser simples e não deve revelar identidades.

### 11.1. Quando aparece

O resumo deve aparecer depois que o responsável selecionar:

* Dia
* Turma/horário

### 11.2. O que aparece

Mostrar apenas:

* Nome do item
* Quantidade de contribuições
* Quantidade aproximada, quando possível

Exemplo:

Resumo desta turma:

* Paçoca — 2 contribuições
* Bolo de milho — 1 contribuição
* Refrigerante — 3 contribuições
* Guardanapos — 1 contribuição

### 11.3. O que não aparece

Não mostrar para responsáveis:

* Nome da criança
* Nome do responsável
* Observação individual
* Data e hora de envio
* Lista completa de pessoas

### 11.4. Organização visual

Separar o resumo por categoria:

Comidas salgadas
Comidas doces
Opções práticas
Bebidas
Itens de apoio
Outros itens

Caso ainda não exista nenhuma contribuição para aquela turma, exibir:

Ainda não temos contribuições registradas para essa turma. Você pode ser o primeiro a escolher. 🎨🌽

## 12. Página de Respostas para Organizadores

URL:

`/eventos/festajunina2026/respostas`

### 12.1. Objetivo

Permitir que a equipe da OBA visualize todas as respostas completas de forma organizada.

### 12.2. Acesso

A página deve ser protegida por uma das opções abaixo:

Opção recomendada:

* Página protegida por senha no WordPress.

Opção ideal:

* Acesso apenas para usuário administrador ou editor logado no WordPress.

Opção simples:

* URL protegida com senha/token simples.

Regras adicionais:

* A página deve ter `noindex`.
* A página não deve aparecer no menu do site.
* A página não deve ser linkada publicamente na página principal.

### 12.3. Filtros da página

A página de respostas deve permitir filtrar por:

* Dia
* Turma/horário
* Categoria
* Item
* Ingredientes de atenção

### 12.4. Organização principal

A visualização padrão deve ser agrupada assim:

1. Dia
2. Turma/horário
3. Categoria
4. Item
5. Respostas individuais

Exemplo:

## 14/07/2026

### Turma 09h

#### Comidas doces

Paçoca — 2 contribuições

1. Criança: Maria
   Responsável: Ana
   Quantidade: 1 pacote
   Atenção: Contém amendoim
   Observação: Vai fechado.

2. Criança: João
   Responsável: Carlos
   Quantidade: 20 unidades
   Atenção: Contém amendoim
   Observação: Sem observação.

### 12.5. Cards de resumo para organizadores

No topo da página, exibir cards:

* Total de contribuições
* Total por dia
* Total por turma
* Categorias mais escolhidas
* Itens mais repetidos
* Itens de apoio já confirmados
* Alertas de ingredientes com atenção

### 12.6. Tabela individual

A página também deve ter uma tabela completa com as colunas:

* Data de envio
* Dia do lanche
* Turma/horário
* Nome da criança
* Nome do responsável
* Categoria
* Item
* Quantidade
* Ingredientes de atenção
* Observação

### 12.7. Exportação

Incluir botão:

Exportar CSV

Esse recurso é recomendado para que a equipe consiga abrir a lista no Google Sheets ou Excel, caso necessário.

### 12.8. Impressão

Incluir botão:

Imprimir lista

A impressão deve gerar uma versão limpa, sem menus, botões ou elementos visuais desnecessários.

## 13. Modelo de Dados

Cada resposta deve gerar um registro com os seguintes campos:

```json
{
  "id": "uuid",
  "created_at": "2026-07-02T10:00:00-03:00",
  "event": "festajunina2026",
  "unit": "Tijuca",
  "event_date": "2026-07-14",
  "class_id": "tijuca-2026-07-14-09h",
  "class_label": "Turma 09h",
  "student_name": "Nome da criança",
  "responsible_name": "Nome do responsável",
  "category": "Comidas doces",
  "item": "Paçoca",
  "custom_item": null,
  "quantity": "1 pacote",
  "attention_ingredients": [
    "Contém amendoim"
  ],
  "notes": "Vai fechado.",
  "status": "active"
}
```

## 14. Regras de Negócio

### 14.1. Preenchimento obrigatório

O formulário só pode ser enviado se os seguintes campos estiverem preenchidos:

* Dia do lanche
* Turma/horário
* Nome da criança
* Nome do responsável
* Categoria
* Item
* Quantidade aproximada
* Ingredientes que merecem atenção

### 14.2. Outro item

Se a categoria ou item for “Outro item”, o campo de descrição do item se torna obrigatório.

### 14.3. Resumo público

O resumo público deve contabilizar apenas registros com status `active`.

### 14.4. Edição de resposta

Versão inicial:

Não precisa permitir edição pelo responsável.

Caso alguém precise alterar, a equipe da OBA pode ajustar manualmente ou remover a resposta pela área administrativa, se esse recurso for implementado.

### 14.5. Respostas duplicadas

O sistema deve permitir mais de uma resposta com o mesmo item, pois a repetição pode ser intencional.

Porém, para evitar envio acidental duplicado, após o envio:

* Desabilitar o botão por alguns segundos.
* Mostrar tela de sucesso.
* Não reenviar o formulário ao atualizar a página.

### 14.6. Cancelamento ou remoção

Na versão ideal da página de organizadores, cada resposta deve ter uma ação:

* Remover
* Marcar como cancelada

Para manter histórico, o ideal é não apagar definitivamente, apenas alterar o status para `cancelled`.

## 15. Requisitos Técnicos

### 15.1. Plataforma

O projeto será implementado no site:

`oficinabelasartes.com.br`

Considerando que o site use WordPress, a implementação recomendada é:

* Shortcode ou template personalizado para a página principal.
* Shortcode ou template protegido para a página de respostas.
* Armazenamento via Custom Post Type, tabela simples ou opção interna do WordPress.
* Endpoints REST internos para salvar e buscar contribuições.

### 15.2. Endpoints sugeridos

#### Criar contribuição

`POST /wp-json/oba/v1/festajunina2026/contribuicoes`

Função:

Salvar uma nova contribuição.

#### Buscar resumo público

`GET /wp-json/oba/v1/festajunina2026/resumo?data=2026-07-14&turma=tijuca-2026-07-14-09h`

Função:

Retornar apenas a contagem dos itens já escolhidos para uma data e turma.

Não deve retornar nomes.

#### Buscar respostas completas

`GET /wp-json/oba/v1/festajunina2026/respostas`

Função:

Retornar respostas completas apenas para organizadores.

Esse endpoint deve exigir autenticação, senha, nonce ou validação equivalente.

### 15.3. Segurança mínima

Mesmo sendo um projeto simples, aplicar:

* Sanitização de todos os campos.
* Validação no front-end e no back-end.
* Proteção contra spam básico.
* Honeypot invisível no formulário.
* Nonce do WordPress, caso implementado em WordPress.
* Limite simples de envios repetidos por curto período.
* Página de respostas com `noindex`.
* Página de respostas fora do menu público.

### 15.4. LGPD e privacidade

Os dados coletados são simples, mas envolvem nomes de crianças.

Por isso, inserir uma observação curta no formulário:

Os dados informados serão usados apenas para organização interna do lanche coletivo da OBA Tijuca e não serão exibidos publicamente para outros responsáveis.

Na visão pública, exibir apenas contagem de itens.

## 16. Requisitos de Interface

### 16.1. Estilo visual

A página deve seguir a identidade da OBA:

* Visual artístico.
* Clima alegre e junino.
* Linguagem acolhedora.
* Elementos leves.
* Uso moderado de emojis.
* Boa leitura no celular.

### 16.2. Layout mobile-first

A maioria dos responsáveis provavelmente acessará pelo celular.

Prioridades:

* Campos grandes.
* Botões visíveis.
* Texto curto.
* Etapas claras.
* Evitar formulários longos demais em uma tela só.

### 16.3. Estrutura visual sugerida

1. Cabeçalho com título do evento.
2. Texto curto explicativo.
3. Card com datas do evento.
4. Formulário em etapas.
5. Resumo dos itens já escolhidos.
6. Botão de confirmação.
7. Mensagem final de agradecimento.

### 16.4. Componentes sugeridos

* Card de apresentação.
* Select de data.
* Select de turma/horário.
* Input de nome da criança.
* Input de nome do responsável.
* Select de categoria.
* Select de item.
* Campo de quantidade.
* Checkboxes de alergênicos.
* Card de resumo público.
* Modal ou bloco de confirmação.
* Tela de sucesso.

## 17. Textos da Página Principal

### 17.1. Título

Lanche Coletivo Julino — OBA Tijuca 🎨🌽

### 17.2. Subtítulo

Vamos organizar juntos um momento especial para os nossos alunos.

### 17.3. Texto de apresentação

Olá, famílias!

No mês de julho, teremos nosso lanche coletivo com tema de Festa Junina na unidade Tijuca da Oficina Belas Artes.

Para deixar tudo mais organizado, criamos esta página para que cada responsável informe o que deseja levar no dia da turma do aluno.

Pode ser uma comida típica, uma bebida, um item de apoio ou uma opção prática para quem está com a rotina corrida.

Antes de escolher, você poderá visualizar quais itens já foram selecionados por outros responsáveis da mesma turma. Assim conseguimos montar um lanche mais variado e especial para todos.

### 17.4. Texto antes do formulário

Preencha as informações abaixo para registrar sua contribuição.

### 17.5. Texto do resumo público

Itens já escolhidos para essa turma:

Essas informações mostram apenas a quantidade de contribuições por item. Os nomes dos alunos e responsáveis ficam visíveis somente para a organização da OBA.

### 17.6. Texto de sucesso

Contribuição registrada com sucesso! 🎨✨

Muito obrigado por participar desse momento com a gente. A colaboração de cada família torna o lanche coletivo ainda mais especial.

## 18. Textos da Página de Respostas

### 18.1. Título

Respostas — Lanche Coletivo Julino OBA Tijuca 2026

### 18.2. Subtítulo

Visualização interna para organização do evento.

### 18.3. Aviso interno

Esta página é destinada apenas à equipe organizadora da OBA. As informações abaixo devem ser usadas somente para organização do lanche coletivo.

## 19. Estados da Interface

### 19.1. Carregando resumo

Mensagem:

Carregando os itens já escolhidos para essa turma...

### 19.2. Nenhum item escolhido

Mensagem:

Ainda não temos contribuições registradas para essa turma. Você pode ser o primeiro a escolher. 🎨🌽

### 19.3. Erro ao carregar resumo

Mensagem:

Não conseguimos carregar o resumo agora. Você ainda pode preencher sua contribuição normalmente.

### 19.4. Erro ao enviar

Mensagem:

Não foi possível registrar sua contribuição neste momento. Confira os campos e tente novamente.

### 19.5. Envio concluído

Mensagem:

Tudo certo! Sua contribuição foi registrada com sucesso.

## 20. Critérios de Aceite

O projeto será considerado concluído quando:

1. A página `/eventos/festajunina2026` estiver publicada.
2. O formulário permitir escolher dia, turma e horário.
3. O formulário impedir envio sem campos obrigatórios.
4. O responsável conseguir visualizar os itens já escolhidos para a turma selecionada.
5. A visualização pública não exibir nomes de crianças ou responsáveis.
6. As respostas forem salvas corretamente.
7. A página `/eventos/festajunina2026/respostas` exibir as respostas completas.
8. A página de respostas estiver protegida ou oculta do público geral.
9. A organização conseguir filtrar respostas por dia, turma e horário.
10. O layout funcionar bem no celular.
11. O formulário exibir mensagem de sucesso após envio.
12. Os dados puderem ser exportados ou copiados pela equipe, caso implementado o recurso de exportação.

## 21. Recomendações de Implementação

### 21.1. Melhor caminho

Criar um pequeno plugin ou módulo personalizado no WordPress para o evento.

Esse plugin deve conter:

* Cadastro das datas.
* Cadastro das turmas/horários.
* Lista fixa de itens.
* Formulário público.
* Resumo público agregado.
* Página interna de respostas.
* Exportação CSV.

### 21.2. Caminho mais rápido

Criar uma página personalizada com:

* HTML
* CSS
* JavaScript
* Endpoint PHP simples
* Arquivo JSON protegido para salvar respostas

Esse caminho é mais rápido, mas exige cuidado para proteger o arquivo JSON e não deixá-lo acessível publicamente.

### 21.3. Caminho mais organizado

Usar o próprio WordPress para salvar cada resposta como um registro interno.

Vantagens:

* Mais fácil proteger.
* Mais fácil exportar.
* Mais fácil manter.
* Mais seguro do que arquivo público.
* Permite evoluir para outros eventos no futuro.

## 22. Estrutura de Configuração das Turmas

Como os horários reais ainda precisam ser definidos pela OBA, o projeto deve ter uma configuração simples como esta:

```json
{
  "event": "festajunina2026",
  "unit": "Tijuca",
  "dates": [
    {
      "date": "2026-07-14",
      "label": "14/07/2026",
      "classes": [
        {
          "id": "tijuca-2026-07-14-horario-1",
          "label": "Turma / Horário a definir"
        }
      ]
    },
    {
      "date": "2026-07-16",
      "label": "16/07/2026",
      "classes": [
        {
          "id": "tijuca-2026-07-16-horario-1",
          "label": "Turma / Horário a definir"
        }
      ]
    },
    {
      "date": "2026-07-18",
      "label": "18/07/2026",
      "classes": [
        {
          "id": "tijuca-2026-07-18-horario-1",
          "label": "Turma / Horário a definir"
        }
      ]
    },
    {
      "date": "2026-07-22",
      "label": "22/07/2026",
      "classes": [
        {
          "id": "tijuca-2026-07-22-horario-1",
          "label": "Turma / Horário a definir"
        }
      ]
    },
    {
      "date": "2026-07-24",
      "label": "24/07/2026",
      "classes": [
        {
          "id": "tijuca-2026-07-24-horario-1",
          "label": "Turma / Horário a definir"
        }
      ]
    }
  ]
}
```

Antes da publicação, substituir “Turma / Horário a definir” pelos horários reais da unidade Tijuca.

## 23. Evoluções Futuras

Embora o projeto atual seja simples, a estrutura pode ser reaproveitada para outros eventos da OBA, como:

* Halloween
* Natal
* Colônia de Férias
* Exposição de desenhos
* Oficinas especiais
* Eventos por unidade

Para isso, recomenda-se que o sistema seja criado de forma reaproveitável, com configuração por evento, unidade, data e turma.

## 24. Resumo Executivo

A página `oficinabelasartes.com.br/eventos/festajunina2026` será uma solução simples e organizada para registrar as contribuições dos responsáveis no lanche coletivo julino da unidade Tijuca.

O responsável preencherá nome da criança, nome do responsável, dia, turma/horário, item escolhido, quantidade e ingredientes de atenção.

Antes de enviar, ele poderá ver um resumo dos itens já escolhidos por outras famílias daquela mesma turma, sem visualizar nomes.

A equipe da OBA terá uma página interna em `/respostas` para visualizar todos os registros completos, organizados por dia, turma e horário.

A solução não precisa de banco externo nem sistema complexo, mas precisa de armazenamento simples no próprio site para registrar respostas e gerar os resumos.

O foco é facilitar a organização, evitar repetição excessiva de itens e criar uma experiência clara, acolhedora e funcional para as famílias da OBA.



