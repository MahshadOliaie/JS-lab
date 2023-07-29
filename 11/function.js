

let sum = 0;
function mult(num) {             //num is string because it's the input of prompt
    for (let i = 1; i * num <= 100; i++) {
        var digit = i * num;     //num becomes number because of multiple operation
        digit = String(digit);
debugger;
        for (let j = 0; j < digit.length; j++) {
            sum += Number(digit[j]);
        }
    }

    return sum;
}