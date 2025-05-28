let biblioteca = []

class Livro {
   constructor(titulo, autor, ano){
    this.titulo = titulo,
    this.autor = autor,
    this.ano = ano
   }

   informacoesLivro(){
    console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`);
   }
}

function adicionarLivro(titulo, autor, ano) {
    let livro = new Livro(titulo, autor, ano)
    biblioteca.push(livro)
}

function buscarLivro(titulo){
    let livroEncontrado = biblioteca.find(livro => livro.titulo === titulo)
    if (livroEncontrado){
        livroEncontrado.informacoesLivro();
    } else {
     console.log('Livro não encontrado!');
    }
}

function listarLivros(){
    for (let livro of biblioteca){
        livro.informacoesLivro()
    }
}

function idadeMediaLivros(){
    let anoAtual = new Date().getFullYear()
    
    let idadeLivros = biblioteca.reduce((acumulador, livro) => acumulador + (anoAtual - livro.ano), 0)

    let media = idadeLivros / biblioteca.length

    console.log(media)
}

adicionarLivro('A República', 'Platão', 1200)
adicionarLivro('Dom Casmurro', 'Machado de Assis', 1899)
adicionarLivro('Quem Pensa Enriquece', 'Napoleon Hill', 1939)

console.log(biblioteca);

buscarLivro('Amélia')

idadeMediaLivros()





