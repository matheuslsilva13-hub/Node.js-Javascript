const prompt = require("prompt-sync")();
console.log("=== Somatório da Fatorial de Quinze Valores ===");
let s = 0;
let v = 1;
let n = 1;
for (let v = 1; v <= 15; v++) {
    let fatorial = 1;
    for (let n = 1 ; n <= v; n++) {
        fatorial = fatorial * n;
        
    }
    s = s + fatorial;
}
console.log(`O somatório da fatorial de quinze valores é ${s}.`);