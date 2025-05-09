// Crie uma função chamada calcularDesconto que receba dois parâmetros: preco e desconto.
// A função deve calcular o preço final do produto após aplicar o desconto e retornar esse valor.
// Chame a função com diferentes valores e exiba o resultado no console.

function calcularDesconto(preco, desconto){
    let precoDesconto = preco * (desconto / 100) 
    console.log(precoDesconto);
}

calcularDesconto(875, 15)

