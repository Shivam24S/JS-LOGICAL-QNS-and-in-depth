const str = "shivam";

const anotherStr = "sh";

const checkStr = (str, anotherStr) => {
  const result = str.includes(anotherStr);

  console.log(result);
};

checkStr(str, anotherStr);
