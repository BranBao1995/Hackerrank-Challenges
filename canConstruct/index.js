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

console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
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
