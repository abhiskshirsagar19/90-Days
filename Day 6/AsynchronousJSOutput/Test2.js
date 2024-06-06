async function processArray(array) {
  const results = [];
  for (const item of array) {
    const processedItem = await processItem(item);
    results.push(processedItem);
  }
  return results;
}
const data = [1, 2, 3, 4, 5];
console.log(processArray(data).then((result) => console.log(result)));
