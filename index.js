const add2Numbers = (a, b) => {
  console.warn(`add2Numbers() will be deprecated in v1.0.0, please use addNumbers() instead`);
  return addNumbers(a, b);
}

const sub2Numbers = (a, b) => {
  return a - b;
}

function addNumbers(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
