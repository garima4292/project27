class ROPE{
    constructor(a,b,offsetx,offsety){

        this.offsetx=offsetx;
        this.offsety=offsety;

        var option={
            bodyA:a,
            bodyB:b,
            stiffness:0.3,
            pointB: {x:this.offsetx,y:this.offsety}
        }
        this.body = Constraint.create(option)
        World.add(world,this.body);
    }
    display(){
        
        var pos1 =  this.body.bodyA.position;
        var pos2 = this.body.bodyB.position;
        var pos3= pos2.x+this.offsetx;
        var pos4= pos2.y+this.offsety;

        fill("green");
        strokeWeight(3);
        line(pos1.x,pos1.y,pos3,pos4);
     
    }
}