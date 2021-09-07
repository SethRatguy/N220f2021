var Red = 29
var Green = 47
var Blue = Red + (Green * 3)
function setup() {
    
    createCanvas(800,600);
    
    background(90)
    
    rect(537.5, 290, 25, 100);

    fill(90)
    circle(225, 75, 25)
    line(225, 250, 225, 100)

    fill(255)
    beginShape();
    vertex(250, 300)
    vertex(200, 200)
    vertex(200, 300)
    vertex(250, 200)
    endShape(CLOSE)

    fill(90)
    circle(325, 75, 25)

    line(325, 250, 325, 100)

    fill(255)
    beginShape();
    vertex(350, 300)
    vertex(300, 200)
    vertex(300, 300)
    vertex(350, 200)
    endShape(CLOSE)

    fill(Red * 10, Green - 47 , Blue - 200)
    circle(550,200, 100)

    fill(Red * 10, Green * 2, Blue - 100)
    circle(550,200, 87.5)

    fill(Red * 8, Green * 4, Blue - 150)
    circle(550,200, 75)

    fill(Red * 6, Green * 7, Blue - 100)
    circle(550,200, 62.5)

    fill(Red * 4, Green * 7, Blue - 150)
    circle(550,200, 50)

    fill(Red * 3, Green * 3, Blue)
    circle(550,200, 37.5)

    fill(Red, Green, Blue,)
    circle(550,200, 25)

    fill(Red * 3, Green - 7, Blue);
    circle(550,200, 12.5)
    
}