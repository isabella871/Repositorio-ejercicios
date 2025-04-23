alert("Bienvenido señor/a usuario");
console.log("Bienvenido señor/a usuario");


let pitido = confirm("¿La computadora emite un pitido al iniciarse? (Aceptar = Sí / Cancelar = No)");
let unidadGira = confirm("¿El disco duro gira? (Aceptar = Sí / Cancelar = No)");


if (pitido && unidadGira) {
    console.log("Póngase en contacto con el técnico de apoyo");
    alert("Póngase en contacto con el técnico de apoyo");
} else if (pitido && !unidadGira) {
    console.log("Verificar contactos de la unidad");
    alert("Verificar contactos de la unidad");
} else if (!pitido && !unidadGira) {
    console.log("Traiga la computadora para repararla en la central.");
    alert("Traiga la computadora para repararla en la central.");
} else if (!pitido && unidadGira) {
    console.log("Compruebe las conexiones de altavoces.");
    alert("Compruebe las conexiones de altavoces.");
}
