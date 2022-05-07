class Energy {
  constructor() {
    this.width = random(W / 20, W / 10);
    this.heigth = random(H / 30, H / 20);
    this.x = W;
    this.y = random(0 - this.heigth, H);
    this.vx = 1;
    this.accel = 1;
    this.color = 150;
  }

  createEnergy() {
      
  }

  updateEnergy() {
    this.x -= this.vx;
    
    this.vx += this.accel;
    
      if (ship.vy > 0.001 || ship.vy < 0.001) {
        this.y += (ship.vy * 1.5 / (this.mass * 0.001) * -1);
      }
      if (ship.vx > 0 || ship.vx < 0) {
        this.x -= (ship.vx * 10000) / this.mass
      } 
    
    this.collide();
    this.limits();    
  }

  limits() {
    if (this.y > H) this.y = 0 - this.heigth;
      else if (this.y < 0 - this.heigth)
        this.y = H;
    
    if (this.x < W * 0.6) {
      this.x = W * 0.6;
      //objects.splice(o, 1, new Obj());
    }
  }

  collideWithShip()
  {
    if (
      ship.y + ship.heigth < this.y ||
      ship.y > this.y + this.heigth)

      return false;

    if (ship.x + ship.width > this.x && ship.x < this.x + this.width)
    
      return true;

      return false;
  }

  showEnergy() {
    fill(this.color, 0, 0);
    stroke(100, 0, 0);
    rect(this.x, this.y, this.width, this.heigth, 2);
  }
}
