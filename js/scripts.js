//Business Logic
function countAndReplace (number) {
const numArray = [];
for (let i = 0; i <= number; i+=1) {
  numArray.push(i.toString());
}
const newArray = numArray.map(function(element) {
  if (element.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (element.includes("2")) {
    return "Boop!"
  } else if (element.includes("1")) {
    return "Beep!"
  }
  else {
    return element;
  }
});
return newArray.join(", ");

}

//UI Logic
function handleForm(event) {
  event.preventDefault();
  const number = document.getElementById("input").value;
  let message = countAndReplace(number);
  document.getElementById("results").innerText = message;
}
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
})