/**
 * @param {string} s
 * @return {boolean}
 */

function isDecimal(s) {
  if (s.startsWith("+") || s.startsWith("-")) {
    s = s.substring(1);
  }

  const arr = s.split(".");
  console.log("ARRAY DECIMAL: " + arr.length);

  if (arr.length === 1) {
    return isInteger(arr[0]);
  } else if (
    arr.length === 2 &&
    !(arr[0].length === 0 && arr[1].length === 0)
  ) {
    return (
      (arr[0].length === 0 || arr[0].match(new RegExp("[0-9]*")) == arr[0]) &&
      (arr[1].length === 0 || arr[1].match(new RegExp("[0-9]*")) == arr[1])
    );
  } else return false;
}

function isInteger(s) {
  if (s.startsWith("+") || s.startsWith("-")) {
    s = s.substring(1);
  }

  console.log(s);
  console.log("MATCH: " + (s.match(new RegExp("[0-9]*")) == s));

  return s.length > 0 && s.match(new RegExp("[0-9]*")) == s;
}

var isNumber = function (s) {
  const arr = s.toLowerCase().split("e");

  console.log("ARRAY: " + arr.length);
  if (arr.length === 1) {
    return isInteger(arr[0]) || isDecimal(arr[0]);
  } else if (arr.length === 2 && arr[0].length > 0 && arr[1].length > 0) {
    return (isInteger(arr[0]) || isDecimal(arr[0])) && isInteger(arr[1]);
  } else return false;
};

// console.log("TRUE - " + isNumber("0"));
// console.log("FALSE - " + isNumber("e"));
// console.log("FALSE - " + isNumber("."));
// console.log("TRUE - " + isNumber(".1"));
// console.log("TRUE - " + isNumber("11"));
// console.log("FALSE - " + isNumber("e9"));
console.log("FALSE - " + isNumber("4e+"));
