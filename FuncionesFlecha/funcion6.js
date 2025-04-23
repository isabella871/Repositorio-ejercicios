
const calcularMenor = (a, b, c) => {
    if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)){
        return "Los números ingresados deben ser enteros"
    }

    a = Math.abs (a)
    b = Math.abs (b)
    c = Math.abs (c)

    return Math.min(a, b, c)
}


console.log(calcularMenor(12, 100, 4))
console.log(calcularMenor(8, 20, 3))
console.log(calcularMenor(0, 5, 10))

