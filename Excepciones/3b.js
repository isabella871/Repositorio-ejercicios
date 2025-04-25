function validarPassword(password) { 
    if (password.length < 8) { 
        throw new Error('La contraseña debe tener al menos 8 caracteres'); 
    } 
    if (!/[A-Z]/.test(password)) { 
        throw new Error('La contraseña debe contener al menos una mayúscula'); 
    } 
    if (!/[0-9]/.test(password)) { 
        throw new Error('La contraseña debe contener al menos un número'); 
    } 
    return true; 
} 

// Prueba la función con diferentes contraseñas 
try { 
    validarPassword('abc123'); // Muy corta 
} catch (error) { 
    console.log('Error de validación:', error.message); 
} 