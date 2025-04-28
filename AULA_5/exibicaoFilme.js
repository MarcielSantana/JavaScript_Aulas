let filme = 'Os Vingadores'

const data = new Date(); // momento atual 
const horarioAtual = data.getHours();

let horarioFilme = 17

if (horarioAtual < horarioFilme){
    console.log('O filme ainda não começou');
} else if (horarioAtual == horarioFilme){
    console.log('O filme está começando agora');
} else if(horarioAtual > horarioFilme){
    console.log('O filme já terminou');
} else{
    console.log('Horário inválido! Tente novamente!');
}