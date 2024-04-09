const prompt = require('prompt-sync')();

const totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
const totalBrancos = parseInt(prompt("Digite o número de votos brancos: "));
const totalNulos = parseInt(prompt("Digite o número de votos nulos: "));
const totalValidos = parseInt(prompt("Digite o número de votos válidos: "));

const percentualBrancos = (votosBrancos = totalEleitores) * 100;
const percentualNulos = (votosNulos = totalEleitores) * 100;
const percentualValidos = (votosValidos = totalEleitores) * 100;

console.log(`Percentual de votos: ${percentualBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
