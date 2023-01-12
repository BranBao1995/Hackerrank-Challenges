// Write a function to find the longest common prefix string amongst an array of strings.
// If no common prefix then return an empty string ''.

// eg. str = ['flower', 'florida', 'flow'];
// output = 'fl';

// eg. str = ['hello', 'nice', 'day'];
// output = '';

// str[i] only consists lowercase English letters

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    console.log("");
    return "";
  }

  if (strs.length === 1) {
    console.log(strs[0]);
    return strs[0];
  }

  let commonPrefix = "";
  const minStrLength = Math.min(...strs.map((el) => el.length));

  for (let i = 0; i < minStrLength; i++) {
    let same = true;
    let char;
    for (let x = 0; x < strs.length - 1; x++) {
      if (strs[x][i] === strs[x + 1][i]) {
        same = true;
        char = strs[x][i];
      } else {
        same = false;
        break;
      }
    }
    if (same === true) {
      commonPrefix = commonPrefix + char;
    } else {
      break;
    }
  }

  console.log(commonPrefix);
  return commonPrefix;
};

longestCommonPrefix(["flower", "flow", "flowing"]);
