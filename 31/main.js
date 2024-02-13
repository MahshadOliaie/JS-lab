

const nextbtn = document.getElementById("right");
const previousbtn = document.getElementById("left");
const upbtn = document.getElementById("up");
const downbtn = document.getElementById("down");

const arrowChecker = {
    37: previousbtn,  // left arrow keyCode is 37
    38: upbtn,        // up arrow keyCode is 38
    39: nextbtn,      // right arrow keyCode is 39
    40: downbtn       // down arrow keyCode is 40
}

const handler = (evt) => {
    let currentArrow = arrowChecker[evt.keyCode];

    if (currentArrow) {   // error handling, other keys have no action
        currentArrow.classList.add("active-arrow")

        setTimeout(function () {
            currentArrow.classList.remove("active-arrow")
        }, 160)
    }
}

window.addEventListener("keyup", handler);