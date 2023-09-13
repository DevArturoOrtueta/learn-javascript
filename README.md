# Repositorio de aprendizaje de javascript
En este repositorio estaran todos los proyectos en los que trabaje para aprender javascript, desde lo mas basico hasta lo mas dificil, tratando de utilizar las mejores practicas.

## 01-variables
En esta carpeta se encuentra un archivo js en el cual se ve la diferencia entre las declaraciones de variables.

## 02-hoisting
En esta carpeta se encuentra un archivo js en el cual se ve el uso del hoisting en Javascript.

Un hoisting es un termino utilizado en Javascript  para cuando las variables y funciones declaradas en Javascript es guardadas en memoria durante la fase de compilacion del codigo, esto nos permite utilizar las funciones o variables antes de ser declaradas, a diferencia de Python que es necesario declarar las variables y funciones antes de ser ejecutadas.

## 03-scope
En esta carpeta se encuentra un archivo js en el cual se ve el uso de los scope en Javascript.

Un scope es un termino utilizado en Javascript para mencionar el nivel de ejecucion del codigo en Javascript, ya sea global o local en cuanto a declaraciones. Si declaramos una variable dentro de una funcion, solo puede ser utilizada dentro de ese bloque de codigo, si intento utilizarla fuera de la funcion, Javascript me indicara que la variable no fue declarada.

Los scope que existen son:

- Block Scope:Lo declarado dentro de este scope solo puede ser utilizado por lo de adentro, no puede ser utilizado fuera del scope, por ejemplo dentro de un objeto.
- Function Scope: Lo declarado dentro de la funcion solo puede ser utilizado por la funcion, no puede ser utilizado fuera de la funcion.
- Global Scope: Este scope permite declarar una variable y puede ser utilizada por cualquier funcion.

## 04-objects
En esta carpeta se encuentra un archivo js en el cual se ve el uso de los objetos y como crearlos en Javascript.

Un objeto es una coleccion de datos almacenados en llaves o propiedades que son añadidas a la variable en cuestion, esta variable puede poseer mas informacion que una simple variable de string.

En el archivo js dentro de la carpeta se podra ver varias tecnicas de uso de los objetos en Javascript.

## 05-builtinobjects

En esta carpeta se encuentra un archivo js en el cual se utiliza algunos metodos globales en javascript.

Esta seccion indica los objetos globales que posee Javascript, los mismos pueden ser accedidos a su vez con this.

## Objetos estándar por categoría
### Propiedades de valor
Estas propiedades globales devuelven un valor simple; ellos no tienen propiedades o métodos.

- Infinity
- NaN
- undefined
- null literal
- globalThis (en-US)
### Propiedades de funciones
Estas funciones globales -funciones llamadas globalmente en lugar de un objeto- devuelven directamente sus resultados a la persona que llama.

- eval()
- uneval() Non-standard
- isFinite()
- isNaN()
- parseFloat()
- parseInt()
- decodeURI()
- decodeURIComponent()
- encodeURI()
- encodeURIComponent()
- escape() Obsoleto
- unescape() Obsoleto
### Objetos fundamentales
Estos son los objetos fundamentales y básicos sobre los que se basan todos los demás objetos. Esto incluye objetos que representan objetos generales, funciones y errores.

- Object
- Function
- Boolean
- Symbol
- Error
- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError
### Números y fechas
Estos son los objetos base que representan números, fechas y cálculos matemáticos.

- Number
- BigInt (en-US)
- Math
- Date
### Procesamiento de texto
Estos objetos representan cadenas y soporte para manipularlos.

- String
- RegExp
### Colecciones indexadas
Estos objetos representan colecciones de datos que están ordenadas por un valor de índice. Esto incluye matrices (tipadas) y construcciones tipo array.

- Array
- Int8Array (en-US)
- Uint8Array
- Uint8ClampedArray (en-US)
- Int16Array (en-US)
- Uint16Array (en-US)
- Int32Array (en-US)
- Uint32Array (en-US)
- Float32Array (en-US)
- Float64Array (en-US)
- BigInt64Array (en-US)
- BigUint64Array (en-US)
### Colecciones con clave
Estos objetos representan colecciones que usan claves; estos contienen elementos que son iterables en el orden de inserción.

- Map (en-US)
- Set
- WeakMap
- WeakSet
### Colecciones de vectores
Los tipos de datos vectoriales SIMD son objetos donde los datos se organizan en carriles.

- SIMD Experimental
- SIMD.Float32x4 Experimental
- SIMD.Float64x2 Experimental
- SIMD.Int8x16 Experimental
- SIMD.Int16x8 Experimental
- SIMD.Int32x4 Experimental
- SIMD.Uint8x16 Experimental
- SIMD.Uint16x8 Experimental
- SIMD.Uint32x4 Experimental
- SIMD.Bool8x16 Experimental
- SIMD.Bool16x8 Experimental
- SIMD.Bool32x4 Experimental
- SIMD.Bool64x2 Experimental
### Datos estructurados
Estos objetos representan e interactúan con los búferes de datos estructurados y los datos codificados utilizando la notación de objetos JavaScript (JSON del inglés JavaScript Object Notation).

- ArrayBuffer
- SharedArrayBuffer (en-US) Experimental
- Atomics (en-US) Experimental
- DataView (en-US)
- JSON
### Objetos de abstracción de control
- Promise
- Generator
- GeneratorFunction (en-US)
- Experimental AsyncFunction
- Reflexión
- Reflect
- Proxy
### Internacionalización
Adiciones al núcleo de ECMAScript para funcionalidades sensibles al lenguaje.

- Intl
- Intl.Collator
- Intl.DateTimeFormat
- Intl.NumberFormat
- WebAssembly
- WebAssembly
- WebAssembly.Module (en-US)
- WebAssembly.Instance (en-US)
- WebAssembly.Memory (en-US)
- WebAssembly.Table (en-US)
- WebAssembly.CompileError (en-US)
- WebAssembly.LinkError (en-US)
- WebAssembly.RuntimeError (en-US)
### Otro
- arguments