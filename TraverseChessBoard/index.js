// Dynamic Programming Using Memoization

const traverse = function (m, n, memo = {}) {
  const key = m + "," + n;
  const key_comp = n + "," + m;

  if (key in memo || key_comp in memo) {
    return key in memo ? memo[key] : memo[key_comp];
  }

  if (m === 1 || n === 1) {
    memo[key] = 1;
    return memo[key];
  }

  if (m === 0 || n === 0) {
    memo[key] = 0;
    return memo[key];
  }

  memo[key] = traverse(m - 1, n, memo) + traverse(m, n - 1, memo);

  return memo[key];
};

// console.log(traverse(18, 18));

// Tabulation (bottom-up) approach

const traverse_tab = function (m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

console.log(traverse_tab(18, 18));

// Brute force approach

// const traverse = function (m, n) {
//   if (m === 1 || n === 1) {
//     return 1;
//   }

//   if (m === 0 || n === 0) {
//     return 0;
//   }

//   return traverse(m - 1, n) + traverse(m, n - 1);
// };

// console.log(traverse(3, 4));
