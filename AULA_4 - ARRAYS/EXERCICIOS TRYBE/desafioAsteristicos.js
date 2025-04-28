// Escreva um algoritmo que, dado um valor n, sendo n > 1, 
// imprima na tela um quadrado feito de asteriscos de tamanho n.

let n = 5

for (let index = 1; index <= n; index += 1){
    let linha = ''
    for (let indice = 1; indice <= n; indice += 1){
        linha += '*'
    }
    console.log(linha);
}

