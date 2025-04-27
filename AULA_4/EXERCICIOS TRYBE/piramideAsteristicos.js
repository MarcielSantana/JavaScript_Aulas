// Faça o mesmo algoritmo que antes, 
// mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5

for (let index = 1; index <= n; index += 1){
    let linha = ''
    for (let indice = 1; indice <= index; indice += 1){
        linha += '*'
    }
    console.log(linha);
    
}