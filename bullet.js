function Bullet(x,y){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.deleteIt = false;

  this.show = function(){
      noStroke();
      fill(172,109,255);
      ellipse(this.x,this.y,this.r*2,this.r*2);
  }

  this.remove = function(){
   this.deleteIt = true;
  }

  this.hits = function(bubble){
    var d = dist(this.x,this.y,bubble.x,bubble.y);
    if(d < this.r+bubble.r*1/2){
      bubble.hit = bubble.hit-1;
      return true;
    }else{
      return false;
    }
  }

  this.move = function(){
      this.y = this.y-5;
  }
  
}