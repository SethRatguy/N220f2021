

function setup(){
    createCanvas(500,500)
}
let siz = 20
//this is neede to change the size as it's clicked
function draw(){
    background(50)
    square(mouseX,mouseY,siz)


    if(mouseIsPressed){
        siz= siz + 0.5
        //this makes it so that it changes the size and keeps it's changed size
    }
}