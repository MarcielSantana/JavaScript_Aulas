function validation({ nome, idade }){
    try {
      
        if (nome.length < 3){
            throw new Error('O nome precisa ter mais de 3 caracteres');
        }
    
        if (idade < 0){
            throw new Error('A idade precisa ser maior que zero');
        }
    
        if (idade < 18){
            throw new Error('Idade precisa maior que 18 anos');
        }
        
        return 'Validação concluida com sucesso!';

    } catch (error) {
        console.error('ERRO: ', error.message);
        
    }
}
console.log(validation({nome: 'Marciel', idade: 18}));



