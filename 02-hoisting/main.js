
MiNombre()
let age = 27;

function MiNombre() {
    let nombre = 'Arturo Ortueta';
    console.log(nombre);
    //console.log(age); //En este ejemplo lo que ocurre es que busca el scope mas alto en el que lo utilizan, las variables en su lugar si deben ser declaradas antes de su ejecucion, o almenos inicializadas.
    let age = 27;
    console.log(age);
}


//El Hoisting nos permite utilizar variables y funciones antes de ser declaradas, esto debido a que Javascript las almacena en memoria en la fase de compilacion.