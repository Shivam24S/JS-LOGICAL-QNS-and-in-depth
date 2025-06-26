// What is the Fibonacci Sequence?
// The Fibonacci sequence is a series of numbers where:

// The first two terms are: 0, 1

// Every next term is the sum of the two previous terms

// Example for n = 7:

// Copy
// Edit
// 0, 1, 1, 2, 3, 5, 8

const printFibonacci = (num) => {
  let num1 = 0;
  let num2 = 1;
  let nextTerm;

  for (let i = 1; i < num; i++) {
    console.log("current num", num1);

    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
  }
};

printFibonacci(7);
