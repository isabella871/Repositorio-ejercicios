
const letra = (palabra , letra) => {
    if(typeof palabra !== "string" || typeof letra !== "string" || letra.length !== 1){
        return "Debe ingresar solo una palabra y letra"
    }

    if(palabra.includes(letra)){
        return "la " + letra + " esta en la palabra "  + palabra + ""
    }else{
        return "la " + letra + " no se encuentra en la palabra " + palabra + ""
    }

}

console.log(letra("Agosto", "r"))
console.log(letra("Naranja", "n"))
