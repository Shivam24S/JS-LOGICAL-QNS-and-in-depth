// sort an array in Ascending Order

const num = [5, 1, 78, 8, 9, 2, 4, 98, 5, 1, 52, 5, 6, 2];

const arraySortAscending = (num) => {
  const sortedArray = num.sort((a, b) => a - b);

  console.log("sortedArray", sortedArray);
};

arraySortAscending(num);

// now using loop method

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Comparing arr[${i}] = ${arr[i]} and arr[${j}] = ${arr[j]}`);
      if (arr[i] > arr[j]) {
        console.log(`Swapping ${arr[i]} and ${arr[j]}`);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log(`Array now: ${arr}`);
      }
    }
  }
  return arr;
}

console.log("Final Sorted Array:", sortArray([5, 3, 8, 1]));
