const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;



function preload(){
 bgIMG = loadImage("assets/background.gif")
tower1 = loadImage("assets/tower.png")

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var option = {
    isStatic:true
  }
 ground = Bodies.rectangle(0,590,width,12,option)
World.add (world,ground)

tower = Bodies.rectangle(160,350,160,310,option)
World.add(world,tower)

angle = 20
cannon1 = new cannon(180,110,130,100,angle)
}

function draw() {
 // background(189);
 image(bgIMG,0,0,width,height)
  Engine.update(engine);
  
 rect(ground.position.x,ground.position.y,width,12)
 
 push();
 imageMode(CENTER)
 image(tower1,tower.position.x,tower.position.y,160,310)
 pop()

cannon1.show()
}
