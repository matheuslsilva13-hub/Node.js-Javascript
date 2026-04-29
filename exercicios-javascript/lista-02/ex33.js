const prompt = require('prompt-sync')();
console.log("=== Valores Divisíveis por 2 e 3 ===");
let n1 = Number(prompt("Informe o valor do primeiro número: "));
let n2 = Number(prompt("Informe o valor do segundo número: "));
let n3 = Number(prompt("Informe o valor do terceiro número: "));
let n4 = Number(prompt("Informe o valor do quarto número: "));
if (n1 % 2 === 0 && n1 % 3 === 0 && n2 % 2 === 0 && n2 % 3 === 0 && n3 % 2 === 0 && n3 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`Todos os números são divisíveis por 2 e por 3. ${n1}, ${n2}, ${n3} e ${n4} são os números são divisíveis por 2 e por 3.`);  
}
else if (n1 % 2 === 0 && n1 % 3 === 0 && n2 % 2 === 0 && n2 % 3 === 0 && n3 % 2 === 0 && n3 % 3 === 0) {
    console.log(`${n1}, ${n2}, ${n3} são os números são divisíveis por 2 e por 3.`);
}
else if (n1 % 2 === 0 && n1 % 3 === 0 && n2 % 2 === 0 && n2 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n1}, ${n2}, ${n4} são os números são divisíveis por 2 e por 3.`);
}
else if ( n1 % 2 === 0 && n1 % 3 === 0 && n3 % 2 === 0 && n3 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n1}, ${n3}, ${n4} são os números são divisíveis por 2 e por 3.`          );
}
else if (n1 %2 === 0 && n1 % 3 === 0 && n2 % 2 === 0 && n2 % 3 === 0 ){
    console.log(`${n1}, ${n2} são os números são divisíveis por 2 e por 3.`);
}
else if (n1 % 2 === 0 && n1 % 3 === 0 && n3 % 2 === 0 && n3 % 3 === 0) {
    console.log(`${n1} e ${n3} são os números são divisíveis por 2 e por 3.`);
}
else if (n1 % 2 === 0 && n1 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n1} e ${n4} são os números são divisíveis por 2 e por 3.`);
}
else if (n2 % 2 === 0 && n2 % 3 === 0 && n3 % 2 === 0 && n3 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n2}, ${n3} e ${n4} são os números são divisíveis por 2 e por 3.`);
}
else if (n2 % 2 === 0 && n2 % 3 === 0 && n3 % 2 === 0 && n3 % 3 === 0) {
    console.log(`${n2} e ${n3} são os números são divisíveis por 2 e por 3.`);
}
else if (n2 % 2 === 0 && n2 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n2} e ${n4} são os números são divisíveis por 2 e por 3.`);
}
else if (n3 % 2 === 0 && n3 % 3 === 0 && n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n3} e ${n4} são os números são divisíveis por 2 e por 3.`);
}
else if (n1 % 2 === 0 && n1 % 3 === 0) {
    console.log(`${n1} é o único número divisível por 2 e por 3.`);
}
else if (n2 % 2 === 0 && n2 % 3 === 0) {
    console.log(`${n2} é o único número divisível por 2 e por 3.`);
}
else if (n3 % 2 === 0 && n3 % 3 === 0) {
    console.log(`${n3} é o único número divisível por 2 e por 3.`);
}
else if (n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`${n4} é o único número divisível por 2 e por 3.`);
}
else {
    console.log("Nenhum dos números é divisível por 2 e por 3.");
}   