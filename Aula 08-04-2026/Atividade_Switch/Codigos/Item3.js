/*
Mensagem de saudação por turno
Leia o turno:
 M = Bom dia
 T = Boa tarde
 N = Boa noite
Use switch para responder.
*/

let turno ="t"
turno = turno.toUpperCase()

switch (turno){
    case "M":
        console.log("Bom dia");
        break;

    case "T":
        console.log("Boa tarde")
        break;

    case "N":
        console.log("Boa noite");
        break;
    
    default:
        console.log("Valor Inválido");
        break;
}