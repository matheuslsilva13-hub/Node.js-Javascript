const prompt = require('prompt-sync')();
console.log("=== Cálculo do Volume de uma Caixa Retangular ===");
let comprimento = Number(prompt("Digite o valor do comprimento da caixa (em cm):"));
let largura = Number(prompt("Digite o valor da largura da caixa (em cm):"));
let altura = Number(prompt("Digite o valor da altura da caixa (em cm):"));
let volume = comprimento * largura * altura;
console.log(`O Volume da caixa retangular é: ${volume} cm³.`);