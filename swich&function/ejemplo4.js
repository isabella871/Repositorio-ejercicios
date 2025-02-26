
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