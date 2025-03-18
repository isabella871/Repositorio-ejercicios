let opcion;
while(opcion !== 3){
    opcion = prompt("Esciba un número para elegir el tipo de ejercicio que desea ver: 1. Ejercicio con ternarias. 2. Ejercicios con decisiones 3. Salir");

    switch(opcion){
        case "1":
            let ternariaOpcion;
            while(ternariaOpcion !== "5"){
                ternariaOpcion = prompt("Escriba un número para escoje el ejercicio que desee:\n1. Temperatura \n2. Límite de personas en un salón \n3. Nombre y contraseña \n4. Plazas en un estacionamiento \n5. Volver");

                switch(ternariaOpcion){
                    case "1":
                        let temperatura = 19;
                        temperatura <= 22? console.log("clima frío...") : console.log("clima calido...");
                        break;

                    case "2":
                        let limitePersonas = false;
                        let nombreSalon = "d";
                        let mensaje = limitePersonas ? 'El salon llamado ' +nombreSalon +'  esta ocupado"' :
                            'el salon llamado ' + nombreSalon + ' esta disponible"';
                        console. log(mensaje);
                        break;

                    case "3":
                        const nombre = "Gabriela";
                        const contraseña = "0000"
                        nombre == "Gabriela" && contraseña == "0000" ?
                            console.log('Bienvenida, Gabriela...') :
                            console.log('No tiene permitido el acceso');
                        break;

                    case "4":
                        let estacionamiento = "primer piso";
                        estacionamiento === "tercer piso" ? console.log('El estacionamiento esta completo en ' + estacionamiento) :
                            estacionamiento === "segundo piso" ? console.log('Quedan dos plazas libres en el ' + estacionamiento) :
                                estacionamiento === "primer piso" ? console.log('Puede estacionarse en el ' + estacionamiento) :
                                console.log('En el piso ' + estacionamiento + ' no hay plazas disponibles para el vehiculo')
                        break;

                    case "5":
                        console.log("Bienvenido al menú principal");
                        break;
                    default:
                        alert("Está opción no es valida");
                }
            }
            break;

        case "2":
            let decicionOpcion;
            while(decicionOpcion !== "8"){
                decicionOpcion = prompt("Escriba un número para escoger el ejercicio que desee:\n1. Cantidad a retirar \n2. Edad permitida \n3. Tipo de ticket \n4. Datos ingresados \n5. Movimiento del dron \n6. Temperatura y estado de la cafetera \n7. Cumpleaños de María \n8. Volver");

                switch(decicionOpcion){
                    case "1":
                        let cantidad = 10000 ;
                        if (cantidad <= 10000){
                            console.log("Puede retirar el dinero")
                        }else if(cantidad > 10000){
                            console.log("No puede retirar el dinero")
                        }
                        break;

                    case "2":
                        let edad = 18;
                        if(edad >= 20){
                            console.log('Usted puede pasar, su edad es superior a '+ edad);
                        }else if(edad <= 20){
                            console.log("No tiene permitido el ingreso por ser menor a la edad requerida que es 20");
                        }
                        break;

                    case "3":
                        let tipoTiket = "0";
                        if(tipoTiket == "1"){
                            console.log('puede entrar a las salas 2,3 y 5, por tener el tiket '+ tipoTiket);
                        }else if(tipoTiket == "gold"){
                            console.log("Usted por tener un tiket '+ tipoTiket +' puede ingresar a las salas 1,4,6 y 7");
                        }else{
                            console.log("No tiene nigún de nuestros tiketes, puede ingresar a la sala 8");
                        }
                        break;

                    case "4":
                        let nombreBaseDatos = "Luca";
                        let contraseñaBaseDatos = "98765";
                        let nombreIngresado = "Maria";
                        let contraseñaIngresada = "xxxx";
                        let nombre = "Carlo";
                        if(nombreBaseDatos == nombreIngresado && contraseñaBaseDatos == contraseñaIngresada ){
                            console.log(''+ nombre +' Te damos la bienvenida, por favor ingresa a la sala');
                        }else{
                            console.log('No se le tiene permitido el acceso...');
                        }
                        break;

                    case "5":
                        let arriba = false;
                        let abajo = false;
                        let derecha = true;
                        let izquierda = false;
                        if(arriba){
                            console.log("Dron moviendose hacia arriba");
                        }else if(abajo){
                            console.log("Dron moviendose hacia abajo");
                        }else if(derecha){
                            console.log("Dron moviendose a la derecha");
                        }else if(izquierda){
                            console.log("Dron moviendose a la izquierda");
                        }else{
                            console.log("No se identifica movimiento")
                        }
                        break;

                    case "6":
                        let encendida = false;
                        let temperatura = 50;
                        if(encendida){
                            console.log("La cafetera está encendido")
                            if(temperatura <= 30 ){
                                console.log("El cafe esta frío")
                            }else if( temperatura > 30 && temperatura <= 30 ){
                                console.log("Puede tomarse el café")
                            }else{
                                console.log("Tome con cuidado, el café esta muy caliente")
                            }
                        }
                        else{
                            console.log("Encienda la cafetera y prepare café")
                        }
                        break;

                    case "7":
                        let dia = 29;
                        let mes = "agosto";
                        if(dia ==29 && mes=="agosto"){
                            console.log("Hoy es el cumpleaños de María");
                        }else{
                            console.log("No es el cumpleaños de María")
                        }
                        break;

                    case "8":
                        console.log("Vuelve al menú principal");
                        break;
                    default:
                        alert("La opción no es válida")

                }
            }
            break;

        case "3":
            opcion = 3;
            alert("Sale del menú");
            break;
        default:
            alert("La opción no es válida, seleccione entre las siguientes: 1, 2 o 3");
    }
}
