// Two-pointer solution
const height = [9, 6, 14, 11, 2, 2, 4, 9, 3, 8];

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = (right - left) * Math.min(height[left], height[right]);

  while (left !== right) {
    if (height[left] > height[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }

    const area = (right - left) * Math.min(height[left], height[right]);
    if (area > maxWater) {
      maxWater = area;
    }
  }
  console.log(maxWater);
  return maxWater;
};

maxArea(height);

// Brute force way

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 2, 4, 3];

// var maxArea = function (height) {
//   let maxArea = 0;

//   for (let i = 0; i < height.length - 1; i++) {
//     for (let x = i + 1; x < height.length; x++) {
//       if ((x - i) * Math.min(height[i], height[x]) >= maxArea) {
//         maxArea = (x - i) * Math.min(height[i], height[x]);
//       }
//     }
//   }

//   console.log(maxArea);
//   return maxArea;
// };

// maxArea(height);
