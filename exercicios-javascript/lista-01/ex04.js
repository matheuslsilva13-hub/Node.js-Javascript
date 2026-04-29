const prompt = require('prompt-sync')();
console.log("=== Cálculo da Quantidade de Combustível Gasta em uma Viagem ===");
let distancia = Number(prompt("Digite a distância percorrida (em km): "));
let consumo = Number(prompt("Digite o consumo médio do veículo (em km/l): "));
let combustivelGasto = distancia / consumo;
console.log(`A quantidade de combustível gasto na viagem é: ${combustivelGasto} litros.`);