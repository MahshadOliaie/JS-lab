
function passwordMaker() {
    let digit;
    let password = "";

    let num = String.fromCharCode(random(48, 58));
    let upperCase = String.fromCharCode(random(65, 91));
    let lowerCase = String.fromCharCode(random(97, 123));

    password += num + upperCase + lowerCase;


    for (let i = 1; i <= 5; i++) {
        digit = Math.floor(random(48, 123));

        while (digit >= 58 && digit <= 64 || digit >= 91 && digit <= 96 || digit > 122) {
            digit = Math.floor((Math.random() * 123) + 48);
        }

        password += String.fromCharCode(digit);

    }

    debugger;

    let array = password.split("");
    array.sort(function () { return 0.5 - Math.random() });
    password = array.join("");

    document.getElementById("passwordShow").innerHTML = password;
}















// style
document.body.style.fontFamily = "arial";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.background = "pink";
document.body.style.color = "black";
document.body.style.fontSize = "30px";
document.getElementById("btn").style.padding = "10px 20px";
document.getElementById("btn").style.borderRadius = "100px";
document.getElementById("btn").style.color = "white";
document.getElementById("btn").style.background = "brown";
