const num = 1994;

var intToRoman = function (num) {
  const map = {
    thousands: {
      1: "M",
      2: "MM",
      3: "MMM",
    },
    hundreds: {
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
    },
    tens: {
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC",
    },
    ones: {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    },
  };

  let int = num;

  let str = "";

  if (Math.floor(int / 1000) >= 1) {
    str = str + map.thousands[Math.floor(int / 1000)];
    int = num % 1000;
  }

  if (Math.floor(int / 100) >= 1) {
    str = str + map.hundreds[Math.floor(int / 100)];
    int = int % 100;
  }

  if (Math.floor(int / 10) >= 1) {
    str = str + map.tens[Math.floor(int / 10)];
    int = int % 10;
  }

  if (Math.floor(int / 1) >= 1) {
    str = str + map.ones[Math.floor(int / 1)];
  }

  console.log(str);
  return str;
};

intToRoman(num);

console.log(999 / 1000);
