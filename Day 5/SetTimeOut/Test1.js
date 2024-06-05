// Guess the output
console.log(
  "===============================================  Question 1  ============================================================="
);
function check(n) {
  console.log("Function Printed in the console after : " + n + "  seconds.");
}
let n = 0;
setTimeout(() => {
  check(n);
}, n * 1000);

/*let n = 3;
setTimeout((n) => {
  check(n);
}, n * 1000);
//Function Printed in the console after : undefined  seconds.
*/
console.log(
  "===============================================  Question 2  ============================================================="
);
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
