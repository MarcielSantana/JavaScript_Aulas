

function processarArray(array, callback){
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray.push(callback(array[i]));
    }
  return novoArray;
}

let arrayNumeros = [2, 6, 4, 3, 5]


function dobrarNumero(numero){
    return numero * 2
}

function raizQuadrada(numero){
    return Math.sqrt(numero)
}

let arrayDobrado = processarArray(arrayNumeros, dobrarNumero)

console.log(`Array com números dobrados ${arrayDobrado}`);

let arrayRaiz = processarArray(arrayNumeros, raizQuadrada)

console.log(`Array com Raiz quadrada ${arrayRaiz}`);

