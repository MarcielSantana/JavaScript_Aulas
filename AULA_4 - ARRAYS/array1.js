let animais = ['Cachorro', 'Gato', 'Papagaio']

// adicionando Tartaruga na última posição
animais.push('Tartaruga')
console.log(`adicionando Tartaruga na última posição: "${animais}"`);

// remove o primeiro elemento
animais.shift(animais)
console.log(`remove o primeiro elemento "${animais}"`);

// adiciona o "Coleho" na primeira posição
animais.unshift('Coelho')
console.log(`adiciona o "Coelho" na primeira posição "${animais}"`);


// Remove o elemento a partir da 'posição 0', adiciona algo na posição 1
// FAZ AS VEZES DE SHIFT E UNSHIFT
animais.slice(0, 1, 'Coelho')

// substituindo o elemento da posição 2 por Hamster
animais[2] = 'Hamster'
console.log(`substituindo o elemento da posição 2 por Hamster "${animais}"`);

// exibindo o comprimento atual do array
console.log(`exibindo o comprimento atual do array "${animais.length}"`);

// acessando e exibindo o elemento da posição 1
console.log(`acessando e exibindo o elemento da posição 1 "${animais[1]}"`);

// Exibindo o array
console.log(animais);









