let dinero = 0;
/*
    valor → es el objeto del producto ({ nombre, cantidad })
    clave → es el ID del producto (un número: 1, 2...5)
*/
let productos = new Map ([
    [1, { nombre: "Soda", cantidad: 10}],
    [2, { nombre: "Papas", cantidad: 8}],
    [3, { nombre: "Mochis", cantidad: 3}],
    [4, { nombre: "Café", cantidad: 6}],
    [5, { nombre: "Limonada", cantidad: 10}]
]);

const mostrarInventario = () => {
    let inventario = "Ver productos: \n";

    productos.forEach((valor, clave) => {
        inventario += `Los productos: ${valor.nombre} tienen: ${valor.cantidad} unidades \n`;
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
    if (isNaN(codigo) || codigo < 1 || codigo > productos.size){
        alert("El código ingresado no es válido, por favor intente de nuevo");
        return false;
    } else {
        alert("El código del producto es correcto ");
        return true;
    }
};

//Revisar
const sugerirProducto = () => {

    for (const [_, valor] of productos) {
        if (valor.cantidad > 0) {
            return valor.nombre;
        }
    }
    return "No se encuentran productos disponibles";
};

const seleccionarProducto = () => {
    while (true) {

        let hayStock = false; 
        for (const [_, valor] of productos) {
            if (valor.cantidad > 0) {
                hayStock = true;
                break;
            }
        }
        if (!hayStock){
            alert("Los productos se encuentran agotados, lo sentimos");
            return;
        }

        mostrarInventario();
        if (!agregarMoneda(1)) continue;
        let codigo = parseInt(prompt("Ingresar el código, debe ser un número entre 1 & 5"));
        
        if (isNaN(codigo) || !validarCodigo(codigo)){
            alert("Código inválido. Inténtalo de nuevo");
            continue;
        } 

        if (dinero < 1){
            alert("No tienes suficiente dinero para adquirir el producto")
            return;
        }

        const producto = productos.get(codigo);
        if (producto.cantidad > 0) {
            producto.cantidad--;
            dinero--;
            alert("Ha comprado el producto " + producto.nombre + " con exito ");
            return;
        }else{
            let sugerencias = sugerirProducto();
            if (sugerencias){
                alert("El producto seleccionado está agotado. Te damos estas sugerencias: " + sugerencias.join(``))
            }else{
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