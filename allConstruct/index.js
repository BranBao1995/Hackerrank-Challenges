const target = "purple";
const wordBank = ["purp", "p", "ur", "le", "purpl"];

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

console.log(allConstruct(target, wordBank));
