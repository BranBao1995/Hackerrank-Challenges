const numArray = [3, 89, 31, -2, -74, 0, -11, 0, 0, -28, -45, 33];

function plusMinus(arr) {
  // Write your code here
  const n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  let pRatio = 0;
  let nRatio = 0;
  let zRatio = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  pRatio = (positive / n).toFixed(6);
  nRatio = (negative / n).toFixed(6);
  zRatio = (zero / n).toFixed(6);
  console.log(`${pRatio}\n${nRatio}\n${zRatio}`);
}

plusMinus(numArray);
