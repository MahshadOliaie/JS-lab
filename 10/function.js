

function concating(w1, w2, w3) {
    let concat = "";
    for (let i = 0; i < w1.length; i++) {
        concat += w1[i] + w2[i] + w3[i];
    }

    document.body.innerText=concat;
}