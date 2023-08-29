function Bullet(x, y, parent, enemies) {
    var self = this;
    this.x = x;
    this.y = y;
    this.height = 10;
    this.width = 10;
    this.speed = 50;
    this.sprite;

    this.insertBullet = function () {
        var newBullet = document.createElement('div');
        newBullet.classList.add('bullet');
        newBullet.style.left = this.x + 'px';
        newBullet.style.top = this.y + 'px';
        this.sprite = newBullet;
        parent.appendChild(this.sprite);
    }


    this.move = function () {
        self.checkCollision();
        // Al tener la referencia la parte superior del tablero, habría que 
        // restar para que las balas fuesen hacia arriba.
        self.y = self.y - self.speed;
        self.sprite.style.top = self.y + 'px';
        // Si alcanza el borde o un poco más:
        if (self.y <= 0) {
            self.removeBullet();
        }
    }

    this.timerId = setInterval(this.move, 100);

    this.removeBullet = function () {
        parent.removeChild(this.sprite);
        clearInterval(this.timerId);
    }

    this.checkCollision = function () {
        enemies.forEach(function (enemy, index) {
            if (self.y + self.height >= enemy.y &&
                self.y <= enemy.y + enemy.height &&
                self.x + self.width >= enemy.x &&
                self.x <= enemy.x + enemy.width) {
                self.removeBullet();
                parent.removeChild(enemy.sprite);
                enemies.splice(index, 1);
                
            }
        });
    }
}

export { Bullet };