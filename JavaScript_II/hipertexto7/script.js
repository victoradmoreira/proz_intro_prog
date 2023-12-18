let linkProz = document.getElementById("link-proz")

let btnSubmit = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e)=> {
    e.preventDefault();
    alert("Não é possível acessar o link no momento.")
})

btnSubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    
})