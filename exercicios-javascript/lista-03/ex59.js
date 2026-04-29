const prompt = require("prompt-sync")();
console.log("=== Divisão Inteira Sem Usar o Operador de Divisão ===");
let dividendo = Number(prompt("Digite o dividendo: "));
let divisor = Number(prompt("Digite o divisor: "));
let r = 0;
while ( dividendo >= divisor ) {
    dividendo = dividendo - divisor;
    r++;
}
console.log(`O resultado da divisão inteira é: ${r}`);