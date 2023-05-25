function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220)
  
  fill( 'tan');
  ellipse(150, 150, 200, 250);
  
  
  
  fill('#668549')
  ellipse(110, 125, 20, 40);
  
  fill('black')
  ellipse(111, 128, 10, 15);
  
  fill('#668549')
  ellipse(180, 125, 20, 40);
  
  fill('black')
  ellipse(179, 128, 10, 15);
  
  
  fill('#795548')
  triangle(148, 162, 163, 173, 141,174)
  
  fill('rgb(184,75,75)')
  rect(120, 200, 50, 30)
  
  
  
//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
  
  

}