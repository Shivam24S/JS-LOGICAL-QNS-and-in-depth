//  Find the Union of Two Arrays in JavaScript?
// The arrayUnion function merges two arrays (arr1 and arr2) using the spread operator, combines them into a single array, and removes duplicates using Set. It then returns the unique values as a new array. In the given code it outputs [1, 2, 3, 4].

const num1 = [1, 2, 3, 4, 5, 6];

const num2 = [3, 2, 4, 5, 7, 8, 9];

// using method

const unionArr = (num1, num2) => {
  const mergedArr = [...num1, ...num2];

  console.log(mergedArr);

  let unionArr = [];

  unionArr = [...new Set(mergedArr)];

  console.log("union arr", unionArr);
};

unionArr(num1, num2);

// now using for loop

const unionArray = (num1, num2) => {
  let unionArr = [];
  let jointArr = [];
  let count = {};

  for (let i of num1) {
    jointArr.push(i);
  }

  for (let j of num2) {
    jointArr.push(j);
  }

  for (let i = 0; i < jointArr.length; i++) {
    let val = jointArr[i];
    if (count[val]) {
      count[val] = count[val] + 1;
    } else {
      count[val] = 1;
    }
  }

  for (let key in count) {
    unionArr.push(Number(key));
  }

  console.log("union arr", unionArr);
};

unionArray(num1, num2);
