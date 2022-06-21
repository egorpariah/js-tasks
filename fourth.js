const mixedArray = [2, 3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => num % 2 == 0;

const filterArray = (arr, func) => {
  let output = [];

  arr.forEach(element => {
    if (func(element)) {
      output.push(element)
    }
  });

  return output;
}

console.log(filterArray(mixedArray, isEven));