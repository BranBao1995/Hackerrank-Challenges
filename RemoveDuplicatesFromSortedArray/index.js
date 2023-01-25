// The problem description on Leetcode is confusing, not really sure what it is asking for for returned value.
// So in my own attempt, I return the nums array after duplicates are removed, goal is still achieved.
// However, in the official solution, the function returns the value which is the index of the first element after the non-duplicated part of the array.

// My attempt

// var removeDuplicates = function (nums) {
//   let k = 0;
//   let length = nums.length;

//   let i = 1;

//   while (i < length) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//       k++;
//       i = i + 0;
//       length = length - 1;
//     } else {
//       i++;
//     }
//   }

//   return `${k}, [${nums}]`;
// };

// Official solution

var removeDuplicates = function (nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

console.log(removeDuplicates([0, 1, 1, 2, 3, 4, 4, 4, 5]));
