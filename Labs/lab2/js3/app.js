var D = 1

function setup(){
    createCanvas(500,500)
}

function draw(){

    background("Red")

    circle (250, 250, D )

    D += 1

    if (D > 200){
        D = 1
    }

    
}