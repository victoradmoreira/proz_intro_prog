const voltarPagina = document.querySelector("main p a")
console.log(voltarPagina)

document.addEventListener("keyup", (event) => {
    if (event.code == "Backspace") {
        location.href = "./index.html"
      }
      })

document.addEventListener("keyup", (event) => {
    if (event.code == "Escape") {
        voltarPagina.click()
        }
        })

