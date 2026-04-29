const prompt = require("prompt-sync")();
console.log("=== Múltiplo de 3 e 5 ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
if (n1 % 3 === 0 && n1 % 5 === 0){
    console.log(`${n1} é múltiplo de 3 e de 5.`);
}
