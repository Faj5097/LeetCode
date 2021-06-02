/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  var resArr = [];

  s = s.replace("(", "").replace(")", "");

  var rightIndex = s.length - 1;

  for (rightIndex; rightIndex > 0; rightIndex--) {
    //Build two Substrings
    var s_Left = s.substring(0, rightIndex);
    var s_Right = s.substring(rightIndex);

    var innerIndexLeft = s_Left.length;
    var s_InnerLeft = s_Left;
    var s_InnerRight = s_Right;

    var re = new RegExp("0", "g");

    for (innerIndexLeft; innerIndexLeft >= 0; innerIndexLeft--) {
      var innerIndexRight = s_Right.length;

      for (innerIndexRight; innerIndexRight >= 0; innerIndexRight--) {
        innerIndexLeft === s_Left.length
          ? (s_InnerLeft = s_Left.substring(0, innerIndexLeft))
          : (s_InnerLeft =
              s_Left.substring(0, innerIndexLeft) +
              "." +
              s_Left.substring(innerIndexLeft, s_Left.length));

        innerIndexRight === s_Right.length
          ? (s_InnerRight = s_Right.substring(0, innerIndexRight))
          : (s_InnerRight =
              s_Right.substring(0, innerIndexRight) +
              "." +
              s_Right.substring(innerIndexRight, s_Right.length));

        console.log(innerIndexLeft + ": S_InnerLeft:" + s_InnerLeft);
        console.log(innerIndexRight + ": S_InnerRight:" + s_InnerRight);

        if (
          parseFloat(s_InnerLeft).toString() === s_InnerLeft &&
          parseFloat(s_InnerRight).toString() === s_InnerRight
        ) {
          resArr.push("(" + s_InnerLeft + ", " + s_InnerRight + ")");
        }
      }
    }
  }

  return resArr;
};

// console.log(ambiguousCoordinates("(123)"));
// console.log("Output: [(1, 23), (12, 3), (1.2, 3), (1, 2.3)]");

// console.log(ambiguousCoordinates("(00011)"));
// console.log("Output:  [(0.001, 1), (0, 0.011)]");

console.log(ambiguousCoordinates("(0123)"));
console.log(
  "Output: [(0, 123),(0, 12.3),(0, 1.23),(0.1, 23),(0.1, 2.3),(0.12, 3)]"
);

// console.log(ambiguousCoordinates("(100)"));
// console.log("Output: [(10, 0)]");

// console.log(parseFloat(".3").toString());
