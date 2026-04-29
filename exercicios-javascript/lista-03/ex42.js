const prompt = require("prompt-sync")();
console.log("=== Quadrados na Faixa de Valores ===");
let n = 15;
for (let n = 15; n <= 200; n++) {
    let q = n * n;
    console.log(`O quadrado de ${n} é: ${q}.`);
    
}
