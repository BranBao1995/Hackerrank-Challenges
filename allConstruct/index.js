const target = "purple";
const wordBank = ["purp", "p", "ur", "le", "purpl"];

// Using recursion with memoization (top-down) approach

const allConstruct = function (target, wordBank, memo = {}) {
  if (target in memo) return memo[target];

  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    let newTarget;
    if (target.indexOf(word) === 0) {
      newTarget = target.slice(word.length);
      const suffixWays = allConstruct(newTarget, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;

  return memo[target];
};

// console.log(allConstruct(target, wordBank));

// Using tabulation (bottom-up) approach

const allConstruct_tab = function (target, wordBank) {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const combinations = table[i].map((el) => [...el, word]);
        table[i + word.length] = [...table[i + word.length], ...combinations];
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct_tab(target, wordBank));
