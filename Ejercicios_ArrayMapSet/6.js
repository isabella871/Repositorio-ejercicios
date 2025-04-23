
const sociosActivos = new Set([5001, 5002, 5003])
const agregarSocios = (codigo) => {
    sociosActivos.add(codigo);
}
agregarSocios(5004)
console.log(sociosActivos);
