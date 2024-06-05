async function getData() {
  return await Promise.resolve("Hellow");
}

console.log(getData());
// When you call getData(), it returns a Promise immediately, not the resolved value of the Promise.
//Promise { <pending> }

async function getOutput() {
  let data = await getData();
  console.log(data);
}
getOutput();
