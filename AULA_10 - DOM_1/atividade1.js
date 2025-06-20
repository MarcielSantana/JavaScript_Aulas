let titulo = document.createElement('h1')

titulo.textContent = 'Novo Site'

// O método appendChild() é usado para adicionar um novo elemento filho ao final de
// um elemento pai.
document.body.appendChild(titulo)


let paragrafos = document.getElementsByTagName("p")

for (let index = 0; index < paragrafos.length; index += 1){
    paragrafos[index].textContent = "Texto segue alterado";
}

let paragrafoLoremIpsum = document.getElementById('loremIpsum')

paragrafoLoremIpsum.innerHTML = '<strong>Amor da minha, daqui até a eternidade!</strong>'

// O método removeChild() permite remover um elemento filho de um elemento pai.
 document.body.removeChild(titulo)