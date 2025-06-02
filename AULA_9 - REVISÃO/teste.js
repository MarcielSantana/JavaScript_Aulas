class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;

    }
    emitirSom() {
        return  `${this.nome} está emitindo um som!`
    }

}

const cachorro = new Animal("Rex", "Cachorro");
console.log(cachorro.emitirSom());