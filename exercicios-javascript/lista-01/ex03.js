const prompt = require('prompt-sync')();
console.log("=== Cálculo do Volume de uma Lata de Óleo ===");
let raio = Number(prompt("Digite o valor do raio da lata de óleo (em cm):"));
let altura = Number(prompt("Digite o valor da altura da lata de óleo (em cm):"));
let volume = Math.PI * Math.pow(raio, 2) * altura;
console.log(`O Volume da lata de óleo é: ${volume} cm³.`);