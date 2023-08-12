

let container = document.querySelector(".container");
let box = document.querySelector(".box");
let innerbox = document.querySelector(".innerbox");
let btn = document.querySelector(".btn");
let button = document.querySelector(".button");



function containerColor() {
    container.style.background = "red";
    alert("container color");
}

function boxColor() {
    box.style.background = "green";
    alert("box color");
}

function innerboxColor() {
    innerbox.style.background = "blue";
    alert("innerbox color");
}

function btnColor() {
    btn.style.background = "purple";
    alert("button div color");
}

function buttonColor() {
    button.style.background = "pink";
    alert("button color");
}




button.addEventListener("click", buttonColor, true);
btn.addEventListener("click", btnColor, true);
innerbox.addEventListener("click", innerboxColor, true);
box.addEventListener("click", boxColor, true);
container.addEventListener("click", containerColor, true);