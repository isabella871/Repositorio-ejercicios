
function verClima(temperatura){
    let clima; 

    switch (true) {
        case temperatura <= 22:
            clima = "clima frío";
            break;
        default:
            clima = "clima cálido";
    }
    console.log(clima);
}

let grados = 15;
verClima(grados);
