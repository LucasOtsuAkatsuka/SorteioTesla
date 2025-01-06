const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const sorteioBtn = document.getElementById("sorteio-btn");
const novoSorteioBtn = document.getElementById("novo-sorteio-btn");
const mostrarNumerosBtn = document.getElementById("mostrar-numeros-btn");
const resultado = document.getElementById("resultado");
const numerosSorteadosDiv = document.getElementById("numeros-sorteados");
const listaNumeros = document.getElementById("lista-numeros");


let numerosSorteados = [];


function sortearNumero() {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    resultado.textContent = "Por favor, insira valores válidos (mínimo < máximo).";
    resultado.style.color = "red";
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


sorteioBtn.addEventListener("click", sortearNumero);


novoSorteioBtn.addEventListener("click", sortearNumero);


mostrarNumerosBtn.addEventListener("click", mostrarNumeros);