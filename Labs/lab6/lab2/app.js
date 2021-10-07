let pet = {
    name = "Rosie",
    age = 3,
    happiness = 0,
    energy= 0,
}

let Nam = document.getElementById("name")
Nam.style.backgroundColor = "#4B4C6E"
Nam.style.width = "50px"
Nam.style.height = "50px"
Nam.style.float = "left"
Nam.innerHTML = pet.name

let Ag = document.getElementById("age")
Ag.style.backgroundColor = "#4B4C6E"
Ag.style.width = "50px"
Ag.style.height = "50px"
Ag.style.float = "left"
Ag.innerHTML = pet.age

let Hap = document.getElementById("happiness")
Hap.style.backgroundColor = "#4B4C6E"
Hap.style.width = "50px"
Hap.style.height = "50px"
Hap.style.float = "left"
Hap.innerHTML = pet.happiness

let Energ = document.getElementById("energy")
Energ.style.backgroundColor = "#4B4C6E"
Energ.style.width = "50px"
Energ.style.height = "50px"
Energ.style.float = "left"
Energ.innerHTML = pet.energy

let Animal = document.getElementById("animal")
Animal.style.backgroundColor = "#4B4C6E"
Animal.style.width = "50px"
Animal.style.height = "50px"

function feed(){
    Energ.innerHTML = pet.energy += 5
}

function play(){
    Hap.innerHTML = pet.happiness += 5
}




