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

var result = (function () {
    var name = "Barry";
    return name;
  })();
  // Immediately creates the output:
  result; // "Barry"

// Objeto arguments

function func1(a, b, c) {
    console.log(arguments[0]);
    // Expected output: 1
  
    console.log(arguments[1]);
    // Expected output: 2
  
    console.log(arguments[2]);
    // Expected output: 3
  }
  
  func1(1, 2, 3);
  

  function midpoint() {
    return (
      (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
    );
  }
  
  console.log(midpoint(3, 1, 4, 1, 5)); // 3

// const args = Array.prototype.slice.call(arguments);
// or
// const args = Array.from(arguments);
// or
// const args = [...arguments];


//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// Built-in https://www.tutorialspoint.com/javascript/javascript_builtin_functions.html


// Recursion

const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55

const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45

// Closures - Lexical scoping

function iniciar() {
  var nombre = "Mozilla"; // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {
    // La función mostrarNombre es una función interna, una clausura.
    alert(nombre); // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // muestra 7
console.log(add10(2)); // muestra 12


const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.


const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};
const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.