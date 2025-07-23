function divisao(numero, divisor){
    try {
        if (divisor === 0){
            console.log('Não é possível dividir algo por ZERO');
        }
        return numero / divisor
        
    } catch (error) {
        console.error('ERRO', error.message)
        
    }
}
console.log(divisao(6, 0));

