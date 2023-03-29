const contenedorTarjetas = document.getElementById("cuadro-pokemones")
let inputPikachu 
let inputSquirtle
let inputSnorlax 
let inputCharmander

const spanJugador = document.getElementById("nombre-pokemon")
const spanEnemigo = document.getElementById("enemigo-pokemon")

let Enemigo = ""

let pokemones = []
let AtaqueJugador
let AtaqueEnemigo
let opcionDepokemones
let vidaJugador = 3
let vidaRival = 3

class Pokemon{
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
let Pikachu = new Pokemon('pikachu',"./img/pikachu.png",5)
let Squirtle = new Pokemon('Squirtle','./img/squirtle.png',5)
let Snorlax = new Pokemon('Snorlax','./img/snorlax.png',5)
let Charmander = new Pokemon('Charmander',"./img/charmander.png",5) 

Pikachu.ataques.push(
    {nombre: '⚡', id:'boton-trueno'},
    {nombre: '⚡', id:'boton-trueno'},
    {nombre: '⚡', id:'boton-trueno'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'}
)
Squirtle.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '⚡', id:'boton-trueno'},
    {nombre: '🌱', id:'boton-tierra'}
)
Charmander.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '⚡', id:'boton-trueno'},
)

Snorlax.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
)
pokemones.push(Squirtle,Pikachu,Charmander,Snorlax)

pokemones.forEach((Pokemon)=> {
    opcionDepokemones = `
    <input type = "radio" name = "pokemon" id=${Pokemon.nombre} />
    <label for = "${Pokemon.nombre}"><picture><img src=${Pokemon.foto} alt=${Pokemon.foto}></picture> </label>
        `
    contenedorTarjetas.innerHTML += opcionDepokemones
    console.log(contenedorTarjetas)

    inputPikachu = document.getElementById("pikachu");
    inputSquirtle = document.getElementById("Squirtle");
    inputSnorlax = document.getElementById("Snorlax");
    inputCharmander = document.getElementById("Charmander");
})

const botonTierra = document.getElementById("boton-tierra")
botonTierra.addEventListener('click',ataqueTierra)
const botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener('click',ataqueAgua)
const botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener('click',ataqueFuego)
const botonTrueno = document.getElementById("boton-trueno")
botonTrueno.addEventListener('click',ataqueTrueno)
const botonHielo = document.getElementById("boton-hielo")
botonHielo.addEventListener('click',ataqueHielo)

const sectionPokedex = document.getElementById("Pokedex")
const sectionMovimientos = document.getElementById("Movimientos")
sectionMovimientos.style.display = 'none'
const sectionPlayagain = document.getElementById("Play again")
sectionPlayagain.style.display = 'none'

const botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click',reiniciar)

const pokemonEscogido = document.getElementById('pokemon-jugador')
const pokemonRivalEscogido = document.getElementById('pokemon-enemigo')

let imagenPokemonEscogido = document.createElement('img')
let imagenPokemonRivalEscogido = document.createElement('img')

const spanVidaJugador = document.getElementById('vidaJugador')
const spanVidaRival = document.getElementById('vidaRival')

const mensaje2 = document.getElementById('Info')
const mensajeAtaqueJugador = document.getElementById("ataques-jugador")
const mensajeAtaqueEnemigo = document.getElementById("ataques-enemigo")



function pokedex(){

    sectionMovimientos.style.display = 'inline-block'
    sectionPokedex.style.display = 'none'

    if (inputPikachu.checked){
        alert("Usted ha seleccionado pikachu")
        spanJugador.innerHTML = inputPikachu.id
        imagenPokemonEscogido.src = './img/pikachu.png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else if (inputSquirtle.checked){    // el.checked verifica si esta seleccionado
        alert("Usted ha seleccionado Squirtle")
        spanJugador.innerHTML = inputSquirtle.id
        imagenPokemonEscogido.src = './img/squirtle.png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else if (inputSnorlax.checked){
        alert("Usted ha seleccionado Snorlax")
        spanJugador.innerHTML = inputSnorlax.id
        imagenPokemonEscogido.src = './img/snorlax.png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else if (inputCharmander.checked){
        alert("Usted ha seleccionado Charmander")
        spanJugador.innerHTML = inputCharmander.id
        imagenPokemonEscogido.src = './img/charmander.png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else{
        alert("NO HAS SELECCIONADO NINGÚN POKEMÓN")
    }
  
    let azar = aleatorio()
    console.log(azar)
    enemigo(azar)
    
    }
function aleatorio(){
    return Math.floor(Math.random()*((pokemones.length)))
}

function enemigo(oponente){

    spanEnemigo.innerHTML = pokemones[oponente].nombre
    imagenPokemonRivalEscogido.src = pokemones[oponente].foto
    pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    // if (oponente == 1){
    //     spanEnemigo.innerHTML = "Pikachu"
    //     imagenPokemonRivalEscogido.src = './img/pikachu.png'
    //     pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    // }
    // else if (oponente == 2){    // el.checked verifica si esta seleccionado
    //     spanEnemigo.innerHTML = "Squirtle"
    //     imagenPokemonRivalEscogido.src = './img/squirtle.png'
    //     pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    // }
    // else if (oponente == 4){
    //     spanEnemigo.innerHTML = "Snorlax"
    //     imagenPokemonRivalEscogido.src = './img/snorlax.png'
    //     pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    // }
    // else if (oponente == 3){
    //     spanEnemigo.innerHTML = "Charmander"
    //     imagenPokemonRivalEscogido.src = './img/charmander.png'
    //     pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    // }
}

function ataqueTierra(){
    AtaqueJugador = "🌱"
    ataqueEnemigo()
}
function ataqueAgua(){
    AtaqueJugador = "🌊"
    ataqueEnemigo()
}
function ataqueFuego(){
    AtaqueJugador = "🔥"
    ataqueEnemigo()
}
function ataqueTrueno(){
    AtaqueJugador = "⚡"
    ataqueEnemigo()
}
function ataqueHielo(){
    AtaqueJugador = "🌪"
    ataqueEnemigo()
}

function attackAleatorio(){
    return Math.floor(Math.random()*5+1)
}
function ataqueEnemigo(){
    let ataqueAleatorioEnemigo= attackAleatorio()

    if(ataqueAleatorioEnemigo == 1){
        AtaqueEnemigo = "🌱"
    }
    else if(ataqueAleatorioEnemigo == 2){
        AtaqueEnemigo = "🌊"
    }
    else if(ataqueAleatorioEnemigo == 3){
        AtaqueEnemigo = "🔥"
    }  else if(ataqueAleatorioEnemigo == 4){
        AtaqueEnemigo = "⚡"
    }  else{
        AtaqueEnemigo = "🌪"
    }
    combatir()
}

function combatir(){

    if(AtaqueJugador == AtaqueEnemigo){
        mensaje("EMPATE")
    }
    else if(AtaqueJugador== " AGUA "&& AtaqueEnemigo == "FUEGO" || AtaqueJugador == "TIERRA" && AtaqueEnemigo == "AGUA" || AtaqueJugador == "FUEGO" && AtaqueEnemigo == "VIENTO" || AtaqueJugador == "VIENTO" && AtaqueEnemigo == "TRUENO" ||AtaqueJugador == "TRUENO" && AtaqueEnemigo == "TIERRA"||AtaqueJugador == "TRUENO" && AtaqueEnemigo == "FUEGO" ||AtaqueJugador == "TIERRA" && AtaqueEnemigo == "FUEGO"||AtaqueJugador == "TRUENO" && AtaqueEnemigo == "AGUA"||AtaqueJugador == "VIENTO" && AtaqueEnemigo == "TIERRA"||AtaqueJugador == "AGUA" && AtaqueEnemigo == "VIENTO"){
        mensaje("GANASTE")
        vidaRival--
        spanVidaRival.innerHTML = vidaRival
    }
    else{
        mensaje("PERDISTE")
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
    }
    vidas()
}
function vidas(){
    if(vidaJugador == 0){
        alert("PERDISTE")
        sectionPlayagain.style.display = 'block'        
        botonTierra.disabled = true
        botonAgua.disabled = true
        botonFuego.disabled = true
        botonTrueno.disabled = true
        botonHielo.disabled = true
    }
    else if(vidaRival == 0){
        alert("GANASTE")
        sectionPlayagain.style.display = 'block' 
        botonTierra.disabled = true
        botonAgua.disabled = true
        botonFuego.disabled = true
        botonTrueno.disabled = true
        botonHielo.disabled = true
    }
}

function mensaje(resultadoBatalla){

    
    let parrafoAtaqueJugador = document.createElement('p')
    let parrafoAtaqueEnemigo = document.createElement('p')

    mensaje2.innerHTML = resultadoBatalla
    parrafoAtaqueJugador.innerHTML = AtaqueJugador
    parrafoAtaqueEnemigo.innerHTML = AtaqueEnemigo

    mensajeAtaqueJugador.appendChild(parrafoAtaqueJugador)
    mensajeAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo)
}

function reiniciar(){
    location.reload()
}

let botonMascota = document.getElementById("boton-pokedex")    // document. representa al documento html // Con esto seleccionamos el boton
botonMascota.addEventListener("click",pokedex)                 //Aca escuchamos el evento del botón(si click,ejecute funcion)