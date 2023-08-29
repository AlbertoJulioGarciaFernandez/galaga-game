function Enemy(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
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
        self.y = self.y + self.speed;
        self.sprite.style.top = self.y + 'px';
    }

    // Definimos un intervalo para ir creando enemigos en pantalla.
    // Nos creamos una variable que almacena el intervalo que hace que 
    // se muevan cada uno de los enemigos (cada uno tendra su timerId 
    // concreto).
    this.timerId = setInterval(this.move, 100);

}

export { Enemy };