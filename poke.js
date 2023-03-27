let inputPikachu = document.getElementById("pikachu");
let inputSquirtle = document.getElementById("Squirtle");
let inputSnorlax = document.getElementById("Snorlax");
let inputCharmander = document.getElementById("Charmander");

let spanJugador = document.getElementById("nombre-pokemon")
let spanEnemigo = document.getElementById("enemigo-pokemon")

let Enemigo = ""

let AtaqueJugador
let AtaqueEnemigo
let vidaJugador = 3
let vidaRival = 3

let botonTierra = document.getElementById("boton-tierra")
botonTierra.addEventListener('click',ataqueTierra)
let botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener('click',ataqueAgua)
let botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener('click',ataqueFuego)
let botonTrueno = document.getElementById("boton-trueno")
botonTrueno.addEventListener('click',ataqueTrueno)
let botonHielo = document.getElementById("boton-hielo")
botonHielo.addEventListener('click',ataqueHielo)

let sectionPokedex = document.getElementById("Pokedex")
let sectionMovimientos = document.getElementById("Movimientos")
sectionMovimientos.style.display = 'none'
let sectionPlayagain = document.getElementById("Play again")
sectionPlayagain.style.display = 'none'

let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click',reiniciar)

let pokemonEscogido = document.getElementById('pokemon-jugador')
let pokemonRivalEscogido = document.getElementById('pokemon-enemigo')

let imagenPokemonEscogido = document.createElement('img')
let imagenPokemonRivalEscogido = document.createElement('img')


function mascotaEnemiga(aleatoria){
    if(aleatoria == 1){
        Enemigo = "pikachu"
    }
    else if(aleatoria == 2){
        Enemigo = "Squirtle"
    }
    else if(aleatoria == 3){
        Enemigo = "Charmander"
    }
    else if(aleatoria == 4){
        Enemigo = "Snorlax"
    }
    console.log(Enemigo)
    enemigo(Enemigo)
}
function pokedex(){


    if (inputPikachu.checked){
        alert("Usted ha seleccionado pikachu")
        spanJugador.innerHTML = "Pikachu"
        imagenPokemonEscogido.src = './img/pngwing.com (3).png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else if (inputSquirtle.checked){    // el.checked verifica si esta seleccionado
        alert("Usted ha seleccionado Squirtle")
        spanJugador.innerHTML = "Squirtle"
        imagenPokemonEscogido.src = './img/squirtle.png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else if (inputSnorlax.checked){
        alert("Usted ha seleccionado Snorlax")
        spanJugador.innerHTML = "Snorlax"
        imagenPokemonEscogido.src = './img/snorlax.png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else if (inputCharmander.checked){
        alert("Usted ha seleccionado Charmander")
        spanJugador.innerHTML = "Charmander"
        imagenPokemonEscogido.src = './img/pngwing.com (2).png'
        pokemonEscogido.appendChild(imagenPokemonEscogido)
    }
    else{
        alert("NO HAS SELECCIONADO NINGÚN POKEMÓN")
    }
    sectionMovimientos.style.display = 'inline-block'
    sectionPokedex.style.display = 'none'
    aleatorio()
    let azar = aleatorio()
    console.log(azar)
    mascotaEnemiga(azar)
    
    }
function aleatorio(){
    return Math.floor(Math.random()*4+1)
}


function enemigo(oponente){
    if (oponente == "pikachu"){
        spanEnemigo.innerHTML = "Pikachu"
        imagenPokemonRivalEscogido.src = './img/pngwing.com (3).png'
        pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    }
    else if (oponente == "Squirtle"){    // el.checked verifica si esta seleccionado
        spanEnemigo.innerHTML = "Squirtle"
        imagenPokemonRivalEscogido.src = './img/squirtle.png'
        pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    }
    else if (oponente == "Snorlax"){
        spanEnemigo.innerHTML = "Snorlax"
        imagenPokemonRivalEscogido.src = './img/snorlax.png'
        pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    }
    else if (oponente == "Charmander"){
        spanEnemigo.innerHTML = "Charmander"
        imagenPokemonRivalEscogido.src = './img/pngwing.com (2).png'
        pokemonRivalEscogido.appendChild(imagenPokemonRivalEscogido)
    }
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

    let spanVidaJugador = document.getElementById('vidaJugador')
    let spanVidaRival = document.getElementById('vidaRival')

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

    let mensaje = document.getElementById('Info')
    let mensajeAtaqueJugador = document.getElementById("ataques-jugador")
    let mensajeAtaqueEnemigo = document.getElementById("ataques-enemigo")

    let parrafoAtaqueJugador = document.createElement('p')
    let parrafoAtaqueEnemigo = document.createElement('p')

    mensaje.innerHTML = resultadoBatalla
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