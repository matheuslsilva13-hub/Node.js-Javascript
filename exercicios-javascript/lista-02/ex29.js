const prompt = require('prompt-sync')();
console.log("=== Cálculo da Média e Verificação de Aprovação ===");
let n1 = Number(prompt("Qual foi sua primeira nota do semestre: "));
let n2 = Number(prompt("Qual foi sua segunda nota do semestre: "));
let n3 = Number(prompt("Qual foi sua terceira nota do semestre: "));
let n4 = Number(prompt("Qual foi sua quarta nota do semestre: "));
let m = (n1 + n2 + n3 + n4) / 4;
if (m >= 5) {
    console.log(`Média: ${m.toFixed(2)}. Você foi aprovado!`);
} else {
    console.log(`Média: ${m.toFixed(2)}. Você não foi aprovado.`);
}