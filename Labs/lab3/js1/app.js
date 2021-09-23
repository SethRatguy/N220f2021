
var N = 5
function setup(){

    createCanvas(400,400)
}
function draw(){
    for ( x = 1; x < 5; x++){
        square (x * 60, 300, 60)

        for ( T = 1; T < 4; T++){
            square (T * 60, 240, 60)

            for ( R = 1; R <3; R++){
                square (R * 60, 180, 60)

                for ( E = 1; E < 2; E++){
                    square (E * 60, 120, 60)
                }
            }
        }
    }
}