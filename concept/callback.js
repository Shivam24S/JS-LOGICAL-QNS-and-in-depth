const sum = (a, b) => {
  return a + b;
};

const total = (num1, num2, cb) => {
  return cb(num1, num2);
};

const result = total(2, 4, sum);

console.log("result", result);
