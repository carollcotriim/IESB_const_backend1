const prompt = require('prompt-sync')();

const carrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
const valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
const salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));
const comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido: "));

const salarioFinal = salarioFixo + carrosVendidos * comissaoPorCarro + 0.05 * valorTotalVendas;

console.log(`Salário final do vendedor: R$ ${salarioFinal.toFixed(2)}`);
