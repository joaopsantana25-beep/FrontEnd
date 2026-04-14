/*
Interpretador de códigos de erro
Leia um código:
 200 = OK
 400 = Requisição inválida
 404 = Não encontrado
 500 = Erro interno
Para qualquer outro código, mostrar “Código desconhecido”.
*/

let codigo = "404";

switch(codigo){
    case "200":
        console.log(codigo,"= OK");
        break;
    
    case "400":
        console.log(codigo,"= Requisição inválida")
        break;
    
    case "404":
        console.log(codigo,"= Não encontrado")
        break;
    
    case "500":
        console.log(codigo,"= Erro interno")
        break;

    default:
        console.log("Código desconhecido")
        break;
    
}