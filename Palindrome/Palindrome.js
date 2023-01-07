var isPalindrome = function (x) {
  var indicator = true;
  var s = x.toString();
  var sArray = s.split("");
  var i = 0;
  while (i <= sArray.length / 2 - 1) {
    if (sArray[i] === sArray[sArray.length - (i + 1)]) {
      indicator = true;
      i++;
    } else {
      indicator = false;
      break;
    }
  }
  return indicator;
};
