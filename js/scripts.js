//Business Logic
function countAndReplace (number) {
let numArray = [];
for (let i = 0; i <= number; i+=1) {
  numArray.push(i.toString());
}
const newArray = numArray.map(function(element) {
  if (element.includes("3")) {
    return "Won't you be my neighbor?";
  } else {
    return element;
  }
});
return newArray;
}