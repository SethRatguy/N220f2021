let Div = document.getElementById("div")

function Click(){

    Div.innerHTML = Random(10)
    //This just displays it

}


function Random(top){
    return Math.floor(Math.random() * top)
    //this returns a random number rounded down because
    //of Math.floor. It changes based on the max you want
}