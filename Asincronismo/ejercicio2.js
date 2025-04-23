async function obtenerFecha() {
    try{
        const fecha = await simularObtencionFecha();
        console.log("Fecha actual:", fecha.toLocaleString()); //toLocaleString() convierte la fecha completa a un formato legible y adaptado al idioma local del navegador.
    }catch (error){
        console.log("Error:", error);
    }
}

function simularObtencionFecha () {
    return new Promise(resolve => {
        setTimeout(() => resolve(new Date()), 3000); // new Date() nos da la fecha actual (si no tiene parámetros)
    });
}

obtenerFecha();
console.log("Iniciando Proceso...");