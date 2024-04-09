const prompt = require('prompt-sync')();

const salarioAtual = parseFloat(prompt("Digite o salário mensal atual: "));
const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

const novoSalario = salarioAtual * (1 + percentualReajuste / 100);

console.log(`Novo salário: ${novoSalario.toFixed(2)}`);