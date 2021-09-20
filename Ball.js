class Ball{
    constructor(x,y,radius){
        this.radius = radius;
        

        let options ={
            isStatic:true
        };
        this.body = Bodies.circle(x,y,radius,options)

        World.add(world,this.body);
    }

    display()
    {
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        rect(pos.x,pos.y, this.radius);
        pop();
    }
}