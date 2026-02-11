/*Arquivo com testes e exercícios da Aula 03 */

function raiz(numero){
    achado = numero/2
    let raiz = 1

    for (let i =0; i<15;i++){
        raiz = (numero + achado*achado)/(2*achado)

        achado = raiz
        
    }

    return raiz
}

console.log(raiz(2))