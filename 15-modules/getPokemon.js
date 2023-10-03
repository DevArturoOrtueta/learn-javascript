
export const getPokemon = async (url) => {
    console.log(url)
    try {
        if(url != ''){
            const response = await fetch(url);
            const datos = await response.json();

            return datos
            
        }else{
            new Error('No se encontro el pokemon deseado')
        }
    } catch (error) {
        alert(error.message)
    }
}