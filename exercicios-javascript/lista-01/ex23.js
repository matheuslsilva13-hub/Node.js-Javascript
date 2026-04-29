const prompt = require('prompt-sync')();
console.log("=== Conversão de Pés para Metros ===");
let n1 = Number(prompt("DIgite a altura em pés: "));
let r = n1 * 0.3048;
console.log(`${n1} pés equivalem a ${r} metros.`);