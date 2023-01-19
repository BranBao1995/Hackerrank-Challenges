const isValid = function (s) {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  if (s.length === 0 || s.length % 2 !== 0) {
    return false;
  }

  if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
    return false;
  }

  if (
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "[" ||
    s[s.length - 1] === "{"
  ) {
    return false;
  }

  let stackArray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stackArray.push(s[i]);
    } else if (pairs[stackArray.pop()] !== s[i]) {
      return false;
    }
  }

  return stackArray.length === 0;
};
