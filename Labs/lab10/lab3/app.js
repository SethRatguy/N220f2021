let firstAnswer = document.getElementById("one")
let secondAnswer = document.getElementById("two")
let thirdAnswer = document.getElementById("three")


let buttons = document.querySelectorAll("button")

for ( i of buttons){
    i.addEventListener("click" , displayAnswer)
}

function displayAnswer(event){
    if(event.target.dataset.answer == "2"){
            let response = event.target.getAttribute("data-answer")
            firstAnswer.innerHTML =  response

        }else if (event.target.dataset.answer == "Red"){
            let response2 = event.target.getAttribute("data-answer")
            secondAnswer.innerHTML = response2

        }else if (event.target.dataset.answer == "cold"){
            let response3 = event.target.getAttribute("data-answer")
            thirdAnswer.innerHTML = response3
        }
    
}