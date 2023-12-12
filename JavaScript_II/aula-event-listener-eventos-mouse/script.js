const quantidadeSubtotal = document.getElementById("quantidade-subtotal");
const valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizaSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizaSubtotal();

// ------------- Variáveis/Dados ---------------------//
let buttonAdicionar = document.getElementById("btn-adicionar-produto-01");
let inputQuantidade = document.getElementById("quantidade-produto-01");
let buttonSubtrair = document.getElementById("btn-subtrair-produto-01");
let valorProduto = 11.66

// ----------------- Funções -------------------------//
function adicionaUm() {
  //Manipula o input (adicionando 1)
  inputQuantidade.value = Number(inputQuantidade.value) + 1;

  //Manipular a quantidade no subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

  //Manipula o valor total no subtotal
  subtotalInfo.valor = subtotalInfo.valor + valorProduto


  //Atualiza o DOM
  atualizaSubtotal();
}

function subtraiUm() {
  //Manipula o input (subtraindo 1)
  inputQuantidade.value = Number(inputQuantidade.value) - 1;

  //Manipular a quantidade no subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

  //Manipula o valor total no subtotal
  subtotalInfo.valor = subtotalInfo.valor - valorProduto

  //Atualiza o DOM
  atualizaSubtotal();
}

// --------------------- Eventos -------------------//

buttonAdicionar.addEventListener("click", adicionaUm);
buttonSubtrair.addEventListener("click", subtraiUm);
