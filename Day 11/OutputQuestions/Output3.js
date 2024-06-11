// Question 3
for (var i = 0; i < 10000; i++) {
  console.log("A");
}

console.log("B");

setTimeout(function () {
  console.log("C");
}, 1000);

setTimeout(function () {
  console.log("D");
}, 0);
