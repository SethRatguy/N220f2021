// create a div on the page with style
let div = document.createElement("div")
div.style.height = "100px"
div.style.width = "1000px"
div.style.backgroundColor = "#bdbdbd"
//append it to the page
document.body.appendChild(div)
//create an event that makes it clickable
div.addEventListener("click", addO )
//make the function that adds the O's 
function addO(event){
    event.target.innerHTML += "O"
}