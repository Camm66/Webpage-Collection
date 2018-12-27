var ps =[];

function setup() { 
   var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("home");
  for (var i=0; i<10;i++){
    ps[i] = new Particle(random(0,width), random(0,height));
  }
} 

function draw() { 
  for (var i=0; i<10;i++){
    ps[i].update();
    ps[i].show();
    line(ps[i]);
  }
  
  
}

function Particle(x, y) {

  this.pos = createVector(x, y);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0.01);
  
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);

    this.acc = p5.Vector.sub(mouse, this.pos);

    this.acc.setMag(0.1);
    
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(5);
  }

  this.show = function() {
    point(mouseX,mouseY);
    strokeWeight(4);
    noStroke();
    fill(0,0,54,70);     
    ellipse(this.pos.x,this.pos.y,10,10);
    fill(254,242,54);     
    ellipse(this.pos.x,this.pos.y,3,3);
  }
}