const prompt = require("prompt-sync")();
console.log("=== Somatório e Média de Dez Valores ===");
let s = 0;
let c = 0;
while (c < 10) {
    let v = Number(prompt("Digite um valor: "));
    s = s + v;
    c++;
}
let m = s / 10;
console.log(`O somatório dos valores é ${s} e a média é ${m}.`);