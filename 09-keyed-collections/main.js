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