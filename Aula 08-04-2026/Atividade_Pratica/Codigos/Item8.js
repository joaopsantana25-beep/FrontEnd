/*
login simples
Leia usuário e senha.
 Se usuário for admin e senha 1234, mostre “Login realizado”
 Caso contrário, “Usuário ou senha inválidos”
*/

let usuario = "admino"
let senha = "1234"


if (usuario == "admin" && senha == "1234"){
    console.log("Login Realizado")
}
else{
    console.log("Usuário ou senha inválidos")
}