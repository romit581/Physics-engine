// Shorcuts - > Name Spacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, object;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  object = Bodies.rectangle(200, 380, 600, 20, options);
 World.add(world, object);

 var ballOptions= {
   restitution: 0.8
 }
 ball = Bodies.circle(200,30,30,ballOptions)
 World.add(world,ball)
 console.log(object);

  
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode (CENTER);
  rect(object.position.x, object.position.y,600,20);

  ellipseMode (RADIUS);
  ellipse (ball.position.x,ball.position.y,30);
}