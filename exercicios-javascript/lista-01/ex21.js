const prompt = require('prompt-sync')();
console.log("=== Cálculo de Potência ===");
let base = Number(prompt("Digite o valor da base: ")); 
let exp = Number(prompt("Digite o valor do expoente: "));
let rs = Math.pow(base, exp);
console.log(`${base} elevado a ${exp} é igual a: ${rs}.`);