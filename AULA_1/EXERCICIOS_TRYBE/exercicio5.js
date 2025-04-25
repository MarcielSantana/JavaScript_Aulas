// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

let peca = 'peao'.toUpperCase()

switch (peca) {
    case 'BISPO':
        console.log('O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro.');
        break;
    case 'REI':
        console.log('Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal.');
        break;
    case 'DAMA':
        console.log('A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.');
        break;
    case 'TORRE':
        console.log(' Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.');
        break;
    case 'CAVALO':
        console.log('O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.');
        break;
    case 'PEAO':
        console.log('O Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas');
        break;
    default:
        console.log('Peça inválida. Tente novamente!');
        break;
}