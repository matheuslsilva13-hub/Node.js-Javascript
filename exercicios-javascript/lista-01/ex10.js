const prompt = require('prompt-sync')();
console.log("=== Cálculo da Diferença entre Dois Números Inteiros ===");
let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número inteiro: "));
let diferenca = Math.abs(num1 - num2);
console.log(`A diferença entre ${num1} e ${num2} é: ${diferenca}.`);