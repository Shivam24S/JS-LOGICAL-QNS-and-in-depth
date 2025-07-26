// reversing js string

// using for loop method

const word = "hello";

const reverseString = (word) => {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  console.log(reverseWord);
};

reverseString(word);

// using methods

// const word="hello"

// const reverseStr = (word)=>{

//     const reverseStr = word.split("").reverse().join("")

//     console.log(reverseStr)
// }

// reverseStr(word)
