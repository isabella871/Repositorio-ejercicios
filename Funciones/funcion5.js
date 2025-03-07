
const invertirCadena = str => str.split('').reverse().join('')
/* str.split(''): Convierte la cadena de texto str en un arreglo de caracteres utilizando el método split ('').
Esto significa que cada carácter de la cadena se convierte en un elemento de arreglo.
.reverse(): Invierte el orden de los elementos del arreglo de caracteres utilizando el método reverse().
.join(''): Convierte el arreglo de caracteres invertido nuevamente en una cadena de texto utilizando el método join('').
Esto significa que los caracteres del arreglo se unen en una nueva cadena sin separadores entre ellos
*/
console.log(invertirCadena(Hola));
console.log(invertirCadena(JavaScript));
console.log(invertirCadena(""));
