const target = "purple";
const wordBank = ["purp", "p", "ur", "le", "purpl"];

// Using recursion with memoization (top-down) approach

const countConstruct = function (target, wordBank, memo = {}) {
  if (target in memo) return memo[target];

  if (target === "") return 1;

  let count = 0;

  for (let word of wordBank) {
    let newTarget;
    if (target.indexOf(word) === 0) {
      newTarget = target.slice(word.length);
      if (countConstruct(newTarget, wordBank) === 1) {
        count = count + 1;
      }
    }
  }

  memo[target] = count;

  return memo[target];
};

// console.log(countConstruct(target, wordBank));

// Using tabulation (bottom-up) approach

const countConstruct_tab = function (target, wordBank) {
  const table = Array(target.length + 1).fill(0);

  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] !== 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = table[i + word.length] + table[i];
        }
      }
    }
  }

  return table[target.length];
};

console.log(countConstruct_tab(target, wordBank));
