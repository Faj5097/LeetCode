/**
 * @param {character[][]} box
 * @return {character[][]}
 */
function makeArray(w, h, val) {
  var arr = [];
  for (let i = 0; i < h; i++) {
    arr[i] = [];
    for (let j = 0; j < w; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}

var rotateTheBox = function (box) {
  var resArr = makeArray(box.length, box[0].length, ".");

  //for each row
  for (let row = 0; row < box.length; row++) {
    var lastFreeSpot = box[row].length - 1;
    var column = box[row].length;

    //begin at last element
    for (column; column >= 0; column--) {
      //   if (column === box[row].length) {
      //     resArr[column] = [];
      //   }

      //   resArr[column][row] = ".";

      if (box[row][column] === "*") {
        lastFreeSpot = column - 1;
        resArr[column][-row + box.length - 1] = "*";
      } else if (box[row][column] === "#") {
        resArr[lastFreeSpot][-row + box.length - 1] = "#";
        lastFreeSpot--;
      }
    }
  }

  return resArr;
};

console.log(
  rotateTheBox([
    ["#", "#", "*", ".", "*", "."],
    ["#", "#", "#", "*", ".", "."],
    ["#", "#", "#", ".", "#", "."]
  ])
);
