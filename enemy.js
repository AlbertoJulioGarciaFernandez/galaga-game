function Enemy(x, y, parent) {
    this.x = x;
    this.y = y;
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

    // Definimos un intervalo para ir creando enemigos en pantalla.
    
}

export { Enemy };