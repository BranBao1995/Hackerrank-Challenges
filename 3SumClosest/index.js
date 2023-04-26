const nums = [0, 1, 2];

const target = 3;

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let res;
  let diff;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        console.log(sum);
        return sum;
      }
      if (!res) res = sum;
      if (!diff) diff = Math.abs(target - sum);
      if (Math.abs(target - sum) < diff) {
        diff = Math.abs(target - sum);
        res = sum;
      }
      if (sum < target) {
        left++;
      }
      if (sum > target) {
        right--;
      }
    }
  }
  console.log(res);
  return res;
};

threeSumClosest(nums, target);
