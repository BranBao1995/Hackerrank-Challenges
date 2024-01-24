///////////////////////////////////////////////////////////////////////////////
// Fibonacci
// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci Sequence.
// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previouse two.
///////////////////////////////////////////////////////////////////////////////

// solution without dynamic programming
// with time complexity of O(2^n)
// with space complexity of O(n)
function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(100));

// solution with memoization (top-down approach)
// with time complexity of O(n)
// with space complexity of O(n)
function fib_memo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);

  return memo[n];
}

// console.log(fib_memo(100));

// solution with tabulation (bottom-up) approach
// with time complexity of O(n);
// with space complexity of O(n);
function fib_tab(n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
}

// console.log(fib_tab(6));

///////////////////////////////////////////////////////////////////////////////
// Grid Traveler 2D
// Say that are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner
// You may only move down or right
// In how many ways can you travel to the goal on a grid with dimensions m * n?
///////////////////////////////////////////////////////////////////////////////

// solution without dynamic programming
// with time complexity of O(2^m+n)
// with space complexity of O(m+n)
function grid_traveler(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }

  if (m === 0 || n === 0) {
    return 0;
  }

  return grid_traveler(m - 1, n) + grid_traveler(m, n - 1);
}

// console.log(grid_traveler(5, 8));

// solution with memoization (top-down) approach
// with time complexity of O(m*n)
// with space complexity of O(m+n)
function grid_traveler_memo(m, n, memo = {}) {
  if (m === 0 || n === 0) {
    return 0;
  }

  if (m === 1 || n === 1) {
    return 1;
  }

  const key = m + "," + n;
  const key_flipped = n + "," + m;

  if (key in memo) {
    return memo[key];
  }

  if (key_flipped in memo) {
    return memo[key_flipped];
  }

  memo[key] =
    grid_traveler_memo(m - 1, n, memo) + grid_traveler_memo(m, n - 1, memo);

  return memo[key];
}

// console.log(grid_traveler_memo(3, 3));

// solution with tabulation (bottom-up) approach
// with time complexity of O(mn)
// with space complexity of O(mn)
function grid_traveler_tab(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;
  console.log("\ntable after filling is now\n" + table);
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (j + 1 <= n) table[i][j + 1] += table[i][j];
      if (i + 1 <= m) table[i + 1][j] += table[i][j];
    }
  }
  console.log(
    "\ntable after iteration is now\n" +
      table[0] +
      "\n" +
      table[1] +
      "\n" +
      table[2] +
      "\n" +
      table[3]
  );
  return table[m][n];
}

// console.log(grid_traveler_tab(3, 3));

///////////////////////////////////////////////////////////////////////////////
// canSum(targetSum, numbers)
// Write a function that takes in a targetSum and an array of numbers as arguments.
// The function should return a boolean indicating whether or not it is possible to
// generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are non-negative.
///////////////////////////////////////////////////////////////////////////////

// const numbers = [7, 14];
// const targetSum = 1000;

// solution without dynamic programming
// with time complexity O(n^m)
// with space complexity O(m)

function canSum(targetSum, numbers) {
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) {
    return false;
  }

  for (let number of numbers) {
    if (canSum(targetSum - number, numbers)) {
      return true;
    }
  }

  return false;
}

// console.log(canSum(targetSum, numbers));

// solution with memoization (top-down) approach
// with time complexity of O(n*m)
// with space complexity of O(m)
function canSum_memo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (let number of numbers) {
    if (canSum_memo(targetSum - number, numbers, memo)) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }

  memo[targetSum] = false;
  return memo[targetSum];
}

// console.log(canSum_memo(targetSum, numbers));

// solution with tabulation (bottom-up) approach
// time complexity of O(mn)
// space complexity of O(m)
function canSum_tab(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let j = 0; j < numbers.length; j++) {
        if (i + numbers[j] <= targetSum) table[i + numbers[j]] = true;
      }
    }
  }
  return table[targetSum];
}

// console.log(canSum_tab(targetSum, numbers));

///////////////////////////////////////////////////////////////////////////////
// howSum(targetSum, numbers)
// Write a function that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to
// exactly the targetSum.
// If there is no combination that adds up to the targetSum, then return null.
// If there are multiple combinations possible, you may return any single one.
///////////////////////////////////////////////////////////////////////////////

// const targetSum = 7;
// const numbers = [5, 3, 4];

// solution without dynamic programming
// with time complexity of O(n^m * m) the addtional m coming from the copying of the array with a worst case of m elements
// with space complexity of O(m)
function howSum(targetSum, numbers) {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  for (let number of numbers) {
    const res = howSum(targetSum - number, numbers);
    if (res !== null) {
      return [...res, number];
    }
  }

  return null;
}

// console.log(howSum(targetSum, numbers));

// solution with memoization (top-down) approach
// with time complexity of O(n * m * n)
// with space complexity of O(m^2) because the memo object in each recursive call will store an array with max size m
function howSum_memo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  for (let number of numbers) {
    const res = howSum_memo(targetSum - number, numbers, memo);
    if (res !== null) {
      memo[targetSum] = [...res, number];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return memo[targetSum];
}

// console.log(howSum_memo(targetSum, numbers));

// solution with tabulation (bottom-up) approach
// time complexity of O(m^2*n)
// space complexity of O(m^2)
function howSum_tab(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (i + num <= targetSum) table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
}

// console.log(howSum_tab(targetSum, numbers));

///////////////////////////////////////////////////////////////////////////////
// bestSum(targetSum, numbers)
// Write a function that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// If there is a tie for the shortest combination, you may return any one of the shortests.
///////////////////////////////////////////////////////////////////////////////

const targetSum = 1000;
const numbers = [7, 14];

// solution without dynamic programming
// with time complexity of O(n^m * n)
// with space complexity of O(m^2) because each recursive call stores an array of at most 'm' elements
function bestSum(targetSum, numbers) {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let res = null;

  for (let number of numbers) {
    const combination_lower = bestSum(targetSum - number, numbers);
    if (combination_lower !== null) {
      const combination = [...combination_lower, number];
      if (res === null || combination.length <= res.length) {
        res = combination;
      }
    }
  }

  return res;
}

// console.log(bestSum(targetSum, numbers));

// solution with memoization (top-down) approach
// with time complexity of O(n*m*n)
// with space complexity of O(m^2)
function bestSum_memo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }

  let res = null;

  for (let number of numbers) {
    const combination_lower = bestSum_memo(targetSum - number, numbers, memo);
    if (combination_lower !== null) {
      const combination = [...combination_lower, number];
      if (res === null || combination.length <= res) {
        res = combination;
      }
    }
  }

  memo[targetSum] = res;
  return memo[targetSum];
}

// console.log(bestSum_memo(targetSum, numbers));

// solution with tabulation (bottom-up) approach
// time complexity of O(m^2*n)
// space complexity of O(m^2)
function bestSum_tab(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        // if the index position already has a combination, the combinations found after will always not be shorter.
        if (i + num <= targetSum && table[i + num] === null)
          table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
}

// console.log(bestSum_tab(targetSum, numbers));

///////////////////////////////////////////////////////////////////////////////
// canConstruct(target, wordBank)
// Write a function that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the 'target' can be constructed ...
// by concatenating elements of the 'wordBank' array.
// You may reuse elements of 'wordBnak' as many times as needed.
///////////////////////////////////////////////////////////////////////////////

// const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeef";
// const wordBank = ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"];

// solution without dynamic programming
// with time complexity of O(n^m*m)
// with space complexity of O(m^2)
function canConstruct(target, wordBank) {
  if (target === "") {
    return true;
  }
  for (let word of wordBank) {
    if (target.lastIndexOf(word, 0) === 0) {
      const newTarget = target.replace(word, "");
      if (canConstruct(newTarget, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
}

// console.log(canConstruct(target, wordBank));

// solution with memoization (top-down) approach
// with time complexity of O(n*m^2)
// with space complexity if O(m^2)
function canConstruct_memo(target, wordBank, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") {
    return true;
  }
  for (let word of wordBank) {
    if (target.lastIndexOf(word, 0) === 0) {
      const newTarget = target.replace(word, "");
      if (canConstruct_memo(newTarget, wordBank, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return memo[target];
}

// console.log(canConstruct_memo(target, wordBank));

// solution with tabulation (bottom-up) approach
// time complexity of O(m^2*n)
// space complexity of O(m)
function canConstruct_tab(target, wordBank) {
  const table = new Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
}

console.log(canConstruct_tab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct_tab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct_tab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

///////////////////////////////////////////////////////////////////////////////
// countConstruct(target, wordBank)
// Write a function that accepts a target string and an array of strings.
// The function should return the number of ways that the 'target' can be constructed by...
// concatenating elements of the 'wordBank' array.
// You many reuse elements of 'wordBank' as many times as needed
///////////////////////////////////////////////////////////////////////////////

// const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
// const wordBank = ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"];

// solution without dynamic programming
// with time complexity of O(n^m*m)
// with space complexity of O(m^2)
function countConstruct(target, wordBank) {
  if (target === "") {
    return 1;
  }
  let res = 0;

  for (let word of wordBank) {
    if (target.lastIndexOf(word, 0) === 0) {
      const newTarget = target.replace(word, "");
      const ways = countConstruct(newTarget, wordBank);
      res += ways;
    }
  }

  return res;
}

// console.log(countConstruct(target, wordBank));

// solution with memoization (top-down) approach
// with time complexity of O(n*m^2)
// with space complexity of O(m^2)
function countConstruct_memo(target, wordBank, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target === "") {
    return 1;
  }

  let res = 0;

  for (let word of wordBank) {
    if (target.lastIndexOf(word, 0) === 0) {
      const newTarget = target.replace(word, "");
      const ways = countConstruct_memo(newTarget, wordBank, memo);
      res += ways;
    }
  }

  memo[target] = res;
  return memo[target];
}

// console.log(countConstruct_memo(target, wordBank));

///////////////////////////////////////////////////////////////////////////////
// allConstruct(target, wordBank)
// Write a function that accepts a target string and an array of strings
// The function should return a 2D array containing all of the ways that the 'target'...
// can be constructed by concatenating elements of the 'wordBank' array.
// Each element of the 2D array should represent one combination that constructs the 'target'
// You may reuse elements of 'wordBank' as many times as needed.
///////////////////////////////////////////////////////////////////////////////

const target = "eeeeeeeeeeeeeeeeeeeeef";
const wordBank = ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"];

// solution without dynamic programming
// with time complexity of O(n^m)
// with space complexity of O(m)

function allConstruct(target, wordBank) {
  if (target === "") {
    return [[]];
  }

  const set = [];

  for (let word of wordBank) {
    if (target.lastIndexOf(word, 0) === 0) {
      const newTarget = target.replace(word, "");
      const ways = allConstruct(newTarget, wordBank);
      const ways_updated = ways.map((way) => [...way, word]);
      set.push(...ways_updated);
    }
  }
  return set;
}

// console.log(allConstruct(target, wordBank));

// solution with memoization (top-down approach)
// with time complexity of O(n^m)
// with space complexity of O(m)
function allConstruct_memo(target, wordBank, memo = {}) {
  if (target in memo) {
    return memo[target];
  }

  if (target === "") {
    return [[]];
  }

  const set = [];

  for (let word of wordBank) {
    if (target.lastIndexOf(word, 0) === 0) {
      const newTarget = target.replace(word, "");
      const ways = allConstruct_memo(newTarget, wordBank, memo);
      const ways_updated = ways.map((way) => [...way, word]);
      set.push(...ways_updated);
    }
  }

  memo[target] = set;
  return memo[target];
}

// console.log(allConstruct_memo(target, wordBank));
