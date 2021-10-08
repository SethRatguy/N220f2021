let pet = {
    name : "Rosie",
    age : 3,
    happiness : 0,
    energy: 0,
}

let Nam = document.getElementById("name")
Nam.style.backgroundColor = "#8A7BE8"
Nam.style.width = "100px"
Nam.style.height = "50px"
Nam.style.float = "left"
Nam.innerHTML = "Name: " + pet.name

let Ag = document.getElementById("age")
Ag.style.backgroundColor = "#8A7BE8"
Ag.style.width = "50px"
Ag.style.height = "50px"
Ag.style.float = "left"
Ag.innerHTML = "Age: " +pet.age

let Hap = document.getElementById("happiness")
Hap.style.backgroundColor = "#8A7BE8"
Hap.style.width = "100px"
Hap.style.height = "50px"
Hap.style.float = "left" 
Hap.innerHTML = "Happiness: " + pet.happiness

let Energ = document.getElementById("energy")
Energ.style.backgroundColor = "#8A7BE8"
Energ.style.width = "100px"
Energ.style.height = "50px"
Energ.style.float = "left"
Energ.innerHTML = "Energy: " + pet.energy

let Animal = document.getElementById("animal")
Animal.style.backgroundColor = "#8A7BE8"
Animal.style.width = "50px"
Animal.style.height = "50px"

function feed(){
    Energ.innerHTML = "Energy: " + (pet.energy += 5)
}

function play(){
    Hap.innerHTML = "Happiness: " + (pet.happiness += 5)
}




