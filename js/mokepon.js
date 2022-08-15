let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("btn-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("btn-fuego");
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("btn-agua");
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("btn-tierra");
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("btn-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
    
    let hipodoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo");
    let ratigueya = document.getElementById("ratigueya");
    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (hipodoge.checked) {
        alert("Seleccionaste Hipodoge")
        spanMascotaJugador.innerHTML = "Hipodoge";       
    }else if (capipepo.checked) {
        alert("Seleccionaste Capipepo")
        spanMascotaJugador.innerHTML = "Capipepo";        
    }else if (ratigueya.checked) {
        alert("Seleccionaste Ratigueya")
        spanMascotaJugador.innerHTML = "Ratigueya";       
    }else{
        alert("Debes seleccionar una Mascota")
        sectionSeleccionarMascota.style.display = "flex"
        sectionSeleccionarAtaque.style.display = "none"
    }
    seleccionarMascotaEnemigo()
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min +1)+ min);
}

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let mascotaAleatoria = aleatorio(1,3);

    if (mascotaAleatoria == 1) {
        //alert("Enemigo seleccionó Hipodoge")
        spanMascotaEnemigo.innerHTML = "Hipodoge";        
    }else if(mascotaAleatoria == 2){
        //alert("Enemigo seleccionó Capipepo")
        spanMascotaEnemigo.innerHTML = "Capipepo";    
    }else{
        //alert("Enemigo seleccionó Ratigueya")
        spanMascotaEnemigo.innerHTML = "Ratigueya";             
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego🔥";
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "Agua💧";
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "Tierra🌱";
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego🔥";       
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua💧";
    } else {
        ataqueEnemigo = "Tierra🌱";
    }
    combate()   
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){//OK
        crearMensaje("EMPATE")
    }else if(
        (ataqueEnemigo == "Fuego🔥" && ataqueJugador == "Agua💧") || 
        (ataqueEnemigo == "Agua💧" && ataqueJugador == "Tierra🌱") || 
        (ataqueEnemigo == "Tierra🌱" && ataqueJugador == "Fuego🔥")
        ){
        crearMensaje("GANASTE")
        vidasEnemigo --;
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador --;
        spanVidasJugador.innerHTML = vidasJugador
    }

    contadorVidas()
}

function contadorVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento 👉 PERDISTE EL JUEGO 😢!!")   
    }else if (vidasEnemigo == 0) {        
        crearMensajeFinal("Felicitaciones 👉 GANASTE EL JUEGO 😀!!")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesJugador = document.getElementById('ataques-jugador')
    let ataquesEnemigo = document.getElementById('ataques-enemigo')

    sectionMensajes.innerHTML = resultado
    let nuevoAtaqueJugador = document.createElement('p')
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    let nuevoAtaqueEnemigo = document.createElement('p')
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
     
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoJuego) {
    let sectionMensajes = document.getElementById('resultado')

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "flex"

    let ataquesDelJugador = document.getElementById('ataques-jugador')
    ataquesDelJugador.style.display = "none"

    let ataquesDelEnemigo = document.getElementById('ataques-enemigo')
    ataquesDelEnemigo.style.display = "none"

    let parrafo = document.createElement('p');
    sectionMensajes.innerHTML = resultadoJuego;
      
    //Desabilitar los botones una vez que termine el juego
    let botonFuego = document.getElementById("btn-fuego");
    botonFuego.disabled = true;
    let botonAgua = document.getElementById("btn-agua");
    botonAgua.disabled = true;
    let botonTierra = document.getElementById("btn-tierra");
    botonTierra.disabled = true;
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener("load", iniciarJuego)