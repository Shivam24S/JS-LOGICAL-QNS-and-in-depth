const str = "hi there how are you";

const countVowel = (str) => {
  let count = 0;

  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log("count", count);
};

countVowel(str);
