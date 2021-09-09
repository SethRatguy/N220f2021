var radius = 100
var x = 0
var speed = 2
 function setup(){

     createCanvas(800, 600)
     
 }
 
 function draw(){
    background(0)
    
     circle(x, 300, radius)

    x += speed

    if (x >= 800){
        x = 0
    }

 }
