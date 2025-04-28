// Exercício 1
// Altere o valor da variável menuServices para que ela passe a ter o valor “Serviços”. 
// Isso deve ser feito através da variável menu.
const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = '';

menuServices = menu[1]
console.log(menuServices);


// Exercício 2
// Adicione o valor “Contato” no final do array menu.
const menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato')
console.log(menu2);



const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
    
}