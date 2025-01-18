let testeo=500;
let saldo=document.querySelector(".miSaldo")
saldo.textContent='🪙: '+testeo.toFixed(2)

let limiteDistancia //esta variable almacena el limite 
let tipoTirada //esta variable almacena el tipo de tirada que va a ser en el sentido de que si es mayor a 2, mayor a 10 mayor a 50, o 100.
let historialTiradas=[]
let historialTiradasdiv=document.querySelector(".lista-resultados")




let botonCorrer=document.querySelector(".apostar")
let correrP=document.querySelector(".correr-p")
let opcionesApuesta=document.querySelectorAll(".opcion-apuesta")
let cajaApuesta= document.querySelector(".apretable-modi")
let apuesta=cajaApuesta.value


function generarNumero(){
    tipoTirada=Math.floor(Math.random() * (1000 - 0)) + 0;
    
    if(tipoTirada<750){
        if(tipoTirada%2==0){limiteDistancia=Math.random() +1;}
        else{limiteDistancia=1}
    }
    else if(tipoTirada>=750&&tipoTirada<=900){
        limiteDistancia=Math.random() * (3) +2;
    }
    else if(tipoTirada>900&&tipoTirada<=970){
        limiteDistancia=Math.random() * 40 +5;
    }
    else if(tipoTirada>=970&&tipoTirada<=999){
        limiteDistancia=Math.random() * 49 +50;
    }
    else{
        limiteDistancia=100
    }
    limiteDistancia=limiteDistancia.toFixed(2)
    
}
function agregarListaADiv(elemento){
    let div = document.createElement('div');
    div.textContent=elemento
    if(elemento<2){ div.classList.add("rojo")}
    else if(elemento>=2 && elemento<10){div.classList.add("azul")}
    else if(elemento>=10 && elemento<35){div.classList.add("verde")}
    else if(elemento>=35 && elemento<90){div.classList.add("naranja")}
    else if(elemento>=90){div.classList.add("amarillo")}
    historialTiradasdiv.appendChild(div)
}
for(let i=0;i<10;i++){
    generarNumero()
    historialTiradas.unshift(limiteDistancia)
    agregarListaADiv(limiteDistancia)
}
function ultimasTiradas(){
        historialTiradas.unshift(limiteDistancia)
        historialTiradas.pop()
        historialTiradasdiv.innerHTML=" "
        for(x of historialTiradas){
            agregarListaADiv(x)
        }
}

let incremento=document.querySelector(".incremento")
let valorActual=1
function cambiarValor(){

    incremento.textContent="x"+valorActual.toFixed(2)
}
let corrida
let probando2=0
function aumentar(){

    if(limiteDistancia>1 && valorActual<=limiteDistancia){
        //aca iria la animacion corriendo
        valorActual+=0.01
        cambiarValor()
        if(probando>0 && probando2<probando){
            apuesta=apuesta/2**probando
            retirarCien.textContent=(valorActual.toFixed(2)*apuesta).toFixed(2)
            retirarCincuenta.textContent=(valorActual.toFixed(2)*apuesta/2.).toFixed(2)
            probando2++
        }
        else{
            retirarCien.textContent=(valorActual.toFixed(2)*apuesta).toFixed(2)
            retirarCincuenta.textContent=(valorActual.toFixed(2)*apuesta/2.).toFixed(2)
        }

    }
    else if(limiteDistancia==1){
        //aca iria la animacion del susto
        divAnimacion.innerHTML='<img src="../img/scoobyasustado.gif" class="animacion"  alt="">'
        cambiarValor()
        clearInterval(corrida)
        agregarListaADiv(limiteDistancia)
        ultimasTiradas()
        enJuego=0
        botonCorrer.removeChild(retirarCincuenta)
        botonCorrer.removeChild(retirarCien)
        botonCorrer.appendChild(correrP)
        
        acumulado=0
        probando=0
        probando2=0
    }
    else{
        //aca iria la animacion del susto       
        divAnimacion.innerHTML='<img src="../img/scoobyasustado.gif" class="animacion" alt="">'
        clearInterval(corrida)
        agregarListaADiv(limiteDistancia)
        ultimasTiradas()
        enJuego=0
        if(acumulado>0){
            ultimoPremio.textContent=premioActual.textContent
        }
        acumulado=0
        if(botonCorrer.querySelector(".retirarA")){
            botonCorrer.removeChild(retirarCincuenta)
            botonCorrer.removeChild(retirarCien)
            botonCorrer.appendChild(correrP)

            probando=0
            probando2=0
        }
        else{
            botonCorrer.removeChild(esperandoFinal)   
            botonCorrer.appendChild(correrP)

            probando=0
            probando2=0
        }


    }
}
let esperandoFinal=document.createElement("p")
esperandoFinal.textContent="Esperando..."

let retirarCien=document.createElement("p")
retirarCien.classList="retirar-cien retirarA"

let retirarCincuenta=document.createElement("p")
retirarCincuenta.classList="retirar-cincuenta retirarA"

listaRetirar=[retirarCincuenta,retirarCien]

let acumulado=0
let probando=0


retirarCincuenta.addEventListener("click",()=>{
    testeo+=parseFloat(retirarCincuenta.textContent)
    acumulado+=parseFloat(retirarCincuenta.textContent)
    probando++
    saldo.textContent='🪙: '+testeo.toFixed(2)

    premioActual.textContent="$"+parseFloat(acumulado).toFixed(2)
});



retirarCien.addEventListener("click",()=>{
    testeo+=parseFloat(retirarCien.textContent)
    apuesta=0
    saldo.textContent='🪙: '+testeo.toFixed(2)
    botonCorrer.removeChild(retirarCincuenta)
    botonCorrer.removeChild(retirarCien)
    botonCorrer.appendChild(esperandoFinal)

    acumulado+=parseFloat(retirarCien.textContent)
    premioActual.textContent="$"+parseFloat(acumulado).toFixed(2)
    ultimoPremio.textContent=premioActual.textContent
});



let activo=0
function aumentoJuego(){
    valorActual=1
    generarNumero()
    corrida=setInterval(aumentar,70)
    incremento.classList.add("carrera")
}



let enJuego=0

for(x of opcionesApuesta){

}
opcionesApuesta.forEach((elemento)=>{
    elemento.addEventListener("click",()=>{
        if(enJuego==0){}
            let valorApuestaActual=elemento.textContent
            valorApuestaActual=parseInt(valorApuestaActual.slice(1))
            cajaApuesta.value="$"+valorApuestaActual
        
    })
});

let divAnimacion= document.querySelector(".animacion")
function correr(){


    enJuego=1
    aumentoJuego()
    divAnimacion.innerHTML='<img src="../img/r.gif" alt="">'
    botonCorrer.removeChild(correrP)

    
}





botonCorrer.addEventListener("click",()=>{
    if(enJuego==0){
            apuesta=parseFloat(cajaApuesta.value.slice(1))
            if(testeo>=apuesta){
                testeo-=apuesta
                saldo.textContent='🪙: '+testeo.toFixed(2)
                correr()
                botonCorrer.appendChild(retirarCincuenta)
                botonCorrer.appendChild(retirarCien)
            }
        }
})

let ultimoPremio=document.querySelector(".premio-ultimo")
let premioActual=document.querySelector(".premio-actual")


cajaApuesta.addEventListener('input', (event) => {
    // Permite solo números
    event.target.value = event.target.value.replace(/[^0-9.,]/g, '');
    cajaApuesta.value="$"+ cajaApuesta.value
});





//CARGAR SALDO






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
        saldo.textContent='🪙: '+testeo.toFixed(2)
        divCargarSaldo.style.display="none";

    }
})
