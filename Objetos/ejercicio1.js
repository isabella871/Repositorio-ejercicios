const pedido = {
    estado: function () {
        console.log("El estado de su orden es...");
    }
};

const pizza = Object.create(pedido); //Crea un nuevo objeto con el prototipo especificado
pizza.sabor = "Peperoni";
pizza.estado = function () {
    console.log(`${this.sabor} listo`);
};

pizza.estado();
pedido.estado();
