const normalSum = (a, b) => {
  return a + b;
};

console.log(normalSum(5, 2));

// now using currying

const curriedAdd = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log("curried", curriedAdd(5)(2));
