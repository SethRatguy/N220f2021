var angle = 0

function setup() {

createCanvas(120, 120)

}

function draw() {

translate(mouseX, mouseY)
background(50)
rotate(angle)

circle(-25, 20, 5)

circle(25, -20, 5)

angle += 0.1

}