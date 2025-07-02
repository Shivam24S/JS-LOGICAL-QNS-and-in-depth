// Capitalize the First Letter of Each Word

const str = "hi goodMorning";

const Capitalize = (str) => {
  const word = str.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }

  console.log("capital first word", word.join());
};

Capitalize(str);
