let userNum = document.getElementById("UserNum")
let Udiv = document.getElementById("div")



function Click(){
    if(check(userNum.value) == true){
        Udiv.innerHTML = "True"
    }

    else{
        Udiv.innerHTML = "False"
    }


}


function check(N){
    //used an argument to replace a specific value
    //the when calling it somewhere else replace argument 
    // with specific value you want to check
    if ((N % 7) == 0){
        return true
    }

    else{
        return false
    }
}