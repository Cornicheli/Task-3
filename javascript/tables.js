let $tablets = document.getElementById('tablet')

let upcoming
let past
let fechas
let evento 
fetch('https://amazing-events.herokuapp.com/api/events')
    .then( data => data.json() )
    .then( data =>{
        evento = data.events
        tabletOne($tablets)
        tabletTwo($tablets)
        tabletThree($tablets)
        fechas = data.currentDate
        upcoming = evento.filter(everyTables => everyTables.date > fechas)
        console.log(upcoming)
        past = evento.filter(everyTables => everyTables.date < fechas)
        console.log(past)
    } )
    .catch( err => console.log(err))


function tabletOne(contenedor){
contenedor.innerHTML +=
    `
    <thead class="table-dark">
        <tr>
        <th colspan="3">Event statistics</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td class="semibold">
            Events with the highest percentage of attendance
        </td>
        <td class="semibold">
            Events with the lowest percentage of attendance
        </td>
        <td class="semibold">Events with larger capacity</td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        </tr>
    </tbody>
    `
}

function logicTabletOne(){
    past.map(object =>{
        
    object.porcentajeAsistencia = 100 * (object.assistance / object.capacity);
    
        // <----- sort ----->
    let asistenciaOrdenada = [...past].sort((event1, event2) => event1.porcentajeAsistencia - event2.porcentajeAsistencia )
    let capacidadOrdenada = [...past].sort((event1, event2) => event1.capacity - event2.capacity)
    })

        // <----- porcentajes ----->
    let menorAsistencia = asistenciaOrdenada[0]
    let mayorAsistencia = asistenciaOrdenada[asistenciaOrdenada.length -1]
    let mayorCapacidad = capacidadOrdenada[capacidadOrdenada.length -1]

    tabletOne($tablets, menorAsistencia, mayorAsistencia, mayorCapacidad)
}

function tabletTwo(contenedor){
contenedor.innerHTML +=
    `
    <thead class="table-dark">
        <tr>
            <th colspan="3">Upcoming events statistics by category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="semibold">Categories</td>
            <td class="semibold">Revenues</td>
            <td class="semibold">Percentage of attendance</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    `
}

function tabletThree(contenedor){
contenedor.innerHTML +=
    `
    <thead class="table-dark">
        <tr>
            <th colspan="3">Past events by category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="semibold">Categories</td>
            <td class="semibold">Revenues</td>
            <td class="semibold">Percentage of attendance</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    `
}
