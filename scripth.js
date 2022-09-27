//Loop del juego 
let time = new Date ()
let deltaTime = 0;

if (document.readyState=== "complete"|| document,readyState ==="interactive"){
    setTimeout(init, 1)

}else{
    document.addEventListener("DOMContentLoaded", init) 
}
function init() {
    time = new Date()
    Start()
    loop()
}
function loop(){
    deltaTime = (new Date()-time)/100
    time = new Date
    update ()
    requestAnimationFrame(loop)
}
//logica del juego
let sueloY = 22
let vel = 0
let impulso = 900
let gravedad = 2500

let dinoPosX = 42
let dinoPosY = sueloY

let sueloX = 0
let velEscenario = 1280/3
let gamevel = 1
let puntaje = 0

let parado = false
let saltando = false

let contenedor 
let dino
let textopuntaje
let suelo
let gameIver

function Start(){
    suelo = document.querySelector(".suelo")
    contenedor = document.querySelector(".contenedor")
    textopuntaje = document.querySelector(".puntaje")
    dino = document.querySelector(".dino")

}
function update (){
    moverSuelo()

}
function moverSuelo() {
    sueloX +=calcularDesplazamiento()
    suelo.style.left = -(sueloX % contenedor.clientWidth)+ "px"
}
function calcularDesplazamiento(){
    return velEscenario * deltaTime * gamevel
}


