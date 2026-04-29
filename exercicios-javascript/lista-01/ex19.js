const prompt = require('prompt-sync')();
console.log("=== Cálculo das Quatro Operações Básicas ===");
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let s = n1 + n2;
let sb = n1 - n2;
let m = n1 * n2;
let d = n1 / n2;
console.log(`Soma: ${n1} + ${n2} = ${s}`)
console.log(`Subtração: ${n1} - ${n2} = ${sb}`);
console.log(`Multiplicação: ${n1} * ${n2} = ${m}`);
console.log(`Divisão: ${n1} / ${n2} = ${d}`);