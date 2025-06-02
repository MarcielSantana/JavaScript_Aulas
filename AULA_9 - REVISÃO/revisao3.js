function realizarOperacao(num1, num2, callback){

    callback(num1, num2)
}

function somar(num1, num2){
    let soma = num1 + num2
    console.log(soma);
    return soma
    

}


function multiplicar(num1, num2){
    let multiplicacao = num1 * num2
    console.log(multiplicacao);
    return multiplicacao
}


realizarOperacao(2, 2, somar);

realizarOperacao(3, 3, multiplicar);

