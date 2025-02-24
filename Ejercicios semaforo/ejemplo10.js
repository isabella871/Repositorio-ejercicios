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
