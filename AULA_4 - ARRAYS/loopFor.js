let numeros = [2, 3, 5, 6, 8, 9, 10]

let pares = []
let impares = []
for (let numero of numeros){
    if (numero % 2 == 0){
        pares.push(numero)
    }else{
        impares.push(numero)
        
    }
}
console.log(`Os números PARES são: ${pares}`);
console.log(`Os números IMPARES são: ${impares}`);