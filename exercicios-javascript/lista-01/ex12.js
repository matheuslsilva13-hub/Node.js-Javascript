const prompt = require('prompt-sync')();
console.log("=== Conversão de Real para Dólar ===");
let vR = Number(prompt("Digite o valor em Real: "));
let vc = 5.60;
let valorDolar = vR / vc;
console.log(`O valor de R$ ${vR} é equivalente a ${valorDolar} Dólares.`);