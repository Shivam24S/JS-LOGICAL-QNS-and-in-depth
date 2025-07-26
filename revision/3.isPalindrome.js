// palindrome  string

let word = "hello";

const isPalindrome = (word) => {
  let reverseStr = word.split("").reverse().join("");

  if (reverseStr === word) {
    console.log(word, "is palindrome string");
  } else {
    console.log(word, "is not palindrome string");
  }
};

isPalindrome(word);

// using for loop

let str = "sms";

const isPalindromeWord = (str) => {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (reverseStr === str) {
    console.log(str, "is palindrome string");
  } else {
    ṇ;
    console.log(str, "is not palindrome string");
  }
};

isPalindromeWord(str);
