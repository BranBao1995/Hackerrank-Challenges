var romanToInt = function (s) {
  var romanNumeral = s.split("");
  var integer = 0;
  for (i = 0; i < romanNumeral.length; i++) {
    switch (romanNumeral[i]) {
      case "I":
        if (i + 1 < romanNumeral.length) {
          if (romanNumeral[i + 1] === "V") {
            integer = integer + 4;
          } else if (romanNumeral[i + 1] === "X") {
            integer = integer + 9;
          } else {
            integer = integer + 1;
          }
        } else {
          integer = integer + 1;
        }
        break;

      case "X":
        if (i !== 0) {
          if (romanNumeral[i - 1] === "I") {
            break;
          } else {
            if (i + 1 < romanNumeral.length) {
              if (romanNumeral[i + 1] === "L") {
                integer = integer + 40;
              } else if (romanNumeral[i + 1] === "C") {
                integer = integer + 90;
              } else {
                integer = integer + 10;
              }
            } else {
              integer = integer + 10;
            }
          }
        } else {
          if (i + 1 < romanNumeral.length) {
            if (romanNumeral[i + 1] === "L") {
              integer = integer + 40;
            } else if (romanNumeral[i + 1] === "C") {
              integer = integer + 90;
            } else {
              integer = integer + 10;
            }
          } else {
            integer = integer + 10;
          }
        }
        break;

      case "C":
        if (i !== 0) {
          if (romanNumeral[i - 1] === "X") {
            break;
          } else {
            if (i + 1 < romanNumeral.length) {
              if (romanNumeral[i + 1] === "D") {
                integer = integer + 400;
              } else if (romanNumeral[i + 1] === "M") {
                integer = integer + 900;
              } else {
                integer = integer + 100;
              }
            } else {
              integer = integer + 100;
            }
          }
        } else {
          if (i + 1 < romanNumeral.length) {
            if (romanNumeral[i + 1] === "D") {
              integer = integer + 400;
            } else if (romanNumeral[i + 1] === "M") {
              integer = integer + 900;
            } else {
              integer = integer + 100;
            }
          } else {
            integer = integer + 100;
          }
        }
        break;

      case "V":
        if (i - 1 >= 0) {
          if (romanNumeral[i - 1] === "I") {
            break;
          } else {
            integer = integer + 5;
          }
        } else {
          integer = integer + 5;
        }
        break;

      case "L":
        if (i - 1 >= 0) {
          if (romanNumeral[i - 1] === "X") {
            break;
          } else {
            integer = integer + 50;
          }
        } else {
          integer = integer + 50;
        }
        break;

      case "D":
        if (i - 1 >= 0) {
          if (romanNumeral[i - 1] === "C") {
            break;
          } else {
            integer = integer + 500;
          }
        } else {
          integer = integer + 500;
        }
        break;

      case "M":
        if (i - 1 >= 0) {
          if (romanNumeral[i - 1] === "C") {
            break;
          } else {
            integer = integer + 1000;
          }
        } else {
          integer = integer + 1000;
        }
        break;
    }
  }
  return integer;
};
