
function ingresar (edad){
    let edadIngresada;

    switch(true){
        case edad >= 20:
            edadIngresada = "Usted puede pasar, su edad es superior ";
            break;
        default:
            edadIngresada= "No tiene permitido el ingreso por ser menor a la edad requerida que es 20";
    }   
    console.log(edadIngresada);
}

let años= 35;
ingresar(años);
