

//Validar que si funcione correctamente

function plazas (primerPiso, segundoPiso, tercerPiso){
    let estacionamiento;


    if(primerPiso > 0){
        estacionamiento = "Primer piso";
    }else if(segundoPiso > 0){
        estacionamiento = "Segundo piso";
    }else if(tercerPiso > 0){
        estacionamiento = "Tercer piso";
    }else{
        estacionamiento = "El estacionamiento esta completo";
    }


    switch (estacionamiento){
        case primerPiso :
            estacionamiento ="Puede estacionarse en el primer piso";
            break;
        case segundoPiso:
            estacionamiento = "Quedan" + segundoPiso + "plazasen el segundo piso";
            break;
        case tercerPiso:
            estacionamiento = "Quedan" + tercerPiso + "plazas en el tercer piso";
            break;
        default:
            console.log("Lo sentimos, no hay plazas disponibles en el estacionamiento");
    }
}

let primerPiso = 7;
let segundoPiso = 2;
let tercerPiso = 0;
plazas(primerPiso, segundoPiso, tercerPiso);