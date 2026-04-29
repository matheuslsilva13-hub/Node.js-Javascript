const prompt = require("prompt-sync")();
console.log("=== Multiplicação e Verificação ===");
let n1 = Number(prompt("Informe um número inteiro: "));
let r = n1 * 2;
if (r > 30){
    console.log(`O resultado da multiplicação é: ${r}.`);
}