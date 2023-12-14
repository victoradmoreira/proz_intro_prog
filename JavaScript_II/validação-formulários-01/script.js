// Armazenar elementos HTML em variáveis
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
 
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
 
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");
 
// Mostrar popup de campo obrigatório

function mostraPopup(input, label){
    input.addEventListener("focus", () => {
    label.classList.add("required-popup");
      });
}
mostraPopup(usernameInput, usernameLabel)
mostraPopup(emailInput, emailLabel)
mostraPopup(senhaInput, senhaLabel)

 
// Ocultar popup de campo obrigatório
function escondePopup(input, label){
    input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
      });
    }
    escondePopup(usernameInput, usernameLabel)
    escondePopup(emailInput, emailLabel)
    escondePopup(senhaInput, senhaLabel)

 
// Validar valor do input
usernameInput.addEventListener("change", (event) => {
  let valor = event.target.value;
 
  if (valor.length < 3) {
    // Estilo dinamicos caso o valor não seja válido
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.innerText = "Usuário deve ter pelo menos 3 caracteres";
    usernameHelper.classList.add("visible");
  } else {
    // Estilo dinamicos caso o valor seja válido
    usernameInput.classList.remove("error");
    usernameInput.classList.add("correct");
    usernameHelper.classList.remove("visible");
  }
});

emailInput.addEventListener("change", (event) => {
    let valor = event.target.value;

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    if(emailRegex.test(valor)) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    }
    else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Deve inserir um email válido";
        emailHelper.classList.add("visible");
    }
});

