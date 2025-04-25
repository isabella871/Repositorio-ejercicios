function procesarArchivo(nombreArchivo) { 
    let archivo = null; 
    try { 
        archivo = { nombre: nombreArchivo, estado: 'abierto' }; 
        // Simular procesamiento 
        if (nombreArchivo === 'corrupto.txt') { 
            throw new Error('Archivo corrupto'); 
        } 
        console.log('Procesamiento exitoso'); 
    } catch (error) { 
        console.log('Error al procesar:', error.message); 
    } finally { 
        if (archivo) { 
            console.log('Cerrando archivo:', archivo.nombre); 
            archivo.estado = 'cerrado'; 
        } 
    } 
}