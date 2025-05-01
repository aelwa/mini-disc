// sketch.js

function setup() {
  // create a canvas that fills the width, 70% of the height
  const cnv = createCanvas(windowWidth, windowHeight * 0.7);
  // attach p5’s canvas into our <div id="visualizer-container">
  cnv.parent('visualizer-container');
  background(20);
  noLoop(); // we’ll start looping later, for now just draw once
}

function draw() {
  // draw a simple placeholder MiniDisc
  translate(width / 2, height / 2);
  noFill();
  stroke(200);
  strokeWeight(4);
  ellipse(0, 0, min(width, height) * 0.6);
  fill(200);
  noStroke();
  ellipse(0, 0, min(width, height) * 0.2);
}

function windowResized() {
  // resize the canvas if the window changes size
  resizeCanvas(windowWidth, windowHeight * 0.7);
  redraw(); // redraw the placeholder
}
