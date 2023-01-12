//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
  // Write your code here

  // 1st try

  // const secondToLastChar = s[s.length - 2];
  // let hour = parseInt(s[0].concat(s[1]));
  // let convertedTime;
  // if (secondToLastChar === "A") {
  //   if (hour === 12) {
  //     const hourString = "00";
  //     convertedTime = hourString + s.substring(2, s.length - 2);
  //   } else {
  //     const hourString = "0" + hour.toString();
  //     convertedTime = hourString + s.substring(2, s.length - 2);
  //   }
  // } else {
  //   if (hour === 12) {
  //     const hourString = "12";
  //     convertedTime = hourString + s.substring(2, s.length - 2);
  //   } else {
  //     const hourString = (hour + 12).toString();
  //     convertedTime = hourString + s.substring(2, s.length - 2);
  //   }
  // }
  // console.log(convertedTime);

  // Improved solution
  let hour = s.slice(0, 2);
  const tag = s.slice(8, 10);
  if (tag === "AM") {
    if (hour === "12") hour = "00";
  } else {
    if (hour !== "12") hour = (parseInt(hour) + 12).toString();
  }

  console.log(hour + s.slice(2, 8));
}

timeConversion("03:22:24PM");
