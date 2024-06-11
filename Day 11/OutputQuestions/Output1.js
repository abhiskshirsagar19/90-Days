// Question 1

setTimeout(function () {
  console.log("Z");
}, 1000);

setTimeout(function () {
  console.log("A");
});

console.log("B");

setTimeout(function () {
  console.log("C");
}, 0);
