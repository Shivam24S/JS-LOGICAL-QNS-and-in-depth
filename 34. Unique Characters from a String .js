const str = "hi there how are you";

const getUniqueChar = (str) => {
  const uniqueChar = [];

  for (let i = 0; i < str.length; i++) {
    if (!uniqueChar.includes(str[i])) {
      uniqueChar.push(str[i]);
    }
  }
  return uniqueChar.join(" ");
};

console.log(getUniqueChar(str));
