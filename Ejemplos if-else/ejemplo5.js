let estacionamiento = "primer piso";

estacionamiento === "tercer piso" ? console.log('El estacionamiento esta completo en ' + estacionamiento) :
    estacionamiento === "segundo piso" ? console.log('Quedan dos plazas libres en el ' + estacionamiento) :
        estacionamiento === "primer piso" ? console.log('Puede estacionarse en el ' + estacionamiento) :
        console.log('En el piso ' + estacionamiento + ' no hay plazas disponibles para el vehiculo')