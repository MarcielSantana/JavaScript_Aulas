let cores = ['Vermelho', 'Verde', 'Azul']

// Adicionando as cores amarelo e roxo
cores.push('Amarelo', 'Roxo')
// cores.splice((cores.length -1), 0, 'Amarelo', 'Roxo') // OUTRO JEITO DE FAZER
console.log(cores);

// Remove a última cor
cores.pop()
console.log(`Remove a última cor`);

// Removendo a cor VERDE e adicionando LARANJA E MARROM
cores.splice(1, 1, 'Laranja', 'Marrom')
console.log(`Removendo a cor VERDE e adicionando LARANJA E MARROM`);
console.log(cores);

// criando novo array com as duas cores do antigo
let novasCores = cores.slice(0, 2)
console.log(`criando novo array com as duas cores do antigo: "${novasCores}"`);

// criando STRING e SEPARADA POR VIRGULA 
let CORES = cores.join('; ')
console.log(CORES);

// Revertendo a ordem do array
console.log(cores.reverse());


console.log(`Exibindo o array de cores ${cores}`);

console.log(`Exibindo o array de novasCores ${novasCores}`);

console.log(`Exibindo A STRING DEPOIS DO JOIN ${CORES}`);







