// In the given code set is used to store a unique values from arr2 then filter checks each element in arr1 to see if it is also exist in the set and keeping only those that matches. The output is an array of common elements from both arr1 and arr2.

const num1 = [1, 2, 3, 4, 5, 6];

const num2 = [2, 7, 8, 3, 4, 9];

// using array Method

const interSection = (num1, num2) => {
  const uniqueVal = new Set(num2);

  const matched = num1.filter((value) => uniqueVal.has(value));

  console.log("matched val", matched);
};

interSection(num1, num2);

// using loop
const interSectionVal = (num1, num2) => {
  let matchedNum = [];

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === num2[j]) {
        matchedNum.push(num1[i]);
        break;
      }
    }
  }
  console.log("matched Num", matchedNum);
};

interSectionVal(num1, num2);

// using another method

const interSectionNum = (num1, num2) => {
  const matchedVal = num1.filter((val) => num2.includes(val));

  console.log("matchedVal", matchedVal);
};

interSectionNum(num1, num2);
