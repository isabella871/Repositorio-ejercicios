let imagenes =[]
async function obtenerYProcesarImagenes() { //async function: Palabra reservada para la función asincronica
    try {
    swal("Informacion","se esta haciendo la peticion al servidor","info") //personalizar alert
    imagenes = await obtenerImagenes();
    
    swal("Exito","se obtubo la informacion","success") //personalizar alert

    renderizarProductos()
    } catch (error) {
    console.error("Error:", error);
    }
    }

    function obtenerImagenes() {
    return new Promise(resolve => {
    setTimeout(() => resolve([
        {img: "/img/1.jpeg"},{img: "/img/2.jpeg"},{img:"/img/3.jpeg"},
        {img: "/img/4.jpeg"},{img: "/img/5.jpeg"}
    ]),3000);
    });
    }

   // elemento contenedor
    const contenedor = document.getElementById("container")

    function renderizarProductos(){
    imagenes.forEach(element => {
        let card = document.createElement("div")
        card.innerHTML=`
        <img src="${element.img}" alt="img">
        `
        contenedor.appendChild(card)
    });
    
    }

obtenerYProcesarImagenes()