class Log{
    constructor(x, y, width, height){
    
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width
        this.height = height
        
        World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    rect(pos.x, pos.y, this.width, this.height);
    push();
    translate(pos.x, pos.y);
    rotate(45);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
    
    
    }
    
    
    }