const prompt = require("prompt-sync")();
console.log("=== Verificação de Valor Menor ou Igual a 3 ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
if (n1 <= 3){
    console.log(`${n1}.`);
}