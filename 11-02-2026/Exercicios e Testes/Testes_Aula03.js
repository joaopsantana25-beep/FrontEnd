/*Arquivo com testes e exercícios da Aula 03 */

function calcular_raiz(numero){
    guess = numero/2
    let raiz = 0
 

    for (let i =0; i<15;i++){
        raiz = (numero + guess**2)/(2*guess)
        guess = raiz    
    }

    return raiz
}

console.log(calcular_raiz(5))