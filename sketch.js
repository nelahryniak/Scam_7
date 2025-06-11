let img;

// Load the image.
function preload() {
  img = loadImage('robot.png');
}


function setup() {
  
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
    fill (0,0)
rect(windowWidth/3, windowHeight/3,30,50);
  
  
  
  image (img,windowWidth/2,windowHeight/2)
   img.resize(200, 300);
  
  textSize (50)
  fill(0)
  textSize (50)
    textAlign (CENTER,CENTER)
    text('Czy to twój pesel?',windowWidth/2,windowHeight/5)
  
}