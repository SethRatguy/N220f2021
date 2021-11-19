let bdiv = document.getElementById("bigDiv")
let current = document.getElementById("current")

let buttons = document.querySelectorAll("button")
//this grabs all of the buttons on the html page
 for (i of buttons) {
    i.addEventListener("click", addColor)
    //this add event listeners to all of the buttons
    
 }


let red = 0
let green = 0
let blue = 0

function addColor(event){
    if(event.target.dataset.color == "red"){
        let changeR = parseInt(event.target.dataset.value)
        red += changeR
        

    }else if(event.target.dataset.color == "blue"){
        let changeB = parseInt(event.target.dataset.value)
        blue += changeB

    }else if(event.target.dataset.color == "green"){
        let changeG = parseInt(event.target.dataset.value)
        green += changeG
    }


bdiv.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
current.innerHTML = "Current Color: rgb(" + red + "," + green + "," + blue + ")"
}