// dom nodes
let box = document.querySelectorAll(".container__row__box");



//function
function colorFull() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.background = `rgb(${red} , ${green} , ${blue})`;

}


//events
for (let index = 0; index < box.length; index++) {
    debugger
    box[index].onclick = colorFull;
} 