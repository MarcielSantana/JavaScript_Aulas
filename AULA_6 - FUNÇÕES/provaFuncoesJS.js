let listaTarefas = []

/* Criação de Funções Anônimas:
 - Use uma função anônima para adicionar tarefas a uma lista. 
 A função deve ser atribuída a uma variável e permitir adicionar uma nova tarefa ao array de tarefas.*/
let adicionaTarefa = (tarefa) => {
    listaTarefas.push(tarefa)
}

/* Uso de Arrow Functions:
- Implemente uma arrow function para listar todas as tarefas, 
exibindo cada tarefa com seu índice no console.*/
let mostrarTarefas = () =>{
    console.log("📋 Lista de Tarefas:")
    for (let [index, item] of listaTarefas.entries()){
        console.log(`${index} - ${item}`);
    }
}

//  - Remover uma tarefa.
let removerTarefa = (index) => {
    listaTarefas.splice(index, 1)
}

// - Atualizar uma tarefa.
let atualizarTarefa = (index, novaDescricao) => {
    listaTarefas[index] = novaDescricao
}

let concluirTarefa = (index) => {
    listaTarefas[index] += ' =  Status: ✅ concluída'
}

while (true) {
    let acao = prompt(
        "O que deseja fazer?\n" +
        "1 - Adicionar Tarefa\n" +
        "2 - Listar Tarefas\n" +
        "3 - Remover Tarefa\n" +
        "4 - Atualizar Tarefa\n" +
        "5 - Concluir Tarefa\n" +
        "6 - Sair"
    )

    if (acao === '1'){
        while (true){
            let novaTarefa = prompt("Digite a nova tarefa (ou digite 'sair' para voltar ao menu):")
            
            if (novaTarefa.toLowerCase() === 'sair'){
                break
            }
            adicionaTarefa(novaTarefa)
        }


    } else if (acao === '2'){
        if (listaTarefas.length === 0){
            console.log('Lista está vazia');
        } else {
            mostrarTarefas()
        }
        continue


    } else if (acao === '3'){
        mostrarTarefas()
        let indexRemover = Number(prompt("Digite o índice da tarefa a remover:"))
        if (indexRemover >= 0 && indexRemover < listaTarefas.length){
            removerTarefa(indexRemover)
            console.log("Tarefa removida.")
        } else {
            console.log('Lista está vazia');
        }

    } else if (acao === '4'){
        let indexAtualizar = Number(prompt("Digite o índice da tarefa a atualizar:"))
        let novaDescricao = prompt("Digite a nova descrição:")
        if (indexAtualizar >= 0 && indexAtualizar < listaTarefas.length){
            atualizarTarefa(indexAtualizar, novaDescricao)
            console.log("Tarefa atualizada.")
        } else {
            console.log('Lista está vazia');
        }

    } else if (acao === '5'){
        let indexConcluir = Number(prompt("Digite o índice da tarefa a concluir:"))
        if (indexConcluir >= 0 && indexConcluir < listaTarefas.length){
            concluirTarefa(indexConcluir)
            console.log("✅ Tarefa concluída.")
        } else {
            console.log('Lista está vazia');
        }

    } else if (acao === '6'){
        console.log("👋 Encerrando o programa. Até logo!")
        break

    } else {
        console.log('Opção inválida. Tente novamente!');
    }

}