// Se puede declarar un arreglo y dentro de el tenga un objeto y para consultar hacemos un merge de las 2.

let obj = [{
    name: 'Arturo',
    lastname: 'Ortueta',
    age: 27
}
]



console.log(obj[0].name + ' ' + obj[0].lastname)

// Podemos hacer un llamado a una api rest como ejemplo, que devuelve un json
let number = 1;
const url = `https://pokeapi.co/api/v2/pokemon/${number}`
const Llamado = async() => {
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon)

    console.log(pokemon.forms[0].name)
}


Llamado()