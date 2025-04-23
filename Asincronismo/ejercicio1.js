function obtenerHelado() { 

    return new Promise((resolve, reject) => { 
    setTimeout(() => { 
        const entrega = true;
        if (entrega) { 
            resolve({ sabor: "Chocolate" , tamaño: "mediano" }); 
        } else { 
            reject("Error al obtener el helado"); 
        } 
    }, 4000); 
    }); 
} 

obtenerHelado() 
    .then(helado => console.log("Helado listo:", helado)) 
    .catch(error => console.error(error)); 
console.log("Esperando helado mediano de chocolate por 4 segundos..."); 