const str = "pwwekgw";

// Brute Force

// var lengthOfLongestSubstring = function (s) {
//   let subString = "";
//   let subStringLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     subString = "";
//     for (let x = i; x < s.length; x++) {
//       if (subString.includes(s[x])) {
//         if (subString.length >= subStringLength) {
//           subStringLength = subString.length;
//         }
//         subString = "";
//         break;
//       } else {
//         subString = subString + s[x];
//       }
//     }
//     if (subString.length >= subStringLength) {
//       subStringLength = subString.length;
//     }
//   }

//   return subStringLength;
// };

// Sliding Window

var lengthOfLongestSubstring = function (s) {
  const map1 = new Map();

  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], 0);
  }

  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    let rightChar = s[right];
    map1.set(rightChar, map1.get(rightChar) + 1);

    while (map1.get(rightChar) > 1) {
      let leftChar = s[left];
      map1.set(leftChar, map1.get(leftChar) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring(str));
