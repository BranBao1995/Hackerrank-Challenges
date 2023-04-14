// const obj = { y: 1, x: 2 };
// const obj = { a: "str", b: -12, c: true, d: null };
const obj = { key: { a: 1, b: [{}, null, "Hello"] } };
// const obj = true;

var jsonStringify = function (object) {
  // check if 'object' is not an object type:
  // return number, null, boolean, undefined as it is
  // return string type with "" around it

  if (object === null) {
    return "null";
  }

  if (typeof object === "string") {
    // return the string value surrounded by double quotes.
    return '"' + object + '"';
  }
  if (typeof object === "number" || typeof object === "boolean") {
    // return its string representation.
    return String(object);
  }

  // if 'object' is an object type:
  // check if it is an array

  if (Array.isArray(object)) {
    const arr = object.map((el) => {
      return jsonStringify(el);
    });

    return "[" + arr.join(",") + "]";
  }

  if (typeof object === "object") {
    const keys = Object.keys(object);
    const arr = keys.map(
      (key) => '"' + key + '":' + jsonStringify(object[key])
    );
    return "{" + arr.join(",") + "}";
  }
};

console.log(jsonStringify(obj));
