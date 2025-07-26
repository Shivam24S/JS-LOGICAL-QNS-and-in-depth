const arr = [1, 2, 33, 4, 5, 6, 1, 2, 4, 7, 8, 9, 10, 2, 1, 22];

const findVal = (arr) => {
  let count = {};
  let uniqueVal = [];
  let repeatVal = [];

  for (let n of arr) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }

  console.log("count", count);

  for (let key in count) {
    if (count[key] === 1) {
      uniqueVal.push(Number(key));
    } else {
      repeatVal.push(Number(key));
    }
  }

  console.log("uniqueVal", uniqueVal);

  console.log("repeatVal", repeatVal);
};

findVal(arr);
