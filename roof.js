class ROOF{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,400,20,option);
        this.width = 400;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        push();
        fill("red");
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}