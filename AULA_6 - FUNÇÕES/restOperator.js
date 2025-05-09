// Crie uma função chamada calcularSoma que utilize o rest operator para aceitar um número
// indefinido de parâmetros e calcular a soma de todos eles.
// Chame a função com diferentes quantidades de números e exiba o resultado no console.

function calcularSoma(...valores){
    let total = 0

    for (let num of valores){
        total += Number(num)
    }
    console.log(total);
    return total
}

calcularSoma(5, 10, 15, 20, 25)




// 🚀 Desafio: Média Aritmética com Rest Operator

function calcularMedia(...valores){
    if (valores.length === 0) {
        console.log("0.00");
        return 0;
    }

    let total = 0
    for (let num of valores){
        total += Number(num)
    }
    let media = total / valores.length
    console.log(media.toFixed(2));
    return media
}

calcularMedia(10, 20, 30)