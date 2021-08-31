function fizzbuzz() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) { arr.push('fizzbuzz'); continue } 
    if (i % 5 == 0) { arr.push('buzz'); continue }
    if (i % 3 == 0) { arr.push('fizz'); continue }
    arr.push(i)
  }
  return arr;
}
