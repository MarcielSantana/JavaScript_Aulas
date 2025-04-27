let numeros = [2, 3, 5, 6, 8, 9, 10]

let pares = []
let impares = []
numeros.forEach(numero => {
    if (numero % 2 == 0){
        pares.push(numero)
    }
    if (numero % 2 !== 0){
        impares.push(numero)
        
    }
})