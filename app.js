let númeroSecreto = generarNúmeroSecreto();
let intentos = 1; 
let listaNumerosSorteados = []; 
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto) {
    let elementoHTLM = document.querySelector('h1'); 
    elementoHTLM.innerHTML = texto; 
    return;
}
function verificarIntento() {
   let númeroDeUsuario = parseInt(document.getElementById(valorUsuario).value);  

    if (númeroDeUsuario === númeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`); 
    } else {
        if (númeroDeUsuario > númeroSecreto) {
            asignarTextoElemento('p', 'el número secreto es menor'); 
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor'); 
        }
        intentos ++; 
        limpiarCaja();
    }
    return; 
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';

}
function generarNúmeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    // si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon los números posibles')
    }else { 
        //si el numero generado esta incluudo en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNúmeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }

}
asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} `);

