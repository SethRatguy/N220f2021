


function setup(){
    createCanvas(400,400)
    
}

function draw(){
    
    background("White")
    fill(200, 150, 20)
    let ix =width - mouseX
    let iy = height - mouseY
    circle(ix , iy, 30)

}