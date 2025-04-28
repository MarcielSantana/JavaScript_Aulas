
const data = new Date(); // momento atual 
const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const horarioAtual = [horas, minutos, segundos].join(':');
console.log(`Agora são ${horarioAtual}`);


if (horas >= 10 && horas <= 22){
    console.log('A bilheteria está aberta. Você pode assistir um filme');
} else if(horas >= 8 && horas < 10){
    console.log('Aguarde! O Cinema já vai abrir');
} else {
    console.log('A bilheteria está fechada! Volte Amanhã');
}