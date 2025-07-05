// Find the maximum difference between two numbers in an array in JavaScript?
// The maxDifference() function finds the maximum difference between elements in an array, where the larger element comes after the smaller one. It initializes min variable with the first element of an array, then iterates through the array, updating the maxDiff and the minimum value.

const num = [1, 2, 3, 4, 100, 200, 300, 400];

const checkMaxDiff = (num) => {
  let maxDiff = 0;

  let min = num[0];

  for (let i = 1; i < num.length; i++) {
    let diff = num[i] - min;

    maxDiff = Math.max(maxDiff, diff);

    min = Math.min(min, num[i]);
  }
  console.log("max diff", maxDiff);
};

checkMaxDiff(num);
