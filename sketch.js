function setup() {
  // create a full-window canvas and attach it to the container DIV
  const cnv = createCanvas(windowWidth, windowHeight * 0.7);
  cnv.parent('visualizer-container');
  background(20);
  noLoop(); // paused until we integrate audio/recognition
}

function draw() {
  // draw a placeholder disc
  translate(width / 2, height / 2);
  noFill();
  stroke(100);
  strokeWeight(4);
  ellipse(0, 0, min(width, height) * 0.6);
  fill(100);
  noStroke();
  ellipse(0, 0, min(width, height) * 0.2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.7);
  redraw();
}
