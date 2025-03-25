
const proyectos = [
    new Map ([["Nombre", "Proyecto A"], ["Presupuesto", 5000]]),
    new Map ([["Nombre", "Proyecto B"], ["Presupuesto", 8000]]) 
];
const agregarProyecto = new Map ([["Nombre", "Proyecto C"], ["Presupuesto", 6000]]);
proyectos.push(agregarProyecto)
console.log(proyectos);
