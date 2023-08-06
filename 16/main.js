
let current=1;

function randomWallpaper(){
    let num = Math.floor(Math.random()*11+1);
    while(num==current){
       num = Math.floor(Math.random()*6+1);
    }
    document.body.style.backgroundImage= "url(./images/"+num+".jpg)";
    current=num;

}