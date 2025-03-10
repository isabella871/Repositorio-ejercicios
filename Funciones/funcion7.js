
const invertirPalabra = palabra =>{
    if (typeof palabra !== "string" || palabra.trim() === ""){
        return "Debe ingresar una palabra válida"
    }
    return palabra.split("").reverse().join("");
}
console.log(invertirPalabra("Martes"))
console.log(invertirPalabra("Hola"))

