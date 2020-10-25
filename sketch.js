var bullets = [];
var back;

var x1 = 50;
var x2 = 75;
var x3 = 100;



var score = 0;

var run = true; 


function preload(){
  back = loadImage('back.png');
}
function setup(){
  createCanvas(950,650);  
  
  b = new Bubble();
  b2 = new Bubble();
  b3 = new Bubble();
  b4 = new Bubble();
  b5 = new Bubble();
  b6 = new Bubble();
  b7 = new Bubble();




}
function draw(){
  background(0);
  fill("white")
  triangle(x1,630,x2,580,x3,630);

  text('You can move your triangle only towards right side and should not allow the bubble to go out of screen and remember that the bubble will burst with 2 bullets by pressing space',10,640)

  if(b.y > 600 || b2.y>600|| b3.y>600|| b4.y>600|| b5.y>600|| b6.y>600|| b7.y>600){
    b.over();
    run = false;
    
    imageMode(CENTER);
    image(back,475,325,1500,1000);
   // b2.over();
 //   b3.over();
   // b4.over();
 //   b5.over();
   // b6.over();
  //  b7.over();
    }else{
  b.show();
  b.move();
  b2.show();
  b2.move();
  b3.show();
  b3.move();
  b4.show();
  b4.move();
  b5.show();
  b5.move();
  b6.show();
  b6.move();
  b7.show();
  b7.move();
    }  



  
 


for(var i=0;i< bullets.length;i++){
  
    bullets[i].move();
    bullets[i].show();
  //console.log(b.hit);
    if( bullets[i].hits(b) ){
      
     // if(b.hit==0){
      bullets[i].remove();
      b.burst();
     // }//else{
       // b.hit = b.hit-1;
     // }
    }
     
    
    if(bullets[i].hits(b2)){
     // if(b2.hit==0){
        bullets[i].remove();
        b2.burst();
      //  }//else{
         // b2.hit = b2.hit-1;
       // }
     
    }
    if(bullets[i].hits(b3)){
     // if(b3.hit==0){
        bullets[i].remove();
        b3.burst();
       // }//else{
         // b3.hit = b3.hit-1;
       // }
      
    }
  
    if(bullets[i].hits(b4)){
    // if(b4.hit==0){
        bullets[i].remove();
        b4.burst();
      //  }//else{
         // b4.hit = b4.hit-1;
       // }
     
    }
    if(bullets[i].hits(b5)){
     // if(b5.hit==0){
        bullets[i].remove();
        b5.burst();
        //}//else{
         //b5.hit = b5.hit-1;
       // }
    }
    if(bullets[i].hits(b6)){
      //if(b6.hit==0){
        bullets[i].remove();
        b6.burst();
      //  }//else{
         /// b6.hit = b6.hit-1;
       // }
     
    }
    if(bullets[i].hits(b7)){
      console.log(b7.hit)
      //if(b7.hit==0){
        bullets[i].remove();
        b7.burst();
        //}//else{
         // b7.hit = b7.hit-1;
      //  }
  
    }
}


for(var i= bullets.length-1; i >= 0 ;i--){
  if(bullets[i].deleteIt){
    bullets.splice(i,1);
  }
 
}
    


  if(keyDown("RIGHT_ARROW")){
    x1 = x1+9;
    x2 = x2+9;
    x3 = x3+9;
  }

  if(x1 > 950){
    x3 = 5;
    x2 = -20;
    x1 = -45;
  }
drawSprites();

  fill(172,109,255);
  textSize(15);
  text('SCORE :  '+score,50,50);


}
function keyPressed(){
   if(keyCode === 32 && run == true){
    var bullet = new Bullet(x2,590);
    bullets.push(bullet);
   }  
}