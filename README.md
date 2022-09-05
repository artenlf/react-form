# react-form

Aula 1: trabalhamos com o projeto inicial mudando a abordagem de class components para function components, uma abordagem mais moderna do react. Fizemos a estrutura básica do nosso formulário utilizando essa metodologia.

Aula 2: implementamos a estilização de Material Design no nosso formulário, utilizando a bilbioteca MUI, conforme a documentação fornecida para implementação de API.

MUI: https://mui.com/material-ui/

Aula 3 e 4: utilizamos o hook useState para podermos guardar estado na nossa função do nosso componente. Para isso são devolvidas duas informações, em que a primeira é a referência para o valor do estado atual (no nosso caso "nome") e a segunda é a função que altera esse estado (no caso, "setNome").

Aula 5: aplicamos a validação de sobrenome e corrigimos o problema de validação de "nomes" que estava ocorrendo por conta de um erro na lógica do código. Armazenamos as alterações numa variável temporariamente, fazemos o teste de condição e só então passamos a alteração para a função que altera os estados (no caso, "setNome").

Aula 6: Regras dos hooks:

1.Não use Hooks dentro de loops, regras condicionais ou funções aninhadas (funções dentro de funções).

2. Use Hooks Apenas Dentro de Funções do React. Não use Hooks dentro de funções JavaScript comuns. Dica: Uma função React sempre vai renderizar algo e sempre é iniciada com uma letra Maiúscula.

link: https://pt-br.reactjs.org/docs/hooks-rules.html

Aula 7: finalizando o form, aplicando funções para os campos.
