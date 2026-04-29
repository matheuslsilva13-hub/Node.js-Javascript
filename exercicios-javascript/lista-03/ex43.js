const prompt = require("prompt-sync")();
console.log("=== Tabuada de um Número ===");
let n1 = Number(prompt("Informe um número inteiro: "));
let m = 1;
while (m <= 10){
    let r = n1 * m;
    console.log(`${n1} x ${m} = ${r}.`);
    m++;
}