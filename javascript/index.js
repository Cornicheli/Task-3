
let $contenedor = document.getElementById(`tarjetero`);
let $categorias = document.getElementById(`boxes`);
let $inputSearch = document.getElementById(`buscadores`);

let evento ; // variable indefinida
fetch('https://mh-amazing.herokuapp.com/amazing') // solicita al servidor y carga la informacion
    .then( data => data.json() ) // tranforma texto a objeto
    .then( data =>{ 
        evento = data.events
        createBox(evento, $categorias)
        printCards(evento,$contenedor )
        $inputSearch.addEventListener('keyup', filter)
        $categorias.addEventListener('change',filter)
    } )
    .catch( err => console.log(err)) //error por consola

function createBox(event, contenedor){
    let fn = event => event.category
    let box = new Set ( event.filter( fn ).map( fn ) )
    box.forEach( box =>{
        contenedor.innerHTML +=
        `
        <div class='form-check form-switch'>
            <input class='form-check-input' value='${box}' id=${box} type='checkbox' rol exSwitchCheckDefault'>
            <label class='form-check-label' for='flexSwitchCheckDefault'>${box}</label>
        </div>
        `
    })

}

function createCard (event, contenedor){

    let section = document.createElement('section')
    contenedor.innerHTML += 
        `
    <section class='card'>
        <img class='img-card' src='${event.image}' alt='foto'>
        <h2>${event.name}</h2>
        <p>${event.description}</p>
        <div class='texto'>
            <p>$ ${event.price}</p>
            <a class='ancor' id='readMore' href="./html/details.html?id=${event.id}">Read More</a>
        </div>
    </section>
        `
    return section

}

function printCards(event, contenedor){ 

    contenedor.innerHTML = " " //limpia contenedor
    let fragment = document.createDocumentFragment()  //nodo dom, evita cargar constantemente y simplemente mostrarlas
    event.forEach(event => fragment.appendChild(createCard (event, contenedor) ) )
    contenedor.appendChild(fragment) //fragment reflow

    }

function filter(){
    let checked = [...document.querySelectorAll('input[type ="checkbox"]:checked')].map(ele => ele.value)

    let filtersName = evento.filter (event => checked.includes (event.category) || checked.length === 0)

    let filterSearch = filtersName.filter(event => event.name.toLowerCase().includes($inputSearch.value.toLowerCase() ) )
    printCards(filterSearch, $contenedor)

}