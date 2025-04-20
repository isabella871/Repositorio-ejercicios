let productos = ["Soda", "Papas", "Mochis", "Bubaloo", "Mani Moto"];
let cantidad = [10, 8, 6, 6, 10];
let dinero = 0;

const mostrarInventario = () => {
    let inventario = "Ver productos: \n";

    productos.forEach((producto, index) => {
        inventario += `${index + 1}. ${producto} (${cantidad[index]} disponibles)\n`;
    });
    alert(inventario);
};

const agregarMoneda = (moneda) => {
    if (moneda === 1) {
        dinero++;
        return true;
    } else {
        alert("Solo se aceptan las monedas de $1");
        return false;
    }
};

const validarCodigo = (codigo) => {
    if (isNaN(codigo) || codigo < 1 || codigo > productos.length) {
        alert("El código ingresado no es válido, por favor intente de nuevo");
        return false;
    } else {
        alert("El código del producto " + productos[codigo - 1] + " es correcto ");
        return true;
    }
};

const sugerirProducto = () => {
    let sugerido = productos.find((_, index) => cantidad[index] > 0) || null;
    return sugerido ? sugerido : "No se encuentran productos disponibles";
};

const seleccionarProducto = () => {
    while (true) {
        if(!cantidad.some(stock => stock > 0)){
            alert("Los productos se encuentran agotados, lo sentimos")
            return;
        }

        mostrarInventario();
        if (!agregarMoneda(1)) continue;
        let codigo = parseInt(prompt("Ingresar el código, debe ser un número entre 1 & 5"));
        
        if (isNaN(codigo) || !validarCodigo(codigo)){
            alert("Código inválido. Inténtalo de nuevo");
            continue;
        } 
        
        let index = codigo - 1;
        
        if (dinero < 1){
            alert("No tienes suficiente dinero para adquirir el producto")
            return;
        }

        if (cantidad[index] > 0) {
            cantidad[index]--;
            dinero--;
            alert("Ha comprado el producto " + productos[codigo - 1] + " con exito ");
            return;   
        } else {
            let sugerir = sugerirProducto();
            if (sugerir) {
                alert("El producto seleccionado está agotado. Te damos estas sugerencias: " + sugerir);
            } else {
                alert("Los productos se encuentran agotados, lo sentimos");
                return;
            }
        }
    }
};

while (true) {
    let opcion = prompt("Elige una opción: \n1. Ver inventario\n2. Ingresar moneda\n3. Ingresar código \n4. Seleccionar producto \n5. Salir");

    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let moneda = parseInt(prompt("Ingrese la cantidad que desea depositar (Debe ser de: $1)"));
        if (moneda === 1) {
            agregarMoneda(moneda);
        } else {
            alert("Solo se aceptan monedas de $1");
            continue;
        }
        seleccionarProducto();
    } else if (opcion === "3") {
        let codigo = parseInt(prompt("Ingresar el código. Debe ser un número entre 1 & 5"));
        validarCodigo(codigo);
    } else if (opcion === "4") {
        seleccionarProducto();
    } else if (opcion === "5") {
        alert("Gracias por usar la máquina expendedora");
        break;
    } else {
        alert("Opción inválida. Por favor, intente de nuevo");
    }
};
