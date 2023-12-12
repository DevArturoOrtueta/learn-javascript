const giftIds = [2, 1, 3, 5, 3, 2]

function findFirstRepeated(gifts) {
  
  let numerosNoRepetidos = giftIds.filter((numero, index) => {
    return giftIds.indexOf(numero) === index;
  })
  return numerosNoRepetidos
}


console.log(findFirstRepeated(giftIds))