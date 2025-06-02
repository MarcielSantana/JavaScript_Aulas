let listaProdutos = []

class Produto {
    constructor(nome, preco, categoria){
        this.nome = nome,
        this.preco = preco,
        this.categoria = categoria
    }

    exibirDetalhesProduto(){
        console.log(`Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)} | Categoria: ${this.categoria}`);

    }
}

function adicionaProduto(nome, preco, categoria){
    var produto = new Produto(nome, preco, categoria);
    listaProdutos.push(produto)
    console.log('Produto adicionado com sucesso!');
    
}

function listarTodosProdutos(){
    console.log('Lista de produtos: ');
    listaProdutos.forEach((produto) => produto.exibirDetalhesProduto());
    
}

// Buscar produto por nome
function buscarProduto(nome) {
    const encontrado = listaProdutos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
    if (encontrado) {
        console.log("Produto encontrado:");
        encontrado.exibirDetalhesProduto();
    } else {
        console.log("Produto não encontrado.");
    }
}

// Filtrar produtos por categoria
function filtrarPorCategoria(categoria) {
    const filtrados = listaProdutos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
    console.log(`Produtos da categoria "${categoria}":`);
    filtrados.forEach(produto => produto.exibirDetalhesProduto());
}

// Resumo estatístico - soma total dos preços
function resumoEstatistico() {
    const total = listaProdutos.reduce((soma, produto) => soma + produto.preco, 0);
    console.log(`Valor total dos produtos: R$ ${total.toFixed(2)}`);
}


adicionaProduto("Celular", 1200, "Eletronico");
adicionaProduto("Notebook", 3000, "Eletronico");
adicionaProduto("Cafeteira", 300, "Eletrodoméstico");

listarTodosProdutos();

buscarProduto("Notebook");

filtrarPorCategoria("Eletronico");

resumoEstatistico();

