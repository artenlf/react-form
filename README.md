# react-form

curso de react function components:

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

Aula 8: criamos a função aoEnviarForm no App.js e chamamos ela na propriedade aoEnviar no bloco de renderização. No nosso FormularioCadastro, ao invés de passarmos props como parâmetros, utilizamos a propriedade aoEnviar como um parâmetro entre {}, passando as propriedades no evento de onSubmit, na linha 15.

Dica: Ao recebermos propriedades dentro de um function component do React, elas ficam salvas em um objeto que é o primeiro parâmetro passado para essa função. Essa técnica é chamada de desconstrução de objetos e podemos fazer ela com Arrays também.

Aula 9 e 10: criamos a validação para o campo CPF e tratamento de erros, utilizando propriedades do Material UI. Deixando a função de validação fora do formulário, podemos alterar as validações dependendo da parte do projeto que estamos trabalhando o que torna esse componente mais reutilizável.

--

curso de react hooks:

Aula 11, 12 e 13: no curso de hooks vamos trabalhar com multiplos formulários com campos sequenciais para o usuário ir preenchendo as informações aos poucos. Nas aulas 11, 12 e 13, povoamos o formulário com os campos que devem ser preenchidos pelo usuário. Nas próximas aulas, iremos criar o fluxo de preenchimento, separando cada formulário.

Aula 14: criamos uma função com switch para podermos alternar entre os formulários, o que também é chamado tecnicamente de Renderização Condicional. A função teve que ficar dentro do componente, pois havia um conflito de escopo nos parâmetros da nossa função componente.

Dica: o método switch não é nativo do react, por isso precisamos utilizar uma função JavaScript para poder utilizá-lo. Em outras palavras: como o JSX não possui todas as funcionalidades do JavaScript, conseguimos fazer Renderização Condicional chamando uma função a partir do JSX.

Há alguns pré-requisitos para que possamos executar uma função dentro do JSX:

1.A função deve ser executada de imediato (formularioAtual()), pois se você não executar a função, o React entende que você tá querendo renderizar uma variável e não o retorno dessa função, por isso, não funcionará.

2. A função deve retornar alguma coisa, normalmente se retorna uma string ou um outro JSX.

3. Caso esteja usando alguma variável que está no escopo do componente, a função deve estar dentro do próprio componente ou ser passada para a função via parâmetro.

Aula 15: alteramos o comportamento do método/parâmetro "aoEnviar", fazendo uma injeção de dependências a fim de fazer com que o comportamento dele no caso do "onSubmit" seja de passar para o próximo formulário, ao executar a função "proximaEtapa". Ao final, o "aoEnviar" irá ter o comportamento que tinha anteriormente, enviando todos os dados, conforme as propriedades que ele recebe da função aoEnviarForm. Além disso, adicionamos o atributo "required" aos nossos campos de formulários.

Aula 16: substituimos o switch por um array, para que nossas etapas sejam delimitadas. Por quê fizemos isso? A estrutura de um switch statement é tipicamente espalhada por diversos métodos. Isso é o que se chama de "code smell": quando uma nova condição for adicionada, teremos que encontrar todos os switch e modificá-los a fim de evitarmos comportamentos inesperados/bugs. A regra mais aplicada é quando nos deparamos com switch, devemos pensar em aplicar polimorfismo.

dica: code smell é qualquer característica no código-fonte de um programa que possivelmente indica um problema mais profundo. Para saber mais: https://coodesh.com/blog/dicionario/o-que-e-code-smell/

Aula 17: adicionamos estados nos componentes individuais de cada formulário, para que possamos armazenar os dados de input do usuário. Na próxima aula, vamos integrar os dados de formulário, pois por enquanto o sistema está guardando os dados apenas do último formulário preenchido (isto é: DadosDeEntrega).

Aula 18: Para podermos coletar os dados corretamente, precisamos levar em conta que a função sendo executada para coletar os dados é assincrona e gera efeitos colaterais. Para executar esses efeitos colaterais em componentes funcionais utilizamos o Effect Hook através da declaração useEffect(), no nosso caso, passando uma função anônima.

Dica: sobre o effect hook ler mais em: https://pt-br.reactjs.org/docs/hooks-effect.html
