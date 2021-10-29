let meal = document.getElementById("Money")



function calculate(){
    //get the tip value from the input
    let tip = Number(meal.value) * 0.2
    //combine the tip and meal value
    let total = tip + Number(meal.value)
    console.log("Tip = $" + tip)
    console.log("Total = $" + total)
}