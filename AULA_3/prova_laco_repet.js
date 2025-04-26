// Array para armazenar os nomes digitados
let dadosInseridosUsuario = []

// Coleta de dados com while (true)
while (true) {
    
    let entradaUsuario = prompt('Digite um nome (ou digite "sair" para encerrar): ')

     // Verifica se o usuário quer sair (aceita "sair", "SAIR", etc)
    if (entradaUsuario.toLowerCase() === 'sair'){
        break
    }

    // Adiciona o nome ao array
    dadosInseridosUsuario.push(entradaUsuario)
}

// Processamento com for (exibir com índices)
console.log('\n📋 Lista de nomes com índices:')
for (let i = 0; i < dadosInseridosUsuario.length; i++) {
    console.log(`${i + 1}: ${dadosInseridosUsuario[i]}`)
}

// Exibição com for...of (mensagem personalizada)
console.log('\n👋 Saudações personalizadas:')
for (let nome of dadosInseridosUsuario){
    console.log(`Bem-vindo(a), ${nome.toUpperCase()}!`);
}