class Bird extends BaseClass {
    constructor(x, y) {
      super (x,y,60,60);
      this.image = loadImage ("imagenes/bird.png");
    }
    display(){
      var pos =this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      super.display();
    }
  };