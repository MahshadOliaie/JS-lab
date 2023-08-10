

let names = ["Sara" , "Saba" , "Ali" , "Zahra", "Mahshad", "Sanaz"];

function startWith(array , startLetter){
    let newArray= [];
    for (let index = 0; index < array.length; index++) {
        if(array[index][0]==startLetter)
        newArray.push(array[index]);
    }
    debugger;
    return newArray;
}

console.log(startWith(names, "S"));