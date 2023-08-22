


let nextbtn = document.getElementById("right");
let previousbtn = document.getElementById("left");
let upbtn = document.getElementById("up");
let downbtn = document.getElementById("down");
let all = document.querySelectorAll(".fa-solid");


function handler(evt) {
    //right
    if (evt.keyCode == 39) {
        nextbtn.classList.remove("none")
        nextbtn.classList.add("righthover")
    }
    //up
    if (evt.keyCode == 38) {
        upbtn.classList.remove("none")
        upbtn.classList.add("uphover")
    }
    //left
    if (evt.keyCode == 37) {
        previousbtn.classList.remove("none")
        previousbtn.classList.add("lefthover")
    }
    //down
    if (evt.keyCode == 40) {
        downbtn.classList.remove("none")
        downbtn.classList.add("downhover")
    }

    setTimeout(function () {
        for (const item of all) {
            item.classList.add("none")
        }
    }, 150)

}



window.addEventListener("keyup", handler);