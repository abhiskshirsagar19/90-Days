const employee = { name: "A1", age: 25 };
// Using Spread operator

const emp1 = { ...employee };

console.log(employee.name + "   " + employee.age);

emp1.name = "EMP1";
emp1.age = 26;
console.log(emp1.name + " " + emp1.age);
