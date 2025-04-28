let numero;

do {
    numero = parseInt(prompt("Digite um número (negativo para sair):"));
    console.log("Você digitou:", numero);
} while (numero >= 0);
