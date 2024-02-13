

const cases = [1, 2, 3, 4, 5, 6];
const bands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let nextbtn = document.querySelector("#right");
let previousbtn = document.querySelector("#left");
let upbtn = document.querySelector("#up");
let downbtn = document.querySelector("#down");
let all = document.querySelectorAll(".fa-solid");


let rowIndex = 1;
let columnIndex = 1;


function changeBand(index) {
    document.querySelector(".column img").setAttribute("src", `./images/bands/${index}.jpeg`);

}


function changeCase(index) {
    document.querySelector(".row img").setAttribute("src", `./images/cases/${index}.png`);
}

function next() {

    previousbtn.classList.remove("disabled");

    rowIndex++;

    if (rowIndex <= cases.length) {
        changeCase(rowIndex);
    }

    if (rowIndex == cases.length)
        nextbtn.classList.add("disabled");

}

function previous() {
    nextbtn.classList.remove("disabled");

    rowIndex--;

    if (rowIndex >= 1) {
        changeCase(rowIndex);
    }

    if (rowIndex == 1)
        previousbtn.classList.add("disabled");

}


function down() {
    upbtn.classList.remove("disabled");

    columnIndex++;

    if (columnIndex <= bands.length) {
        changeBand(columnIndex);
    }

    if (columnIndex == bands.length)
        downbtn.classList.add("disabled");


}

function up() {
    downbtn.classList.remove("disabled");

    columnIndex--;

    if (columnIndex >= 1) {
        changeBand(columnIndex);
    }

    if (columnIndex == 1)
        upbtn.classList.add("disabled");

}



function blackSlide(event) {
    if (event.keyCode == 66) {
        document.querySelector(".blackSlide").classList.toggle("dnone")
    }

    //right
    if (event.keyCode == 39) {
        nextbtn.classList.remove("none")
        nextbtn.classList.add("righthover")
        next();
    }
    //up
    if (event.keyCode == 38) {
        upbtn.classList.remove("none")
        upbtn.classList.add("uphover")
        up()
    }
    //left
    if (event.keyCode == 37) {
        previousbtn.classList.remove("none")
        previousbtn.classList.add("lefthover")
        previous()
    }
    //down
    if (event.keyCode == 40) {
        downbtn.classList.remove("none")
        downbtn.classList.add("downhover")
        down()
    }

    setTimeout(function () {
        for (const item of all) {
            item.classList.add("none")
        }
    }, 150)
}





nextbtn.addEventListener("click", next);
previousbtn.addEventListener("click", previous);
upbtn.addEventListener("click", up);
downbtn.addEventListener("click", down);

window.addEventListener("keyup", blackSlide)