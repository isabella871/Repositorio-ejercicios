//Objeto anidado simple

let usuario = {
    nombre: "Isabella",
    edad: 17,
    direccion: {
        calle: 13,
        ciudad: "Armenia",
        codigoPostal: 630002
    },
    contacto: {     //objeto contacto con teléfono y correo
        telefono: "6315790642",
        correo: "isabellabernalcarvajal@gmail.com"
    },
    intereses: ["lectura","musica","programacion","arte"]      //propiedad intereses como array
};

//Acceder a las propiedades:
console.log("Nombre:", usuario.nombre);
console.log("Ciudad:", usuario.direccion.ciudad);
console.log("Código Postal:" ,usuario.direccion.codigoPostal);
console.log("Teléfono:" ,usuario.contacto.telefono);
console.log("Correo:", usuario.contacto.correo);
console.log("Segundo Interés:", usuario.intereses[1]);

//Modificación de una propiedad anidada (direccion):
usuario.direccion.calle = 60;

//Agregar un nuevo interés:
usuario.intereses.push("viajar");

//Ver objeto completo:
console.log("Información del usuario:", usuario);