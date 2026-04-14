/*
Semáforo inteligente
Leia uma cor:
 verde
 amarelo
 vermelho
Mostre a ação correspondente:
 “Siga”
 “Atenção”
 “Pare”
*/

let cor ="amarelo"
cor = cor.toLowerCase()

switch (cor){
    case "verde":
        console.log("Siga");
        break;

    case "amarelo":
        console.log("Atenção")
        break;

    case "vermelho":
        console.log("Pare");
        break;
    
    default:
        console.log("Valor Inválido");
        break;
}