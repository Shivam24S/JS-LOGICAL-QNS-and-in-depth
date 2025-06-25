const parentComponent = () => {
  let name = "shivam";

  const childComponent = () => {
    return name;
  };

  return childComponent;
};

const person = parentComponent();

console.log("person", person());
