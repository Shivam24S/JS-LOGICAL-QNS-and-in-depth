const num = [1, 2, 3, 4, 5, 8, 9, 10];

const findSum = (num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = num[i] + sum;
  }
  console.log(sum);
};

findSum(num);

// using another method

const total = (num) => {
  let sum = 0;

  for (let i of num) {
    sum += i;
  }

  console.log("total", sum);
};

total(num);
