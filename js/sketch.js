var counter = 0;

var myColour;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    
    
    myColour = color(random(220 ,255), random(220 ,255), random(0 ,255));
    
    
 
}

function draw() {
    background(0, 20, 40); // sets the background colour of the canvas
    
    if (counter > 19) {
        myColour = color(random(220 ,255), random(220, 255), random(0 ,255));

        counter = 0;
    }

    counter = counter + 1;
   
    push();
    translate(width * 0.1, height * 0.1); //sets the location of the star
    rotate(frameCount / 75.0); // sets the speed of the rotation
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
    
    push();
    translate(width * 0.15, height * 0.05); //sets the location of the star
    rotate(frameCount / 150.0); // sets the speed of the rotation
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();

    push();
    translate(width * 0.15, height * 0.15); //sets the location of the star
    rotate(frameCount / 100.0); // sets the speed of the rotation
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();

    push();
    translate(width * 0.20, height * 0.1); //sets the location of the star
    rotate(frameCount / 75.0); // sets the speed of the rotation
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
   
    push();
    translate(width * 0.9, height * 0.1); //sets the location of the ellipse
    rotate(frameCount / 100.0); //rotates the ellipse clockwise
    ellipse(5, 10, 55, 55); //draws a ellipse
    pop();

 
    
}
    
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
