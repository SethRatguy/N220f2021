
let F = 0

let S = 1

function setup(){
    createCanvas(500,500)
    translate(250,250)

    for (i=0; i <20; i++){
        console.log(F)
        
        thing = S
        S = F + S
        F = thing
        if ((F % 2) === 0){
            fill("yellow")
        }
        else{
            fill("white")
        }
        circle(F,F,5)
        
        console.log(F)
        console.log(S)

    }
}