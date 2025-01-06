const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const sorteioBtn = document.getElementById("sorteio-btn");
const novoSorteioBtn = document.getElementById("novo-sorteio-btn");
const mostrarNumerosBtn = document.getElementById("mostrar-numeros-btn");
const resultado = document.getElementById("resultado");
const numerosSorteadosDiv = document.getElementById("numeros-sorteados");
const listaNumeros = document.getElementById("lista-numeros");

let numerosSorteados = [];
let intervaloCompleto = [];

function sortearNumero() {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    resultado.textContent = "Por favor, insira valores válidos (mínimo < máximo).";
    resultado.style.color = "red";
    return;
  }

  if (intervaloCompleto.length === 0) {
    intervaloCompleto = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  }

  if (numerosSorteados.length === intervaloCompleto.length) {
    resultado.textContent = "Todos os números já foram sorteados!";
    resultado.style.color = "blue";
    return;
  }

  let numeroSorteado;
  do {
    numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numerosSorteados.includes(numeroSorteado));

  numerosSorteados.push(numeroSorteado);

  resultado.textContent = `Número sorteado: ${numeroSorteado}`;
  resultado.style.color = "green";

  novoSorteioBtn.style.display = "block";
  mostrarNumerosBtn.style.display = "block";
}

function mostrarNumeros() {
  if (numerosSorteados.length === 0) {
    listaNumeros.textContent = "Nenhum número foi sorteado ainda.";
  } else {
    listaNumeros.textContent = numerosSorteados.join(", ");
  }
  numerosSorteadosDiv.style.display = "block";
}

function redefinirIntervalo() {
  numerosSorteados = [];
  intervaloCompleto = [];
  resultado.textContent = "";
  listaNumeros.textContent = "";
  numerosSorteadosDiv.style.display = "none";
  novoSorteioBtn.style.display = "none";
  mostrarNumerosBtn.style.display = "none";
}

sorteioBtn.addEventListener("click", () => {
  redefinirIntervalo();
  sortearNumero();
});

novoSorteioBtn.addEventListener("click", sortearNumero);

mostrarNumerosBtn.addEventListener("click", mostrarNumeros);