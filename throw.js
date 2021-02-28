class Throw{
constructor (bodyA, pointB){
var options ={

bodyA: bodyA,
pointB: pointB, 
stiffness: 0.01,
length: 20
}
this.pointB=pointB;
this.throw = Constraint.create(options); 
World.add(world, this.throw);

}

fly(){

this.throw.bodyA=null;
}
Launch(bodyA){

this.throw.bodyA=bodyA;
}
display(){

}

}