const prompt = require('prompt-sync')();
console.log("=== Sucessor e Antecessor de um Número Inteiro ===");
let n = Number(prompt("Digite um número inteiro: "));
let s = n + 1;
let a = n - 1;
console.log(`O Número digitado foi: ${n}, O Sucessor é: ${s} e o Antecessor é: ${a}.`);