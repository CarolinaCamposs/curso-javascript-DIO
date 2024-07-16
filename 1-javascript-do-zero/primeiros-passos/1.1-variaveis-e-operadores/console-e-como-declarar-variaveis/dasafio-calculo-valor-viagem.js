
/*  Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
        1 - Preço do Combustível;
        2 - Gasto médio de Combustível do carro por KM;
        3 - Distância em KM da viagem;

 Imprima no console o valor que será gasto de combustível para realizar esta viagem.
 */

const precoCombustivel = 5.89;
const gastoMedioPorKM = 10; 
const distanciaEmKM = 600;


const litrosNecessarios = distanciaEmKM / gastoMedioPorKM;
const valorGasto = litrosNecessarios * precoCombustivel;

console.log('O valor gasto para realizar a viagem é de: R$ ' + valorGasto.toFixed(2));