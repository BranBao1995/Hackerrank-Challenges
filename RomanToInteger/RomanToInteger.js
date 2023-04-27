// using a map

var romanToInt = function (s) {
  // map every roman numeral to integer, include the special cases
  const obj = {
    special: {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
    },
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    // check if the current character and the following character can form a special case
    if (s[i] + s[i + 1] in obj.special) {
      sum = sum + obj.special[s[i] + s[i + 1]];
      i++;
    } else {
      sum = sum + obj[s[i]];
    }
  }

  return sum;
};

// using a lot of switch and if statements

// var romanToInt = function (s) {
//   var romanNumeral = s.split("");
//   var integer = 0;
//   for (i = 0; i < romanNumeral.length; i++) {
//     switch (romanNumeral[i]) {
//       case "I":
//         if (i + 1 < romanNumeral.length) {
//           if (romanNumeral[i + 1] === "V") {
//             integer = integer + 4;
//           } else if (romanNumeral[i + 1] === "X") {
//             integer = integer + 9;
//           } else {
//             integer = integer + 1;
//           }
//         } else {
//           integer = integer + 1;
//         }
//         break;

//       case "X":
//         if (i !== 0) {
//           if (romanNumeral[i - 1] === "I") {
//             break;
//           } else {
//             if (i + 1 < romanNumeral.length) {
//               if (romanNumeral[i + 1] === "L") {
//                 integer = integer + 40;
//               } else if (romanNumeral[i + 1] === "C") {
//                 integer = integer + 90;
//               } else {
//                 integer = integer + 10;
//               }
//             } else {
//               integer = integer + 10;
//             }
//           }
//         } else {
//           if (i + 1 < romanNumeral.length) {
//             if (romanNumeral[i + 1] === "L") {
//               integer = integer + 40;
//             } else if (romanNumeral[i + 1] === "C") {
//               integer = integer + 90;
//             } else {
//               integer = integer + 10;
//             }
//           } else {
//             integer = integer + 10;
//           }
//         }
//         break;

//       case "C":
//         if (i !== 0) {
//           if (romanNumeral[i - 1] === "X") {
//             break;
//           } else {
//             if (i + 1 < romanNumeral.length) {
//               if (romanNumeral[i + 1] === "D") {
//                 integer = integer + 400;
//               } else if (romanNumeral[i + 1] === "M") {
//                 integer = integer + 900;
//               } else {
//                 integer = integer + 100;
//               }
//             } else {
//               integer = integer + 100;
//             }
//           }
//         } else {
//           if (i + 1 < romanNumeral.length) {
//             if (romanNumeral[i + 1] === "D") {
//               integer = integer + 400;
//             } else if (romanNumeral[i + 1] === "M") {
//               integer = integer + 900;
//             } else {
//               integer = integer + 100;
//             }
//           } else {
//             integer = integer + 100;
//           }
//         }
//         break;

//       case "V":
//         if (i - 1 >= 0) {
//           if (romanNumeral[i - 1] === "I") {
//             break;
//           } else {
//             integer = integer + 5;
//           }
//         } else {
//           integer = integer + 5;
//         }
//         break;

//       case "L":
//         if (i - 1 >= 0) {
//           if (romanNumeral[i - 1] === "X") {
//             break;
//           } else {
//             integer = integer + 50;
//           }
//         } else {
//           integer = integer + 50;
//         }
//         break;

//       case "D":
//         if (i - 1 >= 0) {
//           if (romanNumeral[i - 1] === "C") {
//             break;
//           } else {
//             integer = integer + 500;
//           }
//         } else {
//           integer = integer + 500;
//         }
//         break;

//       case "M":
//         if (i - 1 >= 0) {
//           if (romanNumeral[i - 1] === "C") {
//             break;
//           } else {
//             integer = integer + 1000;
//           }
//         } else {
//           integer = integer + 1000;
//         }
//         break;
//     }
//   }
//   return integer;
// };
