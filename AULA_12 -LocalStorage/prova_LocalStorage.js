let inputNota = document.getElementById('inputNota');
let btnAdicionarNota = document.getElementById("btnAdicionarNota");
let listaNotas = document.getElementById("notasArmazenadas");

// Carrega notas ao abrir a página
window.onload = listarNotas;

btnAdicionarNota.addEventListener('click', () => {
  let titulo = inputNota.value.trim();
  if (titulo === "") {
    alert("Digite uma nota!");
    return;
  }

  let notas = JSON.parse(localStorage.getItem('notas')) || [];

  // Verifica se o título já existe
  if (notas.find(nota => nota.titulo === titulo)) {
    alert("Nota com esse título já existe!");
    return;
  }

  notas.push({ titulo });
  localStorage.setItem('notas', JSON.stringify(notas));
  inputNota.value = "";
  listarNotas();
});

function listarNotas() {
  listaNotas.innerHTML = "";
  let notas = JSON.parse(localStorage.getItem('notas')) || [];

  notas.forEach((nota, index) => {
    let itemLista = document.createElement('li');
    itemLista.textContent = nota.titulo;

    let btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => removerNota(index);

    itemLista.appendChild(btnRemover);
    listaNotas.appendChild(itemLista);
  });
}

function removerNota(index) {
  let notas = JSON.parse(localStorage.getItem('notas')) || [];
  notas.splice(index, 1);
  localStorage.setItem('notas', JSON.stringify(notas));
  listarNotas();
}

