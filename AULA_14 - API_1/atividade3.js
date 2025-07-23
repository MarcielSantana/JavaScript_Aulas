
async function buscarDados() {
    try {
        let resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        let dadosRecebidos = await resposta.json();
        console.log(dadosRecebidos);
        
    } catch (error) {
        console.error("Erro: ", error.message)
    }
    
}

buscarDados()