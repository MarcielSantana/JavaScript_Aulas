// MÓDULO JAVASCRIPT
// AULA 1 - PROVA INTRODUÇÃO A JAVASCRIPT

// solicita ao usuários dois números
let numero1 = Number(prompt('Digite o PRIMEIRO número '))
let numero2 = Number(prompt('Digite o SEGUNDO número '))

// Adição
let Soma = numero1 + numero2
console.log(`A SOMA de ${numero1} + ${numero2} = ${Soma}`);

// Subtração
let Subtracao = numero1 - numero2
console.log(`A SUBTRAÇÃO de ${numero1} - ${numero2} = ${Subtracao}`);

// Multiplicação
let multiplicacao = numero1 * numero2
console.log(`A MULTIPLICAÇÃO de ${numero1} * ${numero2} = ${multiplicacao}`);

let resultado;
// Divisão
if (numero2 !== 0) {
    resultado /= numero2; // resultado = resultado / num2
    console.log(`Divisão: ${numero1} / ${numero2} = ${numero1 / numero2}`);
} else {
    console.log("Divisão por zero não é permitida.");
}

// Resto da Divisão (Módulo)
if (numero2 !== 0) {
    resultado %= numero2; // resultado = resultado % num2
    console.log(`Resto da divisão: ${numero1} % ${numero2} = ${numero1 % numero2}`);
} else {
    console.log("Não é possível calcular o resto com divisor zero.");
}