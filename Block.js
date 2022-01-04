class Block {

  constructor(x, y, width, height) {
      
    var options = {
          restitution: 0.4,
          friction: 0.0,
      }

      this.image = loadImage("block.png");
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    
    display() {

      var pos = this.body.position;
      
      if(this.body.speed < 3) {

        push()
      
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255, 0, 255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
  
        pop()

      } else {
        
        push();

        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        
        pop();
        World.remove(world, this.body);
      }
    }
}