

// dom nodes
let addBtn = document.querySelector(".add");
let minusBtn = document.querySelector(".minus");
let addWhenOddBtn = document.querySelector(".addWhenOdd");
let h2 = document.querySelector("h2");


// function
function addCounter() {
    let count = +h2.textContent;
    h2.textContent = ++count;
}

function minusCounter() {
    let count = +h2.textContent;
    h2.textContent = --count;
}

function addOdd() {
    let count = +h2.textContent;
    if (count % 2 == 1) {
        h2.textContent = ++count;
    }
}


// events
addBtn.addEventListener("click", addCounter)
minusBtn.addEventListener("click", minusCounter)
addWhenOddBtn.addEventListener("click", addOdd)
