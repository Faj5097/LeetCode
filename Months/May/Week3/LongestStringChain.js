/**
 * @param {string[]} words
 * @return {number}
 */

function stringsChainable(leftStr, rightStr) {
  //is next element chain element?
  for (let j = 0; j < rightStr.length; j++) {
    // console.log(
    //   words[startChain + 1].substring(0, j) +
    //     " + " +
    //     words[startChain + 1].substring(j + 1, words[startChain + 1].length)
    // );
    if (
      leftStr ===
      rightStr.substring(0, j) + rightStr.substring(j + 1, rightStr.length)
    ) {
      return true;
    }
  }

  return false;
}

var longestStrChain = function (words) {
  //Order Words from small to big
  words.sort((a, b) => a.length - b.length);

  //Safe the longest Chain
  var longestChain = 0;

  //Starting pointer runs through Array
  for (let startInd = 0; startInd < words.length; startInd++) {
    //ini set compare Pointer
    let leftInd = startInd;
    let rightInd = startInd + 1;
    let chainLength = 1;
    let chainBuilding = true;

    while (chainBuilding) {
      rightInd++;

      if (rightInd < words.length) {
        var leftStr = words[leftInd];
        var rightStr = words[rightInd];
        console.log("LEFT: " + leftStr);
        console.log("RIGHT: " + rightStr);

        if (leftStr.length === rightStr.length) {
          console.log("--1------------");
        } else if (leftStr.length === rightStr.length - 1) {
          if (stringsChainable(leftStr, rightStr)) {
            console.log("----2------------");
            leftInd = rightInd;
            chainLength++;
          } else {
            console.log("--3--------------");
            chainBuilding = false;
          }
        } else {
          console.log("--4-------------");
          chainBuilding = false;
        }
      } else {
        console.log("--5-------------");
        chainBuilding = false;
      }
    }

    if (chainLength > longestChain) {
      longestChain = chainLength;
    }
  }

  return longestChain;
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
