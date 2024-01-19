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

console.log(grid_traveler_memo(3, 3));
