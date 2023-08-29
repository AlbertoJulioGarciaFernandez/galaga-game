/* Creamos una función constructora para crear varias estructuras del elemento 
"player". */
function Player(x, y, parent) {
    var self = this; // El this sería la variable que almacena toda la parte 
    // lógica del elemento "player".
    this.x = x;
    this.y = y;
    this.direction = 0; // (0 quieto) (-1 hacia la izquierda) (1 hacia la derecha)
    // El sprite representa al elemento que se insertará en el DOM (en este 
    // caso, el elemento "player").
    this.speed = 5; // Variable que controla la velocidad del elemento "player".
    // Para tener todas las variables en el mismo sitio. Es importante ponerle 
    // un valor múltiplo de cinco para que cuadre.
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
        this.sprite = newPlayer; // Para hacerlo más arcade darle una velocidad
        //más fluida.
        // Anexión del elemento "sprite" en el tablero (lo definimos como "parent").
        parent.appendChild(this.sprite);
    }

    // Método que desplaza al elemento "player".
    this.move = function () {
        // Antes de movernos, se calcula la coordenada a la que deseamos 
        // desplazarnos. Posteriormente, se comprueba con una condición if 
        // si esa siguiente posición entra dentro del rango permitido.
        var nextX = self.x + self.speed * self.direction;

        // El movimiento solamente se habrá de permitir mientras el sprite se 
        // encuentre dentro de los bordes del tablero.
        // En esta condición se comprueba A DÓNDE NOS QUEREMOS MOVER por eso 
        // ponemos mayor-igual y menor-igual (antes de movernos se comprueba 
        // hacia dónde nos queremos desplazar).
        if (nextX >= 0 && nextX <= 450) {
            // Aquí se usaría "self" y NO this.
            self.x = self.x + self.speed * self.direction;
            // Accedemos a "sprite" que es donde está almacenado el elemento "player" 
            // del DOM y le aplicamos el estilo.
            self.sprite.style.left = self.x + 'px';
        }
    }

}

export { Player };