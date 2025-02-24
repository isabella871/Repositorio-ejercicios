console.log("Bienvenidos al juego, J1 y J2");

function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function jugarRonda(jugador) {
    console.log(`Turno de ${jugador}`);
    
    let carta1 = obtenerCarta();
    let carta2 = obtenerCarta();
    
    let suma = carta1 + carta2;
    
    console.log(`${jugador} - Primera carta: ${carta1}, Segunda carta: ${carta2}`);
    console.log(`Puntuación actual de ${jugador}: ${suma}`);
    
    let decision = prompt(`${jugador}, ¿Deseas continuar y recibir una carta más? (si/no)`);
    
    if (decision.toLowerCase() === "si") {
        let carta3 = obtenerCarta();
        suma += carta3;
        console.log(`${jugador} - Última carta: ${carta3}`);
    } else {
        console.log(`${jugador} decidió plantarse.`);
    }
    
    console.log(`Puntuación final de ${jugador}: ${suma}`);
    return suma;
}

function determinarGanador(puntajeJ1, puntajeJ2) {
    console.log("--- RESULTADO FINAL ---");

    if (puntajeJ1 > 21 && puntajeJ2 > 21) {
        console.log("Ambos jugadores se pasaron de 21. ¡Empate!");
    } else if (puntajeJ1 > 21) {
        console.log("Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
    } else if (puntajeJ2 > 21) {
        console.log("Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
    } else if (puntajeJ1 > puntajeJ2) {
        console.log("¡Jugador 1 gana!");
    } else if (puntajeJ2 > puntajeJ1) {
        console.log("¡Jugador 2 gana!");
    } else {
        console.log("¡Empate!");
    }
}

// Ejecutar el juego
console.log("¡Bienvenidos al Blackjack de 3 rondas!");

let puntajeJ1 = jugarRonda("Jugador 1");
let puntajeJ2 = jugarRonda("Jugador 2");

determinarGanador(puntajeJ1, puntajeJ2);

