 class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
      this.player = loadImage("./assets/player.png");
    }
    velocity(x,y){

     this.x = this.x-x
      this.y = this.y-y
    console.log(this.x,this.y)
       }  
    display() {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image( this.player, 0,0, this.width, this.height);
      pop();
     
    }

  

  }