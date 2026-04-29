const prompt = require('prompt-sync')();
console.log("=== Conversor de Temperatura ===");
let num1 = Number(prompt("Digite o valor de graus Celsius: "));
let result = num1 * 9/5 + 32;
console.log(`${num1} graus Celsius equivalem a ${result} graus fahrenheit.`);