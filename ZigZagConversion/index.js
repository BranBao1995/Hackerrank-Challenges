const str = "PAYPALISHIRING";
const rows = 5;

var convert = function (s, numRows) {
  if (numRows === 1 && s.length > 1) {
    return s;
  }

  let arr = new Array(numRows);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(1001);
  }

  let index = 0;
  let rowIndex = 0;
  let columnIndex = 0;
  let top = true;
  let res;

  while (index < s.length) {
    if (top) {
      arr[rowIndex][columnIndex] = s[index];
      rowIndex++;
    } else {
      arr[rowIndex][columnIndex] = s[index];
      rowIndex--;
      columnIndex++;
    }

    if (rowIndex === numRows) {
      top = false;
      rowIndex = numRows - 2;
      columnIndex++;
    }

    if (rowIndex === 0) {
      top = true;
    }

    index++;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join("");
  }

  res = arr.join("");

  return res;
};

convert(str, rows);
