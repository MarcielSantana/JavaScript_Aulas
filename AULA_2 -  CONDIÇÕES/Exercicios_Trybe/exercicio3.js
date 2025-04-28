// Exercicio 3:
// Calcule e imprima a média aritmética dos valores contidos no array. 
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
const numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum1 = 0
for (let index = 0; index < numbers1.length; index += 1){
    sum1 += numbers1[index]
    console.log(sum1);
}

let media = sum1 / numbers1.length

console.log(`A média dos valores é ${media}`);