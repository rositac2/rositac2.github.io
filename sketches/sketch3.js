

function setup() {
  createCanvas(windowWidth, windowHeight); //creates the canvas to an equal window size
  background(255);
}

function draw() {
  background(255);
  fill('yellow') // fill- sets a color for the inside of the ellipse
  ellipse(0, 0, 160, 200)  // makes the sun at the corner

  //The Ground
  noStroke();
  fill('green'); // fills the rect. green for grass
  rect(0,400,windowWidth,100);



  //The House
  fill('plum');  // fills the inside of the house plum
  stroke('pink'); // outlines the house in pink
  rect(50,200,220,200);

  
   fill('brown') // fills the door brown 
  stroke('black') // outlines it black
  rect(125, 325, 50, 75) // draws the rectangle with the door
  
  //Windows
  fill('black'); 
  strokeWeight(10); // controls how thick the outline is 
  stroke('black'); // color of the outline to the triangle
  rect(80,250,50,50); // sets the position of the window
  rect(180,250,50,50); // sets the position of the window
  
  //Triangle
  fill('brown'); // fills the triangle brown
  triangle(50,200,150,100,270,200); // sets the position of the triangle 

  fill('white');
  strokeWeight(10);
  stroke('black');
  rect(80,250,50,50);
  rect(180,250,50,50);

  line(500,350 , 275, 344) 

line(41, 341 , 0 , 340)

line(502 , 351 , 505 , 399 ) // makes the line going down on the right

  
}