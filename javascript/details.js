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
    console.log(location.search.slice(8))
    let cartasSearch = Number(location.search.slice(8))
    console.log(typeof(cartasSearch))
    array.forEach((e) =>{
    //carga la varible dentro de un forEach
    let cartaUnica = e._id
    if(cartaUnica === cartasSearch){
        printCartaUnica(events, contenedorUnico)
    }
    })}
printCartaUnicaDos(events)

