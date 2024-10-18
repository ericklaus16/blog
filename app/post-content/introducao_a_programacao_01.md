---
draft: false
title: "O que é um algoritmo? #01"
snippet: "Uma introdução à base da ciência da computação (aula 01)"
publishDate: "14-10-2024 08:00"
image: {
  src: "https://www.inf.unioeste.br/sitecomp/wp-content/uploads/LogoCC.png",
  alt: "Logo do curso de Ciências da Computação da UNIOESTE"
}
category: "Tutoriais"
author: "Eric Santos"
tags: [tutorial, computacao, programacao]
---
[Clique aqui para ler pelo PDF e melhorar a experiência](../pdfs/introducao_a_programacao_01.pdf)

## <a name=""></a>O que é um algoritmo?
![Exemplo de algoritmo de compras](https://asimov.academy/wp-content/uploads/2023/12/algoritmo-de-compras.png)

Um algoritmo é uma sequência de instruções bem definidas e finitas, que, quando seguidas corretamente, resolvem um problema ou realizam uma tarefa específica. 
No contexto da computação, um algoritmo descreve um conjunto de passos que **transformam uma entrada (input) em uma saída (output) desejada**. 

### Exemplos de Algoritmos na vida real

Os algoritmos não se limitam apenas ao mundo digital; eles também estão presentes no cotidiano em situações comuns. Dois exemplos práticos são:

* **Receitas de culinária**: Cada passo para preparar um prato segue um algoritmo. Por exemplo, uma receita pode começar com a mistura de ingredientes, seguidos de etapas como cozinhar e temperar, até chegar ao prato final.

* **Instruções de montagem**: Seguir um manual de montagem para construir um móvel é outro exemplo. Cada passo detalha como peças se conectam até formar o produto final.

Ambos os exemplos mostram que um algoritmo pode ser visto como uma "receita" para resolver um problema, seja na cozinha ou na montagem de algo.

### Diferença enre Algoritmos e Programas

Você sabia que existe diferença entre um Algoritmo e um Programa? Não? Pois segundo as definições:

Um algoritmo é um conceito teórico, uma lista de etapas a serem seguidas para resolver um determinado problema.

Um programa é a implementação na prática desse algoritmo em uma determinada linguagem de programação.

Agora fica a questão, o que é uma linguagem de programação? Antes de responder isso, abordaremos os chamados Pseudocódigos.

## Noções de Pseudocódigo

Pseucódigo pode ser entendido como a forma intermediária de representar os algoritmos, antes da codificação propriamente de uma linguagem de programação. 

Ele usa notações simples, sem regras rígidas de sintaxe, aproximando-se da linguagem humana. 

Sua utilização se dá por:

* Facilita a compreensão do algoritmo para iniciantes;

* Ajuda a identificar problemas de lógica antes de uma implementação.

### Exemplo simples de pseudocódigo

```plaintext
Início
  leia(x, y)

  se x > y então
    escreva ("x é maior")
  senão
    se y > x então
      escreva ("y é maior")
    senão 
      escreva ("x e y são iguais")
    fim-se
  fim-se
Fim
```

No pseudocódigo acima, podemos ver os passos sequenciais que devem ser seguidos para dado dois valores declarados pelo usuário, qual deles é maior. Esse tipo de representação mais simples torna mais fácil traduzir a lógica para um programa em qualquer linguagem de programação.

## Linguagens de Programação

Uma vez que você sabe o que são os pseudocódigos, você está pronto para aprender o que são as linguagens de programação. 

Podemos abstrair a ideia de linguagem de programação como um conjunto formal de regras e instruções que permite a um programador comunicar-se com o computador para realizar uma tarefa. Essas linguagens possuem uma sintaxe e ferramentas necessárias para escrever programas, ou seja, implementar algoritmos de forma que a máquina possa entender e executar.

Existem diversas linguagens disponíveis para utilização pois cada uma foi criada com propósitos específicos, e mesmo as que atuam em áreas iguais possuem características que as diferem uma da outra (performance, sintaxe, paradigmas etc.). Por exemplo, algumas linguagens são otimizadas para o desenvolvimento de aplicativos de alta performance, como C e C++, enquanto outras, como Python, focam na simplicidade e legibilidade, sendo amplamente usadas para automação, inteligência artifical e análise de dados.

Mas não se desespere com tantas linguagens! Para te introduzir ao mundo da programação, será ensinada C, uma linguagem poderosa e amplamente utilizada. C é uma linguagem que oferece uma compreensão sólida dos conceitos fundamentais da programação, como controle de fluxo, manipulação de dados e estruturas. Ao aprender C, você terá uma base sólida que facilitará a transição para outras linguagens no futuro.

[[Voltar ao Topo]](#top)