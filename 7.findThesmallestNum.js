const num = [2, 3, 45, 6, 76, 1, 7, 8, 9, 51];

// using math.min() method

const smallestNum = Math.min(...num);

console.log("smallest Num", smallestNum);

// using loop

const findSmallestNum = (num) => {
  if (num.length === 0) {
    console.log("array is empty");
    return;
  }

  let smallestNum = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] < smallestNum) {
      smallestNum = num[i];
    }
  }

  console.log("smallest Num", smallestNum);
};

findSmallestNum(num);

// using reduce HOC

const smallNum = num.reduce((acc, curr) => {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
});

console.log("small Num", smallNum);
