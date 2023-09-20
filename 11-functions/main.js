// Declaracion de funciones

function Funcion1 () {
    console.log('Declarado con la alabra reservada function')
}

const Function2 = () => {
    console.log('Declarado como const')
}

// Paso de parametros

function Par1(nombre){
    console.log(nombre)
}

Par1('Arturo Ortueta')

const Par2 = (nombre) => {
    console.log(nombre);
}

Par2('Arturo Ortueta const')

// Hoisting en funciones

Hois();

function Hois(){
    console.log('Funciona el hoisting')
}

// Predefined functions
// JavaScript has several top-level, built-in functions:

// eval()
// The eval() method evaluates JavaScript code represented as a string.

// isFinite()
// The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

// isNaN()
// The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN() to determine if the value is Not-A-Number.

// parseFloat()
// The parseFloat() function parses a string argument and returns a floating point number.

// parseInt()
// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

// decodeURI()
// The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

// decodeURIComponent()
// The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

// encodeURI()
// The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

// encodeURIComponent()
// The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

// escape() Deprecated
// The escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. It's deprecated and you should use encodeURI() or encodeURIComponent() instead.

// unescape() Deprecated
// The unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape(). It's deprecated and you should use decodeURI() or decodeURIComponent() instead.

// Argumentos

const Argu = (...heroes) => {
    console.log(heroes.length)
    console.log(heroes[1])
    console.log(JSON.stringify(heroes[2]))
    console.log(heroes[2].name)
}

Argu('Superman', 'Batman',{name:'Lavagirl'})

// De esta forma podemos mandar la cantidad de argumentos necesarios. esto puede ser util si mandamos un json.

function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr); // [30, 50, 84]

//   IIFE - funciones que se ejecutan tan pronto son declaradas

(function() {
    console.log('IIFE no asincrona')
})
