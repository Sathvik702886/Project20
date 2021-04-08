var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(80, 200, 25, 15);
  speed = random(55, 90);
  weight = random(400, 1500)
  car.velocityX = speed;
  wall = createSprite(1300, 200, 10, 400)
  
  wall.shapeColor = color(0, 0, 0)

}

function draw() {
  background(0, 0, 255); 

  if ( wall.x - car.x <= car.width/2 + wall.width/2){
      car.velocityX = 0;
      deformation = 0.5 * weight * speed * speed / 22500;
      if (deformation > 180){
        car.shapeColor = color(255, 0, 0)
        
      }
      if (deformation < 180 && deformation > 100)
      {
        car.shapeColor = color(230, 230, 0)
      }
      if (deformation < 100){
        car.shapeColor = color(0, 255, 0)

      }
    }

  drawSprites();
}