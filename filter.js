var ciudades = [{ "id": 1 }, { "id": 2 }, { "id": 3 }, { "id": 4 }, { "id": 1 }, { "id": 5 }, { "id": 6 }]


// ciudades.filter((value, index, arrayCiudades) => console.log(value,index))

// ciudades.findIndex(v => console.log(v))


// ciudades.filter((valor,index,arryCiudades)=>{
//     arryCiudades

// })

console.log(ciudades.filter((value, index, arrCiudades) => arrCiudades.findIndex(v => v.id === value.id) === index))




console.log(ciudades.slice(3))



