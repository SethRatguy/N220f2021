let animatedCircle = [
    {x: 200, y: 200, radius: 20},
    {x: 201, y: 201, radius: 19},
    {x: 202, y: 202, radius: 18},
    {x: 203, y: 203, radius: 17},
    {x: 204, y: 204, radius: 16},
    {x: 205, y: 205, radius: 15},
    {x: 206, y: 206, radius: 14},
    {x: 207, y: 207, radius: 13},
    {x: 208, y: 208, radius: 12},
    {x: 209, y: 209, radius: 11},
    {x: 210, y: 210, radius: 10},
    {x: 211, y: 211, radius: 9},
    {x: 212, y: 212, radius: 8}
]
function setup(){
    
    createCanvas(500,500)
}
function draw(){
    background(100)
    
    
    for (i = 0; i < animatedCircle.length; i++){
        
        circle(animatedCircle[i].x ,animatedCircle[i].y ,animatedCircle[i].radius )
        animatedCircle[i].x++
        
    }
}

