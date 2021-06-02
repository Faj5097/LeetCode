/**
 * @param {string[]} tokens
 * @return {number}
 */
var OPERAND = {
  ADD: "+",
  SUB: "-",
  MULT: "*",
  DIFF: "/"
};

var evalRPN = function (tokens) {
  while (tokens.length > 1) {
    let leftInteger = 0;
    let rightInteger = 1;
    let operand = 2;

    while (
      !(
        !isNaN(tokens[leftInteger]) &&
        !isNaN(tokens[rightInteger]) &&
        isNaN(tokens[operand])
      )
    ) {
      leftInteger++;
      rightInteger++;
      operand++;
    }

    let ans = Math.trunc(
      eval(
        tokens[leftInteger] + " " + tokens[operand] + " " + tokens[rightInteger]
      )
    );

    tokens = [
      ...tokens.slice(0, leftInteger),
      "" + ans,
      ...tokens.slice(operand + 1)
    ];
    console.log(tokens);
  }
  return tokens[0];
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
// console.log(
//   evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// );
console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));
