// Seletores dos elementos do formulário
const formulario = document.getElementById('formularioCadastroPessoas')

const nome = document.getElementById('inputNome')
const senha = document.getElementById('inputSenha')
const telefone = document.getElementById('inputTelefone')
const dataNascimento = document.getElementById('inputDataNascimento')
const email = document.getElementById('inputEmail')
const endereco = document.getElementById('inputEndereco')

const listaPessoasCadastradas = document.getElementById('pessoasCadastradas')
const botaoReset = document.getElementById('botaoReset')

// "Banco de dados" em memória
const ArrayPessoasCadastradas = []

// Função para inserir pessoa no "banco de dados"
function insertPessoaDatabase(pessoa) {
  ArrayPessoasCadastradas.push(pessoa)
}

// Função para exibir os cadastrados na página
function exibirCadastrados() {
  listaPessoasCadastradas.innerHTML = '' // limpa antes de exibir

  ArrayPessoasCadastradas.forEach(pessoa => {
    const divCard = document.createElement('div')
    divCard.classList.add('contatoCard')

    // Monta o card com os dados
    divCard.innerHTML = `
      <h2>${pessoa.inputNome}</h2>
      <p>Senha: ${pessoa.inputSenha}</p>
      <p>Telefone: ${pessoa.inputTelefone}</p>
      <p>Data de Nascimento: ${pessoa.inputDataNascimento}</p>
      <p>Email: ${pessoa.inputEmail}</p>
      <p>Endereço: ${pessoa.inputEndereco}</p>
    `
    listaPessoasCadastradas.appendChild(divCard)
  })
}

// Event listener para o envio do formulário
formulario.addEventListener('submit', (event) => {
  event.preventDefault() // impede o reload

  // Validação simples
  if (nome.value.trim() === '') {
    console.log('Preencha o campo com seu nome')
    return
  }
  if (senha.value.trim() === '') {
    console.log('Preencha o campo com sua senha')
    return
  }
  if (telefone.value.trim() === '') {
    console.log('Preencha o campo com seu telefone')
    return
  }
  if (dataNascimento.value.trim() === '') {
    console.log('Preencha o campo com sua data de nascimento')
    return
  }
  if (email.value.trim() === '') {
    console.log('Preencha o campo com seu email')
    return
  }
  if (endereco.value.trim() === '') {
    console.log('Preencha o campo com seu endereço')
    return
  }

  // Cria objeto com os dados do formulário
  const formData = new FormData(formulario)
  const pessoa = {}
  for (let entrada of formData.entries()) {
    pessoa[entrada[0]] = entrada[1]
  }

  insertPessoaDatabase(pessoa) // salva no "DB"
  formulario.reset() // limpa o formulário
  exibirCadastrados() // atualiza a exibição
})

// Event listener para limpar a lista de cadastrados
botaoReset.addEventListener('click', () => {
  listaPessoasCadastradas.innerHTML = ''
  ArrayPessoasCadastradas.length = 0 // opcional: limpa também o "banco de dados"
  console.log('Lista de pessoas cadastradas foi limpa.')
})
