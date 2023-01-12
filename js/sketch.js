var counter = 0;

var myColour;

const fireworks = []; // Create an array for the firework objects

let gravity; // Create a variable for gravity


function setup() {
{
  createCanvas(800, 800);
  colorMode(HSB);
  gravity = createVector(random(-0.02, 0.02), random(0.09, 0.1));
  stroke(255);
  strokeWeight(4);
  background(0);
}
    myColour = color(random(220 ,255), random(220 ,255), random(0 ,255)); //sets the colour to be randomly chosen between the selected values
    
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);

  {
    if (counter > 19) {
        myColour = color(random(220 ,255), random(220, 255), random(0 ,255)); 
        counter = 0;
    }
    {
    counter = counter + 1; // counts how long it takes before the colour changes
   
   
    push();
    translate(width * 0.35, height * 0.55); //sets the location of the star
    rotate(frameCount / 175.0); // sets the speed of the rotation 
    fill(255); //sets the stars colour to white
    star(0, 0, 8, 20, 5); // draws a star
    pop();

    
    push();
    translate(width * 0.5, height * 0.7); //sets the location of the star
    rotate(frameCount / 175.0); // sets the speed of the rotation 
    fill(255); //sets the stars colour to white
    star(0, 0, 8, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.2, height * 0.1); //sets the location of the star
    rotate(frameCount / 75.0); // sets the speed of the rotation 
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
    
    push();
    translate(width * 0.5, height * 0.1); //sets the location of the star
    rotate(frameCount / 50.0); // sets the speed of the rotation 
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.1, height * 0.25); //sets the location of the star
    rotate(frameCount / 175.0); // sets the speed of the rotation 
    fill(255); //sets the stars colour to white
    star(0, 0, 8, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.9, height * 0.25); //sets the location of the star
    rotate(frameCount / 150.0); // sets the speed of the rotation 
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.2, height * 0.4); //sets the location of the star
    rotate(frameCount / 100.0); // sets the speed of the rotation 
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.5, height * 0.4); //sets the location of the star
    rotate(frameCount / 175.0); // sets the speed of the rotation 
    fill(255); //sets the stars colour to white
    star(0, 0, 8, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.8, height * 0.4); //sets the location of the star
    rotate(frameCount / 100.0); // sets the speed of the rotation 
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.65, height * 0.25); //sets the location of the star
    rotate(frameCount / 75.0); // sets the speed of the rotation 
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
    
    push();
    translate(width * 0.35, height * 0.25); //sets the location of the star
    rotate(frameCount / 175.0); // sets the speed of the rotation 
    fill(255); //sets the stars colour to white
    star(0, 0, 8, 20, 5); // draws a star
    pop();
  
    push();
    translate(width * 0.65, height * 0.55); //sets the location of the star
    rotate(frameCount / 75.0); // sets the speed of the rotation
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
   
    push();
    translate(width * 0.8, height * 0.1); //sets the location of the star
    rotate(frameCount / 50.0); // sets the speed of the rotation
    fill(myColour); // randomly sets the colour of the star
    star(0, 0, 7, 20, 5); // draws a star
    pop();
  
   
    push();
    translate(width * 0.9, height * 0.1); //sets the location of the ellipse
    rotate(frameCount / 100.0); //rotates the ellipse clockwise
    ellipse(5, 10, 55, 55); //draws a ellipse
    pop();
  }
  
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (var i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
 
 
  
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

class Particle { // // Adapted from Daniel Shiffman http://codingtra.in
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    colorMode(HSB);

    if (!this.firework) {
      strokeWeight(2);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.hu, 255, 255);
    }

    point(this.pos.x, this.pos.y);
  }
}

class Firework {
  constructor() {
    this.hu = random(255);
    this.firework = new Particle(random(width), height, this.hu, true);
    this.exploded = false;
    this.particles = [];
  }

  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
  


