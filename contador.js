const dataInicio = new Date("2024-01-01 00:00:00")

function atualizarContador(){

const agora = new Date()

const diff = agora - dataInicio

const dias = Math.floor(diff / (1000*60*60*24))
const horas = Math.floor(diff / (1000*60*60) % 24)
const minutos = Math.floor(diff / (1000*60) % 60)
const segundos = Math.floor(diff / 1000 % 60)

document.getElementById("contador").innerText =
`${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`

}

setInterval(atualizarContador,1000)
