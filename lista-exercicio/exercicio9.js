const prompt = require('prompt-sync')();

const numero1 = parseInt(prompt("Digite o primeiro número: "));
const numero2 = parseInt(prompt("Digite o segundo número: "));

const resultado = (numero1 + numero2) * numero1;

console.log(`Resultado da operação: ${resultado}`);