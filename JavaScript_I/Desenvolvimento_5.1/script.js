const h1 = document.createElement("h1")
const a = document.createElement("a")
const ul = document.createElement("ul")
const ol = document.createElement("ol")

h1.innerText = `novo título`
a.innerText = `href="https://prozeducacao.com.br"`
ul.innerHTML = `<li>item1</li> <li>item2</li> <li>item3</li>`
ol.innerHTML = `<li> <a href="https://www.youtube.com">Youtube</a> 
</li> <li> <a href="https://www.amazon.com.br">Amazon</a> 
</li> <li> <a href="https://lichess.org/">Lichess</a> </li>`

const body = document.querySelector('body')
body.appendChild(h1)
body.appendChild(a)
body.appendChild(ul)
body.appendChild(ol)
