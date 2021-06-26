const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,right,left,top_wall,ball;
var engine,world;
var B1,B2;
function setup()
{
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
B1=createImg('right.png');
B1.position(220,30);
B1.size(50,50);
B1.mouseClicked(Hforce);
B2=createImg('up.png');
B2.position(20,30);
B2.size(50,50);
B2.mouseClicked(Vforce);
ground= new Ground(200,390,400,20);
right= new Ground(390,200,20,400);
left= new Ground(10,200,20,400);
top_wall= new Ground(200,10,400,20);
var ball_options={
  restitution:0.95
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
ellipseMode(RADIUS);
rectMode(CENTER);
}
function draw()
{
background(0);
ellipse(ball.position.x,ball.position.y,20);
ground.show();
right.show();
left.show();
top_wall.show();
Engine.update(engine);
}
function Hforce(){
  Matter.Body.applyForce(ball,{x:1,y:0},{x:0.05,y:0});
}
function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:1},{x:0,y:-0.05});
}