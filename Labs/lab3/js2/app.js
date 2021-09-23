function setup(){
    createCanvas(500,500)
}

function draw(){
    background(100)

    for (i = 200; i > 0; i-= 10){
         
        circle (250,250, 1 * i )
    }


}