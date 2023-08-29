import { Player } from "./player.js";

// Notas preliminares importantes:
// Procurar que el index.html esté lo más limpio posible.
// Los obstáculos los crearemos desde JS.
// Esto es lo más aconsejable de cara a escalar el juego.

// Extraemos el elemento padre (el tablero "board").
var board = document.getElementById('main-board');
// Creamos un nuevo player y le pasamos tres parámetros.
var player = new Player(225, 750, board);

player.insertPlayer();

// IMPORTANTE:
// player.move en este caso sería una función callback por lo que el this
// aquí NO se correspondería con el this del método move() definida en el 
// constructor de Player. Serían contextos DISTINTOS y cambiaría su significado. 
// Por eso, se crea una variable "self dentro del constructor" (ver más arriba 
// en dicho constructor cuando definimos la variable "self" y le asignamos this). 
// Esa variable se igualaría al this del propio constructor 
// (el this del CONTEXTO del constructor).
var timerId = setInterval(player.move, 30) // Con la función setInterval se 
// consigue un movimiento MÁS fluido del sprite del DOM.

// Eventos para DESPLAZAR el sprite.
// addEventListener con función anónima
window.addEventListener('keydown', function (e) {
    // Detectar el botón que se ha pulsado para saber en qué dirección se 
    // desea mover.
    switch (e.key) {
        // Desplazamiento hacia la izquierda.
        case 'a':
            player.direction = -1;
            break;
        // Desplazamiento hacia la derecha.
        case 'd':
            player.direction = 1;
            break;
    }
});

// Evento para DETENER el sprite.
// addEventListener con función anónima
window.addEventListener('keyup', function () {
    // En este caso, si se pulsase cualquier otra tecla, al levantarla
    // siempre se detendría al reestablecerse su propiedad direction a 
    // cero.
    // Da igual si se pulsa otra tecla distinta de 'a' o 'd'
    player.direction = 0;
});