const prompt = require('prompt-sync')();
console.log("=== Cálculo da Velocidade de um Projétil ===");
let d = Number(prompt("Digite a distância percorrida em km: "));
let h = Number(prompt("Digite quantas horas demorou: "));
let v = d / h / 3.6;
console.log(`O projétil atingiu a velocidade de ${v.toFixed(2)} m/s.`);