const prompt = require("prompt-sync")();
console.log("=== Soma e Verificação ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
let n2 = Number(prompt("Informe o valor do segundo número: "));
let n3 = Number(prompt("Informe o valor do terceiro número: "));
let s = n1 + n2 + n3;
if (s > 100){
    console.log(`A soma dos números é: ${s}.`);
}