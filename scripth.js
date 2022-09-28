//Loop del juego 
let time = new Date ()
let deltaTime = 0;

if (document.readyState=== "complete"|| document.readyState ==="interactive"){
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
let velY = 0
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
let gameOver

function Start(){
    suelo = document.querySelector(".suelo")
    contenedor = document.querySelector(".contenedor")
    textopuntaje = document.querySelector(".puntaje")
    dino = document.querySelector(".dino")
    //añadimos el evento 
    document.addEventListener("Keydown", HandleKeyDown)

}

function update (){
    moversuelo()
    //
    MoverDino()

    velY -=  gravedad * deltaTime;

}

function moversuelo(){

    sueloX += calcularDesplazamiento()
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

function calcularDesplazamiento(){
    return velEscenario * deltaTime * gamevel
}

function HandleKeyDown(evento){
    if (evento.KeyCode == 32){
        Saltar();
    }
}

function Saltar(){
    if (dinoPosY === sueloY){
        saltando = true
        velY = impulso
        dino.classList.remove("dino-corriendo");
    }
} 

function MoverDino(){
    dinoPosY += velY * deltaTime;
    if (dinoPosY < sueloY){
        TocarSuelo();
    }
    dino.style.bottom = dinoPosY + "px";

}  

function TocarSuelo (){
    dinoPosY = sueloY;
    velY = 0;

    if (saltando){
        dino.classList.add("dino-corriendo")
    }
    saltando = false
}



