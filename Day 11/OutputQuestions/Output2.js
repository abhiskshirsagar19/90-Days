// Question 2

var isTrue = true;

while (isTrue) {
  console.log("B");
}

console.log("A");
setTimeout(function () {
  console.log("C");
}, 0);
