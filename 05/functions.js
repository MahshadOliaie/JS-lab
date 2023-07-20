
debugger;
function findTheMiddle(num1, num2, num3) {
   if (((num1 < num2) && (num2 < num3)) || ((num3 < num2) && (num2 < num1)))
return num2;
else
if (((num2 < num1) && (num1 < num3)) || ((num3 < num1) && (num1 < num2)))
    return num1;
else
    return num3;
}









// if (num2 < num1) {
//     let temp = num1;
//     num1 = num2;

//     if (num3 < num1)
//         return num1;
//     else
//         if (num3 < temp)
//             return num3;
//         else
//             return temp;
// }

// else{
//     if (num3 < num1) {
//         return num1;
//     }
//     else
//         if (num3 < num2) {
//             console.log(num3);
//             return num3;
            
//         }
//         else
//             return num2;
//     }