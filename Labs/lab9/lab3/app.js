x = 0
let txt = document.getElementById("input")

let myDiv = document.getElementById("myDiv")
//take input user and split that string by the spaces

//search through the input for the words
function click2(){
    let input = txt.value
    
    let splitInput = input.split(",")
    

    for ( i = 0; i < splitInput.length; i++){
        if((splitInput[i].includes(1)) && (splitInput[i +1].includes(1)) && (splitInput[i + 2].includes(1))){
            
            myDiv.innerHTML = "winner"
        }else{
            myDiv.innerHTML = "looser"
        }
    }  
    
    }
  
    //if((array[i].includes(1)) && (array[i +1].includes(1)) && (array[i + 2].includes(1))){}

