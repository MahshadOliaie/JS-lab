

function addition() {
    sum += number;
    return sum;
}

function input(){
do {
    number = Number(prompt("enter a number"));
    addition();
} while (number !== 0);
}