class Obstacle
{
  constructor()
  {
    this.width = random(W / 20, W / 4);
    this.heigth = random(H / 20, H / 4);
    this.mass = this.width * this.heigth;
    this.x = random(W, W * 2);
    this.y = random(0 - this.heigth, H);
    this.vx = 1;
    this.accel = 50 / this.mass;
    this.color = 300 - (this.mass / 280);
  }

  draw()
  {
    if (
      this.x < W &&
      this.y > this.heigth * -1 &&
      this.y < H
    )
    {
      fill(this.color, 0, 0);
      rect(this.x, this.y, this.width, this.heigth, 2);
    }
  }

  updatePos()
  {
    this.x -= this.vx;

    if (this.x < W)
    {
      this.vx += this.accel;

      if (ship.vy != 0.001)
      {
        this.y += (ship.vy * 3 / (this.mass * 0.001) * -1);
      }
      if (ship.vx != 0)
      {
        this.x -= (ship.vx * 20000) / this.mass
      }
    }
  }

  limits()
  {
    if (this.y > H)
      this.y = 0 - this.heigth;

      else if (this.y < 0 - this.heigth)
        this.y = H;

    if (this.x < this.width * -1)
      this.resetObstacle();
  }

  resetObstacle()
  {
    this.width = random(W / 20, W / 4);
    this.heigth = random(H / 20, H / 4);
    this.mass = this.width * this.heigth;
    this.x = random(W, W * 2);
    this.y = random(0 - this.heigth, H);
    this.vx = 1;
    this.accel = 50 / this.mass;
    this.color = 300 - (this.mass / 280);
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
}

function updateObstacle()
{  
  strokeWeight(1);
  stroke(100, 0, 0);

  obstacles.forEach(obstacle =>
  {
    obstacle.draw();
    obstacle.updatePos();
    obstacle.limits();

    if (obstacle.collideWithShip())
    {
      obstacle.color = 220
      updateObstacleShip(obstacle.x, obstacle.y, obstacle.width, obstacle.heigth)
    }
  });
}

function updateObstacleShip(obstacleX, obstacleY, obstacleW, obstacleH)
{
  if (ship.shield > 1)
  ship.shield -= 0.2;

  if (
    ship.x + ship.width > obstacleX - 10 &&
    ship.x + ship.width < obstacleX + 10)

    ship.x = obstacleX - ship.width;

  else if (
    ship.x > obstacleX + obstacleW - 10 &&
    ship.x < obstacleX + obstacleW + 10)

    ship.x = obstacleX + obstacleW;

  else if (
    ship.y + ship.heigth > obstacleY - 10 &&
    ship.y + ship.heigth < obstacleY + 10)

    ship.y = obstacleY - ship.heigth;

  else if (
    ship.y > obstacleY + obstacleH - 10 &&
    ship.y < obstacleY + obstacleH + 10)

    ship.y = obstacleY + obstacleH;
}