// The areAnagrams() function checks if two strings are anagrams. First it compares their lengths if they are not same then it returns false. Then, it counts character frequencies for each string. Then, it compares these counts. If they match, the strings are anagrams(true), otherwise they are not anagrams(false) .

// using method

const str1 = "listen"; // if i here take this "hello" or diff word will make condition false

const str2 = "silent";

const areAnagrams = (str1, str2) => {
  const cleanStr1 = str1.toLowerCase().split("").sort().join("");

  const cleanStr2 = str2.toLowerCase().split("").sort().join("");

  if (cleanStr1 === cleanStr2) {
    return console.log("given both string is anagrams string");
  }
  console.log("not anagrams string");
};

areAnagrams(str1, str2);

// using loop

const checkAnagramsString = (str1, str2) => {
  if (str1.length !== str1.length) {
    return console.log("string can't be anagrams");
  }

  const cleanStr1 = str1.toLowerCase();

  const cleanStr2 = str2.toLowerCase();

  let count1 = {};

  let count2 = {};

  for (let i = 0; i < cleanStr1.length; i++) {
    let char = cleanStr1[i];
    count1[char] = (count1[char] || 0) + 1;
  }

  for (let i = 0; i < cleanStr2.length; i++) {
    let char = cleanStr2[i];
    count2[char] = (count2[char] || 0) + 1;
  }

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return console.log("string is not anagrams string");
    }
  }
  console.log("given string is anagrams string ");
};

checkAnagramsString(str1, str2);
