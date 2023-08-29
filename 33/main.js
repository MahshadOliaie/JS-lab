


let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8];

let matchedElements = [];
let union = [];
let difference = [];



function matchedElementsFN(arr1, arr2) {
    matchedElements = arr1.filter(item => arr2.includes(item));
    console.log(matchedElements);
}


function unionFN(arr1, arr2) {
    union = (arr1.concat(arr2));
    matchedElements.map(item => union.splice(union.indexOf(item), 1));
    console.log(union);


}



function differenceFN() {
    difference = union.filter(item => !matchedElements.includes(item));
    console.log(difference);
}



matchedElementsFN(arr1,arr2);
unionFN(arr1,arr2);
differenceFN();