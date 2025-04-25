/*  Tipos De Errores Comunes
    1. SyntaxError: Errores de sintaxis 
    2. ReferenceError: Referencias a variables/funciones inexistentes 
    3. TypeError: Operaciones en tipos de datos incorrectos 
    4. RangeError: Números fuera de rango 
    5. URIError: Errores en codificación/decodificación URI 
*/

try { 
    // Caso 1 
    const arr = [1, 2, 3]; 
    arr.toUppercase(); 
} catch (error) { 
    console.log('Error Caso 1:', error.name); // TypeError 
} 

try { 
    // Caso 2 
    eval('if (true) {'); 
} catch (error) { 
    console.log('Error Caso 2:', error.name); // SyntaxError 
}