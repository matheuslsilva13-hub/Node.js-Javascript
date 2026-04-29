const prompt = require('prompt-sync')();
console.log("=== Valores Divisíveis por 2 ou por 3 ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
let n2 = Number(prompt("Informe o valor do segundo número: "));
let n3 = Number(prompt("Informe o valor do terceiro número: "));
let n4 = Number(prompt("Informe o valor do quarto número: "));
if (n1 % 2 === 0 || n1 % 3 === 0){ 
    console.log(`${n1} é divisível por 2 ou por 3.`);
}
if (n2 % 2 === 0 || n2 % 3 === 0){
    console.log(`${n2} é divisível por 2 ou por 3.`);
}
if (n3 % 2 === 0 || n3 % 3 === 0){
    console.log(`${n3} é divisível por 2 ou por 3.`);
}
if (n4 % 2 === 0 || n4 % 3 === 0){
    console.log(`${n4} é divisível por 2 ou por 3.`);
}