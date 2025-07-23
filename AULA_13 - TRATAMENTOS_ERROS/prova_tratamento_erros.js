document.getElementById("formularioCadastro").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  limparErros();
  document.getElementById("mensagemFinal").textContent = "";

  try {
    let inputNome = document.getElementById("inputNome").value.trim();
    let inputUsuario = document.getElementById("inputUsuario").value.trim();
    let inputSenha = document.getElementById("inputSenha").value.trim();
    let inputEmail = document.getElementById("inputEmail").value.trim();
    let inputIdade = parseInt(document.getElementById("inputIdade").value);
    let inputDataNascimento = document.getElementById("inputDataNascimento").value;

    validarDados({ inputNome, inputUsuario, inputSenha, inputEmail, inputIdade, inputDataNascimento });

    document.getElementById("mensagemFinal").textContent = "Cadastro realizado com sucesso!";
  } catch (error) {
    if (error.campo && error.message) {
      document.getElementById("erro" + error.campo).textContent = error.message;
    }
  }
});

function validarDados({ inputNome, inputUsuario, inputSenha, inputEmail, inputIdade, inputDataNascimento }) {
  if (!inputNome) throw { campo: "Nome", message: "O nome é obrigatório." };
  if (!inputUsuario) throw { campo: "Usuario", message: "O usuário é obrigatório." };
  if (!inputSenha || inputSenha.length < 6)
    throw { campo: "Senha", message: "A senha deve ter no mínimo 6 caracteres." };
  if (!inputEmail.includes("@") || !inputEmail.includes("."))
    throw { campo: "Email", message: "Email inválido." };
  if (isNaN(inputIdade)) throw { campo: "Idade", message: "A idade é obrigatória." };
  if (inputIdade < 18)
    throw { campo: "Idade", message: "É necessário ter 18 anos ou mais para se cadastrar." };
  if (!inputDataNascimento)
    throw { campo: "DataNascimento", message: "A data de nascimento é obrigatória." };
}

function limparErros() {
  const campos = ["Nome", "Usuario", "Senha", "Email", "Idade", "DataNascimento"];
  campos.forEach((campo) => {
    const erroDiv = document.getElementById("erro" + campo);
    if (erroDiv) erroDiv.textContent = "";
  });
}

