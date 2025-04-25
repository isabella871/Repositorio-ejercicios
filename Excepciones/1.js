try { 
    // Intentamos acceder a una variable que no existe 
    console.log(variableInexistente); 
} catch (error) { 
    console.log('Tipo de error:', error.name); 
    console.log('Mensaje:', error.message); 
} 