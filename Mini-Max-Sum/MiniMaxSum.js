let array = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  // Write your code here

  // sorting the array first using sort() with a compare function
  // this is for sorting the array in an ascending order
  // if instead you want to sort in an descending order, in the compare function return b - a instead
  let sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  let min =
    sortedArray.reduce((acc, curr) => acc + curr) -
    sortedArray[sortedArray.length - 1];
  let max = sortedArray.reduce((acc, curr) => acc + curr) - sortedArray[0];
  console.log(`${min} ${max}`);
}

miniMaxSum(array);
