const prompt = require("prompt-sync")();
console.log("=== Sequência de Fibonacci ===");
let t1 = 0, t2 =1;
console.log(`${t1}`);
console.log(`${t2}`);
let i = 3;
while (i <= 15) {
    let t3 = t1 + t2; 
    console.log(`${t3}`);
    t1 = t2;
    t2 = t3;
    i++;
}