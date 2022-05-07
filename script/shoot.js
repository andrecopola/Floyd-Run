let bullets = [];

class Bullet {
    constructor() {
        this.x = ship.gunPos[0];
        this.y = ship.gunPos[1];
    }    
}

function shoot() {
    if (ship.ammo > 0) {
        bullets.push(new Bullet(ship.gunPos));
        ship.ammo --;
        console.log(ship.ammo);
    }
}

function updateBullets(){
    bullets.forEach(Bullet => {
        Bullet.x += 10;
        strokeWeight(1);
        rect(Bullet.x, Bullet.y, 8, 5)
        //console.log(bullets);
        if (Bullet.x > W) {
            bullets.splice(Bullet, 1);
        }
    });
}
