const targetSum = 100;
const nums = [1, 2, 5, 25];

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

console.log(bestSum(targetSum, nums));
