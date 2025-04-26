// divisivel por 4
// não divisivel por 100 exceto quando divisivel por 400

ano = 2025
if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
    console.log('É bissexto');
    
} else{
    console.log('Não é bissexto');
    
}