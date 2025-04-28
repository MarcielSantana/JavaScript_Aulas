// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. 
// Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num1 = 30
let num2 = 60
let num3 = 9

if (num1 > num2 && num1 > num3){
    console.log('O PRIMEIRO número é maior');
    
} else if (num2 > num3 && num2 > num1){
    console.log('O SEGUNDO número é maior');
    
} else {
    console.log('O TERCEIRO número é maior');
    
}