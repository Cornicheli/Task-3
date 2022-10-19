let contenedorUnico = document.getElementById("tarjeteroUnico")

function printCards(array, contenedorUnico){
    array.forEach( (e) => {
    contenedorUnico.innerHTML +=
        `
        <article class="d-flex container-fluid mt-5 mb-5 border rounded" style="width: 60%;">
        <div>
            <img class="p-5" src="../img/1-fiestas-de-disfraces.jpg"  alt="fiestas-de-disfraces" style="max-width: 100%; object-fit: contain" >
        </div>
        <divclass="d-flex flex-column justify-content-center align-items-center ps-5" style="max-width: 30%;">
            <h2>${e.name}</h2>
            <p>${e.description}</p>
            <p>$ ${e.price}</p>
            </div>
    </article>
        `
    })
}
printCards(events, contenedorUnico)

let id = location.search.slice(1)

let evento = eventos.filter(evento => evento._id == id)[0]

console.log(id)

console.log(evento)