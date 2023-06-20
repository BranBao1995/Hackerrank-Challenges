const targetSum = 7;
const nums = [5, 3, 4];

// Using recursion with memoization (top-down) approach

const howSum = function (targetSum, nums, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  for (let num of nums) {
    const remainder = targetSum - num;
    const res = howSum(remainder, nums, memo);
    if (res !== null) {
      memo[targetSum] = [...res, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;

  return memo[targetSum];
};

// console.log(howSum(targetSum, nums));

// Using tabulation (bottom-up) approach

const howSum_tab = function (targetSum, nums) {
  const table = Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        if (i + num <= targetSum) {
          table[i + num] = [...table[i], num];
        }
      }
    }
  }

  return table[targetSum];
};

console.log(howSum_tab(targetSum, nums));
