class Star {
  constructor() {
    this.size = random(1, 7);
    this.x = random(0, W);
    this.y = random(0, H);
    this.velocity = 1 / this.size;
    this.acceleration = this.size / 350;
  }

  limits() {
    if (this.y < 0)
      this.y = H;
    
    else if (this.y > H)
      this.y = 0;
    
    if (this.x < -this.size) {
      this.velocity = 0.5;
      this.x = W + this.size;
      this.y = random(-10, H + 10);
    }
  }

  draw() {    
    stroke(255 - this.size);
    strokeWeight(this.size);
    point(this.x, this.y);
  }
}

function updateStar() {
  stars.forEach(star => {
    if (H > star.y > 0) {              
      star.x -= star.velocity;
      star.velocity += star.acceleration;
      star.y -= ship.vy / 5;
      if (ship.vx > 0) {
        star.x -= ship.vx * 15;
      } else {
        star.x -= ship.vx * 1.5;
      }
      star.limits();
      star.draw();
    }    
  })
}