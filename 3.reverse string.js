// by using method

const str = "shivam";

const reverseString = (str) => {
  const arr = str.split("");

  console.log("string arr", arr);

  const reverseArray = arr.reverse();

  console.log("reverseArray", reverseArray);

  const reverseString = reverseArray.join("");

  console.log("reverseString", reverseString);
};

reverseString(str);

// by using short methods

const reverseStr = (str) => {
  console.log("reverse string", str.split().reverse().join());
};

reverseStr(str);

// by using loop

const reverseStringWithoutMethod = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log("reversed", reversed);
};

reverseStringWithoutMethod(str);
