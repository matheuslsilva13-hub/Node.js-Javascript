const prompt = require('prompt-sync')();
console.log("=== Cálculo do Volume de uma Esfera ===");
let raio = Number(prompt("Digite o valor do raio da esfera: "));
let v= (4/3) * Math.PI * Math.pow(raio, 3);
console.log(` O volume da esfera é igual a: ${v.toFixed(2)} cm³.`);