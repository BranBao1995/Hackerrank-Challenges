const strArray = ["hello", "world", "rolan", "vicky", "jason"];

function thirdLargest(strArray) {
  const map = {
    first: [],
    second: [],
    third: [],
  };

  let longest = 0;
  let second_longest = 0;
  let third_longest = 0;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= longest) {
      if (strArray[i].length > longest) {
        map.first = [];
        map.first.push(strArray[i]);
        longest = strArray[i].length;
      } else {
        map.first.push(strArray[i]);
        longest = strArray[i].length;
      }
    }
  }

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= second_longest && strArray[i].length < longest) {
      if (strArray[i].length > second_longest) {
        map.second = [];
        map.second.push(strArray[i]);
        second_longest = strArray[i].length;
      } else {
        map.second.push(strArray[i]);
        second_longest = strArray[i].length;
      }
    }
  }

  for (let i = 0; i < strArray.length; i++) {
    if (
      strArray[i].length >= third_longest &&
      strArray[i].length < second_longest
    ) {
      if (strArray[i].length > third_longest) {
        map.third = [];
        map.third.push(strArray[i]);
        third_longest = strArray[i].length;
      } else {
        map.third.push(strArray[i]);
        third_longest = strArray[i].length;
      }
    }
  }

  console.log(map.first);
  console.log(map.second);
  console.log(map.third);

  // if multiple words share the same third longest length, pick the last one
  if (map.third.length) {
    console.log(map.third[map.third.length - 1]);
    return map.third[map.third.length - 1];
  } else if (map.second.length) {
    // if there is no third longest length, pick the last word of that has the second-longest length
    console.log(map.second[map.second.length - 1]);
    return map.second[map.second.length - 1];
  } else {
    // if all words in the array have the same length, pick the last word of the array
    console.log(map.first[map.first.length - 1]);
    return map.first[map.first.length - 1];
  }
}
thirdLargest(strArray);
// console.log(thirdLargest(strArray));
