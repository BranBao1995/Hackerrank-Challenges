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

const str = "pwwekgw";

var lengthOfLongestSubstring = function (s) {
  const map1 = new Map();

  // setting each character in the string as a key, and intialize all values to 0
  // Using JavaScript Map, each key is unique and can only be created once
  //e.g. even though there are two 'w' in the string but there will only be 1 'w' key in the map
  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], 0);
  }

  console.log(map1);

  let left = 0;
  let right = 0;
  let maxLength = 0;

  // move the right edge to the right by 1 on each iteration
  while (right < s.length) {
    let rightChar = s[right]; // select a character with a new variable
    map1.set(rightChar, map1.get(rightChar) + 1); // override the old key-value pair, increase the count by 1

    while (map1.get(rightChar) > 1) {
      // if the count is greater than 1, it means the character has appeared more than once already, in this case we do:
      let leftChar = s[left]; // select a character with a new variable, and move the left edge to the right until 'rightChar' count is reduced to 1
      map1.set(leftChar, map1.get(leftChar) - 1); // reduce character count by 1, when leftChar = rightChar, rightChar's count will be reduced to 1
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1); // calculate the length on each iteration when no repeating character found

    right++;
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring(str));
