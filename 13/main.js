

function overallStatus(){
    let score = Math.ceil(Math.random()*100);
    document.getElementById("score").innerHTML=score;
    if(score>=90){
       document.getElementById("scoreRate").innerHTML= "NICE DONE";
       document.body.style.background="green";

    }else if(score>=60){
        document.getElementById("scoreRate").innerHTML= "NOT BAD";
        document.body.style.background="yellow";

    }else{
        document.getElementById("scoreRate").innerHTML= "FAILED";
        document.body.style.background="red";
    }
}


document.body.style.fontFamily = "arial";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.color = "black";
document.body.style.fontSize = "30px";
document.getElementById("scoreShow").style.padding = "10px 20px";
document.getElementById("scoreShow").style.borderRadius = "10px";
document.getElementById("scoreShow").style.background = "lightgray";