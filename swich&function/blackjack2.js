console.log("¡Bienvenidos al Blackjack de 3 rondas!");

function sacarCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function turnoJugador(numeroJugador) {
    let carta1 = sacarCarta();
    let carta2 = sacarCarta();
    let suma = carta1 + carta2;
    console.log(`Jugador ${numeroJugador} - Primera carta: ${carta1}, Segunda carta: ${carta2}`);
    console.log(`Puntuación actual de Jugador ${numeroJugador}: ${suma}`);

    let decision = prompt(`Jugador ${numeroJugador}, ¿Deseas recibir una carta más? (si/no)`).toLowerCase();
    switch (decision) {
        case "si":
            let carta3 = sacarCarta();
            suma += carta3;
            console.log(`Jugador ${numeroJugador} - Última carta: ${carta3}`);
            break;
        case "no":
            console.log(`Jugador ${numeroJugador} decidió plantarse.`);
            break;
        default:
            console.log("Opción no válida. Jugador se planta.");
    }
    console.log(`Puntuación final de Jugador ${numeroJugador}: ${suma}`);
    return suma;
}

function determinarGanador(sumaJ1, sumaJ2) {
    console.log("--- RESULTADO FINAL ---");
    if (sumaJ1 > 21 && sumaJ2 > 21) {
        console.log("Ambos jugadores se pasaron de 21. ¡Empate!");
    } else if (sumaJ1 > 21) {
        console.log("Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
    } else if (sumaJ2 > 21) {
        console.log("Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
    } else if (sumaJ1 > sumaJ2) {
        console.log("¡Jugador 1 gana!");
    } else if (sumaJ2 > sumaJ1) {
        console.log("¡Jugador 2 gana!");
    } else {
        console.log("¡Empate!");
    }
}

let sumaJ1 = turnoJugador(1);
let sumaJ2 = turnoJugador(2);
determinarGanador(sumaJ1, sumaJ2);
