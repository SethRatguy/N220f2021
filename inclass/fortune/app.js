let list = ["you'll be swept up by a vaccum", "you are dumb", "you smell bad","you smell ok"]

let div = document.getElementById("box")


function fortune(){

    let i = Math.round(Math.random()* list.length - 1) 
    

    box.innerHTML = list[i]

    
}


