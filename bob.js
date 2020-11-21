class BOB{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
        this.body=Bodies.circle(x, y, 30, options);
       
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			fill("blue");
			ellipse(0,0,30, 30);
			pop()
			
	}
}