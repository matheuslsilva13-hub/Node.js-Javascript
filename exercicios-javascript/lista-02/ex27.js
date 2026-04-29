const prompt = require('prompt-sync')();
console.log("=== Cálculo da Diferença entre Dois Números Inteiros ===");
let n1 = Number(prompt("Digite o primeiro número inteiro: "));
let n2 = Number(prompt("Digite o segundo número inteiro: "));
let diferenca = n1 - n2;
console.log(`A diferença entre ${n1} e ${n2} é igual a: ${diferenca}.`);