/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 5.29;
const precoGasolina = 5.99;
const KmPorLitros = 20;
const distanciaEmKm = 300;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('Valor gasto em Etanol: ' + valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('Valor gasto em Gasolina: ' + valorGasto.toFixed(2));
}