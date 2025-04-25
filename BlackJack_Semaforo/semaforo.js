let colorSemaforo= "luces intermitentes"

let mensaje = colorSemaforo == "rojo" ? "parar" :
colorSemaforo == "verde" ? "siga" :colorSemaforo == "amarillo" ? "preparar" : 
colorSemaforo == "luces intermitentes" ? "apagado" :
colorSemaforo == "cambio luces" ? "encendido" : "estado desconocido"

console.log(mensaje)