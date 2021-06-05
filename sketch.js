var Sisterimg;
var snowfallbg;
var Sister;
function setup() {
  createCanvas(800,400);
  Sister =  createSprite(400, 200, 50, 50);
  Sister.loadImage(Sisterimg);
}

function preload()
{
snowfallbg = loadImage("snow3.jpg");
Sisterimg = loadImage("Sis.jpg");
}

function draw() {
  background(snowfallbg);  
  drawSprites();
}