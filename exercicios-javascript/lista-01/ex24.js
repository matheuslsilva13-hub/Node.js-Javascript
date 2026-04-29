const prompt = require('prompt-sync')();
console.log("=== Cálculo de Raiz Quadrada ===");
let n1 = Number(prompt("Digite a base da raiz:"));
let n2 = Number(prompt("Digite o índice da raiz: "));
let r = Math.pow(n1, 1/n2);
console.log(`A raiz ${n2} de ${n1} é igual a: ${r.toFixed(2)}.`);
