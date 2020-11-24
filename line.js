class Line
{
        constructor(x,y,width,height)
        {
            this.body = Bodies.rectangle(x,y,width,height);
            World.add(world,this.body);
        }


            display()
            {
                var posx =this.body.position;
                rectMode(CENTER);
                fill("red");
                rect(posx.x,posx.y,this.width,this.height);
            }
}
