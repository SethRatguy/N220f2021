let x1 = document.getElementById("x1")
let y1 = document.getElementById("y1")
let x2 = document.getElementById("x2")
let y2 = document.getElementById("y2")


function distance(){

    let xDiff = Number(x1.value) - Number(x2.value)
    let yDiff = Number(y1.value) - Number(y2.value)

  let  d = Math.sqrt( (xDiff * xDiff) + (yDiff * yDiff))

  console.log(d)
}