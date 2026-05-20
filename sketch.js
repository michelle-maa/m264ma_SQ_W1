let img;

function preload() {
  img = loadImage('/assets/images/Exit.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, 0, 0, width, 300);
  fill(255, 255, 0);
  rect(145, 10, 100, 30); 
  fill(0);
  text("Exit 8", 180, 30);
}
