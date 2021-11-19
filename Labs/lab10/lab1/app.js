let Div = document.getElementById("Div")

for (i = 0; i < 3; i++){
    let newDiv = document.createElement("div")
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"
    newDiv.style.float = "left"
    newDiv.style.margin = "10px"
    newDiv.style.backgroundColor = "#949494"
    if (i == 0){
        newDiv.setAttribute("data-color", "#FF0000")
        } else if (i == 1) {
            newDiv.setAttribute("data-color", "#00FF00")
            } else {
            newDiv.setAttribute("data-color", "#0000FF")
        }
    
    document.body.appendChild(newDiv)

    newDiv.addEventListener("click", changeColor )

}


function changeColor(event) {
    //this changes the color for the background by targeting
    //style in each div from the created function
    //in the added event listener
    event.target.style.backgroundColor = event.target.dataset.color
}