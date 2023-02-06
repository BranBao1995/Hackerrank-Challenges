var addBinary = function (a, b) {
  const aFilled = a.padStart(Math.max(a.length, b.length), "0");
  const bFilled = b.padStart(Math.max(a.length, b.length), "0");

  let carry = 0;

  let output = [];

  for (let i = aFilled.length - 1; i >= 0; i--) {
    if (parseInt(aFilled[i]) + parseInt(bFilled[i]) === 2) {
      if (carry === 1) {
        output.push("1");
        carry = 1;
      } else {
        output.push("0");
        carry = 1;
      }
    }

    if (parseInt(aFilled[i]) + parseInt(bFilled[i]) === 1) {
      if (carry === 1) {
        output.push("0");
        carry = 1;
      } else {
        output.push("1");
        carry = 0;
      }
    }

    // if (aFilled[i] === "1" && bFilled[i] === "0") {
    //   if (carry === 1) {
    //     output.push("0");
    //     carry = 1;
    //   } else {
    //     output.push("1");
    //     carry = 0;
    //   }
    // }

    if (parseInt(aFilled[i]) + parseInt(bFilled[i]) === 0) {
      if (carry === 1) {
        output.push("1");
        carry = 0;
      } else {
        output.push("0");
        carry = 0;
      }
    }
  }

  if (carry === 1) {
    output.push("1");
  }

  return output.reverse().join("");
};

console.log(addBinary("111111", "111"));
