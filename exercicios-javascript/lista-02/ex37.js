const prompt = require("prompt-sync")();
console.log("=== Verificação de Faixa de Valor ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
if (n1 >= 1 && n1 <= 9){
    console.log(`${n1} está na faixa permitida.`);
}
else {
    console.log(`${n1} não está na faixa permitida.`);
}