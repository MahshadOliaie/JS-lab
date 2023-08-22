

const countries = ["iran", "australia", "brazil", "USA", "germany", "finland", "china", "norway", "England", "italy", "georgia", "UAE", "argentina"];
let container = document.getElementById("countries");

// lowerCase items

for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toLowerCase();

}



// sort function
countries.sort();


let firstLetter = countries[0][0];
let array = [countries[0]];

for (let i = 1; i < countries.length; i++) {

    if (countries[i][0] === firstLetter) {
        array.push(countries[i]);
    }
    else {
        container.innerHTML += `<br><strong>${firstLetter.toUpperCase()}(${array.length})</strong> <br>` + array.join("</br>") ;
        firstLetter = countries[i][0];
        array = [countries[i]];

    }
}




