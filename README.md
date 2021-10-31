# 🧩 Testes unitários

## 💁‍♂️ O que são testes unitários?
Os testes unitários tem como objetivo testar o comportamento de cada unidade individualmente, claro que `unidade` depende muito da menor parte do Software que pode ser testado. Normalmente são os métodos das classes em POO ou funções.

## 🤔 Por que utlizar os testes unitários?
Seu objetivo é mostrar que cada unidade se comporta como foi projetada, e toda vez que ocorrer uma mudança, seja melhoria ou refatoração, ela irá quebrar se deixa de atender as suas especificações.

## 🧩 O que faz dele um teste unitário?
Os testes unitários devem funcionar isoladamente, sem nenhuma operação de `input/output` como banco de dados, arquivos, rede, etc. Do contrário, ele deixa de ser um teste unitário e passa a ser um teste de integração.

## 🎭 Fakes (spy, stub, mock)
Quando estamos realizando testes, em muitos casos precisamos verificar se uma variável está carregando o conteúdo correto, se uma função foi devidamente chamada, etc.

Além disso, as vezes precisamos alterar o conteúdo delas para testar diversos cenários, ou até criar conteúdos falsos para aumentar a testabilidade.

### 🥷 Spies
São exatamente o que eles fazem, ficam assistindo funções ou variáveis para lhe reportar se tiveram o comportamento esperado, como chamada de função. E claro, importante lembrar que elas não alterar o seu comportamento das funções ou variáveis.

### 🧙 Stubs
Eles alteram o comportamento das funções e das variáveis. Assim podemos evitar que durante os testes não sejam feitas chamadas para produção, ou entender o comportamento que ela teria com determinados resultados, até mesmo falhas.

### 🧙‍♂️ Mocks
Utilizamos os mocks para 'simular' o comportamento das funções, e verificar o comportamento desta falsa função quando for chamada, quantas vezes foi chamada, com quais parâmetros, etc. Em resumo, é a combinação dos spies com os stubs, na qual observamos as funções enquanto as mesmas tem seu comportamento alterado durante os testes.