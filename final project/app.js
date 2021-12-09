/* make the div clickable then once done display that on
on the screen this will need event.target stuff
first get them to be clickable.
*/
function reload() {
    location.reload();
}
//loop to create all the divs


let compare = []

for (i = 0; i < 16; i++) {
    let newDiv = document.createElement("div")
    newDiv.style.width = "50px"
    newDiv.style.height = "50px"
    
    
    newDiv.style.backgroundColor = "#c9c9c9"

    //setting an attribute to two of each so some of them
    // match eachother and can be compared
    if ((i == 0) || (i == 9)) {
        newDiv.setAttribute("data-value", "1")
    } else if ((i == 1) || (i == 2)) {
        newDiv.setAttribute("data-value", "2")
    } else if ((i == 3) || (i == 7)) {
        newDiv.setAttribute("data-value", "3")
    } else if ((i == 8) || (i == 6)) {
        newDiv.setAttribute("data-value", "4")
    } else if ((i == 11) || (i == 5)) {
        newDiv.setAttribute("data-value", "5")
    } else if ((i == 4) || (i == 10)) {
        newDiv.setAttribute("data-value", "6")
    } else if ((i == 13) || (i == 14)) {
        newDiv.setAttribute("data-value", "7")
    } else if ((i == 12) || (i == 15)) {
        newDiv.setAttribute("data-value", "8")
    }


    // put it on the document
    document.getElementById("gameBoard").appendChild(newDiv)
    // MAKE THEM CLICKABLE 
    newDiv.addEventListener("click", displayValue)
}
//define what the click does to the target
function displayValue(event) {
    event.target.innerHTML = event.target.dataset.value
    setTimeout(function () {
        event.target.innerHTML = " "
    }, 2000)

    // let array = [ event.target.dataset.value , event.target.dataset.value ]
    //comparing the clicked ones


    compare.push(event.target)



    if ((compare.length == 2) && (compare[0].dataset.value == compare[1].dataset.value)) {

        compare[0].style.opacity = 0
        compare[1].style.opacity = 0
        // compare[0].remove();
        // compare[1].remove();


        compare = []
    } else if ((compare.length == 2) && (compare[0] !== compare[1])) {
        compare = []

    }
}


