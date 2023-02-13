const path = "/a/./b/../../c/";

var simplifyPath = function (path) {
  let stack = [];

  let strArr = path.split("/");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] != "..") {
      if (strArr[i] != "" && strArr[i] != ".") {
        stack.push(strArr[i]);
      }
    } else {
      if (stack.length != 0) {
        stack.pop();
      }
    }
  }

  return "/" + stack.join("/");
};

simplifyPath(path);
