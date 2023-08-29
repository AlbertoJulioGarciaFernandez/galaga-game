// Notas preliminares importantes:
// Procurar que el index.html esté lo más limpio posible.
// Los obstáculos los crearemos desde JS.
// Esto es lo más aconsejable de cara a escalar el juego.

// Extraemos el elemento padre (el tablero "board").
var board = document.getElementById('main-board');
// Creamos un nuevo player.
var player = new Player(225, 750);

/* Creamos una función constructora para crear varias estructuras del elemento 
"player". */
function Player(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 0; // (0 quieto) (-1 hacia la izquierda) (1 hacia la derecha)
    // El sprite representa al elemento que se insertará en el DOM (en este 
    // caso, el elemento "player").
    this.speed = 10; // Variable que controla la velocidad del elemento "player".
    // Para tener todas las variables en el mismo sitio.
    this.sprite = null;

    // Método que genera al player con su correspondiente atributo id con 
    // valor "player".
    this.insertPlayer = function () {
        var newPlayer = document.createElement('div');
        newPlayer.setAttribute('id', 'player');
        // Aplicando los estilos CSS al elemento player.
        /* left: Se le quita la mitad de la anchura del elemento player*/
        newPlayer.style.left = this.x + 'px';
        newPlayer.style.top = this.y + 'px';
        // Guardamos al player en la variable sprite;
        this.sprite = newPlayer;
        // Anexión del elemento "sprite" en el tablero.
        board.appendChild(this.sprite);
    }

    // Método que desplaza al elemento "player".
    this.move = function () {
        this.x = this.x + this.speed * this.direction;
        // Accedemos a "sprite" que es donde está almacenado el elemento "player" 
        // del DOM y le aplicamos el estilo.
        this.sprite.style.left = this.x + 'px';
    }

}

player.insertPlayer();

// Eventos para desplazamiento.
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
        default:
            // En el caso de que se pulse cualquier otra tecla, no se quedará 
            // almacenado el anterior valor correspondiente a la tecla que se 
            // pulsase anteriormente (-1 -> a o 1 -> d).
            player.direction = 0;
            break;
    }

    player.move();
});