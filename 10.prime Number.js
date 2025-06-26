// A prime number is a natural number greater than 1 that has exactly two distinct positive divisors:

// 1

// Itself

// 🔍 In Simple Words:
// A prime number is a number that cannot be divided evenly by any number other than 1 and itself.

const isPrimeNum = (num) => {
  if (num <= 1) {
    return console.log(num, "is not prime number");
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log(num, "is not prime number");
    }
  }
  return console.log(num, "is prime number");
};

isPrimeNum(9);
