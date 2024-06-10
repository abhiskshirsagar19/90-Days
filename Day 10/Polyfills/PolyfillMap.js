// Polyfill for map
// Array.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const arr = [1, 2, 3, 4, 5];

arr.myMap((element) => {
  console.log(element * 2);
});
