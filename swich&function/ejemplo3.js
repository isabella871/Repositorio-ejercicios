
function limitePersonas (personas){
    let salon;

    switch(true){
        case personas === true:
            salon = "El salon esta ocupado";
            break;
        default:
            salon = "El salon esta disponible";
    }
    console.log(salon)
}

let limite = false;
limitePersonas(limite);
