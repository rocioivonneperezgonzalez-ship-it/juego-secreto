// 1) Declara primero las variables que usa la función
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// 2) Ahora sí, genera el número secreto
let númeroSecreto = generarNúmeroSecreto();
let intentos = 1; 

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
 document.querySelector('#valorUsuario').value = '';
  
}

function generarNúmeroSecreto() {
  const numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  // Si ya sorteamos todos los números
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento('.texto__parrafo', 'Ya se sortearon los números posibles');
    return null;
  } else {
    // Si el número generado ya está en la lista, generar otro
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNúmeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    númeroSecreto = generarNúmeroSecreto(); 
    intentos = 1; 
    document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja(); 
    // Inicializar el numero de intentos 
    condicionesIniciales();
    // Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();



