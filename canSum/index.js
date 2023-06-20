// Using tabulation (bottom-up) approach

const target = 300;
const nums = [7, 14];

const canSum_tab = function (targetSum, nums) {
  const results = Array(targetSum + 1).fill(false);

  results[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (results[i] === true) {
      for (let j = 0; j < nums.length; j++) {
        if (i + nums[j] <= targetSum) {
          results[i + nums[j]] = true;
        }
      }
    }
  }

  return results[targetSum];
};

// console.log(canSum_tab(target, nums));

// Using recursion with memoization (top-down) approach

const canSum_memo = function (targetSum, nums, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (let num of nums) {
    const remainder = targetSum - num;
    if (canSum_memo(remainder, nums, memo) === true) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }

  memo[targetSum] = false;

  return memo[targetSum];
};

console.log(canSum_memo(target, nums));
