const prompt = require("prompt-sync")();
console.log("=== Potência de uma Base Elevada a um Expoente ===");
let b = Number(prompt("Digite o valor da base: "));
let exp = Number(prompt("Digite o valor do expoente: "));
let p = b;
for (let i = 1; i < exp; i++) {
    p *= b;
}
console.log(`${b} elevado a ${exp} é igual a ${p}.`);