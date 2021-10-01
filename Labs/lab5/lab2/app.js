




for (i = 0; i < 100 ; i++){
   
   r = Math.random() * 100;
   b = Math.random() * 100;
   g = Math.random() * 100;

    let Adiv=  document.createElement("div");

    Adiv.style.backgroundColor= "rgb(" + r + ", " + b + ", " + g + ")"
    Adiv.style.height ="20px";
    Adiv.style.width = "20px";
    Adiv.style.float = "left";
    Adiv.style.margin = "2px";

    document.body.appendChild(Adiv);
    }
    





