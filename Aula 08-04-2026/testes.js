usuario = {
    time : "Fluminense",
    idade : 29,
    sexo : "Masculino"
}


switch (usuario.time){
    case "Flamengo":
        console.log("Seja bem vindo flamenguista");
        break;
    case "Fluminense":
        console.log("Seja bem vindo tricolor")
        break;
    case "Vasco":
        console.log("Seja bem vindo vascaino");
        break;
    
    default:
        console.log("Seja bem vindo visitante");
        break;
}


mensagemEscolha = "Clique no setor para o qual você deseja comprar o ingresso: "
mensagemFinal = "Divirta-se no Maracaná!"

console.log(mensagemEscolha);
console.log(mensagemFinal);