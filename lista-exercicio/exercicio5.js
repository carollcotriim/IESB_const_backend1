const prompt = require('prompt-sync')();

const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const percentualDistribuidor = parseFloat(prompt("Digite o percentual do distribuidor: "));
const imposto = parseFloat(prompt("Digite o valor do imposto: "));

const custoConsumidor = custoFabrica * (1 + percentualDistribuidor / 100 + imposto / 100);

console.log(`Custo final ao consumidor: R$ ${custoConsumidor.toFixed(2)}`);