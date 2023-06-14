const targetSum = 300;
const nums = [7, 14];

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

console.log(howSum(targetSum, nums));
