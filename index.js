import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";

// Notas preliminares importantes:
// Procurar que el index.html esté lo más limpio posible.
// Los obstáculos los crearemos desde JS.
// Esto es lo más aconsejable de cara a escalar el juego.

// Extraemos el elemento padre (el tablero "board").
var board = document.getElementById('main-board');
// Creamos un nuevo player y le pasamos tres parámetros.
var player = new Player(225, 750, board);

// Array que almacenará a todos los enemigos que se generen.
var enemies = [];

player.insertPlayer();

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
        // Detectar si se pulsa espacio para disparar.
        case ' ':
            var bullet = new Bullet(player.x + 20, player.y - 10, board);
            bullet.insertBullet();
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

// Función que inicia el juego. Aquí iría todo lo que queremos que ocurra 
// al inicio del juego.
function start() {
    // IMPORTANTE:
    // player.move en este caso sería una función callback por lo que el this
    // aquí NO se correspondería con el this del método move() definida en el 
    // constructor de Player. Serían contextos DISTINTOS y cambiaría su significado. 
    // Por eso, se crea una variable "self dentro del constructor" (ver más arriba 
    // en dicho constructor cuando definimos la variable "self" y le asignamos this). 
    // Esa variable se igualaría al this del propio constructor 
    // (el this del CONTEXTO del constructor).
    // Con la función setInterval se consigue un movimiento MÁS fluido del sprite del DOM.
    var timerId = setInterval(playerMovement, 30),
        timerId2 = setInterval(createEnemy, 2000);
}

// Función que se encarga de todo lo que tiene que ver con el movimiento del jugador así 
// como si se ha producido Game Over.
function playerMovement() {
    // En caso de que el jugador esté muerto, nos tendría que saltar una alerta.
    // Es lo primero que se debería comprobar antes de proceder a ejecutar la función move.
    if (player.isDead) {
        // gameOver(); Esto sería lo ideal
        alert('Game Over');
    }

    player.move();// Desplaza al jugador
}

// Función para mostrar carátula de Game Over, limpiar el tablero, reiniciar el juego
function gameOver() {
    // TODO
}

// Función que crea enemigos. Se define fuera del setInterval de arriba para que 
// la función start() quede más limpia y clara.
function createEnemy() {
    // Obtención de un número aleatorio entre 0 y 450 para el posicionamiento
    // de los enemigos. Versión aleatoria.
    // var xRandom = Math.floor(Math.random() * 450);

    // Versión arcade
    var xRandom = Math.floor(Math.random() * 10) * 50,
        enemy = new Enemy(xRandom, 0, board, player, enemies);

    enemy.insertEnemy();
    enemies.push(enemy);

}

start(); // Invocación del método que inicia el juego.