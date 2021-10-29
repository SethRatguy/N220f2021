let txt = document.getElementById("txt")

txt.value = ""



function doThing(){
let name = txt.value

let greeting = name //+ ", no"


console.log(greeting)
//make new string
let backwards= ""

//loop backwards
for (let i = name.length - 1; i >= 0; i--){


    //copy out each element
    let char = name[i]
    
    console.log(char)

    //add that character to the start of the string
    backwards = char +backwards
    console.log(backwards)
}
}