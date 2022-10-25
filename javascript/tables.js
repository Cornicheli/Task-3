let $rowOne = document.getElementById("tabletOne")
let $rowTwo = document.getElementById("tableTwo")
let $rowThree = document.getElementById("tableThree")


let eventosFuturos;
let eventosPasados;
fetch("https://mh-amazing.herokuapp.com/amazing")
    .then((data) => data.json())
    .then((data) => {
        let eventos = data.events;
        let fechaActual = data.date;
        eventosFuturos = eventos.filter((objeto) => objeto.date > fechaActual);
        eventosPasados = eventos.filter((objeto) => objeto.date < fechaActual);
        logicaTablaUno();
        stats(eventosFuturos, 'estimate', $rowTwo)
        stats(eventosPasados, 'assistance', $rowThree)
    })
    .catch((error) => console.log(error));


function tableOne(contenedor, obj1, obj2, obj3) {
    contenedor.innerHTML += `
    <tr>
        <td>${obj1.name}</td> 
        <td>${obj2.name}</td>
        <td>${obj3.name}</td>
    </tr>
    `;
}

function tablaTwo(array, contenedor) {
    array.forEach(element => {
        contenedor.innerHTML +=
        `
        <tr >
            <td >${element.category}</td>
            <td >${element.ganancia}</td>
            <td >${element.promedio}%</td>     
        </tr>
        `
    })
}

function logicaTablaUno() {
    eventosPasados.map((objeto) => {
        objeto.porcentajeAsistencia = 100 * (objeto.assistance / objeto.capacity);
    });
    let asistenciaOrdenada = [...eventosPasados].sort((e1, e2) => e1.porcentajeAsistencia - e2.porcentajeAsistencia);
    let capacidadOrdenada = [...eventosPasados].sort((e1, e2) => e1.capacity - e2.capacity);

    let menorAsistencia = asistenciaOrdenada[0];
    let mayorAsistencia = asistenciaOrdenada[asistenciaOrdenada.length - 1];
    let mayorCapacidad = capacidadOrdenada[capacidadOrdenada.length - 1];
    tableOne($rowOne, menorAsistencia, mayorAsistencia, mayorCapacidad);
}

function stats(fechaEvento, propiedad, contenedor) {
    fechaEvento.map(evento => {
        evento.ganancia = evento[propiedad] * evento.price
    })
    let categories = Array.from(new Set(fechaEvento.map(evento => evento.category)))
    let stats = categories.map(cat => {
        let filter = fechaEvento.filter(evento => evento.category === cat)
        return accumulator(filter, propiedad)
    })
    tablaTwo(stats, contenedor)
}

function accumulator(array, propiedad) {
    let starterValue = {
        category: "",
        ganancia: 0,
        capacity: 0,
        [propiedad]: 0
    }
    let stats = array.reduce((e1, e2) => {
        return {
        category: e2.category,
        ganancia: e1.ganancia + e2.ganancia,
        capacity: e1.capacity + e2.capacity,
        [propiedad]: e1[propiedad] + e2[propiedad]
        }
    }, starterValue)
    stats.promedio = (100 * stats[propiedad] / stats.capacity).toFixed(0)
    return stats
}