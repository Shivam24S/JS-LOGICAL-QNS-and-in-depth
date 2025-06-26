// Remove the first element from an array

// using array method

const fruits = ["apple", "banana", "cherry"];

console.log("fruits item before", fruits);

const removedItem = fruits.shift();

console.log("fruits item after", fruits);

// now using loop

const fruits2 = ["apple", "banana", "cherry"];

const removeFirstElement = (fruits2) => {
  const newArr = [];

  for (let i = 1; i < fruits2.length; i++) {
    newArr.push(fruits2[i]);
  }
  console.log("new array", newArr);
};

removeFirstElement(fruits2);

// using slice method will return new array

const fruits3 = ["apple", "banana", "cherry"];

const remainedFruits = fruits3.slice(1);

console.log("using slice", remainedFruits);
