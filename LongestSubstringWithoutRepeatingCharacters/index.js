const str = " ";

var lengthOfLongestSubstring = function (s) {
  let subString = "";
  let subStringLength = 0;

  for (let i = 0; i < s.length; i++) {
    subString = "";
    for (let x = i; x < s.length; x++) {
      if (subString.includes(s[x])) {
        if (subString.length >= subStringLength) {
          subStringLength = subString.length;
        }
        subString = "";
        break;
      } else {
        subString = subString + s[x];
      }
    }
    if (subString.length >= subStringLength) {
      subStringLength = subString.length;
    }
  }

  return subStringLength;
};

console.log(lengthOfLongestSubstring(str));
