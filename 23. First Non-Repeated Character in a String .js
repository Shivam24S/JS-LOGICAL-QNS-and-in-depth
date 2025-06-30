// Find the First Non-Repeated Character in a String in JavaScript?
// This code finds the first non-repeated character in a string. It first counts how many times each character appears, then checks the string again to return the first character that appears only once. If no non-repeated character is found, it returns null, but in the given string 'F' is a non-repeated character so the output is 'F'.

const word = "geeksforgeeks";

const checkWord = (word) => {
  const str = word.toLowerCase();

  console.log(str);

  const strToArr = str.split("");

  console.log(strToArr);

  let count = {};

  for (let i = 0; i < strToArr.length; i++) {
    let char = strToArr[i];
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  }

  for (let i = 0; i < strToArr.length; i++) {
    let char = strToArr[i];

    if (count[char] === 1) {
      console.log("First non-repeated character is:", char);
      return;
    }
  }
  console.log("No non-repeated character found.");
};

checkWord(word);

// using another technic

function fun(str) {
  const charCount = {};

  // count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(fun("GeeksForGeeks"));
