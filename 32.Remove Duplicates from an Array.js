const num = [1, 2, 1, 2, 4, 5, 4, 8, 5, 6, 8, 2, 6, 8, 5, 55, 5, 5];

const removeDuplicate = (num) => {
  return [...new Set(num)];
};

console.log(removeDuplicate(num));

// another method

const uniqueArr = (num) => {
  let uniqueVal = [];

  for (let i = 0; i < num.length; i++) {
    if (!uniqueVal.includes(num[i])) {
      uniqueVal.push(num[i]);
    }
  }

  console.log("unique Val", uniqueVal);
};

uniqueArr(num);

// now using loop

const uniqueValArr = (arr) => {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(uniqueValArr(num));
