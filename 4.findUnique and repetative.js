const num = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10];

const findValue = (num) => {
  let count = {};
  let uniqueVal = [];
  let repetitiveVal = [];

  for (let n of num) {
    if (count[n]) {
      count[n] = count[n] + 1;
    } else {
      count[n] = 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      uniqueVal.push(Number(key));
    } else {
      repetitiveVal.push(Number(key));
    }
  }
  console.log("uniqueVal", uniqueVal);
  console.log("repetitiveVal", repetitiveVal);
};

findValue(num);
