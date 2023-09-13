//Existen 2 formas de construir objetos, existen los objetos constructor y los objetos literales.

//Object construct

let carros = new Object()

//Object literal

let avion = {}

//Si queremos añadir elementos a nuestro objeto literal, es tan simple como colocarlos dentro del bracket.

let user = {
    nombre : 'Arturo',
    apellido : 'Ortueta',
    edad: 27
}

//Si queremos hacer un llamado a nuestro objeto es tan simple como añadir un punto despues de nuestra variable, el intellicense nos ayudara a detectar la propiedades de nuestro objeto

alert(user.nombre + ' ' + user.apellido) //El mas indica una concatenacion.

//Podemos eliminar una propiedad con la siguiente funcion

delete user.apellido;

alert(user.nombre + ' ' + user.apellido) //En este caso el apellido aparece como undefined

//Tambien es posible añadir una propiedad con mas de una palabra

let perro = {
    nombre : 'Bingo',
    'cuantas manchas': 3
}

alert(perro["cuantas manchas"]); //De esta forma en lugar de buscar por punto, buscamos con llaves y el nombre de la propiedad para saber a cual apuntamos, como si fuera una matriz.

//Si una propiedad no existe puedes agregarla asignandole un valor

perro.edad = 1;

alert('El perro tiene: ' + perro.edad)

//El usuario puede agregar propiedades, no obstante de una manera distinta a la mostrada anteriormente.

let pablo = {}

let nombreP = prompt('Escribe el noombre de la propiedad')
let nombreR = prompt('Escribe el contenido de la propiedad')

pablo[nombreP] = nombreR

if(nombreP === 'nombre'){
    alert(pablo.nombre)
}
else{
    alert('Debes digitar nombre')
}

//Se puede dar ese chance al usuario tambien de otra forma

let juan = {
    [nombreP] : nombreR
}
if(nombreP === 'nombre'){
alert('Propiedad añadida mediante corchetes en el objeto literal y el valor tomado del prompt y asignado : ' + juan.nombre )
}
else{
    alert('Debes digitar nombre')
}
