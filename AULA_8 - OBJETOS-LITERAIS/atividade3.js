// Crie um objeto chamado livro que
// contenha as seguintes propriedades:

// titulo: uma string representando o título do livro.
// autor: uma string com o nome do autor.
// ano: um número representando o ano de publicação.
// editora: uma string com o nome da editora.

// Utilize a desestruturação para extrair as
// propriedades titulo e autor do objeto livro.
// Em seguida, exiba essas propriedades no console.

let livro = {
    titulo: 'A República',
    autor: 'Platão',
    ano: 1500,
    editora: 'Martin Claret'
}

let {titulo, autor} = livro

console.log(titulo);
console.log(autor);

