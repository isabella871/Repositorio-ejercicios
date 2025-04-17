alert ("Bienvenido a nuestro servicio de maquina expendedora")

function ingresarMoneda () {
    let cantidad;

    while (true) {
        cantidad = parseInt(prompt("Ingrese su dinero. Entre 1000 y 5000"));

        if (isNaN(cantidad) || cantidad < 1000 || cantidad > 5000) {
            alert("No puede ingresar menos de 1000 o mas de 5000");
            continue;
        } 
        break;
    }
    return{
        cantidad: cantidad
    } 
}

function elejirProducto () {
    let opcion; 
    let precio;
    let nombreProducto;

    while (true) {
        opcion = parseInt(prompt("Este es nuestro inventario. Selecciona el número del producto que deseas comprar: \n 1: CocaCola \n 2: Papas Fritas \n 3: Chocolate \n 4: Galletas"));
        
        if (isNaN(opcion) || opcion < 1 || opcion > 4) {
            alert("Ingrese el número correspondiente al producto que desea comprar (entre 1 y 4)");
            continue;
        }

        switch (opcion) {
            case 1:
                precio = 2500;
                nombreProducto = "CocaCola";
                break;
            case 2:
                precio = 1500;
                nombreProducto = "Papas Fritas";
                break;
            case 3:
                precio = 1500;
                nombreProducto = "Chocolate";
                break;
            case 4:
                precio = 1000;
                nombreProducto = "Galletas";
                break;
        }
        break;
    }

    return{
        nombre: nombreProducto,
        precio: precio,
    }
}

function devolverDinero (cantidad, precio) {
    return cantidad - precio;
}

function mostrarProducto () {
    const dinero = ingresarMoneda();
    const producto = elejirProducto ();

    if (dinero.cantidad < producto.precio) {
        alert("No tienes suficiente dinero para comprar: " + producto.nombre + " Intentelo de nuevo");
        return;
    }

    const cambio = devolverDinero(dinero.cantidad, producto.precio)

    alert("El producto " + producto.nombre + " ha sido comprado con éxito, su cambio es de: " + cambio + " pesos");
}

mostrarProducto()
