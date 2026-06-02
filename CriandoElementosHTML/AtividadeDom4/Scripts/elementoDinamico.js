function elementoDinamico(){
    const ul = document.getElementById("lista")

    const li = document.createElement("li")

    li.innerText="Texto criado dinamicamente"

    ul.appendChild(li)
}