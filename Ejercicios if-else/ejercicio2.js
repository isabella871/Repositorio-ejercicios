let numero = "928459";

if (isNaN(numero) || numero === "" || numero === null){
    console.log("Ingrese un número")
}else{
    numero = Number(numero);
    if(numero % 2 == 0){
        console.log(" El número " + numero + "ingresado es par");
    }else{
        console.log(" El número " + numero + "ingresado es impar");
    }
}