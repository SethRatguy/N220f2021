let div = document.getElementById("Div")
let input = document.getElementById("Input")

function Clean(){
    div.innerHTML = TakeItOut(input.value)
    
}


function TakeItOut(string){


let newString = string.replace("#", "")
return newString



    //let array= []

   /* for (i=0; i < string.length; i++){
        array[i] = string[i]
        if (array[i] == "#"){
            array.splice([i],1)
            
        }

    }
    //return array.toString()
    //return array
    //these convert it back to a string but keep the commas 
    // which we don't want
    */
}