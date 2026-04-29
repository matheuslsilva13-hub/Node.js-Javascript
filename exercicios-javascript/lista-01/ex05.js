const prompt = require('prompt-sync')();
console.log("=== Cálculo do Valor de uma Prestação em Atraso ===");
let valorPrestacao = Number(prompt("Digite o valor da prestação: "));
let MesesAtraso = Number(prompt("Digite a quantidade de Meses em atraso: "));
let juross = Number(prompt("Digite a taxa de juros mensal (em %): "));
let juros = juross / 100; 
let valorFinal = valorPrestacao + (valorPrestacao * juros * MesesAtraso);
console.log(`O valor final da prestação em atraso é: R$ ${valorFinal}.`);
