function menu() {  
  playButton = createButton('PLAY');
  playButton.position(20, 20);
  playButton.mousePressed(playGame);
}

function playGame() {  
  events = "play";
}

function reload() {
    textSize(20);
    fill(200);
    stroke(20);
    text("Press R to reload", 10, 36);
    if (keyIsDown(82)) {
      setup();
      window.location.reload();      
    }
}