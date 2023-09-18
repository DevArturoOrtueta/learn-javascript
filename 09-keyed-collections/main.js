// Script de colecciones

// Map

const map1 = new Map();

map1.set('nombre', 'Arturo');
map1.set('apellido', 'Ortueta')

console.log(map1.entries());

console.log(map1.keys())

console.log(map1.values())

console.log(map1.get(nombre));

// Utilizando WeakMap

const wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
const o1 = {},
    o2 = function () { },
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // El valor puede ser cualquier cosa, incluyendo un objeto o una función
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // Las llaves y los valores pueden ser cualquier objeto. ¡Incluso WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, porque no hay llave para `o2` en `wm2`
wm2.get(o3); // undefined, porque ese es el valor estabecido

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (incluso si el valor en sí es 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false


// Implementando una clase tipo-WeakMap con el método .clear()
class ClearableWeakMap {
    constructor(init) {
      this._wm = new WeakMap(init);
    }
    clear() {
      this._wm = new WeakMap();
    }
    delete(k) {
      return this._wm.delete(k);
    }
    get(k) {
      return this._wm.get(k);
    }
    has(k) {
      return this._wm.has(k);
    }
    set(k, v) {
      this._wm.set(k, v);
      return this;
    }
  }

//   Utilizando el objeto Set

const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add("algún texto"); // Set [ 1, 5, 'algún texto' ]
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o está haciendo referencia a un objeto diferente,
// por lo que está bien

mySet1.has(1); // true
mySet1.has(3); // false, ya que 3 no se ha agregado al conjunto
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Algún Texto".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // elimina 5 del conjunto
mySet1.has(5); // false, 5 ha sido eliminado

mySet1.size; // 4, ya que acabamos de eliminar un valor

console.log(mySet1);
// imprime en consola Set(4) [ 1, "algún texto", {…}, {…} ] en Firefox
// imprime en consola Set(4) { 1, "algún texto", {…}, {…} } en Chrome

// Iterando Set

// iterar sobre los elementos en Set
// imprime en consola los elementos en el orden:
//   1, "algún texto", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item)

// imprime en consola los elementos en el orden:
//   1, "algún texto", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.keys()) console.log(item)

// imprime en consola los elementos en el orden:
//   1, "algún texto", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.values()) console.log(item)

// imprime en consola los elementos en el orden:
//   1, "algún texto", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key y value son los mismos aquí)
for (let [key, value] of mySet1.entries()) console.log(key)

// convertir el objeto Set en un objeto Array, con Array.from
const myArr = Array.from(mySet1) // [1, "algún texto", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// lo siguiente también funcionará si se ejecuta en un documento HTML
mySet1.add(document.body)
mySet1.has(document.querySelector('body')) // true

// conversión entre Set y Array
const mySet2 = new Set([1, 2, 3, 4])
mySet2.size                    // 4
let set1 = [...mySet2]                    // [1, 2, 3, 4]

// la intersección se puede simular a través de
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))

// la diferencia se puede simular mediante
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))

// iterar entradas de Set con forEach()
mySet2.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// 4