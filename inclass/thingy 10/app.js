let array = [5, 2, ,5 ,7]

let sum = 0

for(var i = 0; i<array; i++){
    sum+=array[i]
}

console.log(sum)

let sum2 = array.reduce(doSum)

/*
function doSum(sum, val){
    return sum + val

}*/
// you can put the function directly in th argument

// another way to write a function =>
