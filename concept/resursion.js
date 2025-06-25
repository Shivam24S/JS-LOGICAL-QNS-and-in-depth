const factorial = (n) => {
  if (n < 0) {
    console.log("Factorial is not available for negative value");
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("factorial", factorial(5));
