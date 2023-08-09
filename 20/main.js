


let input = ["G","G","G","G","G"];

let red = 0;
let yellow = 0;
let green = 0;

for (let index = 0; index < 6; index++) {

    if (input[index] == "R") {
        red++;
    }
    if (input[index] == "Y") {
        yellow++;
    }
    if (input[index] == "G") {
        green++;
    }

}

if (red >= 3 || (red >= 2 && yellow >= 2)) {
    console.log("nakhor abdolah");
} else {
    console.log("nosh");
}