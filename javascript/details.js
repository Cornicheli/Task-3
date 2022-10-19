let contenedorUnico = document.getElementById("tarjeteroUnico")

function printCartaUnica(array, contenedorUnico) {
    array.forEach((e) => {
        contenedorUnico.innerHTML = 
        `
        <div>
            <img class="p-5" src="${e.image}" alt="${e.name}" style="max-width: 100%; object-fit: contain" >
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center ps-5" style="max-width: 30%;">
            <h2>${e.name}</h2>
            <p>DATE:${e.date}</p>
            <p>${e.description}</p>
            <p>PLACE:${e.place}</p>
            <p>CAPACITY:${e.capacity}</p>
            <p>ASSISTANCE:${e.assistance}</p>
            <p>u$d ${e.price}</p>
        </div>
        `
    })
}
// printCartaUnica(events, contenedorUnico);

function printCartaUnicaDos(array){
    console.log(location)
    console.log(location.search)
    console.log(location.search.slice(4))
// saca los primeros y ultimos caracteres
    let printCartaUnicaTres = []
    let cartasSearch = Number(location.search.slice(4))
    console.log(typeof(cartasSearch))
    printCartaUnicaTres = array.filter((e) => e._id === cartasSearch)
    printCartaUnica(events, contenedorUnico) 
}
printCartaUnicaDos(events)