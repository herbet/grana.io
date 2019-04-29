---
layout: post
title: 'Como acompanhar seus investimentos no Tesouro Direto'
date: 2018-02-09
thumbnail: '/blog/assets/images/pigbank.jpg'
tags: tesouro-direto google-sheets templates
---

O Tesouro Direto oferece excelentes oportunidades de investimento. Temos uma gama de títulos para escolher e cada um deles com características diferentes, que impactam a liquidez, rentabilidade e volatilidade do investimento.

É preciso ter um plano ao investir no Tesouro Direto, que responda as seguintes questões, entre outras:

- Quanto vou investir em cada tipo de título? (IPCA, Selic, Pre)
- Qual proporção será mais de longo prazo?
- Qual proporção preciso deixar pronta para resgate?
- Qual proporção desejo utilizar para especular?

A resposta é pessoal, depende dos seus planos de vida e seu perfil de investidor.

Nesse post, vamos focar no aspecto do acompanhamento dessas métricas, para que mês a mês você possa investir de acordo com seus seus planos.

<h2 class="near-black">Planilha</h2>

A planilha possui duas abas.

Na primeira, vemos um panorama dos investimentos no Tesouro Direto, que pode ser usado para planejar seus próximos aportes. Os gráficos são apenas sugestões de métricas as quais o investidor deve estar atento.

Os dados são atualizados automaticamente com a ajuda do [Tesouro Direto Sheets](/).

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.38.17.png" class="db center bg-light-gray pa2 br2" />

Na segunda aba é onde você vai listar suas movimentações no Tesouro Direto. Basta anotar qual título você comprou ou vendeu, a data, a quantidade de títulos, o valor investido total e a data de vencimento do título.

Ao atualizar a segunda aba, a primeira se atualiza sozinha.

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.38.29.png" class="db center bg-light-gray pa2 br2" />

Você pode baixar o template e sair usando ou pode seguir o passo a passo para aprender como tudo funciona.

<div class="tc">
  <a rel="nofollow" href="/t/1/template-tesouro-direto" target="_blank" class="center br3 f5-ns ph3-ns pv2-ns f4 ph2 pv1 fw6 mb2 dib grow bg-action white" rel="nofollow">Baixar Template</a>
</div>

<h2 class="near-black">Passo a passo</h2>

Vou mostrar o passo a passo de como criar essa planilha. No final do post você encontra o link para o template finalizado, que você pode duplicar e sair usando 👍

- No Google Drive, apertar novo e depois selecionar Planilhas Google.

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.04.09.png" class="w-60 db center bg-light-gray pa2 br2" />

- A primeira aba será nossa lista de movimentações. Adicione alguns dados de exemplo. Note que as últimas colunas podem ser calculadas a partir da primeira.
  - vencimento: `=REGEXEXTRACT(B5; "\d+")`
  - indexador: `=REGEXEXTRACT(B5; "Tesouro (\w+)")`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.05.17.png" class="w-80 db center bg-light-gray pa2 br2" />

- Selecione a tabela toda e vá em `Dados > Tabela Dinâmica`.

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.05.45.png" class="w-80 db center bg-light-gray pa2 br2" />

- No editor da tabela dinâmica, vamos adicionar:
  - Linhas: `título` (classificar por `vencimento`)

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.07.05.png" class="w-50 db center bg-light-gray pa2 br2" />

- E depois os valores:
  - Soma de `quantidade`
  - Campo calculado `=vencimento` (resumir personalizado)
  - Campo calculado `=indexador` (resumir personalizado)
  - Soma de `investido`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.07.41.png" class="w-50 db center bg-light-gray pa2 br2" />

- Essa é a nossa tabela atual de resumo. Renomeie os campos:
  - quantidade
  - vencimento
  - indexador
  - total investido

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.08.11.png" class="w-80 db center bg-light-gray pa2 br2" />

- Para calcular o valor atual dos investimentos, vamos precisar de um complemento. Selecione `Complementos > Instalar complementos...`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.08.42.png" class="w-40 db center bg-light-gray pa2 br2" />

- Faça a busca por `grana.io`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.08.56.png" class="db center bg-light-gray pa2 br2" />

- Selecione o [`Tesouro Direto Sheets`](/) e clique em `Grátis` para instalar

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.09.09.png" class="db center bg-light-gray pa2 br2" />

- Selecione sua conta e dê as permissões para que o complemento possa buscar as informações e atualizar sua planilha

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.09.23.png" class="w-60 db center bg-light-gray pa2 br2" />

- Pronto! Quando aparecer o balão abaixo é porque o complemento foi instalado:

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.09.36.png" class="w-50 db center bg-light-gray pa2 br2" />

- Voltando à tabela de resumo, na linha seguinte utilizamos a nova fórmula `=TESOURODIRETO`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.09.51.png" class="w-80 db center bg-light-gray pa2 br2" />

- Passando o nome do título como primeiro parâmetro e `preco_venda` como segundo. Isso nos dá o preço de uma unidade do título, então precisamos multiplicar pela quantidade que temos:
  - valor atual: `=TESOURODIRETO(A2; "preco_venda") * B2`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.10.11.png" class="w-80 db center bg-light-gray pa2 br2" />

- Arraste essa fórmula para todas as linhas e formate a coluna como R$.

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.10.27.png" class="w-80 db center bg-light-gray pa2 br2" />

- Outra informação que queremos exibir é o retorno de investimento. Fazemos a fórmula `valor atual / total investido - 100%`
  - retorno: `=G5/F5 - 100%`

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.10.48.png" class="w-80 db center bg-light-gray pa2 br2" />

- Para facilitar a visualização do retorno que temos, selecione `Formatar > Formatação condicional...`
  <img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.11.13.png" class="w-80 db center bg-light-gray pa2 br2" />

- Selecione `Escala de cores`:
  - Visualização: vermelho para verde
  - Ponto médio: 0 (número)

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.11.29.png" class="w-80 db center bg-light-gray pa2 br2" />

- Embeleze sua planilha ✨
  - Fonte `Comfortaa` tamanho `12`
  - Aplicar branco como cor de fundo
  - Aplicar preto como cor do texto
  - Adicione algumas bordas
  - Ajuste os espaços
  - Pronto!

<h2 class="near-black">Resultado Final</h2>

Depois de embelezar a planilha, também coloquei mais 2 gráficos que foram feitos selecionando as colunas dos dados. Abaixo você confere o resultado final e o link para acessar o template.

<img src="/blog/assets/images/post-tesouro-direto/Screen Shot 2018-02-09 at 09.38.17.png" class="db center bg-light-gray pa2 br2" />

<div class="tc">
  <a rel="nofollow" href="/t/0/template-tesouro-direto" target="_blank" class="center br3 f5-ns ph3-ns pv2-ns f4 ph2 pv1 fw6 mb2 dib grow bg-action white" rel="nofollow">Baixar Template</a>
</div>
