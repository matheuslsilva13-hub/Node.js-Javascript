const prompt = require('prompt-sync')();
console.log("=== Troca de Valores entre Variáveis ===");
let a = Number(prompt("Digite o valor da variável A: "));
let b = Number(prompt("Digite o valor da variável B: "));
console.log(`Antes da troca: A = ${a}, B = ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`Depois da troca: A = ${a}, B = ${b}.`);