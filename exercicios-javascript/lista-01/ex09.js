const prompt = require('prompt-sync')();
console.log("=== Cálculo do Quadrado de um Número Inteiro ===");
let num1 = Number(prompt("Digite um número inteiro: "));
let quadrado = Math.pow(num1, 2);
console.log(`O quadrado de ${num1} é: ${quadrado}.`);