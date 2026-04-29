const prompt = require("prompt-sync")();
console.log("=== Potências de 3 ===");
let exp = 0;
while (exp <= 15) {
    console.log(`3^${exp} = ${Math.pow(3, exp)}`);
    exp++;
    }