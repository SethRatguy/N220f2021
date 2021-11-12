x = 0
let txt = document.getElementById("input")

let myDiv = document.getElementById("myDiv")
//take input user and split that string by the spaces

//search through the input for the words
function click2(){
    let input = txt.value
    console.log(input)
    let splitInput = input.split(" ")
    console.log(splitInput)

    for ( i = 0; i < splitInput.length; i++){
        if ((splitInput[i] == "clear") || (splitInput[i] == "water") || (splitInput[i] == "tires")){
            
            x = x + 1
        }else{
            
        }
    }  
    if(x >= 0){
        myDiv.innerHTML = "I found " + x + " bad words"
    }
    txt.value = "" 
    console.log("this many bad words " + x)
    x = 0
}

