const prompt = require("prompt-sync")();
console.log("=== Conversão de Graus Celsius em Fahrenheit ===");
let c = 10;
for (let c = 10; c <= 100; c += 10) {
    let f = (c * 9 / 5) + 32;
    console.log(`${c}°C = ${f}°F`);
}