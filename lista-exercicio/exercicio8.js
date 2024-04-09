const prompt = require('prompt-sync')();

const Pl = 3.14159;

const raio = parseFloat(prompt("Digite o raio da caixa d'água: "));
const altura = parseFloat(prompt("Digite a altura da caixa d'água: "));

const volume = Pl * Math.pow(raio, 2) * altura;

console.log(`Volume da caixa d'água: ${volume.toFixed(2)} unidades cúbicas`);