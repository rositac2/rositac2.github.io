function setup() {
  createCanvas(515, 300);
}

function draw() {
  background('rgb(153,153,209)');
  line(100, 0, 100, 600);
  line(200, 0, 200, 600);
  line(300, 0, 300, 600);
  line(400, 0, 400, 600);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill('pink');
    textSize(35);
    text('I wumbo⭐️',mouseX, mouseY-20);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill('rgb(143,192,243)');
    textSize(30)
    text('you wumbo 🫵', mouseX, mouseY-20);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill('rgb(207,106,106)');
    textSize(30)
    text('he 🧍', mouseX, mouseY-20);
  }
  
  else if (mouseX  <400 && mouseX <= 400) {
    fill('rgb(153,70,151)');
    textSize(30)
    text('she 🧍‍♀️',mouseX, mouseY-20);
  }
  else if (mouseX  <500 && mouseX <= 500) {
    fill('rgb(127,248,222)');
    textSize(15)
    text('me wumbo 💅',mouseX, mouseY-20);
  }
  
}







