//Ejercicio para comprender las variables en Javascript

var nombreVar; //Permite declarar una variable global o local sin importar el scope en donde este 
let nombreLet; //Permite declarar una variable limitando su alcance al scope en el que este (global o local)
const nombreConst = 'Arturo' //No se puede cambiar el contenido de la variable

nombreVar = 'Arturo Ortueta Var';
nombreLet = 'Arturo Ortueta Let';
//nombreConst = 'Arturo Ortueta Const'; //Al intentar modificar la variable const, nos arroja error: Assignment to constant variable.at main.js

console.log(nombreVar);
console.log(nombreLet);
console.log(nombreConst);