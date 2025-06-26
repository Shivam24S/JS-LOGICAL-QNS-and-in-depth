// using recursive function

const factorialNum = (num) => {
  if (num < 0) {
    return "Not defined for negative number";
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialNum(num - 1);
};

console.log(factorialNum(5));

// using loop

const factorial = (num) => {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  console.log(result);
};

factorial(5);
