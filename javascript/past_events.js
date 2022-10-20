let contenedor = document.getElementById("tarjetero");

// .date > currentDate. es para que imprima los eventos del pasado
let past = events.filter((event) => event.date < currentDate);

    function printCards(array, contenedor) {
    array.forEach((e) => {
        contenedor.innerHTML += 
        `
        <section class='card'>
            <img class='img-card' src='${e.image}' alt='foto'>
            <h2>${e.name}</h2>
            <p>${e.description}</p>
            <div class="texto">
                <p>$ ${e.price}</p>
            <a class='ancor' href="../html/details.html?events=${e._id}">Read More</a>
            </div>
        </section>
        `
    })
    }

printCards(past, contenedor)


// <---------------------------- checkbox ---------------------------->

let categorias = document.getElementById("boxes");

let checkbox = new Set(events.map((evento) => evento.category) )

checkbox = [...checkbox]

checkbox.forEach((nombreCategoria) => {
    categorias.innerHTML += 
        `
        <div class='form-check form-switch'>
            <input class='form-check-input' id='${nombreCategoria}' type='checkbox' role='switch' id='flexSwitchCheckDefault'>
            <label class='form-check-label' for="flexSwitchCheckDefault">${nombreCategoria}</label>
        </div>
        `
    }
)
    let listCheckUno = []

    categorias.addEventListener(`change`, e=>{
    console.log(buscador.value)

    if(e.target.checked){
        listCheckUno = listCheckUno.concat(past.filter(evento=> evento.category.toLowerCase().includes(e.target.id.toLowerCase() ) ) )

        contenedor.innerHTML = ''

        printCards(listCheckUno,contenedor )}

    else if(!e.target.checked){
        listCheckUno = listCheckUno.filter(evento => !evento.category.toLowerCase().includes( e.target.id.toLowerCase() ) )

        contenedor.innerHTML = ''

        printCards(listCheckUno, contenedor)}

    if (listCheckUno.length === 0){
        printCards(past,contenedor) } } )


    // <---------------------------- input busqueda ---------------------------->
    let buscador = document.getElementById('buscadores');

    buscador.addEventListener('keyup', e =>{

    let inputUser = e.target.value

    console.log(buscador.value) //filter cambiarlo por el function

    let filtro = events.filter(objetoEvento => objetoEvento.name.toLowerCase().includes(inputUser.toLowerCase() ) )

            contenedor.innerHTML = ""

            printCards(filtro, contenedor)
        }
    )