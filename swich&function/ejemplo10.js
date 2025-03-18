
function encenderCafetera (temperatura){
    let encendida;

    switch (true) {
        case temperatura <= 30:
            encendida =  "El café esta frío";
            break;
        case temperatura > 30 && temperatura <= 60:
            encendida = "Puede tomarse el café";
            break;
        case temperatura > 60:
            encendida = "Tome con cuidado, el café está muy caliente";
            break;
        default:
            encendida = "Encienda la cafetere y prepare el café";
    }
    console.log(encendida)
}

let temperatura = "holaaaa";
encenderCafetera(temperatura)
