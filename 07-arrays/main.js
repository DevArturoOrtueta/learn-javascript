// Declaracion de arrays

let array1 = new Array();

let array2 = ['Peter', 'Franco', 'Luis'];

// Se puede remplazar y añadir un elemento del array directamente con corchetes

array2[1] = 'Ethan';

console.table(array2);

array2[3] = 'Bob';

console.table(array2);

// Podemos ver que al array se le añade un elemento, y el array trabaja mediante indices de 0 a infinito

console.log(array2.length);

// Con length podemos capturar la magnitud de un arreglo, igual funciona con string 

console.log(array2.pop());

// Se elimina la ultima posicion

console.log(array2.push('Anel'));

// Se añade un elemento como ultima posicion

console.log(array2.shift());

// Elimina el primer elemento del array

console.log(array2.unshift('Santiago'));

// Se añade un elemento en primera posicion

// NOTA: push y unshift pueden agregar mas de un elemento si se añaden como parametro con comas.

