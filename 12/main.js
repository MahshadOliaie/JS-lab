

function passwordMaker() {
    let digit;
    let password = "";
    for (let i = 1; i <= 6; i++) {
        digit = Math.floor((Math.random() * 123) + 48);

        while (digit >= 58 && digit <= 64 || digit >= 91 && digit <= 96 || digit > 122) {
            digit = Math.floor((Math.random() * 123) + 48);
        }

        password += String.fromCharCode(digit);

    }

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
