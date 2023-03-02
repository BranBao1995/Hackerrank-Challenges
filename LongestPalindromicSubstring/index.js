const str =
  "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";

// Brute force approach
// var longestPalindrome = function (s) {
//   let subStr = "";

//   let res;

//   let maxLength = 0;

//   function reverseString(str) {
//     const strArr = str.split("");
//     const reversedStrArr = strArr.reverse();
//     const reversedStr = reversedStrArr.join("");
//     return str === reversedStr;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (s.length - i <= maxLength) {
//       break;
//     }

//     for (let x = i; x < s.length; x++) {
//       subStr = subStr + s[x];
//       if (reverseString(subStr)) {
//         if (subStr.length > maxLength) {
//           maxLength = subStr.length;
//           res = subStr;
//         }
//       }
//     }

//     subStr = "";
//   }

//   return res;
// };

// Dynamic programing
var longestPalindrome = function (s) {
  const n = s.length;
  let dp = new Array(n); //create 1D array

  let maxLength = 0;
  let res = s[0];

  // create 2D array
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }

  // fill 2D array with values of 'false'
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = false;
    }
  }

  // change diagnoal element to values of 'true'
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let end = 0; end < n; end++) {
    for (let start = end - 1; start > -1; start--) {
      if (s[start] === s[end]) {
        if (end - start === 1 || dp[start + 1][end - 1] === true) {
          dp[start][end] = true;
          if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            res = s.substring(start, end + 1);
          }
        }
      }
    }
  }

  return res;
};

console.log(longestPalindrome(str));
