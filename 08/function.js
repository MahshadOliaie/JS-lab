

debugger;
let sum = 0;
function sumOfMultiple(n, m) {

    if (m > 0) {
        for (let i = 1; (i * n) < m; i++) {
            sum += (i * n);
        }

        document.body.innerText=sum;
    }
    else
    document.body.innerText="INVALID";
}