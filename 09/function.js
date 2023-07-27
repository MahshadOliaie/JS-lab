

function whoAte(x){
    if (x == "true" || x == "false" || x == "") {
        document.body.innerText="The dog ate the cookie!";
        document.body.style.color="green";
        document.body.style.backgroundImage="url('./images/dog.webp')";
    } else
        if (x % 2 === 0 || x % 2 === 1) {
           document.body.innerText="Monika ate the cookie!";
           document.body.style.backgroundImage="url('./images/girl.webp')";
           document.body.style.color="orange";
        }
    
        else {
            document.body.innerText="Zach ate the cookie!";
            document.body.style.backgroundImage="url('./images/boy.webp')";
            document.body.style.color="red";
        }
}