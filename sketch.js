const W = window.innerWidth * 0.8;
const H = W / 16 * 9;
let events = "menu";
const quantStars = 280;
const quantObstacles = H / 20;
const friction = 0.97;
let stars = [];
let obstacles = [];
let collision = false;
const coverWidth = W * 1.5;
const coverHeight = H * 1.5;
const totalCourse = coverWidth * 5 + W * 4;
let courseProgress = 0;
let stage = 1;
let progress = 0;
let cover0;
let cover1;
let cover2;
let cover3;
let cover4;
let cover5;
let song1;

function preload() {
  cover0 = loadImage("img/cover0.jpg");
  cover1 = loadImage("img/cover1.jpg");
  cover2 = loadImage("img/cover2.jpg");
  cover3 = loadImage("img/cover3.jpg");
  cover4 = loadImage("img/cover4.jpg");
  cover5 = loadImage("img/cover5.jpg");
  soundFormats("mp3", "ogg");
  song1 = loadSound("sound/run.mp3");
}

// Função setup é executada somente uma vez ao iniciar o app

function setup() {
  cover0.resize(coverWidth, coverHeight);
  cover1.resize(coverWidth, coverHeight);
  cover2.resize(coverWidth, coverHeight);
  cover3.resize(coverWidth, coverHeight);
  cover4.resize(coverWidth, coverHeight);
  cover5.resize(coverWidth, coverHeight);

  createCanvas(W, H);

  ship = new Ship();

  for (let i = 0; i < quantStars; i++) {
    stars[i] = new Star();
  }
  for (let i = 0; i < quantObstacles; i++) {
    obstacles[i] = new Obstacle();
  }
}

// Função draw é executada a cada frame e chama as outras funções do app

function draw() {
  background(0);

  if (events == ("menu" || "start" || "pause" || "respawn")) {
    updateBg();
    updateStar();
    menu();
  }
    
  if (events == "play") {
    updateBg();
    updateStar();
    updateObstacle();
    updateShip(ship);
    updateProgress();
    showPanel();
    updateBullets();    
  }
  
  if (events == "respawn") { 
    showPanel();
    menu();
    reload();
  }
}

function windowResized() {
  location.reload();
}
