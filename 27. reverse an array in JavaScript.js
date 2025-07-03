const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverseArray = (num) => {
  let reverse = [];

  for (let i = num.length - 1; i >= 0; i--) {
    reverse.push(num[i]);
  }

  console.log("reverse array", reverse);
};

reverseArray(num);
