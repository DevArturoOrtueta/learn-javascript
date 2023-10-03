
 import { getPokemon } from "./getPokemon";

let numPokemon = prompt('Numero de pokemon')

 const url = `https://pokeapi.co/api/v2/pokemon/${numPokemon}/`

 alert(getPokemon(url))