function innerHtml(){
    const ul = document.getElementById("lista-html")

    ul.innerHTML += `
    <li><input type="text" placeholder="Digite algo"></li>`

    /*
    const ul = document.getElementById("lista-html")

    const li = document.createElement("li")
    const input = document.createElement("input")

    input.type = "text"
    input.placeholder="Digite algo"

    li.append(input)
    ul.append(li)
    */
}