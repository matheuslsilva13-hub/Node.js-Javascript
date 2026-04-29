const prompt = require("prompt-sync")();
console.log("=== Maior e Menor Valores entre Valores Positivos ===");
let ma = -1;
let me = -1;
while (true) {
    let v = Number(prompt("Digite um valor: "));
    if (v >= 0) {
        if ( ma < v) {
            ma = v;
        }
        if (me == -1 || me > v) {
            me = v;
        }
    }
    else {  
        break;
    }
}
console.log(`O maior valor digitado é: ${ma}`);
console.log(`O menor valor digitado é: ${me}`);