const prompt = require("prompt-sync")();
console.log("=== Cálculo da Área Total de uma Residência ===");
let nc = prompt("Digite o nome do comodo da residência: ");
let lc = Number(prompt("Digite a largura do comodo: "));
let cc = Number(prompt("Digite o comprimento do comodo: "));
let ac = lc * cc;
let at = ac;
let c = prompt("Deseja continuar?  ");
while (c === "sim" || c === "Sim" || c === "SIM") {
    console.log(`A área do comodo ${nc} é igual a: ${at} m².`);
    break;
}