const prompt = require('prompt-sync')();
console.log("=== Coversão de Dóar para Real ===");
let valorDolar = Number(prompt("Digite o valor em Dólar: "));
let vc = 5.60
let vR = valorDolar * vc;
console.log(`O valor de ${valorDolar} Dólares é equivalente a R$ ${vR}.`);