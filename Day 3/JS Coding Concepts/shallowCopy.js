const employee = { name: "A1", age: 24 };
console.log("Before the reference assination  :  " + employee.age);
const emp1 = employee;

emp1.age = 20;

console.log("After change in copied object  :  " + employee.age);

console.log("Copied object  :  " + emp1.age);
