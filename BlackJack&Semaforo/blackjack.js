
console.log("¡Bienvenidos al Blackjack de 3 rondas!");


console.log("Turno de Jugador 1");
let carta1J1 = Math.floor(Math.random() * 10) + 1;
let carta2J1 = Math.floor(Math.random() * 10) + 1;
let sumaJ1 = carta1J1 + carta2J1;
console.log(`Jugador 1 - Primera carta: ${carta1J1}, Segunda carta: ${carta2J1}`);
console.log(`Puntuación actual de Jugador 1: ${sumaJ1}`);


let decisionJ1 = prompt("Jugador 1, ¿Deseas recibir una carta más? (si/no)").toLowerCase();
if (decisionJ1 === "si") {
    let carta3J1 = Math.floor(Math.random() * 10) + 1;
    sumaJ1 += carta3J1;
    console.log(`Jugador 1 - Última carta: ${carta3J1}`);
} else {
    console.log("Jugador 1 decidió plantarse.");
}
console.log(`Puntuación final de Jugador 1: ${sumaJ1}`);


console.log("Turno de Jugador 2");
let carta1J2 = Math.floor(Math.random() * 10) + 1;
let carta2J2 = Math.floor(Math.random() * 10) + 1;
let sumaJ2 = carta1J2 + carta2J2;
console.log(`Jugador 2 - Primera carta: ${carta1J2}, Segunda carta: ${carta2J2}`);
console.log(`Puntuación actual de Jugador 2: ${sumaJ2}`);


let decisionJ2 = prompt("Jugador 2, ¿Deseas recibir una carta más? (si/no)").toLowerCase();
if (decisionJ2 === "si") {
    let carta3J2 = Math.floor(Math.random() * 10) + 1;
    sumaJ2 += carta3J2;
    console.log(`Jugador 2 - Última carta: ${carta3J2}`);
} else {
    console.log("Jugador 2 decidió plantarse.");
}
console.log(`Puntuación final de Jugador 2: ${sumaJ2}`);


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

