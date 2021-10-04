let rp = 100

let ds = document.getElementById("box")

ds.style.backgroundColor = "#31D449"
ds.style.width = rp + "px";
ds.style.height = rp + "px";
function size(){
    ds.style.width = rp * 1.1 + "px";
    ds.style.height = rp * 1.1 + "px";   
}

document.body.appendChild(ds)