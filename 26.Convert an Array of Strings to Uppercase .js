const arrOfStr = ["a", "b", "c", "d"];

// using method
const upperCaseString = (arrOfStr) => {
  const str = arrOfStr.join("");

  console.log(str);

  const capitalize = str.toUpperCase();

  console.log(capitalize);

  const strOfArr = capitalize.split("");

  console.log("capital array of string", strOfArr);
};

upperCaseString(arrOfStr);

// now using for loop

const upperCaseStr = (arrOfStr) => {
  const capital = [];

  for (let i = 0; i < arrOfStr.length; i++) {
    capital.push(arrOfStr[i].toUpperCase());
  }

  console.log("capital", capital);
};

upperCaseStr(arrOfStr);
