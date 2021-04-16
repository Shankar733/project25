class Paper{

    constructor(x,y,raidus){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:1.5,
            density:0.6
        }
        this.body=Bodies.circle(x,y,raidus,options)
        this.raidus=raidus;
        this.image=loadImage('Paper.png')
        World.add(world, this.body);
    
    }
    display(){
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.raidus,this.raidus);
        //ellipse(0,0,this.raidus,this.raidus)
        pop();
      }
    
}