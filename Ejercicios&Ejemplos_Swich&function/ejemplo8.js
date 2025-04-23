
function tipoTiket (tiket){
    let tiketIngresado;

    switch (true){
        case tiket == "1":
            tiketIngresado = "Puede ingresar a las salas 2,3 y 5"
            break;
        case tiket == "gold":
            tiketIngresado = "Usted por tener un tiket " + tipoTiket + " puede ingresar a las salas 1, 4, 6, y 7"
            break;
        default:
            tiketIngresado = "No tiene ninguno de nuestros tikets, puede ingresar a la sala 8"
    }
    console.log(tiketIngresado)
}

let boleto = 1 ;
tipoTiket(boleto);
