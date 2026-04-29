const prompt = require("prompt-sync")();
console.log("=== Maior e Menor Valor ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
let n2 = Number(prompt("Informe o valor do segundo número: "));
let n3 = Number(prompt("Informe o valor do terceiro número: "));
let n4 = Number(prompt("Informe o valor do quarto número: "));
let n5 = Number(prompt("Informe o valor do quinto número: "));
let maior = n1;
let menor =n1;
if (n2 > maior ) {
    maior = n2;
}
if (n2 < menor ) {
    menor = n2;
}
if (n3 > maior ) {
    maior = n3;
}
if (n3 < menor ) {
    menor = n3;
}
if (n4 > maior ) {
    maior = n4;
}
if (n4 < menor ) {
    menor = n4;
}
if (n5 > maior ) {
    maior = n5;
}
if (n5 < menor ) {
    menor = n5;
}
console.log(`O maior valor é: ${maior}`);
console.log(`O menor valor é: ${menor}`);