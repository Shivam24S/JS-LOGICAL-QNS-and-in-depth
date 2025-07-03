const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lastElementOfArray = (num) => {
  return num[num.length - 1];
};

console.log(lastElementOfArray(num));

//

const lastElement = (num) => {
  let reverseArray = [];

  for (let i = num.length - 1; i >= 0; i--) {
    reverseArray.push(num[i]);
  }

  let lastElement = reverseArray[0];

  console.log("last element", lastElement);
};

lastElement(num);
