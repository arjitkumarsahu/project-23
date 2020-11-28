class zone {

constructor(x,y,width,height){

this.Body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;

World.add(world,this.Body);
}
display(){
var pos = this.Body.position;
rectMode(CENTER);
fill(255,0,0);
rect(pos.x,pos.y,this.width,this.height);
}
};