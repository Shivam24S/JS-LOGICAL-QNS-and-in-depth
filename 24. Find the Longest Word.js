const word = "hi there how are you ?";

const findTheLongestWord = (word) => {
  const str = word.toLowerCase();

  const ArrOfStr = str.split(" ");

  let longestWord = "";

  for (let word of ArrOfStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log("Longest word is= ", longestWord);
};

findTheLongestWord(word);
