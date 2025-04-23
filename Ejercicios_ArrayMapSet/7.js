
const puntajes = [85, 92, 78, 95, 88];
const mapaPuntajes = new Map ([[0, 85], [1, 92], [2, 78], [3, 95], [4, 88]]);
const agregarPuntaje = (map, clave, valor) => {
    map.set(clave, valor);
}
mapaPuntajes.set(5, 90);
console.log(mapaPuntajes);
