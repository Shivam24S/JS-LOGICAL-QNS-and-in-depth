const num = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const total = (num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log("sum is", sum);
};

total(num);

// using HOC Reduce method

const sum = num.reduce((acc, curr) => {
  acc += curr;
  return acc;
});

console.log("Sum", sum);

// .using for of loop

const findSum = (num) => {
  let sum = 0;

  for (let i of num) {
    sum += i;
  }

  console.log("sum", sum);
};

findSum(num);
