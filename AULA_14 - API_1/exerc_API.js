let idPersonagem = document.getElementById("inputIdPersonagem")
let btnBuscarPersonagem = document.getElementById("btnBuscarPersonagem")
let infoPersonagem = document.getElementById("content")
let imagemPersonagem = document.getElementById("imgPersonagem")

const fetchAPI = (value) => {
    const urlAPI = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response) => response.json())
    .then((data) => { return data})
    
    .catch(error => {'Erro: ', console.error(error.message)})

    return urlAPI
}


btnBuscarPersonagem.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchAPI(idPersonagem.value)

    infoPersonagem.textContent = `${JSON.stringify(result, undefined, 2)}`

    imagemPersonagem.src = `${result.image}`

})