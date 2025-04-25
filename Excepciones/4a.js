//El bloque finally se ejecuta siempre, independientemente de si ocurrió un error o no: 

function conectarBaseDatos() { 
    let conexion = null; 
    try { 
        conexion = { estado: 'conectado' }; 
        // Simulamos un error 
        throw new Error('Error de conexión'); 
    } catch (error) { 
        console.log('Error:', error.message); 
    } finally { 
        // Esto siempre se ejecuta 
        console.log('Cerrando conexión...'); 
        conexion = null; 
    } 
}