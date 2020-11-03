const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ball;

function setup() {
  createCanvas (400,400);
  engine=Engine.create();
  world=engine.world;
  var groundOptions={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,200,20,groundOptions);
  World.add(world,object);
  var ballOptions={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}