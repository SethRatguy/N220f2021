Red = 200

function setup(){
    
createCanvas(400, 300)

}
function draw(){ 

    background(100)

    fill(Red, 10, 75)
    circle(mouseX ,mouseY, 50)

    if(mouseX > 200){
        Red = 1
    }
    if(mouseX < 200){
        Red = 200
    }
}
