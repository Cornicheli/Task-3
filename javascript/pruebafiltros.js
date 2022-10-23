// let contenedor = document.getElementById("tarjetero")

// function printCards(array, contenedor) {
//   array.forEach((e) => {
//     contenedor.innerHTML += 
//     `
//     <section class='card'>
//         <img class='img-card' src='${e.image}' alt='foto'>
//         <h2>${e.name}</h2>
//         <p>${e.description}</p>
//         <div class='texto'>
//             <p>$ ${e.price}</p>
//             <a class='ancor' href="./html/details.html?events=${e._id}">Read More</a>
//         </div>
//     </section>
//     `
//   })
// }
// printCards(events, contenedor);
// // <-------------- checkbox -------------->
// let categorias = document.getElementById('boxes');

// let checkbox = new Set(events.map((evento) => evento.category) )

// checkbox = [...checkbox]

// checkbox.forEach((nombreCategoria) => {
//   categorias.innerHTML += 
//   `
//     <div class='form-check form-switch'>
//         <input class='form-check-input' id='${nombreCategoria}' type='checkbox' role='switch' id='flexSwitchCheckDefault'>
//         <label class='form-check-label' for='flexSwitchCheckDefault'>${nombreCategoria}</label>
//     </div>
//   `
// })
// // <-------------- checkbox logistica -------------->
// let listCheck = [] 

// categorias.addEventListener(`change`, e=>{

//   if(e.target.checked){ 
//     listCheck = listCheck.concat(events.filter(evento=> evento.category.toLowerCase().includes(e.target.id.toLowerCase() ) ) )

//     console.log(listCheck)

//     contenedor.innerHTML = ''

//     printCards(listCheck,contenedor )}

//   else if(!e.target.checked){
//     console.log('else if')
//       listCheck = listCheck.filter(evento => !evento.category.toLowerCase().includes( e.target.id.toLowerCase() ) )

//       contenedor.innerHTML = ''

//       printCards(listCheck, contenedor)}

//   if (listCheck.length === 0){
//       printCards(events,contenedor)}
//     }
//   )

// let checkBoxs = document.querySelectorAll('.checkboxId')

// console.log(checkBoxs)
// // <---------------------------- input busqueda ---------------------------->
//     let buscador = document.getElementById('buscadores');

//     buscador.addEventListener('keyup', e =>{

//     let inputUser = e.target.value

//     console.log(buscador.value) //filter cambiarlo por el function

//     let filtro = events.filter(objetoEvento => objetoEvento.name.toLowerCase().includes(inputUser.toLowerCase() ) )

//             contenedor.innerHTML = ""

//             printCards(filtro, contenedor)
//         }
//     )