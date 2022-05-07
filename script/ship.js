class Ship
{
  constructor()
  {
    this.x = 200;
    this.y = H / 2;
    this.vx = 0;
    this.vy = 0;
    this.vxFactor = W / 60000;
    this.vyFactor = H / 60000;
    this.width = W / 22;
    this.heigth = H / 40;
    this.energy = 100;
    this.shield = 100;
    this.ships = 5;
    this.score = 0;
    this.gunPos = [];
    this.ammo = 200;
    this.progress = 0;
    this.stage = 1;
  }

  limits()
  {

    if (this.x < -10)
      this.x = -10;

    else if (this.x > W * 0.85)
      this.x = W * 0.85;

    if (this.y < 5)
      this.y = 5;

    else if (this.y > H - this.heigth - 10)
    {
      this.y = H - this.heigth - 10;

      if (this.y > bgY + coverHeight - this.heigth - 10)
        this.y = bgY + coverHeight - this.heigth - 10;
    }

    if (this.vx > 8)
      this.vx = 8;

    else if (this.vx < -7)
      this.vx = -7;

    if (this.vy > 8)
      this.vy = 8;

    else if (this.vy < -8)
      this.vy = -8;
  }

  show()
  {
    fill("white");
    strokeWeight(1);
    stroke("gray");
    rect(this.x, this.y, this.width, this.heigth, 1);
  }

  keyPressed()
  {
    if (keyIsDown(32))
    {
      shoot();
      this.canShoot = false;
    }

    if (keyIsDown(LEFT_ARROW))
      //if (!(coverShow == 0 && bgX > 0)) {
      this.vx -= this.vxFactor;
    //}
    else if (keyIsDown(RIGHT_ARROW))
      this.vx += this.vxFactor / 2;

    if (keyIsDown(UP_ARROW))
      this.vy -= 0.05;

    else if (keyIsDown(DOWN_ARROW))
      this.vy += 0.05;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= friction;
    this.vy *= friction;
  }

  energyUse()
  {
    if (this.vx >= 0)
      this.energy -= 0.005 + this.vx / 50;

    if (this.energy < 2)
      this.destroy();
  }

  shieldUse()
  {
    if (this.shield < 2)
      this.destroy();
  }

  guns()
  {
    this.gunPos = [this.x + this.width, this.y + this.heigth / 4];
  }

  updateScore()
  {
    if (this.vx >= 0)
      this.score += this.vx / 2 + 0.05;
    
    else
      this.score += 0.02;
  }

  destroy()
  {
    this.shield = barsSize;
    this.energy = barsSize;
    this.ships -= 1;
    events == "respawn";
  }
}

function updateShip(ship)
{  
  ship.keyPressed();
  ship.move();
  ship.limits();
  ship.show();
  ship.energyUse();
  ship.shieldUse();
  ship.guns();

  ship.updateScore();
}