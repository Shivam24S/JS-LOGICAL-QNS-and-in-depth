const num1 = [1, 2, 3, 4, 5, 6, 7];

const num2 = [8, 9, 10];

const mergeArray = (a, b) => {
  console.log("merge Array", a.concat(b));
};

mergeArray(num1, num2);

// now using loop

const arrayMerge = (a, b) => {
  let mergeArray = [];

  for (let i in a) {
    mergeArray.push(a[i]);
  }

  for (let j in b) {
    mergeArray.push(b[j]);
  }

  console.log("merged array", mergeArray);
};

arrayMerge(num1, num2);

// now using spread operator

const mergedArray = (a, b) => {
  const merged = [...a, ...b];

  console.log("merged", merged);
};

mergedArray(num1, num2);
