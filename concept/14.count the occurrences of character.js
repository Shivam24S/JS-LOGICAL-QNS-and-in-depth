const countChar = (str, char) => {
  const arrOfStr = str.split(char);

  console.log("arrOfStr", arrOfStr);

  const repeatChar = arrOfStr.length - 1;

  console.log("repeatChar", repeatChar);

  console.log(repeatChar);
};

countChar("sms", "s");
