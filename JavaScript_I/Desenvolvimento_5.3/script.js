const h1 = document.createElement("h1")
const h2 = document.createElement("h2")
const h3 = document.createElement("h3")
const p = document.createElement("p")

h1.innerText = `Produto à venda`
h2.innerText = `Fritadeira Britânia Bella Cuccina`
h3.innerText = `R$ 499,99`
p.innerText = `Prepare desde frango, batata a sobremesas! Desfrute de toda praticidade da Fritadeira Britânia Bella Cuccina.`

const body = document.querySelector('body')
body.appendChild(h1)
body.appendChild(h2)
body.appendChild(h3)
body.appendChild(p)
