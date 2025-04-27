let listaCompras = []


while (true) {
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Adicionar item\n" +
        "2 - Remover item\n" +
        "3 - Atualizar item\n" +
        "4 - Exibir lista\n" +
        "5 - Sair"
    )

    // permitir que o usuário adicione novos itens à lista de compras
    if (opcao === '1') {
        while (true){
            let produto = prompt("Digite o nome do item a adicionar:")
            listaCompras.push(produto)
            if (produto === 'sair'){
                break
            }
            alert(`Item "${produto}" adicionado com sucesso.`)
            
        }
        // Aqui estou eliminando a palavra "sair" que é digitada por ultimo e termina a adição de items
        listaCompras.pop()

    } else if (opcao === '2') {
        if (listaCompras.length === 0) {
            alert("A lista está vazia.")
            continue
        }

        // perguntando qual produto o usuário quer remover
        let indice = Number(prompt("Digite o índice do item que deseja remover:"))

        // removendo pelo indice que o usuário forneceu
        if (indice >= 0 && indice < listaCompras.length) {
            let removido = listaCompras.splice(indice, 1)
            alert(`Item "${removido}" removido com sucesso.`)
        } else {
            alert("Índice inválido.")
        }

    } else if (opcao === '3') {
        if (listaCompras.length === 0) {
            alert("A lista está vazia.")
            continue
        }

        
        // atualiza um item da lista ao fornecer o índice e o novo valor
        let indice = Number(prompt("Digite o índice do item que deseja atualizar:"))
        if (indice >= 0 && indice < listaCompras.length) {
            let novoItem = prompt("Digite o novo valor:")
            listaCompras[indice] = novoItem
            alert(`Item atualizado para "${novoItem}".`)
        } else {
            alert("Índice inválido.")
        }

    } else if (opcao === '4') {
        if (listaCompras.length === 0) {
            alert("A lista está vazia.")
        } else {
            // percorrer e exibir os itens da lista.
            let listaExibida = "Lista de Compras:\n"
            for (let [index, item] of listaCompras.entries()) {
                listaExibida += `${index} - ${item}\n`
            }
            alert(listaExibida)
        }

    } else if (opcao === '5') {
        alert("Programa encerrado.")
        break

    } else {
        alert("Opção inválida. Tente novamente.")
    }
}
