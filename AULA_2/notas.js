/* faça um programa para calcular as notas de alunos de uma sala
o programa deve perguntar quantos alunos tem na sala quanstas provas foram aplicadas
e pedir as notas das provas de cada aluno e no final informar a media da sala (media geral)
a melhor nota, a pior nota
 */

let numeroAlunos = Number(prompt('Quantos alunos tem na turma? '))

let provas = Number(prompt('Quantas provas aplicadas? '))

let mediasAlunos = []

let sala = []


for (let aluno = 0; aluno < numeroAlunos; aluno++){
    let notaAluno = []
    for (let prova = 0; prova < provas; prova++){
        let nota = Number(prompt('Qual a nota do aluno? '))
        notaAluno.push(nota)
    }
    sala.push(notaAluno)
    
}


let media = sum(mediasAlunos) / mediasAlunos.length