let cir = {
    x: 0,
    y: 0 ,
    size: 5
}

function setup(){
    createCanvas(500,500)
    background(60)
}

function draw(){
translate(250,250)
    fill("red")
        circle(cir.x, cir.y, cir.size )
        cir.size ++
        
    

}