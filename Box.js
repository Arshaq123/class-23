class Box{

    constructor(x,y,width,height){

            var body_options ={
                'restitution': 1.0,
               'friction': 0.1,
                'density': 1.0
            }

            this.body = Bodies.rectangle(x,y,width,height, body_options);
            this.width = width;
            this.height = height;
            World.add(world,this.body);
            console.log(this.body);

}

display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push() ;//save the current status of the object
        translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
        fill("maroon")
        stroke("yellow")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()//it will do as above for only one object and display the remaining as it it


}




}