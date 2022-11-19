//Utility Logic

//Business Logic
function countUpTo (number) {
let numArray = [];
for (let i = 0; i <= number; i+=1) {
  numArray.push(i);
}
return numArray;
}

function replaceNumThatContains(numArray) {
 const newArray = numArray.forEach(function(element) {
  if (element.includes(/[^3]/g)) {
    element.replace(element, "Won't you be my neighbor?");
  }
 });
 return newArray;
}
//UI Logic