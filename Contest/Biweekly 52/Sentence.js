/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  var arr = s.split(" ");

  arr.sort((a, b) => parseInt(a.slice(-1)) - parseInt(b.slice(-1)));

  console.log(arr);
  var string = "";

  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      var end = arr[index].length - 1;
      string += arr[index].substring(0, end);
    } else {
      var end = arr[index].length - 1;
      string += " " + arr[index].substring(0, end);
    }
  }

  return string;
};

console.log(sortSentence("Myself2 Me1 I4 and3"));
