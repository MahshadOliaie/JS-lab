
let flag = true;

function heartbeatStatus() {

    if (flag === true) {
        document.getElementById("heart").style.animationPlayState = "paused";
        document.getElementById("button").textContent = "Start Heart Beating";
        flag = false;
    }
    else {
        document.getElementById("heart").style.animationPlayState = "running";
        document.getElementById("button").textContent = "Stop Heart Beating";
        flag = true;
    }
}



function changeColor(color){
    document.getElementById("heart").style.fill=color;
}