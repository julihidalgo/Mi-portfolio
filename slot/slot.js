const personajes={
    0:{
       "nombre":"bombon",
        "valor":2.5,
        "img":"../img/bombon.png",
        "clase":"bombon"
    },
    1:{
        "nombre":"burbuja",
        "valor":2.8,
        "img":"../img/burbuja.png",
        "clase":"burbuja"
    },
    2:{
        "nombre":"bellota",
        "valor":3.3,
        "img":"../img/bellota.png",
        "clase":"bellota"

    },
    3:{
        "nombre":"mojo jojo",
        "valor":3.8,
        "img":"../img/mojo.png",
        "clase":"mojo"

    }
};

let matriz=[
    [personajes[0],personajes[0],personajes[0]],
    [personajes[1],personajes[1],personajes[1]],
    [personajes[2],personajes[2],personajes[2]]
]
let activado=0
function tirada(){
    for (let i=0;i<3;i++){
        let columna=[]
        for(let i=0;i<17;i++){
            let nr=Math.floor(Math.random() * 4);
            columna.push(personajes[nr]);
        }
        columna.push(matriz[i][0],matriz[i][1],matriz[i][2])
        matriz[i]=columna
    }
}
let columna1 = document.querySelector('.contenedor-columna-1');
let columna2 = document.querySelector('.contenedor-columna-2');
let columna3 = document.querySelector('.contenedor-columna-3');
function llenar(x){
    columna1.innerHTML=''
    for(let i=0;i<x;i++){
        columna1.innerHTML+='<div class="contenedor-personaje contenedor-personaje-c1 '+matriz[0][i].clase+'"><img src='+matriz[0][i].img+'></div>'
    }
    columna2.innerHTML=''
    for(let i=0;i<x;i++){
        columna2.innerHTML+='<div class="contenedor-personaje contenedor-personaje-c2 '+matriz[1][i].clase+'"><img src='+matriz[1][i].img+'></div>'
    }
    columna3.innerHTML=''
    for(let i=0;i<x;i++){
        columna3.innerHTML+='<div class="contenedor-personaje contenedor-personaje-c3 '+matriz[2][i].clase+'"><img src='+matriz[2][i].img+'></div>'
    }
}
let alertaGanador=document.querySelector(".alerta-ganador")
let apuesta=document.querySelector(".apuesta")
let testeo=500;
let premioMensaje = document.querySelector('.premio-mensaje');
let valorActual=0
let premio=0
function testear() {

    let apuestaActual = apuesta.textContent;
    premio = 0;
    estadoAlerta=0;
    valorActual=0

    if (matriz[0][0] == matriz[1][0] && matriz[0][0] == matriz[2][0]) {
        premio += matriz[0][0].valor * apuestaActual;
    }
    if (matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2]) {
        premio += matriz[0][0].valor * apuestaActual;
    }
    if (matriz[0][1] == matriz[1][1] && matriz[2][1] == matriz[0][1]) {
        premio += matriz[0][1].valor * apuestaActual;
    }
    if (matriz[0][2] == matriz[1][2] && matriz[2][2] == matriz[0][2]) {
        premio += matriz[0][2].valor * apuestaActual;
    }
    if (matriz[0][2] == matriz[1][1] && matriz[2][0] == matriz[0][2]) {
        premio += matriz[0][2].valor * apuestaActual;
    }

    testeo -= apuestaActual;
    navbar.textContent = '🪙: ' + testeo.toFixed(2);
    testeo += premio;


setTimeout(() => {
        if (premio > 0) {
            alertaGanador.classList.add("ganada");
            ultPremio.textContent = '$' + premio.toFixed(2);
            navbar.textContent = '🪙: ' + testeo.toFixed(2);

            // Muestra el mensaje de premio
            premioMensaje.textContent = '$' + premio.toFixed(2);
            premioIncremento=setInterval(()=>cambiarValor(),2)
            // Ocultar el mensaje y la alerta después de 2 segundos
            
    
            
            
        }
        activado = 0;
    }, 2000);
}
let estadoAlerta=0
alertaGanador.addEventListener('click',()=>{
    if(estadoAlerta==0){
        valorActual=premio-0.01
        premioContenedor.textContent="$"+valorActual.toFixed(2)
        estadoAlerta=1
    }
    else if(estadoAlerta==1){
        alertaGanador.classList.remove("ganada");
    }
})
let premioContenedor=document.querySelector(".premio-incremento")
function cambiarValor(){
    if(valorActual<=premio){
        valorActual+=0.01
        premioContenedor.textContent="$"+valorActual.toFixed(2)
    }
    else{
        estadoAlerta=1
        valorActual=premio
        premioContenedor.textContent="$"+valorActual.toFixed(2)
        clearInterval(premioIncremento)
        
    }
}

let ultPremio=document.querySelector(".ultimo-premio")
function animacion(){
    let listaDeTirosc1=document.querySelectorAll(".contenedor-personaje-c1")
    let listaDeTirosc2=document.querySelectorAll(".contenedor-personaje-c2")
    let listaDeTirosc3=document.querySelectorAll(".contenedor-personaje-c3")
    let listaDeTiros=[listaDeTirosc1,listaDeTirosc2,listaDeTirosc3]
    for(let x of listaDeTiros){
            for (y of x) {
                y.classList.add('animacion');
            }
    }
}
let botonResta=document.querySelector(".restar")
let botonSumar=document.querySelector(".sumar")
function sumar(){
    let apuestaActual=apuesta.textContent
    if (apuestaActual==5){apuesta.textContent=10 }
    else if (apuestaActual==10){apuesta.textContent=20}
    else if (apuestaActual==20){apuesta.textContent=50}
    else if (apuestaActual==50){apuesta.textContent=100}
}
function restar(){
    let apuestaActual=apuesta.textContent
    if (apuestaActual==10){apuesta.textContent=5 }
    else if (apuestaActual==20){apuesta.textContent=10}
    else if (apuestaActual==50){apuesta.textContent=20}
    else if (apuestaActual==100){apuesta.textContent=50}
}
function jugar(){
    if (testeo>apuesta.textContent){
        activado=1
        tirada()
        llenar(20)
        animacion()
        testear()

    }
    else{
        alert("Saldo Insuficiente")

    }
}
const boton = document.getElementById('jugar');
boton.addEventListener('click',()=>{
    if(activado==0){
        jugar();
    }
    
});
botonSumar.addEventListener('click', sumar);
botonResta.addEventListener('click',restar)
llenar(3)


let navbar=document.querySelector(".miSaldo")
navbar.textContent='🪙: '+testeo.toFixed(2)









let botonCargarSaldo=document.querySelector(".cargarSaldo")
let divCargarSaldo=document.querySelector(".divCargarSaldo")
botonCargarSaldo.addEventListener("click",()=>{
    divCargarSaldo.style.display="flex";
})
let botonsalirCarga=document.querySelector(".salirCarga")

botonsalirCarga.addEventListener("click",()=>{
    divCargarSaldo.style.display="none";
})


let botonDeposito= document.querySelector(".botonDeposito")

let cargado=0
botonDeposito.addEventListener("click",()=>{
    let carga=document.querySelector(".inputCarga").value
    cargado=0//ACTUALIZAR ACA
    if(cargado+carga<=10000){
        testeo+=parseInt(carga)
        //ENVIAR EL SALDO
        navbar.textContent='🪙: '+testeo.toFixed(2)
        divCargarSaldo.style.display="none";

    }
})
