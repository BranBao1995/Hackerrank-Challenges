var isPalindrome = function (x) {
  const str = x.toString();
  let index = 0;

  while (index < str.length - 1 - index) {
    if (str[index] !== str[str.length - 1 - index]) {
      return false;
    }
    index++;
  }

  return true;
};

// Alternative

// var isPalindrome = function (x) {
//   var indicator = true;
//   var s = x.toString();
//   var sArray = s.split("");
//   var i = 0;
//   while (i <= sArray.length / 2 - 1) {
//     if (sArray[i] === sArray[sArray.length - (i + 1)]) {
//       indicator = true;
//       i++;
//     } else {
//       indicator = false;
//       break;
//     }
//   }
//   return indicator;
// };
