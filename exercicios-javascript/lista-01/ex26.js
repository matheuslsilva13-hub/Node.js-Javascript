const prompt = require('prompt-sync')();
console.log("=== Cálculo do Quadrado da Divisão de Dois Números Inteiros ===");
let n1 = Number(prompt("Digite o primeiro número inteiro: "));
let n2 = Number(prompt("Digite o segundo número inteiro: "));
let divisao = n1 / n2;
let qd = Math.pow(divisao, 2);
console.log(`O quadrado da divisão de ${n1} por ${n2} é igual a: ${qd}.`);