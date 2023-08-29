function Enemy(x, y, parent, player) {
    var self = this;
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 50;
    this.speed = 10;
    this.sprite;

    this.insertEnemy = function () {
        var newEnemy = document.createElement('div');
        // Para los enemigos trabajaremos con class ya que serán varios en pantalla.
        // classList.add no sobreescribe las clases, sino que va añadiéndolas a la 
        // lista de ya existentes.
        newEnemy.classList.add('enemy');
        newEnemy.style.left = this.x + 'px';
        newEnemy.style.top = this.y + 'px';
        this.sprite = newEnemy;
        parent.appendChild(this.sprite);
    };

    this.move = function () {
        // Antes de mover al enemigo, se procede a detectar si colisiona.
        self.checkCollision();
        self.y = self.y + self.speed;
        self.sprite.style.top = self.y + 'px';
        // Cada vez que el enemigo se desplaza hacia abajo, se comprueba lo
        // siguiente:
        if (self.y > 750) {
            self.removeEnemy();
        }
    }

    // Definimos un intervalo para ir creando enemigos en pantalla.
    // Nos creamos una variable que almacena el intervalo que hace que 
    // se muevan cada uno de los enemigos (cada uno tendra su timerId 
    // concreto).
    this.timerId = setInterval(this.move, 100);

    // Método que hace que un enemigo desaparezca del tablero cuando 
    // alcance la base (bottom) del tablero.
    this.removeEnemy = function () {
        parent.removeChild(this.sprite);
        // Asimismo, necesitaríamos detener todos los intervalos que 
        // tienen que ver con él para que deje de ocupar espacio en memoria.
        clearInterval(this.timerId);
    }

    // Cada instancia de enemy ha de tener la referencia del jugador (player)
    // para detectar colisiones (mucho más sencillo que hacerlo al revés).
    // Se detecta colisión cuando la parte inferior del enemigo es superior al 
    // del player y cuando la parte superior del player esté por debajo del enemigo.
    this.checkCollision = function () {
        if (this.y + this.height >= player.y &&
            this.y <= player.y + player.height &&
            this.x + this.width >= player.x &&
            this.x <= player.x + player.width) {
            player.isDead = true;

        }
    }


}

export { Enemy };