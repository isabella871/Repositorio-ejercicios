
const identificarNumero = num =>{
    if(!Number.isInteger(num)){
        return "El número ingresado no es válido"
    }

    if(num < 0){
        return "El número ingresado es negativo"
    }

    if(num > 0){
        return "El número ingresado es positivo"
    }

    if(num === 0){
        return "El número ingresado es cero"
    }
}

console.log(identificarNumero(10.7))
console.log(identificarNumero(-83))
console.log(identificarNumero(19))
