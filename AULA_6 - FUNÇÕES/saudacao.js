// "nome" recebe 'visitante', pois se o usuário não digitar nada ai aparecerá 'visitante' por padrão
function saudacao(nome = 'Visitante'){
    let mensagem = `Olá ${nome}! Seja muito bem vindo!`
    return mensagem
}
console.log(saudacao('Marciel'));

// chama a função sem parametro para testar a mensagem padrão 'visitante'
console.log(saudacao());
