let cir = {
    x: 0,
    y: 0 ,
    size: 5
}

function setup(){
    createCanvas(500)
    background(60)
}

function draw(){
translate(250,250)
    for (i=0; i < 5; i++){
        circle(cir.x, cir.y, cir.size )
        
    }

}