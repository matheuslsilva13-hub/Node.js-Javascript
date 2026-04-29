const prompt = require("prompt-sync")();
console.log("=== Somatório de Grãos de Trigo no Tabuleiro de Xadrez ==");
let tg = 0;
let q = 1;
while (q <= 64) {
    gq = Math.pow(2, q - 1);
    tg = tg + gq;
    q++;
}
console.log(`O total de grãos de trigo no tabuleiro é ${tg}.`);