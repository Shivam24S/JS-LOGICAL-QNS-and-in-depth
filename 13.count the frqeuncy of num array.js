// Write a Program to print the frequency of elements in an array?
// The frequency function counts how many times each number appears in an array. It creates an empty object freq, iterates through the array, and either increments the count for existing numbers or adds new numbers with a count of 1. Finally, it returns the freq object with the counts.

const num = [1, 2, 3, 4, 5, 5, 7, 6, 7, 8, 9, 9, 10];

const countFreq = (num) => {
  let count = {};

  for (let n of num) {
    if (count[n]) {
      count[n] = count[n] + 1;
    } else {
      count[n] = 1;
    }
  }

  console.log("count", count);
};

countFreq(num);

// using for loop

const countFrequency = (num) => {
  let count = {};

  for (let i = 0; i < num.length; i++) {
    let val = num[i];
    if (count[val]) {
      count[val] += 1;
    } else {
      count[val] = 1;
    }
  }
  console.log("count using for loop", count);
};

countFrequency(num);
