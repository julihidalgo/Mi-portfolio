let testeo=500;
let ultPremio=0
let ficha=1
let saldo=document.querySelector(".miSaldo")
saldo.textContent='🪙: '+testeo.toFixed(2)
        

let ficha1=document.querySelector(".ficha-1")
let ficha2=document.querySelector(".ficha-2")
let ficha3=document.querySelector(".ficha-3")
let ficha4=document.querySelector(".ficha-4")
let ficha5=document.querySelector(".ficha-5")
let ficha6=document.querySelector(".ficha-6")
let ficha7=document.querySelector(".ficha-7")

ficha1.addEventListener('click',()=>{
    ficha=1
})
ficha2.addEventListener('click',()=>{
    ficha=5
})
ficha3.addEventListener('click',()=>{
    ficha=10
})
ficha4.addEventListener('click',()=>{
    ficha=50
})
ficha5.addEventListener('click',()=>{
    ficha=100
})
ficha6.addEventListener('click',()=>{
    ficha=500
})
ficha7.addEventListener('click',()=>{
    ficha=1000
})
function agregarNumeroAFicha(fichaCuestion,cantidad){
    let divEnCuestion = document.createElement("div");
    divEnCuestion.textContent=cantidad
    divEnCuestion.classList.add("ficha-div")
    fichaCuestion.appendChild(divEnCuestion)
    
}
agregarNumeroAFicha(ficha1,1)
agregarNumeroAFicha(ficha2,5)
agregarNumeroAFicha(ficha3,10)
agregarNumeroAFicha(ficha4,50)
agregarNumeroAFicha(ficha5,100)
agregarNumeroAFicha(ficha6,500)
agregarNumeroAFicha(ficha7,"1k")

let libroApuestas={
    numeros:{
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0,
        17:0,
        18:0,
        19:0,
        20:0,
        21:0,
        22:0,
        23:0,
        24:0,
        25:0,
        26:0,
        27:0,
        28:0,
        29:0,
        30:0,
        31:0,
        32:0,
        33:0,
        34:0,
        35:0,
        36:0,
    },
    docenas:{
        0:0,
        1:0,
        2:0
    },
    tercios:{
        0:0,
        1:0,
        2:0
    },
    par:{
        0:0,
        1:0,
    },
    color:{
        0:0,
        1:0,
    },
    mitad:{
        0:0,
        1:0
    }

}
function darFunciones(){

let filainvisible1=Array.from(document.querySelectorAll(".numero-invisible-fila-1"))
let filainvisible2=Array.from(document.querySelectorAll(".numero-invisible-fila-2"))
let filainvisible3=Array.from(document.querySelectorAll(".numero-invisible-fila-3"))
let filainvisible4=Array.from(document.querySelectorAll(".numero-invisible-fila-4"))
let filainvisible5=Array.from(document.querySelectorAll(".numero-invisible-fila-5"))
let invisibles=[filainvisible1,filainvisible2,filainvisible3,filainvisible4,filainvisible5]


function sumarFichas(elemento){
            if(elemento.querySelector("div")){
            nuevaFicha=parseInt(elemento.querySelector("div").querySelector("div").textContent)+ficha
            }
            else{
                nuevaFicha=ficha
            }
            return nuevaFicha
}
function agregarFicha(elemento){
if(ficha==1){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha1.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha1.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else if(ficha==5){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha2.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha2.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else if(ficha==10){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha3.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha3.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else if(ficha==50){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha4.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha4.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else if(ficha==100){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha5.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha5.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else if(ficha==500){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha6.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha6.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else if(ficha==1000){
    if(!elemento.querySelector("div")){
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha7.png" class="fichin"><div>'+sumarFichas(elemento)+'</div></div>'
    }
    else{
        let fichinEnCuestion=elemento.querySelector(".contenedor-fichin")
        let mantenerValor=parseInt(fichinEnCuestion.querySelector("div").innerHTML)
        let nuevoValor=mantenerValor+ficha
        elemento.removeChild(fichinEnCuestion)
        elemento.innerHTML+='<div class="contenedor-fichin"><img src="../img/ficha7.png" class="fichin"><div>'+nuevoValor+'</div></div>'
        elemento.innerHTML}
}
else{elemento.removeChild(elemento.querySelector("div"))}
}
let listaNumeros=Array.from(document.querySelectorAll(".tableta-numero"))

    listaNumeros=Array.from(document.querySelectorAll(".tableta-numero"))

    listaNumeros.forEach(function(elemento) {
    elemento.addEventListener("mouseover", function() {
        elemento.classList.add("ponerleFicha")
    });
    });
    listaNumeros.forEach(function(elemento) {
        elemento.addEventListener("mouseout", function() {
            elemento.classList.remove("ponerleFicha")
        });
    });

    



let index=0

listaNumeros.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        if(elemento.innerHTML.length>5){
            const cadena = elemento.innerHTML;
            const indiceDelMenorQue = cadena.indexOf('<');

            const parteInicial = cadena.substring(0, indiceDelMenorQue);
             index=parseInt(parteInicial)
        }
        else{ index=parseInt(elemento.innerHTML)}
        
        
        

        if(testeo>=ficha && activo==0){
            if(ficha>0){
                libroApuestas.numeros[index]+=ficha
                testeo-=ficha
            }
            else if(elemento.querySelector("div")){
                testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
                libroApuestas.numeros[index]=0
        }
                agregarFicha(elemento)
            saldo.textContent='Saldo: '+testeo.toFixed(2);
        }
    });
});

    invisibles.forEach(lista=>{
    lista.forEach(elemento => {
        elemento.addEventListener("mouseover", () => {
        if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
            let index=0
            if(filainvisible1.includes(elemento)){
                index=lista.indexOf(elemento)
            }
            else if(filainvisible3.includes(elemento)){
                index=lista.indexOf(elemento)+12
            }
            else if(filainvisible5.includes(elemento)){
                index=lista.indexOf(elemento)+24
            }

            listaNumeros[index].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")

        }
        else{
            let index=0

            if(filainvisible2.includes(elemento)){
                index=Math.floor(lista.indexOf(elemento)/2)
            }
            else{
                index=Math.floor(lista.indexOf(elemento)/2)+12
            }
            listaNumeros[index].classList.add("ponerleFicha")
            
            listaNumeros[index+12].classList.add("ponerleFicha")
            if(lista.indexOf(elemento)%2!==0){
            listaNumeros[index+13].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
            }
        }
            
            });

    });
    lista.forEach(elemento => {
        elemento.addEventListener("mouseout", () => {
            if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
                let index=0
                if(filainvisible1.includes(elemento)){
                    index=lista.indexOf(elemento)
                }
                else if(filainvisible3.includes(elemento)){
                    index=lista.indexOf(elemento)+12
                }
                else if(filainvisible5.includes(elemento)){
                    index=lista.indexOf(elemento)+24
                }
    
                listaNumeros[index].classList.remove("ponerleFicha")
                listaNumeros[index+1].classList.remove("ponerleFicha")
            }
            else{
                let index=0
                if(filainvisible2.includes(elemento)){
                    index=Math.floor(lista.indexOf(elemento)/2)
                }
                else{
                    index=Math.floor(lista.indexOf(elemento)/2)+12
                }
                listaNumeros[index].classList.remove("ponerleFicha")
                
                listaNumeros[index+12].classList.remove("ponerleFicha")
                if(lista.indexOf(elemento)%2!==0){
                listaNumeros[index+13].classList.remove("ponerleFicha")
                listaNumeros[index+1].classList.remove("ponerleFicha")
                }
            }
        });
    });
}
)
invisibles.forEach(lista=>{
    lista.forEach(elemento => {
        elemento.addEventListener("mouseover", () => {
        if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
            let index=0
            if(filainvisible1.includes(elemento)){
                index=lista.indexOf(elemento)
            }
            else if(filainvisible3.includes(elemento)){
                index=lista.indexOf(elemento)+12
            }
            else if(filainvisible5.includes(elemento)){
                index=lista.indexOf(elemento)+24
            }

            listaNumeros[index].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
        }
        else{
            let index=0

            if(filainvisible2.includes(elemento)){
                index=Math.floor(lista.indexOf(elemento)/2)
            }
            else{
                index=Math.floor(lista.indexOf(elemento)/2)+12
            }
            listaNumeros[index].classList.add("ponerleFicha")

            listaNumeros[index+12].classList.add("ponerleFicha")
            if(lista.indexOf(elemento)%2!==0){
            listaNumeros[index+13].classList.add("ponerleFicha")
            listaNumeros[index+1].classList.add("ponerleFicha")
            }
        }

            });

    });
    lista.forEach(elemento => {
        elemento.addEventListener("click", () => {
            if(testeo>=ficha && activo==0){
            if(!filainvisible2.includes(elemento)&&!filainvisible4.includes(elemento)){
                let index=0
                if(filainvisible1.includes(elemento)){
                    index=lista.indexOf(elemento)
                }
                else if(filainvisible3.includes(elemento)){
                    index=lista.indexOf(elemento)+12
                }
                else if(filainvisible5.includes(elemento)){
                    index=lista.indexOf(elemento)+24
                }
                if(ficha>0){
                    libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/2
                    libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]+=ficha/2
                    testeo-=ficha
                }
                else if(elemento.querySelector("div")){
                    testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
                    libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]=0
                    libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]=0
        }
                saldo.textContent='Saldo: '+testeo.toFixed(2);
                agregarFicha(elemento)
                
                
            }
            else{
                let index=0
                if(filainvisible2.includes(elemento)){
                    index=Math.floor(lista.indexOf(elemento)/2)
                }
                else{
                    index=Math.floor(lista.indexOf(elemento)/2)+12
                }
                if(lista.indexOf(elemento)%2!==0){
                    if(ficha>0){
                        libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]+=ficha/4
                        libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/4
                        libroApuestas.numeros[parseInt(listaNumeros[index+13].innerHTML)]+=ficha/4
                        libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]+=ficha/4
                        testeo-=ficha
                    }
                    else if(elemento.querySelector("div")){
                        testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
                        libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]=0
                        libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]=0
                        libroApuestas.numeros[parseInt(listaNumeros[index+13].innerHTML)]=0
                        libroApuestas.numeros[parseInt(listaNumeros[index+1].innerHTML)]=0
                }
                    saldo.textContent='Saldo: '+testeo.toFixed(2)
                    agregarFicha(elemento)
                }
                else{
                    if(ficha>0){
                        libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]+=ficha/2
                        libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]+=ficha/2
                        testeo-=ficha
                    }
                    else if(elemento.querySelector("div")){
                        testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
                        libroApuestas.numeros[parseInt(listaNumeros[index].innerHTML)]=0
                        libroApuestas.numeros[parseInt(listaNumeros[index+12].innerHTML)]=0
                    }
                    saldo.textContent='Saldo: '+testeo.toFixed(2)
                    agregarFicha(elemento)
                }
            }
        }
        });
    });
}
)


let mitades=Array.from(document.querySelectorAll(".mitad"))
let colores=Array.from(document.querySelectorAll(".color"))
let paridades=Array.from(document.querySelectorAll(".paridad"))

mitades.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
mitades.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
mitades.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha && activo==0){
        if(ficha>0){
            testeo-=ficha
            libroApuestas.mitad[mitades.indexOf(elemento)]+=ficha
        }
        else if(elemento.querySelector("div")){
            testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
            libroApuestas.mitad[mitades.indexOf(elemento)]=0
        }
        saldo.textContent='Saldo: '+testeo.toFixed(2);
        agregarFicha(elemento)
       }
})
});
colores.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
colores.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
colores.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha && activo==0){
        if(ficha>0){
            libroApuestas.color[colores.indexOf(elemento)]+=ficha
            testeo-=ficha 
        }
        else if(elemento.querySelector("div")){
            testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
            libroApuestas.color[colores.indexOf(elemento)]=0
        }
        saldo.textContent='Saldo: '+testeo.toFixed(2);
        agregarFicha(elemento)
       }
})
});
paridades.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
paridades.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
paridades.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha && activo==0){
        if(ficha>0){
            libroApuestas.par[paridades.indexOf(elemento)]+=ficha
            testeo-=ficha
        }
        else if(elemento.querySelector("div")){
            testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
            libroApuestas.par[paridades.indexOf(elemento)]=0
        }
        saldo.textContent='Saldo: '+testeo.toFixed(2);
        agregarFicha(elemento)
       }
})
});


let docenas=Array.from(document.querySelectorAll(".docena"))

docenas.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
docenas.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
docenas.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha && activo==0){
        if(ficha>0){
            libroApuestas.docenas[docenas.indexOf(elemento)]+=ficha
            testeo-=ficha
        }
        else if(elemento.querySelector("div")){
            testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
            libroApuestas.docenas[docenas.indexOf(elemento)]=0
        }
        saldo.textContent='Saldo: '+testeo.toFixed(2);
        agregarFicha(elemento)
       }

})
});

let tercios=Array.from(document.querySelectorAll(".tercio"))

tercios.forEach(elemento => {
    elemento.addEventListener("mouseover",function(){
        elemento.classList.add("ponerleFicha")
    })
});
tercios.forEach(elemento => {
    elemento.addEventListener("mouseout",function(){
        elemento.classList.remove("ponerleFicha")
})
});
tercios.forEach(elemento => {
    elemento.addEventListener("click",function(){
       if(testeo>=ficha && activo==0){
        if(ficha>0){
            libroApuestas.tercios[tercios.indexOf(elemento)]+=ficha
            testeo-=ficha
        }
        else if(elemento.querySelector("div")){
            testeo+=parseInt(elemento.querySelector("div").querySelector("div").innerHTML)
            libroApuestas.tercios[tercios.indexOf(elemento)]=0
        }
        agregarFicha(elemento)
        saldo.textContent='Saldo: '+testeo.toFixed(2);
       }
})
});

let cero=document.querySelector(".apuesta-izquierda")
    cero.addEventListener("mouseover",function(){
        cero.classList.add("ponerleFicha")
    })
    cero.addEventListener("mouseout",function(){
        cero.classList.remove("ponerleFicha")
})
    cero.addEventListener("click",function(){
       if(testeo>=ficha &&activo==0){
            if(ficha>0){
                libroApuestas.numeros[parseInt(cero.innerHTML)]+=ficha 
                testeo-=ficha
        }
            else if(cero.querySelector("div")){
                testeo+=parseInt(cero.querySelector("div").querySelector("div").innerHTML)
                libroApuestas.numeros[parseInt(cero.innerHTML)]=0
        }
        agregarFicha(cero)
        saldo.textContent='Saldo: '+testeo.toFixed(2);

    }
})


}
darFunciones()





let ruletaNumero={
    0:{
    docenas:3,
    mitades:6,
    numeros:0,
    tercios:2
    },
    1:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:1,
        tercios:2
        },
    2:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:2,
        tercios:1
        },
    3:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:3,
        tercios:0
        },
    4:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:4,
        tercios:2
        },
    5:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:5,
        tercios:1
        },
    6:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:6,
        tercios:0
        },
    7:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:1,
        tercios:2
        },
    8:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:1,
        tercios:2
        },
    9:{
        docenas:0,
        par:1,
        color:0,
        mitad:0,
        numeros:1,
        tercios:2
        },
    10:{
        docenas:0,
        par:0,
        color:1,
        mitad:0,
        numeros:1,
        tercios:2
        },
    11:{
        docenas:0,
        par:1,
        color:1,
        mitad:0,
        numeros:11,
        tercios:1
        },
    12:{
        docenas:0,
        par:0,
        color:0,
        mitad:0,
        numeros:12,
        tercios:0
        },
    13:{
        docenas:1,
        par:1,
        color:1,
        mitad:0,
        numeros:13,
        tercios:2
        },
    14:{
        docenas:1,
        par:0,
        color:0,
        mitad:0,
        numeros:14,
        tercios:1
        },
    15:{
        docenas:1,
        par:1,
        color:1,
        mitad:0,
        numeros:15,
        tercios:0
        },
    16:{
        docenas:1,
        par:0,
        color:0,
        mitad:0,
        numeros:16,
        tercios:2
        },
    17:{
        docenas:1,
        par:1,
        color:1,
        mitad:0,
        numeros:17,
        tercios:1
        },
    18:{
        docenas:1,
        par:0,
        color:0,
        mitad:0,
        numeros:18,
        tercios:0
        },
    19:{
        docenas:1,
        par:1,
        color:0,
        mitad:1,
        numeros:19,
        tercios:2
        },
    20:{
        docenas:1,
        par:0,
        color:1,
        mitad:1,
        numeros:20,
        tercios:1
        },
    21:{
        docenas:1,
        par:1,
        color:0,
        mitad:1,
        numeros:21,
        tercios:0
        },
    22:{
        docenas:1,
        par:0,
        color:1,
        mitad:1,
        numeros:22,
        tercios:2
        },
    23:{
        docenas:1,
        par:1,
        color:0,
        mitad:1,
        numeros:23,
        tercios:1
        },
    24:{
        docenas:1,
        par:0,
        color:1,
        mitad:1,
        numeros:24,
        tercios:0
        },
    25:{
        docenas:2,
        par:1,
        color:0,
        mitad:1,
        numeros:25,
        tercios:2
        },
    26:{
        docenas:2,
        par:0,
        color:1,
        mitad:1,
        numeros:26,
        tercios:1
        },
    27:{
        docenas:2,
        par:1,
        color:0,
        mitad:1,
        numeros:27,
        tercios:0
        },
    28:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:28,
        tercios:2
        },
    29:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:29,
        tercios:1
        },
    30:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:30,
        tercios:0
        },
    31:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:31,
        tercios:2
        },
    32:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:32,
        tercios:1
        },
    33:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:33,
        tercios:0
        },
    34:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:34,
        tercios:2
        },
    35:{
        docenas:2,
        par:1,
        color:1,
        mitad:1,
        numeros:35,
        tercios:1
        },
    36:{
        docenas:2,
        par:0,
        color:0,
        mitad:1,
        numeros:36,
        tercios:0
        }
}
let numeroActual=37


function verificarResultado(){
        numeroApuesta=ruletaNumero[numeroActual]
        if(libroApuestas.numeros[numeroApuesta.numeros]>0){console.log("tus fichas apostadas a número se multiplican x36!!!");testeo+=libroApuestas.numeros[numeroApuesta.numeros]*32}
        if(libroApuestas.docenas[numeroApuesta.docenas]>0){console.log("tus fichas apostadas a docena se triplican!!!");testeo+=libroApuestas.docenas[numeroApuesta.docenas]*3}
        if(libroApuestas.tercios[numeroApuesta.tercios]>0){console.log("tus fichas apostadas a tercio se triplican!!!");console.log(testeo);testeo+=libroApuestas.tercios[numeroApuesta.tercios]*3}
        if(libroApuestas.par[numeroApuesta.par]>0){console.log("tus fichas apostadas a pares se duplican!!!");console.log(testeo);testeo+=libroApuestas.par[numeroApuesta.par]*2}
        if(libroApuestas.color[numeroApuesta.color]>0){console.log("tus fichas apostadas a colores se duplican!!!");console.log(testeo);testeo+=libroApuestas.color[numeroApuesta.color]*2}
        if(libroApuestas.mitad[numeroApuesta.mitad]>0){console.log("tus fichas apostadas a mitades se duplican!!!");console.log(testeo);testeo+=libroApuestas.mitad[numeroApuesta.mitad]*2}
        saldo.textContent='🪙: '+testeo.toFixed(2)
    }
let botonGirar=document.querySelector(".boton-girar")








/*RULETA*/






let divRuleta=document.querySelector(".ruleta-container")
document.addEventListener('DOMContentLoaded', () => {
let listaNumerosRuleta = document.querySelectorAll(".numero");
const anguloPorNumero = 360 / listaNumerosRuleta.length;
const radio = 100; // Radio del círculo en px, ajusta según el tamaño
const contenedor = document.querySelector('.ruleta');
const centroX = divRuleta.clientWidth / 2; // Mitad del ancho del contenedor
const centroY = divRuleta.clientHeight / 2; // Mitad del alto del contenedor

// Posiciona los números alrededor del centro de la ruleta
listaNumerosRuleta.forEach((numero, i) => {
    const angulo = i * anguloPorNumero;
    const radianes = angulo * Math.PI / 180;
    const x = centroX + radio * Math.cos(radianes) - numero.offsetWidth / 2;
    const y = centroY + radio * Math.sin(radianes) - numero.offsetHeight / 2;

    numero.style.left = `${x}px`;
    numero.style.top = `${y}px`;
    numero.style.transform = `rotate(${angulo + 90}deg)`; // Ajusta la rotación para que el texto esté orientado hacia el centro
});

// Función para actualizar la rotación de la ruleta
let anguloTotal = 0; // Ángulo total de rotación
function actualizarRotacion() {
    anguloTotal += 1; // Incrementa el ángulo para la rotación
    contenedor.style.transform = `rotate(${anguloTotal}deg)`;
}

// Usa setInterval para llamar a actualizarRotacion cada 16 ms (aproximadamente 60 FPS)
setInterval(actualizarRotacion, 16); // Ajusta el intervalo para cambiar la velocidad
});




/*pelota y numero aleatorio */


let pelota=document.querySelector(".pelota")
let contenedorPelota=document.querySelector(".contenedor-pelota")
function acomodarPelota(){
    const radianes = 1 * Math.PI / 180;
    const radio = 100; // Radio del círculo en px, ajusta según el tamaño    
    const centroX = divRuleta.clientWidth / 2; // Mitad del ancho del contenedor
    const centroY = divRuleta.clientHeight / 2; // Mitad del alto del contenedor
    const x = centroX + radio * Math.cos(radianes)-15;
    const y = centroY + radio * Math.sin(radianes)-15;

    pelota.style.left = `${x}px`;
    pelota.style.top = `${y}px`;

    contenedorPelota.removeChild(pelota)
    
}
let activo=0
acomodarPelota()
let anguloTotalPelota = 0;
let eventoGirar
let contadorVueltas=0
let aleatorio=0
let pelotaRuleta=document.querySelector(".pelota-ruleta")


let libroUltimaTIrada
function girarPelota() {
    activo=1
    anguloTotalPelota += 1;
    contenedorPelota=document.querySelector(".contenedor-pelota")
    contenedorPelota.style.transform = `rotate(${anguloTotalPelota}deg)`;
    contadorVueltas+=1
    if(contadorVueltas>aleatorio){
        clearInterval(eventoGirar)
        contadorVueltas=0
        activo=0
        
        let listaNumerosRuleta = document.querySelectorAll(".numero");
        let almacenadoNumeroCercano=100
        let almacenadoElementoCercano
        for(x of listaNumerosRuleta){
            let distanciaActual=Math.abs(x.getBoundingClientRect().x - pelota.getBoundingClientRect().x)+Math.abs(x.getBoundingClientRect().y - pelota.getBoundingClientRect().y);
            if(distanciaActual<almacenadoNumeroCercano){
                almacenadoNumeroCercano=distanciaActual
                almacenadoElementoCercano=x
            }
        }
    almacenadoElementoCercano.appendChild(pelotaRuleta)
    contenedorPelota.removeChild(pelota)
    numeroActual=almacenadoElementoCercano.textContent
    verificarResultado()
    barra.innerHTML=barraLimpia.innerHTML
        darFunciones()
    libroUltimaTIrada={libroApuestas}
    libroApuestas={
        numeros:{
            0:0,
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0,
            7:0,
            8:0,
            9:0,
            10:0,
            11:0,
            12:0,
            13:0,
            14:0,
            15:0,
            16:0,
            17:0,
            18:0,
            19:0,
            20:0,
            21:0,
            22:0,
            23:0,
            24:0,
            25:0,
            26:0,
            27:0,
            28:0,
            29:0,
            30:0,
            31:0,
            32:0,
            33:0,
            34:0,
            35:0,
            36:0,
        },
        docenas:{
            0:0,
            1:0,
            2:0
        },
        tercios:{
            0:0,
            1:0,
            2:0
        },
        par:{
            0:0,
            1:0,
        },
        color:{
            0:0,
            1:0,
        },
        mitad:{
            0:0,
            1:0
        }
    
    }
    }
    
}
let libroApuestasLimpio={...libroApuestas}
const contenedor = document.querySelector('.ruleta');

function buscarPelota(){

    let listaNumerosRuleta = document.querySelectorAll(".numero");
    for(x of listaNumerosRuleta){
        if(x.querySelector('div')){
            
            const transformacion = x.style.transform;
            const inicioNumero = transformacion.indexOf('(');
            const finNumero = transformacion.indexOf(')');
            let angulo = transformacion.substring(inicioNumero+1, finNumero);
            
            anguloTotalPelota=parseInt(angulo)
            contenedorPelota.style.transform = anguloTotalPelota;
            contenedorPelota.appendChild(pelota)

            x.removeChild(pelotaRuleta)
            
        }
    }
} 


botonGirar.addEventListener("click", () => {
    if(activo==0){
            buscarPelota()
            barraUltimaTirada=barra.cloneNode(true);
            repetidor=0
            aleatorio=Math.floor(Math.random() * (1800 - 540)) + 540;
            eventoGirar=setInterval(girarPelota, 5);
    }


});











let barra=document.querySelector(".caja-apuestas")
const barraLimpia = barra.cloneNode(true);

let botonRepetir=document.querySelector(".repetir")
let botonLimpiar=document.querySelector(".limpiar")
let contx=0
function contarLibro(){
    contx=0
    for(x in libroUltimaTIrada){
        console.log(libroUltimaTIrada[x])
        for(y in libroUltimaTIrada[x]){
            for(z in libroUltimaTIrada[x][y]){
                contx+=libroUltimaTIrada[x][y][z]
            }
        }
    }

}
function contarLibro2(){
    contx=0
    for(x in libroApuestas){
        console.log(libroApuestas[x])
        for(y in libroApuestas[x]){
            contx+=libroApuestas[x][y]
        }
    }

}
// Suponiendo que ambos objetos tienen la misma estructura
function sumarValoresLibrosApuestas(libroApuestas, libroUltimaTIrada) {
  for (let propiedad in libroApuestas) {
    if (libroApuestas.hasOwnProperty(propiedad)) {
      for (let subPropiedad in libroApuestas[propiedad]) {
        if (libroApuestas[propiedad].hasOwnProperty(subPropiedad)) {
          libroApuestas[propiedad][subPropiedad] += libroUltimaTIrada.libroApuestas[propiedad][subPropiedad];
        }
      }
    }
  }
}

let repetidor=0
botonRepetir.addEventListener("click",()=>{
    contarLibro(libroUltimaTIrada)
    if(activo==0){
            if(contx<=testeo){
                if(repetidor==0){
                    barra.innerHTML=barraUltimaTirada.innerHTML
                    libroApuestas=libroUltimaTIrada.libroApuestas
                    darFunciones()  
                    testeo-=contx
                    saldo.textContent='🪙: '+testeo.toFixed(2)
                    repetidor=1
                }
            }
    }

})
botonLimpiar.addEventListener("click",()=>{
    if(activo==0){
        repetidor=0
        barra.innerHTML=barraLimpia.innerHTML
        darFunciones()
        contarLibro2()
        testeo+=contx
        libroApuestas={
            numeros:{
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0,
                6:0,
                7:0,
                8:0,
                9:0,
                10:0,
                11:0,
                12:0,
                13:0,
                14:0,
                15:0,
                16:0,
                17:0,
                18:0,
                19:0,
                20:0,
                21:0,
                22:0,
                23:0,
                24:0,
                25:0,
                26:0,
                27:0,
                28:0,
                29:0,
                30:0,
                31:0,
                32:0,
                33:0,
                34:0,
                35:0,
                36:0,
            },
            docenas:{
                0:0,
                1:0,
                2:0
            },
            tercios:{
                0:0,
                1:0,
                2:0
            },
            par:{
                0:0,
                1:0,
            },
            color:{
                0:0,
                1:0,
            },
            mitad:{
                0:0,
                1:0
            }
        
        }
        
        saldo.textContent='🪙: '+testeo.toFixed(2)
    }
})

let sacarFicha=document.querySelector(".sacar-ficha ")




sacarFicha.addEventListener("click",()=>{
    ficha=-1
})

//agregar funcion de sacar ficha e implementarla a todas las funciones que incluyan esto        




/*let botonCargarSaldo=document.querySelector(".cargarSaldo")
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
        miSaldo.textContent='🪙: '+testeo.toFixed(2)
        divCargarSaldo.style.display="none";

    }
})
*/
