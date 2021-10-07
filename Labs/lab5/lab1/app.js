let rp = 100

let ds = document.getElementById("box")

ds.style.backgroundColor = "#31D449"
ds.style.width = 100 + "px";
ds.style.height = 100 + "px";
function size(){
    rp = rp + (rp * .1);
    ds.style.width = rp + "px";
    ds.style.height = rp + "px"; 
    console.log(rp)  
}

document.body.appendChild(ds)