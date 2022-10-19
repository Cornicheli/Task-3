let contenedorUnico = document.getElementById("tarjeteroUnico")

let fullEvents = events

let idEvent = location.search.slice(8)

let fullEventsFilter = fullEvents.filter(idEvents => idEvent == idEvents._id)

fullEventsFilter = fullEventsFilter[0]

printCartaUnica(fullEventsFilter)

function printCartaUnica(e) {
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
    }