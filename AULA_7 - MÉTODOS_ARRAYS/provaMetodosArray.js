let listaNomes = []

while (true){
    let opcao = prompt('Digite a opção desejada:\n 1 - Inserir Nomes \n 2- Encontrar nomes com letra especifica \n 3- Encontrar nome\n 4- Nomes Maiúsculos \n 5- Mais de 3 letras \n 6- Sair ')
    
    
    if (opcao == '1'){
        while (true){
            let inserirNomes = prompt('Digite o nome pra inserir na lista (ou "sair" para encerrar')
            if (inserirNomes == 'sair'){
                break
            }
            listaNomes.push(inserirNomes)
        }
        console.log("Lista atualizada:", listaNomes);
    }

    if (opcao == '2'){
        let letraNome = prompt('Digite a letra inicial para filtrar os nomes:').toLowerCase()
        
        let nomesFiltrados = listaNomes.filter((nome) => {
            return nome[0].toLowerCase() == letraNome
        })
        console.log(`Nomes Filtrados: ${nomesFiltrados}`);
    }

    if (opcao == '3'){
        let buscarNome = prompt('Digite qual "Nome" você quer achar:').toLowerCase()

        let nomeEncontrado = listaNomes.find((nome) => {
            return nome.toLowerCase() == buscarNome
        })

        console.log(`Nomes Encontrados: ${nomeEncontrado}`);
    }

    if (opcao == '4'){
        let nomesMaiusculos = listaNomes.map((nome) => {
            return nome = nome.toUpperCase()
        })
        console.log(`Nomes Maiúsculos: ${nomesMaiusculos}`);
    }

    if (opcao == '5'){
        let verificaTodosNomes = listaNomes.every((nome) => {
            if (nome.length >= 3){
                return true
            } else{
                return false
            }
        })
        console.log(`Todos os nomes tem 3 ou mais letras? ${verificaTodosNomes}`);
        
    }

    if (opcao == '6'){
        break
    }
}
