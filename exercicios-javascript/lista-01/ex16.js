const prompt = require('prompt-sync')();
console.log("=== Cálculo do Novo Salário com Aumento ===");
let salario = Number(prompt("Digite o seu salário atual: "));
let aumento = Number(prompt("Digite a porcentagem de aumeno: "));
let Am = salario * (aumento / 100);
let NS = salario + Am;
console.log(`O novo salário será: R$ ${NS} ,Aumento concedido: ${Am} .`);
