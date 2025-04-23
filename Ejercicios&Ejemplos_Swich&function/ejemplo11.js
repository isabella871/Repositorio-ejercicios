
function cumpleaños (dia, mes) {
    let diaCumple = 29;

    switch (true){
        case dia === 29 && mes == "agosto":
            diaCumple = "Hoy es el cumpleaños de María";
            break;
        default:
            diaCumple = "No es el cumpleaños de María"
    }
    console.log(diaCumple)
}

let dia = 2;
let mes = "agosto";
cumpleaños(dia, mes);
