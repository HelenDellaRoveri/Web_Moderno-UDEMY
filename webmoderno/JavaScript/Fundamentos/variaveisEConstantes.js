// Declarando variáveis
var a = 5; // Com o var, é possível redeclarar a variável depois
let b = 3; // Nova palavra reservada ES2015 que cria e não permite declarar a mesma variável novamente

console.log(a, b);

// Manipulando
var a = 50; // Redeclarando, var permite
// let b = 70; Erro: a variável já tinha sido declarada
b = 70; 

console.log(a, b);

// Declarando constantes
const c = 36;
// c = 36; Erro: Não podemos mudar o valor de um constante

console.log(c);