const prompt = require("prompt-sync")();
console.log("=== Somatório dos Valores Pares ===");
let sp = 0;
for (let n = 2; n <= 500; n += 2) {
    sp += n;
}
console.log(`O somatório dos valores pares entre 1 e 500 é: ${sp}.`);