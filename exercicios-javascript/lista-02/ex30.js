const prompt = require('prompt-sync')();
console.log("=== Cálculo da Média e Verificação de Aprovação ===");
let n1 = Number(prompt("Qual foi sua primeira nota do semestre: "));
let n2 = Number(prompt("Qual foi sua segunda nota do semestre: "));
let n3 = Number(prompt("Qual foi sua terceira nota do semestre: "));
let n4 = Number(prompt("Qual foi sua quarta nota do semestre: "));
let m = (n1 + n2 + n3 + n4) / 4;
if (m >= 7){
    console.log(`Média: ${m.toFixed(2)}. Você foi aprovado!`);
}
else if (m >= 1 && m < 7){
    let e = Number(prompt("Você ficou de recuperação. Informe a nota da sua prova de recuperaçao: "));
    let nm = (m + e) / 2;
    if (nm >= 5){
        console.log(`Média final: ${nm.toFixed(2)}. VOcê foi aprovado na recuperação!`);
    }
    else{
        console.log(`Média final: ${nm.toFixed(2)}. Você foi reprovado!`);
    }
}