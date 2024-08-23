var imagebox = document.getElementById("imagebox");
var image = document.getElementById("image");
function openimage(open){
    imagebox.style.display = "flex";
    image.src = open;
}
function closeimage(){
    imagebox.style.display = "none";
}