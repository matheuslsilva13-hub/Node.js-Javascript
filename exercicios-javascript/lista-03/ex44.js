const prompt = require("prompt-sync")();
console.log("=== Soma dos Cem Primeiros Números Naturais ===");
let c = 1;
let s = 0;
while (c <= 100){
     s = s + c;
c++;
}
console.log(`A soma dos cem primeiros números naturais é: ${s}.`);