const prompt = require('prompt-sync')();
console.log("=== Cálculo do Quadrado da Soma de Três Números Inteiros ===");
let n1 = Number(prompt("Digite o primeiro número inteiro: "));
let n2 = Number(prompt("Digite o segundo número inteiro: "));
let n3 = Number(prompt("Digite o terceiro número inteiro: "));
let soma = n1 + n2 + n3;
let quadradoSoma = Math.pow(soma, 2);
console.log(`O quadrado da soma de ${n1}, ${n2} e ${n3} é: ${quadradoSoma} (${n1} + ${n2} + ${n3})² = (${soma})² = ${quadradoSoma}).`);