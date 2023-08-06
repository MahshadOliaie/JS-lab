
let previous='one';
function changeImage(value , bgColor , title , id , textColor){
    document.getElementById("image").setAttribute("src",value);
    document.body.style.background= bgColor;
    document.getElementById("text").textContent=title;
    document.getElementById("text").style.color=textColor;
    document.getElementById(previous).style.transform="scale(1)";
    document.getElementById(previous).style.translate="0";
    document.getElementById(id).style.transform="scale(1.35)";
    document.getElementById(id).style.translate="0 -20px";
    document.getElementById(id).style.transition="300ms"
    previous=id;
}