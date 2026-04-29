const prompt = require('prompt-sync')();
console.log("=== Classificação de Número Positivo ou Negativo ===");
let n = Number(prompt("Digite um número inteiro para verificar se é positivo ou negativo: "));
if (n > 0) {
    console.log("O número é positivo.");
} else if (n < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}