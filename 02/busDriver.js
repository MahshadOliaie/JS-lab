

let cap = prompt("enter the bus capacity");
let on = prompt("how many passengers are in the bus?");
let wait = prompt("how many person are waiting for a bus?");

if(cap-on){
   if((wait-(cap-on))>0){
    alert(wait-(cap-on) + " person waiting for the next bus!");
   }
   else{
    alert("everyone get on the bus!");
   }
}
else{
    alert("the bus is already full!!");
}