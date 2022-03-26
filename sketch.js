var score = 0
var PLAY=1
var END=0
var gameState = PLAY
function preload() {
Alien1Img = loadImage("TAlien1.png")
Alien2Img = loadImage("TAlien2.png")
Alien3Img = loadImage("TAlien3.png")
Alien4Img = loadImage("TAlien4.png")
Alien5Img = loadImage("TAlien5.png")
gameOverImg = loadImage("gameOver.png")
/*Alien6Img = loadImage("TAlien6.png")
Alien7Img = loadImage("TAlien7.png")
Alien8Img = loadImage("TAlien8.png")
Alien9Img = loadImage("TAlien9.png")
Alien10Img = loadImage("TAlien10.png")
Alien11Img = loadImage("TAlien11.png")
*/ 
spaceShipImg = loadImage("SpaceShip.png")
bgImage = loadImage("Space.jpg")
bulletImg = loadImage("Bullet.png")
}

function setup() {
createCanvas(600,400)
bg = createSprite(300,200)
bg.addImage(bgImage)
//bullet = createSprite(10,100)
//bullet.addImage(bulletImg)

spaceShip = createSprite(20,200)
spaceShip.addImage(spaceShipImg)
spaceShip.scale = 0.5

//gameOver = createSprite(300,200)
//gameOver.addImage(gameOverImg)
//gameOver.scale = 2.5
bulletGroup = new Group();

alienGroup = new Group();

}

function draw() {
    //background(0)
    fill("turquoise")
    textSize(24)
    text("score:"+score, 500,20)
   if(gameState === PLAY){
   //  gameOver.visible = false
    spawnAlien()
    
   
    spaceShip.y = mouseY;
    if(bulletGroup.isTouching(alienGroup)){
      alienGroup.destroyEach()
      bulletGroup.destroyEach()
      score += 10
      
   }
   drawSprites() 
    }
    if(gameState === END){
      //  ground.velocityX = 0;
      fill("cyan")
      textSize(40);
text("Game Over",200,200)
      
     alienGroup.setVelocityXEach(0);
     alienGroup.setLifetimeEach(-1);
     
    
     //gameOver.visible = true
      
  //   restart.visible = true
     
    }
      
    if(alienGroup.isTouching(spaceShip)){
      gameState = END
    
    
    
      }
  
    }



  
      



 



function spawnAlien(){

    if(frameCount % 72 === 0){
    alien = createSprite(580, Math.round(random(50,350)),10,40)
   alienGroup.add(alien);
  alien.velocityX = -6
  alien.scale = 1;
  alien.lifetime = 200;
  
  var ran = Math.round(random(1,5))
  switch(ran){
       case 1:
        alien.addImage(Alien1Img);
      //  obstacle.scale = 0.5;
  
        break;
      case 2:
        alien.addImage(Alien2Img)  
      break
      case 3:
        alien.addImage(Alien3Img);
      break;
      case 4:
        alien.addImage(Alien4Img);
      break;
      case 5:
        alien.addImage(Alien5Img);
      break;
  /*    case 6:
        obstacle.addImage(obstacle6);
      break;
      default:
        break;*/
      }
    }
   }
function createBullet(){
 

        bullet = createSprite(100,spaceShip.y);
        bullet.addImage(bulletImg)
        bullet.velocityX = 7
        bullet.scale = 0.5
        bullet.lifetime = 200; 
        bulletGroup.add(bullet);

  

}
function mouseClicked(){
  createBullet()
}


  
   





