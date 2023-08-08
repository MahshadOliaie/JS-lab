

let arr = [14, 45, 239, 3, 85, 39, 48, 47, 86, 353];

let min = arr[0];

function findMin() {

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index];
        }

    }

    return min;
}

console.log("the smallest number is: "+findMin());