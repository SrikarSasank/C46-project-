class Main_Plr {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
      this.player = loadImage("./assets/main_plr.png");
    }
    display() {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image( this.player, 0, 0, this.width, this.height);
      pop();
     
    }
  }