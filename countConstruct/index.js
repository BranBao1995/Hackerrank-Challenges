const target = "purple";
const wordBank = ["purp", "p", "ur", "le", "purpl"];

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

console.log(countConstruct(target, wordBank));

// console.log(target.slice(2));
