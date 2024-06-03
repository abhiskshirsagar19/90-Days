// Test for var
console.log("Line number 2 :   " + a);
var a = 20;
console.log("Line number 4 :   " + a);
{
  console.log("Line number 6 :   " + a);

  var a = 30;

  console.log("Line number 10 :  " + a);
}
console.log("Line number 12 :  " + a);

var a = 40;

console.log("Line number 16 :  " + a);

// Test for let

let b = 20;
console.log("Line number 21 :  " + b);

{
  // console.log("Line number 24 :   " + b);  // ReferenceError
  let b = 30;
  console.log("Line number 26 :  " + b);
}
console.log("Line number 28 :  " + b);
