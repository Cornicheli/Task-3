
let $contenedor = document.getElementById(`tarjetero`);
let $categorias = document.getElementById(`boxes`);
let $inputSearch = document.getElementById(`buscadores`);

let fechas
let upComing
let evento ;
fetch('https://mind-hub.up.railway.app/amazing')
    .then( data => data.json() )
    .then( data =>{ 
        console.log(data)
        evento = data.events
        fechas = data.date
        upComing = evento.filter((evento) => evento.date > fechas);
        createBox(upComing, $categorias)
        printCards(upComing,$contenedor )
        $inputSearch.addEventListener('keyup', filter)
        $categorias.addEventListener('change',filter)
        console.log(evento)
        console.log(upComing)
    } )
    .catch( err => console.log(err))

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
            <a class='ancor' href="./html/details.html?events=${event._id}">Read More</a>
        </div>
    </section>
        `
    return section

}

function printCards(event, contenedor){ 

    contenedor.innerHTML = " "
    let fragment = document.createDocumentFragment() 
    event.forEach(event => fragment.appendChild(createCard (event, contenedor) ) )
    contenedor.appendChild(fragment) //fragment reflow fragment = cache

}

function filter(){
    let checked = [...document.querySelectorAll('input[type ="checkbox"]:checked')].map(ele => ele.value)

    let filtersName = upComing.filter (event => checked.includes (event.category) || checked.length === 0)
    console.log(filtersName);

    let filterSearch = filtersName.filter(event => event.name.toLowerCase().includes($inputSearch.value.toLowerCase()))
    console.log(filterSearch);
    printCards(filterSearch, $contenedor)

}