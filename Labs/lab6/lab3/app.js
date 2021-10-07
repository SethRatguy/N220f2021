let games = [
    {name: "Clocktower", console: "PS1", genre: "Horror", price: 176 },
    {name: "Final Fantasy VII", console: "PS1", genre: "JRPG", price: 25 },
    {name: "Shadow of the Colossus", console: "PS2", genre: "RPG", price: 15 },
    {name: "Silent Hill", console: "PS1", genre: "Horror", price: 150 },
]


for (i= 0; i< games.length ; i++){
    let thing = document.createElement("div")
    thing.style.width = "500px"
    thing.style.height = "50px"
    thing.innerHTML = games[i].name +  ":  console:" + games[i].console +", genre:  " + games[i].genre+", Price:  $" +  games[i].price


    if (games[i].price <= 100){
        thing.style.backgroundColor = "#F0001C"
    }
    else{
        thing.style.backgroundColor = "#F0EC00"

    }

    document.body.appendChild(thing)
}

