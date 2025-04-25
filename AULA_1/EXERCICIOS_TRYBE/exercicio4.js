// 🚀 Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. 
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angu1 = 90
let angu2 = 30
let angu3 = 60

if (angu1 <= 0 || angu2 <= 0 || angu3 <= 0){
    console.log('Erro: Algum angulo é menor ou igual a zero');
} else if(angu1 + angu2 +angu3 === 180){
    console.log('É um Triangulo');
}
else{
    console.log('Não é um triangulo');
    
}