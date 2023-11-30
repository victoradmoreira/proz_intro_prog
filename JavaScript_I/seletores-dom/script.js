const titulo = document.getElementById("titulo");
console.log(titulo);

const textos = document.getElementsByClassName("texto-simples");
console.log(textos);
console.log(textos[0]);

const segundoTitulo = document.querySelector("div h2")
console.log(segundoTitulo);

const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);

let elementoh2 = document.querySelector("h2");
console.log(elementoh2);
console.log(elementoh2.innerText);

let rodape = document.querySelector("footer");
console.log(rodape);
console.log(rodape.innerText);
console.log(rodape.innerHTML);

elementoh2.innerText = "Novo título com JS"