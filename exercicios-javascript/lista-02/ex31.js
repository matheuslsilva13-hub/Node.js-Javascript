const prompt = require("prompt-sync")();
console.log("=== Resolução de Equação de Segundo Grau ===");
let a = Number(prompt("Informe o valor de a: "));
let b = Number(prompt("Informe o valor de b: "));
let c = Number(prompt("Informe o valor de c: "));
let d = Math.pow(b, 2) -4 * a * c;
if (d > 0){
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log (`Os valores das raízes da equação é de x1: ${x1.toFixed(2)} e x2: ${x2.toFixed(2)}`);

}
else if (d <= 0){
    console.log("Não existe equação das raizes reais");
}