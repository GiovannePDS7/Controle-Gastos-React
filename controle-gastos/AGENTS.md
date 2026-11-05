# AGENTS.md

## Escopo deste projeto
- Este arquivo vale para **`controle-gastos`**.
- Projeto frontend com **Vite + React** (sem backend local).

## Comandos (rodar em `controle-gastos`)
- `npm run dev` — inicia o Vite.
- `npm run build` — gera build de produção.
- `npm run preview` — serve o build localmente.
- `npm run lint` — roda **Oxlint**.
- Não há script de testes configurado.

## Regras
- Responda e comente o código em português.
- Use apenas React: não instale bibliotecas novas.
- Use componentes de função e useState para o estado.
- Use nomes de variáveis e componentes em português.
- Mostre valores em reais, com duas casas: R$ 12,50.
- Não crie nem edite o RELATORIO.md.
- Front-end limpo com estilização simples

## Estrutura principal
- `src/App.jsx` concentra estado, regras e handlers.
- `src/components/` contém componentes de UI:
  - `FormularioGasto.jsx`
  - `FiltroGastos.jsx`
  - `ListaGastos.jsx`
  - `TotalGastos.jsx`
- `src/App.css` e `src/index.css` concentram estilos globais/tela.

## Convenções do domínio
- Idioma da UI e variáveis está em **português** (manter padrão).
- Gasto segue estrutura:
  - `id` (number)
  - `descricao` (string)
  - `categoria` (string)
  - `valorNumero` (number)
  - `valorFormatado` (string em BRL)
- Formatação monetária usa `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
- Persistência local usa `localStorage` com chave:
  - `controle-gastos:gastos`

## Regras importantes já existentes
- Entrada de valor aceita apenas dígitos + `.` + `,`.
- Conversão de moeda BR/EN é feita em `converterTextoEmValor` (em `App.jsx`).
- Filtros atuais: categoria, descrição, valor mínimo e valor máximo.

## Diretrizes para mudanças
- Preferir mudanças pequenas e consistentes com o estilo atual (componentes funcionais, sem TypeScript).
- Evitar renomear props/handlers em português sem necessidade.
- Se alterar modelo de `gasto` ou chave do `localStorage`, considerar migração/compatibilidade dos dados salvos.
