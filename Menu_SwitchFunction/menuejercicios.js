let opcion;
while(opcion !== 15)
{    opcion = prompt("Elija un número del 1 al 15 para ver los ejercicios: 1. Calculo del salario 2. Determinar si un número es par o impar 3. Precio por el alquiler de lavadoras 4. Determinar si un número ingresado por el usuario es par o impar 5. Calculo del rendimiento académico de un estudiante 6. Hayar el número mayor entre tres números 7. Ayudas económicas por parte de la alcadía 8. Costos de la mensualidad de un gimnacio 9. Verifir si un triángulo es válido o no 10. Precios por impresión en una fotocopiadora 11. Resolución de problemas de computadora 12. Modelos de una empresa automotriz 13. Paquetes de la aplicación celuMovil 14. Pedidos de sandwichOrder 15. Salir");

    switch(opcion){
        case "1":
            let nombre = "Ana López";
            let horas = 4;
            let salario = 0;

            if (horas <= 10) {
                salario = horas * 30000;
                console.log(`Señor/a ${nombre}, el número de horas es ${horas}, su salario equivale a $${salario}`);
                
            } else if (horas > 10) {  
                salario = horas * 33000;
                console.log(`Señor/a ${nombre}, el número de horas es ${horas}, su salario equivale a $${salario}`);
            }
            break

        case "2":
            let numero1 = "928459";

            if (isNaN(numero1) || numero1 === "" || numero1 === null){
                console.log("Ingrese un número")
            }else{
                numero1 = Number(numero1);
                if(numero % 2 == 0){
                    console.log(" El número " + numero1 + "ingresado es par");
                }else{
                    console.log(" El número " + numero1 + "ingresado es impar");
                }
            }
            break

        case "3":
            let mensaje= alert("Bienvenido")
            let tipoLavadora=prompt("Ingrese el tipo de lavadora que desea utilizar: 1. Grande / 2. Pequeña")
            let cantidad = prompt("Ingrese cuantas lavadoras desea utilizar: ")
            let horasEnUso = prompt("Ingrese cuantas horas las va a utiizar: ");
            let costo = 0;

            if( tipoLavadora == 1){
                costo = cantidad * horasEnUso * 40000;   
                if(cantidad > 3){
                    costo = costo *(1 - 3 / 100);
                }
            }

            else if( tipoLavadora == 2){
                costo = cantidad * horasEnUso * 3000;
                if(cantidad > 3){
                    costo = costo * (1 -3 / 100);
                }
            }

            console.log(" Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horasEnUso + " horas: " + costo.toFixed(2))
            alert(" Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horasEnUso + " horas: " + costo.toFixed(2))
            break

        case "4":
            alert("Bienvenido, ingrese un número")
            let numero =prompt("Ingrese el número que desee");

            // Verificar si la entrada es un número válido
            if (numero === null || numero.trim() === "" || isNaN(numero)) {
                alert("Por favor ingrese un número.");
            } else {
                numero = Number(numero); // Convertir a número
                if (numero % 2 === 0) {
                    console.log("El número: " + numero + " es par");
                    alert("El número: " + numero + " es par");
                } else {
                    console.log("El número: " + numero + " es impar");
                    alert("El número: " + numero + " es impar");
                }
            }
            break

        case "5":
            alert("Bienvenido, estudiante. A continuación, ingrese las notas de las materias. Recuerde que debe ser un número del 1 al 10");

            let fisica = parseInt(prompt("Ingrese su nota de física"));
            let quimica = parseInt(prompt("Ingrese su nota de química"));
            let biologia = parseInt(prompt("Ingrese su nota de biología"));
            let matematicas = parseInt(prompt("Ingrese su nota de matemáticas"));
            let informatica = parseInt(prompt("Ingrese su nota de informática"));
            let calificacion;


            if (fisica < 1 || fisica > 10 || quimica < 1 || quimica >10 || biologia < 1 || biologia > 10 || matematicas < 1 || matematicas > 10 || informatica < 1 || informatica > 10){
                alert("Por favor ingrese nuevamente sus notas, las que ingresó enteriormente no eran válidas");
                console.log("Por favor ingrese nuevamente sus notas, las que ingresó enteriormente no eran válidas")

            }else{
                let suma = fisica + quimica +  biologia + matematicas + informatica;
                alert("La suma de sus notas es: " + suma)
                let porcentaje = (suma / 50) *100;

                if(porcentaje <= 59.9){
                    calificacion = "Mala";
                    alert("Mala");
                    console.log("Mala");

                }else if(porcentaje <= 80){
                    calificacion = "Buena";
                    alert("Buena");
                    console.log("Buena");

                }else{
                    calificacion = "Excelente";
                    alert("Excelente");
                    console.log("Excelente");
                }

                alert("Tu porcentaje es: " + porcentaje + " % y tú calificación es: " + calificacion);
                console.log("Tu porcentaje es: " + porcentaje + " % y tú calificación es: " + calificacion);

            }
            break
            
        case "6":
            alert("Bienvenido, porfavor ingrese tres números")
            let num1=prompt("Ingrese un número:");
            let num2=prompt("Ingrese un número:");
            let num3=prompt("Ingrese un número:");

            let mayor= Math.max(num1, num2, num3);
            alert("El número mayor es: " + mayor);
            break

        case "7":
            alert("Bienvenido señor/a usuario")

            let genero = prompt("Ingrese su género: femenino o masculino");
            let edad = prompt("Ingrese su edad");
            let reciben = 0;

            if(genero === "femenino"){

                if (edad >50){
                reciben = 120000;
                }else if(edad >= 30 && edad <=50 ){
                    reciben = 100000;
                }else if(edad < 30 ){
                console.log("No recibe ayuda")
                alert("No recibe ayuda")
                }


            }else if(genero === "masculino"){
                reciben = 40000;

            }else{
                console.log("Datos incorrectos. Por favor vuelva a ingresarlos");
                alert("Datos incorrectos. Por favor vuelva a ingresarlos");
            }
            console.log("El valor de su ayuda económica mensual es de: " + reciben);
            alert("El valor de su ayuda económica mensual es de " + reciben);
            break

        case "8":
            alert("Bienvenido a nuestro gimnasio");

            let mensualidad = prompt("Ingrese el costo de mensualidad que desea pagar: 18000 (15 días), 35000 (30 días), 86000 (90 días)");
            let dias = prompt("Escoja entre los siguientes días: 15, 30 o 90 días");

            if(dias === "15"){
                mensualidad = 18000;      
            }else if(dias === "30"){
                mensualidad = 35000;
            }else if(dias === "90"){
                mensualidad = 86000;
            }else{
                console.log("El precio a pagar es: " + mensualidad);
                alert("El precio a pagar es: " + mensualidad);
            }
            console.log("La información ingresada no es valida. Ingrese el costo de la mensualidad al día correspondiente");
            alert("La información ingresada no es valida. Ingrese el costo de la mensualidad al día correspondiente");
            break

        case "9":
            alert("Ingrese los tres números enteros a sumar");

            let angulo1 = parseInt(prompt("Ingrese un número entero para el angulo1:"));
            let angulo2 = parseInt(prompt("Ingrese un número entero para el angulo2:"));
            let angulo3 = parseInt(prompt("Ingrese un número entero para el angulo3:")); 


            if(isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)){
                console.log("Ingrese únicamente números enteros");
                alert("Ingrese únicamente números enteros");

            }else{
                let suma = angulo1 + angulo2 + angulo3;
                console.log("La suma de los angulos: " + suma);
                alert("La suma de los angulos: " + suma);

                if(suma == 180){
                    console.log("El triángulo es válido de acuerdo a la suma de los angulos: " + suma);
                    alert("El triángulo es válido de acuerdo a la suma de los angulos: " + suma);
                }else{
                    console.log("El triángulo no es válido");
                    alert("El triángulo no es válido");
                }
            }
            break

        case "10":
            alert("Bienvenido a nustro servicio de impresión")
            console.log("Bienvenido a nustro servicio de impresión")

            let cantidadCopias =parseInt(prompt("Ingrese el número de copias que desee"));
            let precioDeImpresion;

            if(isNaN(cantidadCopias) || cantidadCopias < 0){
                alert("Ingrese un número valido de copias");
            }else if(cantidadCopias <=499){
                precioDeImpresion = cantidadCopias * 120;
            }else if(cantidadCopias <= 749){
                precioDeImpresion = cantidadCopias * 100;
            }else if(cantidadCopias <= 999){
                precioDeImpresion = cantidadCopias * 80;
            }else{
                precioDeImpresion = cantidadCopias * 50;
            }

            if (!isNaN(precioDeImpresion)) {
                console.log("El precio a pagar por las " + cantidadCopias + " copias es de: $" + precioDeImpresion);
                alert("El precio a pagar por las " + cantidadCopias + " copias es de: $" + precioDeImpresion);
            }
            break

        case "11":
            alert("Bienvenido señor/a usuario");
            console.log("Bienvenido señor/a usuario");


            let pitido = confirm("¿La computadora emite un pitido al iniciarse? (Aceptar = Sí / Cancelar = No)");
            let unidadGira = confirm("¿El disco duro gira? (Aceptar = Sí / Cancelar = No)");


            if (pitido && unidadGira) {
                console.log("Póngase en contacto con el técnico de apoyo");
                alert("Póngase en contacto con el técnico de apoyo");
            } else if (pitido && !unidadGira) {
                console.log("Verificar contactos de la unidad");
                alert("Verificar contactos de la unidad");
            } else if (!pitido && !unidadGira) {
                console.log("Traiga la computadora para repararla en la central.");
                alert("Traiga la computadora para repararla en la central.");
            } else if (!pitido && unidadGira) {
                console.log("Compruebe las conexiones de altavoces.");
                alert("Compruebe las conexiones de altavoces.");
            }
            break

        case "12":
            alert("Bienvenido a nuestra empresa de automotriz");
            console.log("Bienvenido a nuestra empresa de automotriz");

            let modelo =parseInt(prompt("Ingrese el número del modelo de su automovil: "));
            let modeloDefectuoso= [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];



            if(isNaN(modelo)){
                console.log("Por favor, ingrese un número de modelo válido.");
                alert("Por favor, ingrese un número de modelo válido."); 
            }else if(modeloDefectuoso.includes(modelo)){
                console.log("El número ingresado indica que su automóvil está defectuoso, por favor llevar a garantía");
                alert("El número ingresado indica que su automóvil está defectuoso, por favor llevar a garantía"); 
            }else{
                console.log("Su automóvil no está defectuoso");
                alert("Su automóvil no está defectuoso");
            }
            break

        case "13":
            let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):").toLowerCase();
            let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

            if (isNaN(minutos) || minutos < 0) {
                console.log("Error. Ingrese un número válido de minutos.");

            } else {
                let cargoFijo, valorMinuto, valorPaquete;

                if (operador === "tigo") {
                    cargoFijo = 45000; valorMinuto = 200; valorPaquete = 12000;
                } else if (operador === "claro") {
                    cargoFijo = 30000; valorMinuto = 100; valorPaquete = 18000;
                } else if (operador === "movistar") {
                    cargoFijo = 40000; valorMinuto = 250; valorPaquete = 8000;
                } else {
                    console.log("Error: Operador no válido. Ingrese Tigo, Claro o Movistar.");
                    cargoFijo = valorMinuto = valorPaquete = 0; // No calcula si el operador es inválido
                }

                if (cargoFijo > 0) {
                    let costoTotal = cargoFijo + (minutos * valorMinuto) + valorPaquete;
                    console.log("Operador: " + operador);
                    console.log("Minutos internacionales: " + minutos);
                    console.log("Costo total: $" + costoTotal);
                }
            }
            break

        case "14":
            alert("Bienvenido a SandwichOrder");
            console.log("Bienvenido a SandwichOrder");

            let tamaño = parseInt(prompt("Ingrese el tamaño de sandwich que desea ordenar: 1. Grande / 2. Pequeño"));
            let ingredientesAdicionales1 = prompt("Ingrese los ingredientes adicionales que desea: tocineta (sí/no)").toLowerCase();
            let ingredientesAdicionales2 = prompt("Ingrese los ingredientes adicionales que desea: pavo (sí/no)").toLowerCase();
            let ingredientesAdicionales3 = prompt("Ingrese los ingredientes adicionales que desea: queso (sí/no)").toLowerCase();
            let ingredientesAdicionales4 = prompt("Ingrese los ingredientes adicionales que desea: jalapeño (sí/no)").toLowerCase();
            let valorPagar = 0;

            if (tamaño == 1) {
                valorPagar = 12000;
                if (ingredientesAdicionales1 == "sí") {
                    valorPagar = valorPagar + 3000;
                }
                if (ingredientesAdicionales2 == "sí") {
                    valorPagar = valorPagar + 3000;
                }
                if (ingredientesAdicionales3 == "sí") {
                    valorPagar = valorPagar + 2500;
                }
                // El jalapeño es gratis, no se suma al precio
            } else if (tamaño == 2) {
                valorPagar = 6000;
                if (ingredientesAdicionales1 == "sí") {
                    valorPagar = valorPagar + 3000;
                }
                if (ingredientesAdicionales2 == "sí") {
                    valorPagar = valorPagar + 3000;
                }
                if (ingredientesAdicionales3 == "sí") {
                    valorPagar = valorPagar + 2500;
                }
                // El jalapeño es gratis, no se suma al precio
            } else {
                console.log("Error: Seleccione un tamaño válido (1 o 2).");
                alert("Error: Seleccione un tamaño válido (1 o 2).");
            }

            console.log("El valor a pagar por el sándwich " + (tamaño == 1 ? "Grande" : "Pequeño") + " es de: " + valorPagar);
            alert("El valor a pagar por el sándwich " + (tamaño == 1 ? "Grande" : "Pequeño") + " es de: " + valorPagar);
            break

        case "15":
            opcion = 15;
            alert("Saliendo del menú");
            break;

        default:
            alert("Ha seleccionado un número no valido, por favor, ingrese uno distinto")

    }        

    
}
