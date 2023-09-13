let global = 'Esta es una variable global y puede ser utilizada en cualquier parte del codigo.'

console.log(global + ' Primera ejecucion')

PrimerScope()

function PrimerScope() {
    console.log(global + ' Segunda Ejecucion')
    let local = 'Esta es una variable local dentro de PrimerScope y puede ser utilizado por el y sus hijos, no obstante no puede ser utilizada por antecesores.'
    console.log(local + ' Ejecutado dentro de PrimerScope')
}

//console.log(local + ' Ejecutado fuera de PrimerScope')  //Nos arrojara el siguiente error local is not definedat main.js