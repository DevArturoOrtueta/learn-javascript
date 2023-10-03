// Classes

// class Rectangulo {
//     constructor(alto, ancho){
//         this.alto = alto;
//         this.ancho = ancho;
//     }
// }

// console.log(Rectangulo.name);
// output: "Rectangulo"

// Nombrada
// let Rectangulo = class Rectangulo2 {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
// };
// console.log(Rectangulo.name);
// output: "Rectangulo2"

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Método
    calcArea() {
      return this.alto * this.ancho;
    }
  }
  
  const cuadrado = new Rectangulo(10, 10);
  
  console.log(cuadrado.area); // 100

//   Metodos estaticos

class Punto {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distancia(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log(Punto.distancia(p1, p2)); // 7.0710678118654755

//   Boxing con prototipos y metodos estaticos

class Animal {
    hablar() {
      return this;
    }
    static comer() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.hablar(); // Animal {}
  let hablar = obj.hablar;
  hablar(); // undefined
  
  Animal.comer() // class Animal
  let comer = Animal.comer;
  comer(); // undefined

//   Subclases con extends

class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(this.nombre + " hace un ruido.");
    }
  }
  
  class Perro extends Animal {
    hablar() {
      console.log(this.nombre + " ladra.");
    }
  }

//   Especies

class MyArray extends Array {
    // Sobreescribe species sobre el constructor padre Array
    static get [Symbol.species]() {
      return Array;
    }
  }
  
  var a = new MyArray(1, 2, 3);
  var mapped = a.map((x) => x * x);
  
  console.log(mapped instanceof MyArray); // false
  console.log(mapped instanceof Array); // true

//   Llamadas a superclases con super

class Gato {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(this.nombre + ' hace ruido.');
    }
  }
  
  class Leon extends Gato {
    hablar() {
      super.hablar();
      console.log(this.nombre + ' maulla.');
    }
  }

  // Iteration

var uint8 = new Uint8Array([15, 192, 16]);

for (var byte of uint8) {
   console.log(byte.toString(16));
}

// Behind the scene! el for of es igual a hacer esto:

var nums = [1, 5, 16];

for (var i = 0; i < nums.length; i++) {
var num = nums[i];
   console.log(num);
}