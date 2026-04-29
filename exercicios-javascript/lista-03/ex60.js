const prompt = require("prompt-sync")();
console.log("=== Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3 ===");
n = 15;
while (n <= 200) {
    q = n * n;
    console.log(`O quadrado de ${n} é ${q}`);
    n += 3;
}