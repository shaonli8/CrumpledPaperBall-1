class paper
{
	constructor(x,y,rad)
	{
		var paper_options={
			isStatic:false,
			restitution:0.2,
			friction:0.8,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.rad=rad
		this.body=Bodies.circle(this.x, this.y, this.rad/2, paper_options)
		World.add(world, this.body);

	}
	display()
	{
			
			var position=this.body.position;		

			push()
			translate(position.x, position.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("blue")
			ellipse(0,0,this.rad, this.rad);
			pop()
			
	}

}