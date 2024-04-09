const prompt = require('prompt-sync')();

const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const percentualDistribuidor = 0.28;
const impostos = 0.45;

const custoConsumidor = custoFabrica * (1 + percentualDistribuidor + impostos);

console.log(`Custo ao consumidor: R$ ${custoConsumidor.toFixed(2)}`);