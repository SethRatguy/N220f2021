
let color = ["pink", "brown", "white"]

function setup(){

createCanvas(500,500)
}

function draw(){

    for (i=0; i<3; i++){
        fill(color[i])

        rect ( 225, 150 + 50 * i, 100, 50)
    }

}