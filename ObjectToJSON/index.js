// const obj = { y: 1, x: 2 };
// const obj = { a: "str", b: -12, c: true, d: null };
// const obj = { key: { a: 1, b: [{}, null, "Hello"] } };
const obj = true;

var jsonStringify = function (object) {
  // check if 'object' is not an object type:
  // return number, null, boolean, undefined as it is
  // return string type with "" around it

  if (typeof object !== "object" || object === null) {
    return typeof object === "string" ? `"${object}"` : object;
  }

  let str = "";

  // if 'object' is an object type:
  // check if it is an array

  if (Array.isArray(object)) {
    for (const element of object) {
      // if the element is an object type
      if (typeof element === "object") {
        // check if it is null (null is also an object type)
        if (element !== null) {
          // call the function again if an element is an array or object
          str = str + jsonStringify(element) + ",";
        } else {
          // if not concatenate the str
          str = str + element + ",";
        }
      } else {
        str =
          str + (typeof element === "string" ? `"${element}"` : element) + ",";
      }
    }
    // remove last comma
    return ("[" + str).replace(/,*$/, "") + "]";
  }

  for (const key of Object.keys(object)) {
    if (typeof object[key] === "object") {
      if (object[key] !== null) {
        str = str + `"${key}":` + jsonStringify(object[key]) + ",";
      } else {
        str = str + `"${key}":` + object[key] + ",";
      }
    } else {
      str =
        str +
        `"${key}":` +
        (typeof object[key] === "string" ? `"${object[key]}"` : object[key]) +
        ",";
    }
  }

  // remove last comma
  return ("{" + str).replace(/,*$/, "") + "}";
};

console.log(jsonStringify(obj));

// const test = [1, 2, 3];

// console.log(Array.isArray(test));
