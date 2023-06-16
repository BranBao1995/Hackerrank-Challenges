// Find the value of the nth position of a Fibonacci Sequence

// this approach has time complexity of O(2^n) and is very inefficient when n get large
const fibonacci = (position) => {
  // Since this implementation of the algorithm excludes searching for negative positions, we check if the value of `position` is less than two.
  // If the value of `position` is 1, return 1 because it's the value at that position of the sequence.
  // If the value of `position` is 0, return 0 because it's the value at that position of the sequence.
  if (position < 2) {
    return position;
  }

  // The current value at this position is evaluated by adding the sum of the values at the two preceding positions of the sequence
  // By calling itself, we form a loop.
  // With each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// this is the dp approach that uses memoization (top-town), it reduces the time complexity to O(N)
const fibonacci_dp = (position, memo = {}) => {
  if (position in memo) {
    return memo[position];
  }

  if (position < 2) {
    memo[position] = position;
    return position;
  }

  memo[position] =
    fibonacci_dp(position - 1, memo) + fibonacci_dp(position - 2, memo);

  return memo[position];
};

// console.log(fibonacci_dp(50));

// Tabulation (bottom-up) approach

const fibonacci_tab = function (position) {
  const table = Array(position + 1).fill(0);

  table[1] = 1;

  for (let i = 0; i <= position; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[position];
};

console.log(fibonacci_tab(50));
