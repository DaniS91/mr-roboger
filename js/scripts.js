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
  const newArray = [];
  numArray.forEach(function(element) {
    if (element === 3) {
      newArray.push("Won't you be my neighbor?");
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}