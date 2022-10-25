let $contenedorUnico = document.getElementById('tarjeteroUnico')

let evento ;
fetch('https://mh-amazing.herokuapp.com/amazing')
    .then( data => data.json() )
    .then( data =>{
    evento = data.events
    logicPrintCard()
    } )
    .catch( err => console.log(err))

function logicPrintCard(){
        let idEvent = location.search.slice(4)
        let fullEventsFilter = evento.filter(idEvents => idEvent == idEvents.id)

        fullEventsFilter.forEach(events => {
            $contenedorUnico.innerHTML += 
            `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div w-50>
                    <img class="p-5" style="width: 50%" src="${events.image}" alt="${events.name}" object-fit: contain" >
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h2>${events.name}</h2>
                    <p>DATE:${events.date}</p>
                    <p>${events.description}</p>
                    <p>PLACE:${events.place}</p>
                    <p>CAPACITY:${events.capacity}</p>
                    <p>ESTIMATE:${events.estimate}<p>
                    <p>ASSISTANCE:${events.assistance}</p>
                    <p>u$d ${events.price}</p>
                </div>
            </div>
            `
        })
}

