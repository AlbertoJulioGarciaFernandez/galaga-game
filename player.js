/* Creamos una función constructora para crear varias estructuras del elemento 
"player". */
function Player(x, y) {
    var self = this; // El this sería la variable que almacena toda la parte 
    // lógica del elemento "player".
    this.x = x;
    this.y = y;
    this.direction = 0; // (0 quieto) (-1 hacia la izquierda) (1 hacia la derecha)
    // El sprite representa al elemento que se insertará en el DOM (en este 
    // caso, el elemento "player").
    this.speed = 10; // Variable que controla la velocidad del elemento "player".
    // Para tener todas las variables en el mismo sitio.
    this.sprite = null; // El sprite sería el elemento que vemos en el DOM.

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
        this.sprite = newPlayer; // para hacerlo más arcade darle una velocidad
        //más fluida.
        // Anexión del elemento "sprite" en el tablero.
        board.appendChild(this.sprite);
    }

    // Método que desplaza al elemento "player".
    this.move = function () {
        // Aquí se usaría "self" y NO this
        self.x = self.x + self.speed * self.direction;
        // Accedemos a "sprite" que es donde está almacenado el elemento "player" 
        // del DOM y le aplicamos el estilo.
        self.sprite.style.left = self.x + 'px';
    }

}

export { Player}