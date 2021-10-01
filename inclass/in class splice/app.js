let x = []
function setup(){
    let thisArray = []

    for (var i = 0; i<100 ; i++){
        thisArray[i] = i


        
        if (thisArray[i] < 50){
            x = thisArray.splice(i,1)
        }
        
        }
        console.log(thisArray)
    }

//thisArray.splice(0,3)    (i - (x.length),1)
// math.random() * 100 could be put in place of the i after line 6