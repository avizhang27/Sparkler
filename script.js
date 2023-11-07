// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 0; // Decide the initial number of particles.

let particles = [];
let r;
let g;
let b;
function setup() {
  let canvas = createCanvas(600, 600);


  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(20);
  particles.push(new Particle(mouseX-1, mouseY-100))
stroke(255);
   line(mouseX+15, mouseY-20, mouseX-7, mouseY-100)
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    p.speedUp();
    p.checkOutside();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY, size) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-0.5, 0.5);
    this.ySpd = random(-0.5, 0.5);
    this.isDone=false;
    this.dia = random(2, 20);
    this.dia2 = random(1, 10);
    this.alpha = (255);
  }
  
  
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x+=this.xSpd;
    this.y+=this.ySpd
    this.alpha-=5
    
  }
  
   speedUp(){
    this.xSpd *= 1.06;
    this.ySpd *= 1.06;
   }
   
  checkOutside(){
    if(this.x>width||this.x<0){
      this.isDone=true;
    }
       if(this.y>height||this.y<0){
      this.isDone=true;
       }
    
  }
  
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    fill(random(200, 256),random(130, 230), random(0, 150), this.alpha)
    circle(0, 0, this.dia);
    fill(random(240, 256),random(230, 250), random(0, 250), this.alpha)
    circle(random(-4, 9), random(-6, 7), this.dia2);
    fill(255)

    pop();
  }
}
