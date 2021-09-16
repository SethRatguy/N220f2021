let x = 50
let y = 100
let WL= .5
//the pol variable should be 0.1 and not .1
let A = 50
let j = 10
// the other variable don't look messed up in any way


function setup(){
    createCanvas(400, 400)
    
}


function draw(){
    fill(255, 0, 0)
    for (i = 0 ;i <50; i++){
        let sn= Math.sin(i * WL) * A
        circle(i * j + x, sn+ y, 20)
    }
}