//  Find the largest number in an array in JavaScript.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 24];

// now using method

const findMax = (num) => {
  const max = Math.max(...num);

  console.log("max num", max);
};

findMax(num);

// using HOC function

const maxNum = num.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return curr;
});

console.log("max number", maxNum);

// without method

const findLargestNum = (num) => {
  let largest = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }

  console.log("largest num", largest);
};

findLargestNum(num);
