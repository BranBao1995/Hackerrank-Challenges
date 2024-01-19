// Fibonacci
// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci Sequence.
// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previouse two.

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
