
let recx = [0,0]
let recy = [0,0]

function setup(){
    createCanvas(500,500)
}


function mouseClicked(){
    recy.push( 5 + recy[0] )
    recy.shift()
    for (i = 0; i < recx.length; i++)
            square(mouseX + recx[i], mouseY + recy[i], 20)
}

console.log(recy)
