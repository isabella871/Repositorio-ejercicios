alert("Bienvenido señor/a usuario");
console.log("Bienvenido señor/a usuario");

function solucionProblemasComputadora (){
    let pitido = confirm("¿La computadora emite un pitido al iniciarse? (Aceptar = Sí / Cancelar = No)");
    let unidadGira = confirm("¿El disco duro gira? (Aceptar = Sí / Cancelar = No)");

    switch (true){
        case (pitido && unidadGira):
            alert("Póngase en contacto con el técnico de apoyo");
            break;
        case (pitido && !unidadGira):
            alert("Verificar contactos de la unidad");
            break;
        case (!pitido && !unidadGira):
            alert("Traiga la computadora para repararla en la central.");
            break;
        default:
            (!pitido && unidadGira)
            alert("Compruebe las conexiones de altavoces");
            break;  
    }
    return{
        estado: pitido && unidadGira,
        mensaje: alert
    }
}

solucionProblemasComputadora()