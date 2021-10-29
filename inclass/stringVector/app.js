function doThing(){
    let stringVector = txtTT.value
    let objVector = makeVector(stringVector)
    let normalizeVector = normalizeVector(objVector)
    updateUI()
}


function makeVector(stringVector){
    let arVector = stringVector.split(",")
    let objVector = { }
    objVector.x = Number(arVector[0])
    objVector.y = Number(arVector[1])
    return objVector

}

function normalizeVector(){

}