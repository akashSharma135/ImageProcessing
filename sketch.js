let groot;

function setup() {
  createCanvas(800, 1000);
  groot = loadImage("image/groot.jpg");
  //groot.resize(400, 400);
  background(0);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    var x = random(width);
    var y = random(height);
    var c = groot.get(x, y);
    fill(c, 25);
    noStroke();
    ellipse(x,y,16,16);
  }
}