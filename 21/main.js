
let array = [2,2,2,3,3,4,4,4,5,5,5,7,89];
function distinct(a) {
    let unique = [];
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j] && i !== j) {
                sum++;
            }
        }
        if (sum == 0) {
            unique.push(a[i]);
        }
    }
    return unique;
}


console.log(distinct(array));