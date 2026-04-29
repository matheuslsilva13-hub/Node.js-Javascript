const prompt = require('prompt-sync')();
console.log("=== Cálculo da Soma dos Quadrados de Três Números Inteiros ===");
let n1 = Number(prompt("Digite o primeiro número inteiro: "));
let n2 = Number(prompt("Digite o segundo número inteiro: "));
let n3 = Number(prompt("Digite o terceiro número inteiro: "));
let somaQuadrados = Math.pow(n1, 2) + Math.pow(n2, 2) + Math.pow(n3, 2);
console.log(`A soma dos quadrados de ${n1}, ${n2} e ${n3} é: ${somaQuadrados} (${n1}² + ${n2}² + ${n3}² = ${Math.pow(n1, 2)} + ${Math.pow(n2, 2)} + ${Math.pow(n3, 2)} = ${somaQuadrados}).`);