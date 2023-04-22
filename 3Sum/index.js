// two-pointer approach

const nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const triplets = [];

  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] != nums[index - 1]) {
      let left = index + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[index] + nums[left] + nums[right];
        if (sum === 0) {
          triplets.push([nums[index], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) {
            left++;
          }
          while (nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }
  }

  console.log(triplets);
  return triplets;
};

threeSum(nums);

// no-sort hashset approach

// const nums = [-1, 0, 1, 2, -1, -4];

// var threeSum = function (nums) {
//   const map = new Map();

//   const triplets = new Set();

//   const duplicates = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (duplicates.has(nums[i]) === false) {
//       duplicates.add(nums[i]);

//       for (let j = i + 1; j < nums.length; j++) {
//         const complement = -nums[i] - nums[j];
//         if (map.has(complement) && map.get(complement) === i) {
//           triplets.add([nums[i], nums[j], complement].sort((a, b) => a - b));
//         }
//         map.set(nums[j], i);
//       }
//     }
//   }

//   console.log(triplets);
//   return triplets;
// };

// threeSum(nums);
