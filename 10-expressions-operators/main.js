// Assigment

// Assignment	x = f()	x = f()
// Addition assignment	x += f()	x = x + f()
// Subtraction assignment	x -= f()	x = x - f()
// Multiplication assignment	x *= f()	x = x * f()
// Division assignment	x /= f()	x = x / f()
// Remainder assignment	x %= f()	x = x % f()
// Exponentiation assignment	x **= f()	x = x ** f()
// Left shift assignment	x <<= f()	x = x << f()
// Right shift assignment	x >>= f()	x = x >> f()
// Unsigned right shift assignment	x >>>= f()	x = x >>> f()
// Bitwise AND assignment	x &= f()	x = x & f()
// Bitwise XOR assignment	x ^= f()	x = x ^ f()
// Bitwise OR assignment	x |= f()	x = x | f()
// Logical AND assignment	x &&= f()	x && (x = f())
// Logical OR assignment	x ||= f()	x || (x = f())
// Nullish coalescing assignment	x ??= f()	x ?? (x = f())

// Asignacion de propiedades

const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.

// Destructuracion

const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];

const persona = {
    nombre: 'Arturo',
    apellido: 'Ortueta',
    edad: 27
}

const {nombre, apellido, edad} = persona;