const prompt = require('prompt-sync')();
console.log("=== Conversor de Temperatura ===");
let num1 = Number(prompt("Digite o valor de graus Fahrenheit: "));
let result = (num1 - 32) * 5/9;
console.log(`${num1} graus Fahrenheit equivalem a ${result} graus Celsius.`);