var x;
Red = 200

function setup(){
    
createCanvas(400, 300)
background(100)
}
function draw(){ 
    fill(Red, 10, 75)
    circle(mouseX ,mouseY, 50)

    if(mouseX > 200){
        Red = 1
    }
    if(mouseX < 200){
        Red = 200
    }
}

