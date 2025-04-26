// Exercicio 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

const numbers = [2 , 6, 8, 12, 16, 20];

let contador = 0
for (let index = 0; index < numbers.length; index += 1){
    
    if (numbers[index] % 2 !== 0){
        contador += 1
    } 
    
}
    if (contador === 0){
        console.log('Nenhum valor ímpar encontrado');
    }else{
        console.log(`Quantidade de valores ímpares: ${contador}`);
    }