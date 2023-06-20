// With Memoization

const canConstruct = function (target, strArr, memo = {}) {
  if (target in memo) {
    return memo[target];
  }

  if (target === "") {
    memo[target] = true;
    return memo[target];
  }

  for (let str of strArr) {
    let newTarget;
    if (target.indexOf(str) === 0) {
      newTarget = target.replace(str, "");
      if (canConstruct(newTarget, strArr, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }

  memo[target] = false;
  return memo[target];
};

// console.log(
//   canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );

// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// );

// Using tabulation (bottom-up) approach

const canConstruct_tab = function (target, wordBank) {
  const table = Array(target.length + 1).fill(false);

  table[0] = true; // the 0th position in the table is an empty string, an empty string can always be constructed

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (word === target.slice(i, i + word.length)) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

// console.log(canConstruct_tab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(
  canConstruct_tab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

// Brute Force

// const canConstruct = function (target, strArr) {
//   console.log("\n");
//   console.log("target is: " + target);
//   if (target === "") {
//     return true;
//   }

//   for (let str of strArr) {
//     let newTarget;
//     if (target.indexOf(str) === 0) {
//       console.log("minus " + str);
//       newTarget = target.replace(str, "");
//       if (canConstruct(newTarget, strArr) === true) {
//         return true;
//       }
//     }
//   }

//   return false;
// };
