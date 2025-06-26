// A palindrome is a word that reads the same word from forward and backward. This ignores spaces and capitalization

let word = "SMS";

// let word = "shivam";

const checkPalindrome = (word) => {
  const cleanedWord = word.toLowerCase();
  const reverseWord = cleanedWord.split("").reverse().join("");

  //   check forward and backward is same or not

  if (cleanedWord === reverseWord) {
    console.log("given string is palindrome", word);
  } else {
    console.log("given string is not palindrome");
  }
};

checkPalindrome(word);

// now using without any method

const checkPalindromeString = (str) => {
  let cleanedWord = str.toLowerCase();
  let reversed = "";

  for (let i = cleanedWord.length - 1; i >= 0; i--) {
    reversed += cleanedWord[i];
  }

  cleanedWord === reversed
    ? console.log("given string is palindrome string", str)
    : console.log("given string is not palindrome string");
};

checkPalindromeString(word);
