function Bullet(x, y, parent) {

    this.x = x;
    this.y = y;
    this.sprite;

    this.insertBullet = function () {
        var newBullet = document.createElement('div');
        newBullet.classList.add('bullet');
        newBullet.style.left = this.x + 'px';
        newBullet.style.top = this.y + 'px';
        this.sprite = newBullet;
        parent.appendChild(this.sprite);
    }
}

export { Bullet };