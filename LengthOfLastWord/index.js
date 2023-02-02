var lengthOfLastWord = function (s) {
  let index = s.length - 1;

  let letterCount = 0;

  let isLetter = false;

  while (index >= 0) {
    if (s[index] !== " ") {
      isLetter = true;
      letterCount++;
    } else if (s[index] === " ") {
      if (isLetter === true) {
        return letterCount;
      }
    }

    index--;
  }

  return letterCount;
};
