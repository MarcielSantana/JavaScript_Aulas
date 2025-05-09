let filtrarPares = (array) => {
    let arrayPares = []
    for (let index = 0; index < array.length; index++){
        if (index % 2 === 0){
            arrayPares.push(array[index])
        }
    }
    return arrayPares
}
let arrayNumeros = [2, 3, 4, 5, 6, 7, 8]
console.log(filtrarPares(arrayNumeros));
