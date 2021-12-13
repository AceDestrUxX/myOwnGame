var wall1, wall2, wall3, wall4, wall5, wall6, wall6, wall6, wall6, wall6, wall6, wall6, wall6;
var Pc, pc_image;
var snake, snake2;
var spider, spider2, spider3;
var stalker;
var spider_image, spider2_image, spider3_image;
var snake_image, snake2_image;
var stalker_image;
var laser, laser2;
var gameState = 0;
var phase = 1;
function preload(){
 snake_image = loadImage("ghost-standing.png");
 spider_image = loadImage("ghost.png");
 stalker_image = loadImage("kaneki.png");
 pc_image = loadImage("playing_character.png")
}
function setup(){
  createCanvas(600,600)
  Pc = createSprite(330,570,15,15); 
  Pc.addImage(pc_image);
  Pc.scale = 0.013;
  snake = createSprite(145,510,20,20);
  snake.velocityY = 5;
  snake.addImage(snake_image);
  snake.scale = 0.16;
  snake2 = createSprite(510,510,20,20);
  snake2.velocityY = 5;
  snake2.addImage(snake_image);
  snake2.scale = 0.16;
  spider = createSprite(120,210,15,15);
  spider.velocityX = 5;
  spider.addImage(spider_image);
  spider.scale = 0.017;
  spider2 = createSprite(450,360,15,15);
  spider2.velocityY = 5;
  spider2.addImage(spider_image);
  spider2.scale = 0.017;
  spider3 = createSprite(420,150,15,15);
  spider3.velocityX = 5;
  spider3.addImage(spider_image);
  spider3.scale=0.017;
  stalker = createSprite(270,30,20,20)
  stalker.velocityX = -4;
  stalker.addImage(stalker_image);
  stalker.scale = 0.045;
  laser = createSprite(240,115,125,5)
  laser.shapeColor = "red";
  laser2 = createSprite(360,95,5,60)
  laser2.shapeColor = "red";
  wall1 = createSprite(5,300,10,600);
  wall1.shapeColor = "black";
  wall2 = createSprite(595,300,10,600);
  wall2.shapeColor = "black";
  wall3 = createSprite(480,595,240,10);
  wall3.shapeColor = "black"; 
  wall4 = createSprite(150,595,300,10);
  wall4.shapeColor = "black"; 
  wall5 = createSprite(120,5,240,10);
  wall5.shapeColor = "black";
  wall6 = createSprite(450,5,300,10);
  wall6.shapeColor = "black";
  wall7 = createSprite(420,540,10,120);
  wall7.shapeColor = "black";
  wall8 = createSprite(420,480,120,10);
  wall8.shapeColor = "black";
  wall9 = createSprite(365,505,10,60);
  wall9.shapeColor = "black";
  wall10 = createSprite(360,35,10,60);
  wall10.shapeColor = "black";
  wall11 = createSprite(480,90,10,180);
  wall11.shapeColor = "black";
  wall12 = createSprite(480,185,120,10);
  wall12.shapeColor = "black";
  wall13 = createSprite(510,60,60,10);
  wall13.shapeColor = "black";
  wall14 = createSprite(570,120,60,10);
  wall14.shapeColor = "black";
  wall15 = createSprite(540,240,120,10);
  wall15.shapeColor = "black";
  wall16 = createSprite(485,300,10,120); 
  wall16.shapeColor = "black";
  wall17 = createSprite(450,300,60,10); 
  wall17.shapeColor = "black";
  wall18 = createSprite(420,210,10,60);
  wall18.shapeColor = "black";
  wall19 = createSprite(540,420,10,240);
  wall19.shapeColor = "black";
  wall20 = createSprite(450,420,180,10);
  wall20.shapeColor = "black";
  wall21 = createSprite(420,390,10,60);
  wall21.shapeColor = "black";
  wall22 = createSprite(395,360,60,10);
  wall22.shapeColor = "black";
  wall23 = createSprite(360,245,10,240);
  wall23.shapeColor = "black";
  wall24 = createSprite(360,120,120,10);
  wall24.shapeColor = "black";
  wall25 = createSprite(420,95,10,60);
  wall25.shapeColor = "black";
  wall26 = createSprite(305,270,10,420);
  wall26.shapeColor = "black";
  wall27 = createSprite(295,570,10,60);
  wall27.shapeColor = "black";
  wall28 = createSprite(240,540,120,10);
  wall28.shapeColor = "black";
  wall29 = createSprite(240,475,120,10); 
  wall29.shapeColor = "black";
  wall30 = createSprite(120,540,10,120); 
  wall30.shapeColor = "black";
  wall31 = createSprite(30,300,60,10);
  wall31.shapeColor = "black";
  wall32 = createSprite(120,180,240,10);
  wall32.shapeColor = "black";
  wall33 = createSprite(60,150,10,60);
  wall33.shapeColor = "black";
  wall34 = createSprite(235,210,10,60);
  wall34.shapeColor = "black";
  wall35 = createSprite(60,60,120,10);
  wall35.shapeColor = "black";
  wall36 = createSprite(120,85,10,60);
  wall36.shapeColor = "black";
  wall37 = createSprite(180,60,10,120);
  wall37.shapeColor = "black";
  wall38 = createSprite(180,450,10,60);
  wall38.shapeColor = "black";
  wall39 = createSprite(125,420,120,10);
  wall39.shapeColor = "black";
  wall40 = createSprite(120,330,10,180);
  wall40.shapeColor = "black";
  wall41 = createSprite(270,420,60,10);
  wall41.shapeColor = "black";
  wall42 = createSprite(270,300,60,10);
  wall42.shapeColor = "black";
  wall43 = createSprite(95,360,60,10);
  wall43.shapeColor = "black";
  wall44 = createSprite(210,360,60,10);
  wall44.shapeColor = "black";
  wall45 = createSprite(70,480,10,120);
  wall45.shapeColor = "black";
  wall46 = createSprite(280,60,60,10);
  wall46.shapeColor = "black";
  wall47 = createSprite(120,240,120,10);
  wall47.shapeColor = "black";
  wall48 = createSprite(180,300,10,130);
  wall48.shapeColor = "black";
}
function draw(){
  if(gameState===0){
  background(75,0,0)
  snake.bounceOff(wall1);
  snake.bounceOff(wall2);
  snake.bounceOff(wall3);
  snake.bounceOff(wall4);
  snake.bounceOff(wall5);
  snake.bounceOff(wall6);
  snake.bounceOff(wall7);
  snake.bounceOff(wall8);
  snake.bounceOff(wall9);
  snake.bounceOff(wall10);
  snake.bounceOff(wall11);
  snake.bounceOff(wall12);
  snake.bounceOff(wall13);
  snake.bounceOff(wall14);
  snake.bounceOff(wall15);
  snake.bounceOff(wall16);
  snake.bounceOff(wall17);
  snake.bounceOff(wall18);
  snake.bounceOff(wall19);
  snake.bounceOff(wall20);
  snake.bounceOff(wall21);
  snake.bounceOff(wall22);
  snake.bounceOff(wall23);
  snake.bounceOff(wall24);
  snake.bounceOff(wall25);
  snake.bounceOff(wall26);
  snake.bounceOff(wall27);
  snake.bounceOff(wall28);
  snake.bounceOff(wall29);
  snake.bounceOff(wall30);
  snake.bounceOff(wall31);
  snake.bounceOff(wall32);
  snake.bounceOff(wall33);
  snake.bounceOff(wall34);
  snake.bounceOff(wall35);
  snake.bounceOff(wall36);
  snake.bounceOff(wall37);
  snake.bounceOff(wall38);
  snake.bounceOff(wall39);
  snake.bounceOff(wall40);
  snake.bounceOff(wall41);
  snake.bounceOff(wall42);
  snake.bounceOff(wall43);
  snake.bounceOff(wall44);
  snake.bounceOff(wall45);
  snake.bounceOff(wall46)
  snake.bounceOff(wall47);
  snake.bounceOff(wall48);
  snake2.bounceOff(wall1);
  snake2.bounceOff(wall2);
  snake2.bounceOff(wall3);
  snake2.bounceOff(wall4);
  snake2.bounceOff(wall5);
  snake2.bounceOff(wall6);
  snake2.bounceOff(wall7);
  snake2.bounceOff(wall8);
  snake2.bounceOff(wall9);
  snake2.bounceOff(wall10);
  snake2.bounceOff(wall11);
  snake2.bounceOff(wall12);
  snake2.bounceOff(wall13);
  snake2.bounceOff(wall14);
  snake2.bounceOff(wall15);
  snake2.bounceOff(wall16);
  snake2.bounceOff(wall17);
  snake2.bounceOff(wall18);
  snake2.bounceOff(wall19);
  snake2.bounceOff(wall20);
  snake2.bounceOff(wall21);
  snake2.bounceOff(wall22);
  snake2.bounceOff(wall23);
  snake2.bounceOff(wall24);
  snake2.bounceOff(wall25);
  snake2.bounceOff(wall26);
  snake2.bounceOff(wall27);
  snake2.bounceOff(wall28);
  snake2.bounceOff(wall29);
  snake2.bounceOff(wall30);
  snake2.bounceOff(wall31);
  snake2.bounceOff(wall32);
  snake2.bounceOff(wall33);
  snake2.bounceOff(wall34);
  snake2.bounceOff(wall35);
  snake2.bounceOff(wall36);
  snake2.bounceOff(wall37);
  snake2.bounceOff(wall38);
  snake2.bounceOff(wall39);
  snake2.bounceOff(wall40);
  snake2.bounceOff(wall41);
  snake2.bounceOff(wall42);
  snake2.bounceOff(wall43);
  snake2.bounceOff(wall44);
  snake2.bounceOff(wall45);
  snake2.bounceOff(wall46)
  snake2.bounceOff(wall47);
  snake2.bounceOff(wall48);
  spider.bounceOff(wall1);
  spider.bounceOff(wall2);
  spider.bounceOff(wall3);
  spider.bounceOff(wall4);
  spider.bounceOff(wall5);
  spider.bounceOff(wall6);
  spider.bounceOff(wall7);
  spider.bounceOff(wall8);
  spider.bounceOff(wall9);
  spider.bounceOff(wall10);
  spider.bounceOff(wall11);
  spider.bounceOff(wall12);
  spider.bounceOff(wall13);
  spider.bounceOff(wall14);
  spider.bounceOff(wall15);
  spider.bounceOff(wall16);
  spider.bounceOff(wall17);
  spider.bounceOff(wall18);
  spider.bounceOff(wall19);
  spider.bounceOff(wall20);
  spider.bounceOff(wall21);
  spider.bounceOff(wall22);
  spider.bounceOff(wall23);
  spider.bounceOff(wall24);
  spider.bounceOff(wall25);
  spider.bounceOff(wall26);
  spider.bounceOff(wall27);
  spider.bounceOff(wall28);
  spider.bounceOff(wall29);
  spider.bounceOff(wall30);
  spider.bounceOff(wall31);
  spider.bounceOff(wall32);
  spider.bounceOff(wall33);
  spider.bounceOff(wall34);
  spider.bounceOff(wall35);
  spider.bounceOff(wall36);
  spider.bounceOff(wall37);
  spider.bounceOff(wall38);
  spider.bounceOff(wall39);
  spider.bounceOff(wall40);
  spider.bounceOff(wall41);
  spider.bounceOff(wall42);
  spider.bounceOff(wall43);
  spider.bounceOff(wall44);
  spider.bounceOff(wall45);
  spider.bounceOff(wall46)
  spider.bounceOff(wall47);
  spider.bounceOff(wall48);
  spider2.bounceOff(wall1);
  spider2.bounceOff(wall2);
  spider2.bounceOff(wall3);
  spider2.bounceOff(wall4);
  spider2.bounceOff(wall5);
  spider2.bounceOff(wall6);
  spider2.bounceOff(wall7);
  spider2.bounceOff(wall8);
  spider2.bounceOff(wall9);
  spider2.bounceOff(wall10);
  spider2.bounceOff(wall11);
  spider2.bounceOff(wall12);
  spider2.bounceOff(wall13);
  spider2.bounceOff(wall14);
  spider2.bounceOff(wall15);
  spider2.bounceOff(wall16);
  spider2.bounceOff(wall17);
  spider2.bounceOff(wall18);
  spider2.bounceOff(wall19);
  spider2.bounceOff(wall20);
  spider2.bounceOff(wall21);
  spider2.bounceOff(wall22);
  spider2.bounceOff(wall23);
  spider2.bounceOff(wall24);
  spider2.bounceOff(wall25);
  spider2.bounceOff(wall26);
  spider2.bounceOff(wall27);
  spider2.bounceOff(wall28);
  spider2.bounceOff(wall29);
  spider2.bounceOff(wall30);
  spider2.bounceOff(wall31);
  spider2.bounceOff(wall32);
  spider2.bounceOff(wall33);
  spider2.bounceOff(wall34);
  spider2.bounceOff(wall35);
  spider2.bounceOff(wall36);
  spider2.bounceOff(wall37);
  spider2.bounceOff(wall38);
  spider2.bounceOff(wall39);
  spider2.bounceOff(wall40);
  spider2.bounceOff(wall41);
  spider2.bounceOff(wall42);
  spider2.bounceOff(wall43);
  spider2.bounceOff(wall44);
  spider2.bounceOff(wall45);
  spider2.bounceOff(wall46)
  spider2.bounceOff(wall47);
  spider2.bounceOff(wall48);
  spider3.bounceOff(wall1);
  spider3.bounceOff(wall2);
  spider3.bounceOff(wall3);
  spider3.bounceOff(wall4);
  spider3.bounceOff(wall5);
  spider3.bounceOff(wall6);
  spider3.bounceOff(wall7);
  spider3.bounceOff(wall8);
  spider3.bounceOff(wall9);
  spider3.bounceOff(wall10);
  spider3.bounceOff(wall11);
  spider3.bounceOff(wall12);
  spider3.bounceOff(wall13);
  spider3.bounceOff(wall14);
  spider3.bounceOff(wall15);
  spider3.bounceOff(wall16);
  spider3.bounceOff(wall17);
  spider3.bounceOff(wall18);
  spider3.bounceOff(wall19);
  spider3.bounceOff(wall20);
  spider3.bounceOff(wall21);
  spider3.bounceOff(wall22);
  spider3.bounceOff(wall23);
  spider3.bounceOff(wall24);
  spider3.bounceOff(wall25);
  spider3.bounceOff(wall26);
  spider3.bounceOff(wall27);
  spider3.bounceOff(wall28);
  spider3.bounceOff(wall29);
  spider3.bounceOff(wall30);
  spider3.bounceOff(wall31);
  spider3.bounceOff(wall32);
  spider3.bounceOff(wall33);
  spider3.bounceOff(wall34);
  spider3.bounceOff(wall35);
  spider3.bounceOff(wall36);
  spider3.bounceOff(wall37);
  spider3.bounceOff(wall38);
  spider3.bounceOff(wall39);
  spider3.bounceOff(wall40);
  spider3.bounceOff(wall41);
  spider3.bounceOff(wall42);
  spider3.bounceOff(wall43);
  spider3.bounceOff(wall44);
  spider3.bounceOff(wall45);
  spider3.bounceOff(wall46)
  spider3.bounceOff(wall47);
  spider3.bounceOff(wall48);
  Pc.bounceOff(wall1);
  Pc.bounceOff(wall2);
  Pc.bounceOff(wall3);
  Pc.bounceOff(wall4);
  Pc.bounceOff(wall5);
  Pc.bounceOff(wall6);
  Pc.bounceOff(wall7);
  Pc.bounceOff(wall8);
  Pc.bounceOff(wall9);
  Pc.bounceOff(wall10);
  Pc.bounceOff(wall11);
  Pc.bounceOff(wall12);
  Pc.bounceOff(wall13);
  Pc.bounceOff(wall14);
  Pc.bounceOff(wall15);
  Pc.bounceOff(wall16);
  Pc.bounceOff(wall17);
  Pc.bounceOff(wall18);
  Pc.bounceOff(wall19);
  Pc.bounceOff(wall20);
  Pc.bounceOff(wall21);
  Pc.bounceOff(wall22);
  Pc.bounceOff(wall23);
  Pc.bounceOff(wall24);
  Pc.bounceOff(wall25);
  Pc.bounceOff(wall26);
  Pc.bounceOff(wall27);
  Pc.bounceOff(wall28);
  Pc.bounceOff(wall29);
  Pc.bounceOff(wall30);
  Pc.bounceOff(wall31);
  Pc.bounceOff(wall32);
  Pc.bounceOff(wall33);
  Pc.bounceOff(wall34);
  Pc.bounceOff(wall35);
  Pc.bounceOff(wall36);
  Pc.bounceOff(wall37);
  Pc.bounceOff(wall38);
  Pc.bounceOff(wall39);
  Pc.bounceOff(wall40);
  Pc.bounceOff(wall41);
  Pc.bounceOff(wall42);
  Pc.bounceOff(wall43);
  Pc.bounceOff(wall44);
  Pc.bounceOff(wall45);
  Pc.bounceOff(wall46)
  Pc.bounceOff(wall47);
  Pc.bounceOff(wall48);
  if(stalker.x===210 && stalker.y===30 && phase===1){
    stalker.velocityX=0;
    stalker.velocityY=4;
  }
  if(stalker.x===210 && stalker.y===150){
    stalker.velocityY=-4
    phase=2
  }
  if(stalker.x===210 && stalker.y===30 && phase===2){
    stalker.velocityX=4;
    stalker.velocityY=0;
  }
  if(stalker.x===330 && stalker.y===30 && phase===2){
    stalker.velocityX=0;
    stalker.velocityY=4;
  }
  if(stalker.x===330 && stalker.y===90 && phase===2){
    stalker.velocityX=4;
    stalker.velocityY=0;
  }
  if(stalker.x===390 && stalker.y===90 && phase===2){
    stalker.velocityX=0;
    stalker.velocityY=-4;
  }
  if(stalker.x===390 && stalker.y===30 && phase===2){
    stalker.velocityX=4;
    stalker.velocityY=0;
  }
  if(stalker.x===450 && stalker.y===30){
    stalker.velocityX=-4;
    stalker.velocityY=0;
    phase=1;
  }
  if(stalker.x===390 && stalker.y===30 && phase===1){
    stalker.velocityX=0;
    stalker.velocityY=4;  
  }
  if(stalker.x===390 && stalker.y===90 && phase===1){
    stalker.velocityX=-4;
    stalker.velocityY=0;
  }
  if(stalker.x===330 && stalker.y===90 && phase===1){
    stalker.velocityX=0;
    stalker.velocityY=-4;
  }
  if(stalker.x===330 && stalker.y===30 && phase===1){
    stalker.velocityX=-4;
    stalker.velocityY=0;
  }
  if(Pc.y<laser.y && Pc.x>laser.x-60 && Pc.x<laser2.x){
    if(keyDown(UP_ARROW)){
      Pc.y = Pc.y - 0.5;
    }
    if(keyDown(DOWN_ARROW)){
      Pc.y = Pc.y + 0.5;
    }
    if(keyDown(LEFT_ARROW)){
      Pc.x = Pc.x - 0.5;
    }
    if(keyDown(RIGHT_ARROW)){
      Pc.x = Pc.x + 0.5;
    } 
  }
  else {
      if(keyDown(UP_ARROW)){
        Pc.y = Pc.y - 5;
      }
      if(keyDown(DOWN_ARROW)){
        Pc.y = Pc.y + 5;
      }
      if(keyDown(LEFT_ARROW)){
        Pc.x = Pc.x - 5;
      }
      if(keyDown(RIGHT_ARROW)){
        Pc.x = Pc.x + 5;
      }
    }
  if(Pc.collide(snake)){
    gameState = 1;
  }
  if(Pc.collide(snake2)){
    gameState = 1;
  }
  if(Pc.collide(spider)){
    gameState = 1;
  }
  if(Pc.collide(spider2)){
    gameState = 1;
  }
  if(Pc.collide(spider3)){
    gameState = 1;
  }
  if(Pc.collide(stalker)){
    gameState = 1;
  }
  if(Pc.y<0){
    gameState = 2;
  }
  drawSprites();
} else if(gameState===1) {
  background(0,0,0);
  fill("white");
  textSize(30);
  text("Game Over",220,300);
} else {
  background(0,0,0);
  fill("white");
  textSize(30);
  text("You Win!",220,300);
}
}