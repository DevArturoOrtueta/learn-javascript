
// Callbacks

function modify(array, callback){
    array.push('Arturo');
    setTimeout(
        callback(array)
        ,3000
    )
}

const names = ['Pedro', 'Manuel', 'Juan']

modify(names, function (array) {
    console.log(`He modificado el array y ahora es de ${array.length} elementos!`)
})

// Promises

const dato = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},
{
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
},
{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];

// const getDatos = () => {
//     return datos;
// }


const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(dato.length === 0){
            reject(new Error('No existen datos'))
        }
        setTimeout(() => {
           resolve(dato);
        }, 1500)
    })
    
}

// console.log(getDatos()
//     .then((datos) => console.log(datos))); 
const fetchingData = async () => {
    try {
        const datos = await getDatos();
        console.log(datos);
    } catch (error) {
        console.log(error.message)
    }
}


fetchingData()
