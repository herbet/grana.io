---
layout: post
title: "Novos indicadores de Bitcoin"
date: 2018-02-20
thumbnail: "/blog/assets/images/bitcoin-bg.png"
tags: indicadores google-sheets novidades
---

Você pode achar que Bitcoin é o <a target="_blank" href="https://www.amazon.com.br/gp/product/B01L9WM0H8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01L9WM0H8&linkCode=as2&tag=granaio-20&linkId=7362e301f285032bccb81406827d0e25">futuro do dinheiro</a><img src="//ir-br.amazon-adsystem.com/e/ir?t=granaio-20&l=am2&o=33&a=B01L9WM0H8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> ou pode achar que é uma bolha.

Porém, o Bitcoin veio para ficar.

Usando o [Indicadores Sheets](/indicadores) você pode acompanhar as cotações em diferentes exchanges e agora mais alguns indicadores interessantes inspirados pelo [bitValor](https://bitvalor.com){:target="\_blank"}:

<pre>
  =BITCOIN("agio_comercial")
  =BITCOIN("agio_turismo")
  =BITCOIN("dolar_bitcoin")
</pre>

Esse post explica com mais detalhes essas novas funcionalidades.

<h2 class="near-black fw6">Dólar Bitcoin</h2>

O Dólar Bitcoin é o valor que se obtém ao dividir o preço local do Bitcoin, calculado pela [bitValor](https://bitvalor.com){:target="\_blank"}, pelo preço internacional do Bitcoin em dólar.

Para chegar à um preço único, é feita uma média dos preços ponderada pelo volume transacionado nas exchanges.

Vamos a um exemplo:

* 1 Bitcoin = R$35.000
* 1 Bitcoin = $10.000
* Dólar Bitcoin = R$3,50

Perceba que o dólar Bitcoin tem uma relação interessante com o dólar turismo:

Se o dólar turismo estiver em R$3,00:

* Você poderia comprar R$30,000 em dólar turismo, mandar para o exterior e comprar Bitcoin. Depois vender por R$35,000 reais ou simplesmente ficar com os Bitcoins **#HODL**

Se o dólar turismo estiver próximo de R$3,50:

* O trâmite já não compensa devido as taxas que se paga e IOF.

Se o dólar turismo estiver em R$4,00:

* Você poderia comprar Bitcoin no Brasil e converter no exterior por dólares, fazendo o caminho inverso do primeiro cenário.

Escolhemos o dólar turismo porque ele é acessível pelas pessoas comuns. O dólar comercial não, contudo as mesmas contas podem ser realizadas.

Naturalmente, o dólar Bitcoin fica próximo ao dólar turismo por questão dos cenários de arbitragem acima.

<h2 class="near-black fw6">Altcoins</h2>

O dólar Bitcoin também serve para se obter o valor de altcoins em Reais, para fazer um controle do seu portfólio, por exemplo.

Se você tem 1 Ethereum, que vale $850, basta multiplicar o valor pelo dólar bitcoin.

Seria o equivalente a trocar o Ethereum por Bitcoin, vender no Brasil e sacar em Reais.

<h2 class="near-black fw6">Ágio Comercial / Turismo</h2>

Conforme explicado anteriormente, é interessante ficar de olho nessa relação entre o dólar bitcoin e o dólar turismo. Vou compartilhar um pouco da minha interpretação, mas já adianto que existem muitas mais.

O Ágio Turismo é o valor que se obtém fazendo:

* <pre>Dólar Bitcoin / Dólar Turismo - 100%</pre>

Quando o valor está em 0%:

* O mais comum é ficar por aqui, alguns pontos para cima ou para baixo.
* Mercado local e internacional estão em equilíbrio.

Quanto o valor está bem acima de 0%:

* Significa que estamos pagando "caro" pelo Bitcoin no Brasil.
* Quando a demanda brasileira está mais acelerada que a internacional.
* Ou um movimento de queda internacional ainda não chegou.
* Cenários de euforia, [quando tudo o que se fala é Bitcoin](https://g1.globo.com/economia/noticia/me-aposento-em-seis-meses-brasileiros-largam-emprego-e-faculdade-para-se-dedicar-ao-bitcoin.ghtml){:target="\_blank"}.

Quanto o valor está abaixo 0%:

* Significa que estamos pagando "barato" pelo Bitcoin no Brasil.
* Quando a demanda brasileira está mais pessimista que a internacional.
* Ou um movimento de alta internacional ainda não chegou.
* Observado nas [quedas típicas de Janeiro.](https://www.youtube.com/watch?v=HyLnYT0F5C8){:target="\_blank"}

É um número importante de se interpretar antes de fazer aportes.

<h2 class="near-black fw6">Exchanges</h2>

Aproveitamos também para remover a exchange [Arena Bitcoin](http://www.arenabitcoin.com.br/) que está saindo do ar por tempo indeterminado e adicionamos a exchange [Braziliex](https://braziliex.com/). Veja mais na [página de ajuda](/ajuda).

Isso não é uma recomendação. Antes de usar uma exchange, pesquise bastante.

<h2 class="near-black fw6">Simplifique suas finanças</h2>

Aproveite seu tempo livre, deixe essas e outras contas para o [Indicadores Sheets](/indicadores) 😀

<div class="tc">
  <a rel="nofollow" href="/indicadores" target="_blank" class="center br3 f5-ns ph3-ns pv2-ns f4 ph2 pv1 fw6 mb2 dib grow bg-action white" rel="nofollow">Instalar o Indicadores Sheets</a>
</div>

Bom proveito!
