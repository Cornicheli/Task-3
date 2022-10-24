
let fullEvents = events

let idEvent = location.search.slice(8)

let fullEventsFilter = fullEvents.filter(idEvents => idEvent == idEvents._id)

fullEventsFilter = fullEventsFilter[0]

printFirstCard(fullEventsFilter)


fetch('https://amazing-events.herokuapp.com/api/events')
    .then( data => data.json() )
    .then( data =>{
    } )

function printFirstCard(evento) {
        contenedorUnico.innerHTML = 
        `
        <div>
            <img class="p-5" src="${evento.image}" alt="${evento.name}" style="max-width: 100%; object-fit: contain" >
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center ps-5" style="max-width: 30%;">
            <h2>${evento.name}</h2>
            <p>DATE:${evento.date}</p>
            <p>${evento.description}</p>
            <p>PLACE:${evento.place}</p>
            <p>CAPACITY:${evento.capacity}</p>
            <p>ASSISTANCE:${evento.assistance}</p>
            <p>u$d ${evento.price}</p>
        </div>
        `
    }