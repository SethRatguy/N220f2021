// pull from the document
let money = document.getElementById("money")
let display = document.getElementById("display")




//write the exchange of the money 
function convert(){
    let exchange = (money.value * 0.88)
    
    display.innerHTML = exchange.toFixed(2)
}