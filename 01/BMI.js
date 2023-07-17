

let height = prompt("enter your height (in meters) ");
let weight = prompt("enter your weight (in kilograms) ");

let bmi = weight / (height * height);

if (bmi >= 40) {
    alert("Obese");
}
else if (bmi >= 25) {
    alert("Overweight");
}
else if (bmi >= 18.5) {
    alert("Normal");
}
else {
    alert("Underweight");
}

