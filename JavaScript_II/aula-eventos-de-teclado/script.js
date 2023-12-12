const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block"
})

document.addEventListener("keyup", (event) => {
  console.log(event)
  if (event.code == "KeyQ") {
    navPerfil.style.display = "block"
  }
  if (event.code == "KeyW") {
    navPerfil.style.display = "none"
  }
} )