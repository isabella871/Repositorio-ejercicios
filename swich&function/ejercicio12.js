alert("Bienvenido a nuestra empresa de automotriz");

function modeloCarro (){
    let modelo =parseInt(prompt("Ingrese el número del modelo de su automovil: "));
    let modeloDefectuoso= [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

    if (isNaN(modelo)){
        console.log("Por favor, ingrese un número de modelo válido.");
    alert("Por favor, ingrese un número de modelo válido."); 
    }

    switch (true){
        case (modeloDefectuoso.includes(modelo)):
            alert("El número ingresado indica que su automóvil está defectuoso, por favor llevar a garantía"); 
            break;
        default:
            alert("Su automóvil no está defectuoso");
    }
    return{
        estado: modeloDefectuoso && modelo,
        mensaje: alert
    }
}

modeloCarro()