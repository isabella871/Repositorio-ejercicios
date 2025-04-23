
const asistentes = new Map ([[ 1, "Ana"], [ 2, "Luis"]]);
const agregarAsistente = (map, id, nombre) =>{
    asistentes.set(id, nombre);
}
agregarAsistente(asistentes, 3, "Sofia");
console.log(asistentes);
