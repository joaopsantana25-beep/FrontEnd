/*
26.Manipulação de Datas com o Objeto Date
Objetivo: Use o objeto Date para obter a data atual e formate-a para
exibir o ano, mês, dia, hora, minuto e segundo.
*/

let data = new Date();



console.log("Ano: ",data.getFullYear())
console.log("Mês: ",data.getMonth())
console.log("Dia: ",data.getDay())
console.log("Hora: ",data.getHours())
console.log("Minutos: ",data.getMinutes())
console.log("Segundos: ",data.getSeconds())