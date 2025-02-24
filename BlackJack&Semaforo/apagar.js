let estadoSemaforo ="luces"

let mensaje = estadoSemaforo == "luces intermitentes" ? "apagado" :
estadoSemaforo == "cambio luces" ? "encendido" : "estado desconocido"

console.log(mensaje)