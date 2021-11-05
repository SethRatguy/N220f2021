let thing = ["a"]

let aeiou = vowel("a", "e", "i", "o", "u")

function vowel(){

    for (i= 0; i < thing.length; i++){

        if(thing[i] == arguments){
            console.log("die")
        }
    }

}