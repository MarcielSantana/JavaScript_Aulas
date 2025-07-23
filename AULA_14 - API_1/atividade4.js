const { default: fetch } = require("node-fetch");

function criarPost() {

    const urlAPI = 'https://jsonplaceholder.typicode.com/posts';

    let dadosEnviar = {
        tituloPost: '',
        conteudoPost:'',
        userId: 1
    };

    fetch(urlAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosEnviar)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta da API:', data);
    })
    .catch(error => {
        console.error('Erro ao criar o post:', error);
    });
}

criarPost()