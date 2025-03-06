
function identificar (persona, contraseña){
    let usuario;

    switch(true){
        case persona === "Gabriela" && contraseña == "0000":
            usuario = "Bienvenida, Gabriela";
            break;
        default:
            usuario = "No tiene permitido el acceso";
    }
    console.log(usuario)
}

let nombre = "Gabriela";
let contraseña = "0000";
identificar(nombre, contraseña);

let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"