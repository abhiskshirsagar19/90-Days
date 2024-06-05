console.log("=== Type 1 ===");
console.log(1);
setTimeout(() => console.log(3));
setTimeout(() => console.log(3.1));
console.log(2);

console.log("=== Type 2 ===");
console.log(1);
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(3.1), 0);
console.log(2);

console.log("=== Type 3 ===");
console.log(1);
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(3.1), -1);
console.log(2);
console.log("=== Type 4 ===");
console.log(1);
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(3.1), 0);
console.log(2);
console.log("=== Type 5 ===");
console.log(1);
setTimeout(() => console.log(3), -3000);
setTimeout(() => console.log(3.1), -2000);
console.log(2);
