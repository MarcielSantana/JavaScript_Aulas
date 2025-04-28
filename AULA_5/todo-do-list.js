let listaTarefas = []

while (true){
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Adicionar tarefa\n" +
        "2 - Remover tarefa\n" +
        "3 - Concluir tarefa\n" +
        "4 - Exibir lista\n" +
        "5 - Sair"
    )

    if (opcao === '1'){
        while (true){
            let tarefa = prompt("Digite o nome da tarefa a adicionar:")
            listaTarefas.push(tarefa)
            if (tarefa === 'sair'){
                break
            }
            console.log(`Tarefa "${tarefa}" adicionada com sucesso.`);
        }
        

    } else if (opcao === '2') {
        if (listaTarefas.length === 0) {
            console.log("A lista está vazia.");
            continue
        }

        // perguntando qual produto o usuário quer remover
        let indice = Number(prompt("Digite o índice da tarefa que deseja remover:"))

        // removendo pelo indice que o usuário forneceu
        if (indice >= 0 && indice < listaTarefas.length) {
            let removido = listaTarefas.splice(indice, 1)
            console.log(`Tarefa "${removido}" removida com sucesso.`);
        } else {
            console.log("Índice inválido.");
        }

    } else if (opcao === '3') {
        if (listaTarefas.length === 0) {
            console.log("A lista está vazia.");
            continue
        }

        let indice = Number(prompt("Digite o índice da tarefa que deseja marcar como concluída:"))

        if (indice >= 0 && indice < listaTarefas.length) {
            listaTarefas[indice] = `✅ ${listaTarefas[indice]}`
            console.log(`Tarefa marcada como concluída: ${listaTarefas[indice]}`);
        } else {
            console.log("Índice inválido.");
        }

    } else if (opcao === '4') {
        if (listaTarefas.length === 0) {
            console.log("A lista está vazia.");
        } else {
            // percorrer e exibir os itens da lista.
            let listaExibida = "Lista de Tarefas:\n"
            for (let [index, item] of listaTarefas.entries()) {
                listaExibida += `${index} - ${item}\n`
            }
            console.log(listaExibida);
        }

    } else if (opcao === '5') {
        console.log("Programa encerrado.");
        break

    } else {
        console.log("Opção inválida. Tente novamente.");
        
    }

    
}