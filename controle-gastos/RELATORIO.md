# Relatório · Controle de Gastos

Nome: Giovanne Pagano dos Santos
Modelo usado: GPT-5.3-Codex

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Não, carregou apenas questões técnicas não relacionadas ao projeto
1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Adicionei o exemplo do material e intrui para um front-end limpo e bem organizado, pra faciltar o uso da aplicação

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: Nenhum, ficou apenas no contexto do agente
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: A regra da estrutura em 3 componentes

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: trata corretamente, mas com "." gera problemas, o agente que decidiu
M1.2 Quantas tool calls a missão usou?
Resposta: 2 chamadas ao agente

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: R$ 0,30 exibido formatado no app
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Porque o JavaScript guarda números quebrados de um jeito aproximado, então 0.1 + 0.2 pode sair 0.3000004 em vez de 0.3 exato

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Não
M3.2 Como o código sabe qual gasto remover?
Resposta: Ele usa o id de cada gasto

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: filtro com um simbolo da direita, filtro por gastos, categoria e nome
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: Plano B, ficou mais especifico

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta:No próprio navegador, no armazenamento local do site
B.2 Por que os gastos não aparecem em outro navegador?
Resposta:Porque o localStorage é local e separado por navegador

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: Através de envio de formulários e tratamento via ID
R.2 Em que momento você aceitou algo sem entender?
Resposta: Nenhum momento
R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Escolha de um filtro com o valor dos gastos e do agente a estilização e design do sistema
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: As regras de negócio e a lógica da aplicação continuariam valendo