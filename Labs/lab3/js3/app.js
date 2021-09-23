let x = 250
let color = Math.random() * 100

function setup(){
    createCanvas(500,500)
}

function draw(){
    background(100)

    for (i = 200; i > 0; i-= 10){
        
        if (i < 100){
        fill(color)
            
        } else {
            fill ("red")
        }
        square (x,250, 1 * i )
    }
    
   

}