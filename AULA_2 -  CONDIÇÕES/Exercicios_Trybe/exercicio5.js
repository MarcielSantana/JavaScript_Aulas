// Exercicio 5:
// Utilizando for, descubra o maior valor contido no array e imprima-o.

const numbers = [5, 9, 3, 19, 70, 8, 100, 1, 350, 27];

let maior = numbers[0]
let menor = numbers[0]
for (let index = 0; index < numbers.length; index += 1){

    if (numbers[index] > maior) {
        maior = numbers[index]
    }
    if (numbers[index] < menor){
        menor = numbers[index]

    }
}
console.log(`O MAIOR número encontrado é ${maior}`);

console.log(`O MENOR número encontrado é ${menor}`);



