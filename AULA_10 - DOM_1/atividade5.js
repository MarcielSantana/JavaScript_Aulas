 

document.getElementById('adicionarParagrafo').addEventListener('click', () => {
    let paragrafo1 = document.createElement('p')
    paragrafo1.textContent = 'Paragrafo foi criado'
    
    let espacoDiv = document.getElementById('container')
    espacoDiv.appendChild(paragrafo1)

})

document.getElementById("removerParagrafo").addEventListener('click', () => {
    let espacoDiv = document.getElementById('container')
    
    let paragrafos = espacoDiv.getElementsByTagName('p')

    // Verifica se há mais de 1 parágrafo (para não remover o original)
    if (paragrafos.length > 1){
        espacoDiv.removeChild(paragrafos[paragrafos.length - 1])
    }
})