function Bubble(){

    this.x = random(10,940);
    this.y = random(-500,-100);
    this.r = random(30,150);
    this.re = 255;
    this.g = 84;

    this.hit = 2;

    this.show = function(){
    //noStroke();
     fill(this.re,this.g,this.g)
     ellipse(this.x,this.y,this.r,this.r); 
    }

    this.move = function(){
        this.y = this.y+2;
       
    }
    this.over = function(){ 
           this.y = 2000;
         //  r2 = 3000;
         //  this.re = 51;
         //  this.g = 51;
         //  this.r = random(10,150);
         //  this.x = random(10,940);   
        // var  b = createSprite(475,325);
        // b.addImage('bac',back);
        // b.scale = 0.8;
    }
        
    

    this.burst = function(){
        if(this.hit == 0){
        this.y = this.y+2;
        this.y = random(-500,-100);
        this.r = random(10,150);
        this.x = random(30,940); 
        this.hit = 2;
        }
    
        
    }

}