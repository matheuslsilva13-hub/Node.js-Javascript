const prompt = require('prompt-sync')();
console.log("=== Cálculo da Área de uma Circunferência ===");
let r = Number(prompt("Qual valor do raio dessa circunferência ? "));
let a = Math.PI * Math.pow(r, 2);
console.log(`A área da circunferência é: ${a.toFixed(2)} cm².`);