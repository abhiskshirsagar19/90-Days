function checkVar() {
  // var a = 10;
  return function one() {
    return function two() {
      //  a = "abcd";
      return function three() {
        //console.log(a);
        return a;
      };
    };
  };
}
a = 100;

var printA = checkVar()()();
console.log(printA());

/*
The printA function (i.e., three) does not have a return statement, so by default, it returns undefined.
Hence, console.log(printA()); logs 10 (from console.log(a)) and then undefined (the return value of printA).
*/
