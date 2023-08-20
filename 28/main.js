

const cases = [1, 2, 3, 4, 5, 6];
const bands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let nextbtn = document.querySelector("#right");
let previousbtn = document.querySelector("#left");
let upbtn = document.querySelector("#up");
let downbtn = document.querySelector("#down");



let index1 = 1;
let index2 = 1;


function changeBand(index){
    document.querySelector(".column img").setAttribute("src", `./images/bands/${index}.jpeg`);
   
}


function changeCase(index) {
    document.querySelector(".row img").setAttribute("src", `./images/cases/${index}.png`);
}

function next() {

    previousbtn.classList.remove("disabled");

    index1++;

    if (index1 <= cases.length) {
        changeCase(index1);
    }

    if (index1 == cases.length)
        nextbtn.classList.add("disabled");

}

function previous() {
    nextbtn.classList.remove("disabled");

    index1--;

    if (index1 >= 1) {
        changeCase(index1);
    }

    if (index1 == 1)
        previousbtn.classList.add("disabled");

}


function down(){
    upbtn.classList.remove("disabled");

    index2++;

    if (index2 <= bands.length) {
        changeBand(index2);
    }

    if (index2 == bands.length)
        downbtn.classList.add("disabled");


}

function up(){
    downbtn.classList.remove("disabled");

    index2--;

    if (index2 >= 1) {
        changeBand(index2);
    }

    if (index2 == 1)
        upbtn.classList.add("disabled");

}





nextbtn.addEventListener("click", next);
previousbtn.addEventListener("click", previous);
upbtn.addEventListener("click" , up);
downbtn.addEventListener("click" , down);