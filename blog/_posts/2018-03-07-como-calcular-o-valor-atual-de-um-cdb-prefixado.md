---
layout: post
title: "Como calcular o valor atual de um CDB Prefixado"
date: 2018-03-07
thumbnail: "/blog/assets/images/cdb-prefixado-bg.png"
tags: renda-fixa google-sheets novidades
---

Os CDBs prefixados podem ser uma boa opção de investimento quando você espera uma queda na taxa de juros. Você consegue "travar" uma taxa que numa questão de meses acaba deixando saudades.

Agora, o [Renda Fixa Sheets](/rendafixa) também consegue calcular o valor atual dos seus CDBs prefixados. Basta utilizar a fórmula abaixo:

<pre>
  =CDBPRE("22/09/2017"; 9%; 1000)
  =CDBPRE(data_inicial; rentabilidade; valor_inicial)
</pre>

Se você desejar entender como a conta funciona, eu explico 😀

<h2 class="near-black fw6">Como funciona</h2>

Os CDBs prefixados são simples de se calcular, uma vez que eles não dependem de outras variáveis como CDI ou índices de inflação.

Primeiro, vamos converter a taxa anual contratada em uma taxa diária, utilizando a seguinte fórmula:

<pre>
  Taxa Diária = Taxa Anual ^ 1/252
</pre>

Esse número mágico "252" da fórmula é uma convenção de mercado. Assume-se que o ano terá 252 dias úteis, porém esse nem sempre é o caso. Você pode utilizar a [tabela de feriados bancários](http://www.anbima.com.br/feriados/feriados.asp) que a Ambima divulga para descontar os feriados da nossa conta.

Tendo o número de dias úteis desde a data inicial, agora podemos obter o valor atual do CDB.

<pre>
  Valor Atual = Valor Inicial * Taxa Diária ^ (Número de Dias Úteis)
</pre>

Note que por não depender de nada, é possível até saber quanto o CDB vai render até o final, basta contar o número de dias até o vencimento.

<h2 class="near-black fw6">Simplifique suas finanças</h2>

Aproveite seu tempo livre, deixe essas e outras contas para o [Renda Fixa Sheets](/rendafixa) 😀

<div class="tc">
  <a rel="nofollow" href="/rendafixa" target="_blank" class="center br3 f5-ns ph3-ns pv2-ns f4 ph2 pv1 fw6 mb2 dib grow bg-action white" rel="nofollow">Instalar o Renda Fixa Sheets</a>
</div>

Bom proveito!
