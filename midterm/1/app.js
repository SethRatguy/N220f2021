let letters = ["a", "k", "b"]


function setup(){
    createCanvas(400,400)
}

function draw(){
    for(i=0; i < letters.length; i++){
        //this chaecks each spot in the aray to see if it meets the conditions below
        if (letters[i] == "a"){
            fill("black")
            square(0,0,60)
            //this makes a square in the corner if a is present in the array
        }

        if (letters[i] == "b"){
            fill("red")
            circle(350,20,20)
            //this is to make a circle if b is present
        }

        else{
           
                fill("blue")
                circle(200,200,20)
            //this makes a circle if anything other letter is in the array
        
        }
         
    }
}