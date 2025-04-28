// Elegibilidade para Desconto no Cinema

let nome = 'Marciel'
let idade = 18

if (idade <= 12 || idade >= 60){
    console.log(`Olá ${nome}! Você tem direito a desconto especial.`);
} else if (idade >= 13 && idade <= 17){
    console.log(`Olá ${nome}! Você paga meia-entrada`);
} else{
    console.log(`Olá ${nome}! 'Sinto muito, você não está elegível para ter desconto'`);
}