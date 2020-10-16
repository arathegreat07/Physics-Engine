const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground, ball;

function setup() {
  createCanvas(400,400);
  
  var options = {isStatic: true};
  var options1 = {restitution: 0.8};

  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200, 380, 400, 20, options);
  ball = Bodies.circle(200, 100, 40, options1); 

  World.add(world, ground);
  World.add(world, ball);

}

function draw() {
  background("black");  
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40);
}