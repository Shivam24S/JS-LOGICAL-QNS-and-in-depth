// remove the falsy value from the array

const num = [1, 2, 4, 54, 8, 5, "", 0, NaN, 1, 2];

const TruthyVal = (num) => {
  let answer = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i]) {
      // the below both method doing same thing

      //  answer[answer.length] = num[i];
      answer.push(num[i]);
    }
  }

  console.log(answer);
};

TruthyVal(num);

// using methods

const TruthyValArr = num.filter(Boolean);

console.log("truthyVal arr", TruthyValArr);
