const prompt = require('prompt-sync')();
console.log("=== Ordenação de Três Números Inteiros ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
let n2 = Number(prompt("Informe o valor do segundo número: "));
let n3 = Number(prompt("Informe o valor do terceiro número: "));
if (n1 > n2 && n1 > n3 && n2 > n3 ){
    console.log(`Os números em ordem crescente são: ${n3}, ${n2} e ${n1}`);
}
else if (n1 > n2 && n1 > n3 && n3 > n2){
    console.log(`Os números em ordem crescente são: ${n2}, ${n3}, e ${n1}`);
}
else if (n2 > n1 && n2 > n3 && n1 > n3){
    console.log(`Os números em ordem crescente são: ${n3}, ${n1} e ${n2}`);
}
else if (n2 > n1 && n2 > n3 && n3 > n1){
    console.log(`Os números em ordem crescente são: ${n1}, ${n3} e ${n2}`);
}
else if (n3 > n1 && n3 > n2 && n1 > n2){
    console.log(`Os números em ordem crescente são: ${n2}, ${n1} e ${n3}`);
}
else if (n3 > n1 && n3 > n2 && n2 > n1){
    console.log(`Os números em ordem crescente são: ${n1}, ${n2} e ${n3}`);
}