const prompt = require("prompt-sync")();
console.log("=== Par ou Ímpar ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
if (n1 % 2 === 0){
    console.log(`${n1} é um número par.`);
}
else {
    console.log(`${n1} é um número ímpar.`);
}