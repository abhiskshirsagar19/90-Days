function one() {
  let a = 1;
  return function two() {
    return a
      ? a == "1s"
      : function three() {
          return a + a - a;
        };
  };
}

var a = one()();
console.log(a);
