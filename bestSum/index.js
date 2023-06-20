const targetSum = 100;
const nums = [1, 2, 10, 25];

// Using recursion with memoization (top-down) approach

const bestSum = function (targetSum, nums, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let shortestRes = null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const res = bestSum(remainder, nums, memo);
    if (res !== null) {
      memo[targetSum] = [...res, num];
      if (shortestRes === null || memo[targetSum].length < shortestRes.length) {
        shortestRes = memo[targetSum];
      }
    }
  }

  return shortestRes;
};

// console.log(bestSum(targetSum, nums));

// Using tabulation (bottom-up) approach

const bestSum_tab = function (targetSum, nums) {
  const table = Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        const combination = [...table[i], num];
        if (!table[i + num] || combination.length <= table[i + num].length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum_tab(targetSum, nums));
